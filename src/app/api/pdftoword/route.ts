import { NextRequest, NextResponse } from 'next/server';
import pdfParse from 'pdf-parse';  // pdf-parse for PDF text extraction
import { Document, Packer, Paragraph } from 'docx'; // Import docx to create DOCX files

// Function to convert PDF to DOCX
async function convertPdfToDocx(pdfFile: File): Promise<Buffer> {
  // Convert the ArrayBuffer into a Node.js Buffer
  const pdfBuffer = Buffer.from(await pdfFile.arrayBuffer());

  // Use pdf-parse to extract text from the PDF
  const data = await pdfParse(pdfBuffer);

  // Log extracted text for debugging purposes
  console.log('Extracted Text:', data.text);

  // Create a DOCX document using docx library
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: data.text.split('\n').map(line => new Paragraph(line)),
      },
    ],
  });

  // Save the DOCX document to a buffer
  const docxBuffer = await Packer.toBuffer(doc);
  return docxBuffer;
}

// API route handler for POST requests
export async function POST(req: NextRequest) {
  try {
    // Get the form data (uploaded files)
    const formData = await req.formData();
    const files = formData.getAll('files') as File[];

    // Log to verify the uploaded file(s)
    console.log("Uploaded Files:", files);

    if (!files || files.length === 0) {
      return new NextResponse(
        JSON.stringify({ error: 'No files provided' }),
        { status: 400 }
      );
    }

    // Process the first file in the uploaded list (just for simplicity)
    const docFileBuffer = await convertPdfToDocx(files[0]);

    // Return the DOCX file as a download response
    return new NextResponse(docFileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'Content-Disposition': 'attachment; filename="converted.docx"',
      },
    });
  } catch (error) {
    console.error('Error during PDF to DOCX conversion:', error);
    return new NextResponse(
      JSON.stringify({ error: 'An error occurred during file upload or conversion' }),
      { status: 500 }
    );
  }
}

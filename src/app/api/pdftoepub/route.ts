import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

const execPromise = promisify(exec);

export async function POST(req: NextRequest) {
  const tempDir = path.join('/tmp', `pdf-to-epub-${Date.now()}`);
  const pdfPath = path.join(tempDir, 'input.pdf');
  const epubPath = path.join(tempDir, 'output.epub');

  try {
    // Ensure the temporary directory exists
    await fs.promises.mkdir(tempDir, { recursive: true });

    const formData = await req.formData();
    const files = formData.getAll('files') as File[];

    if (!files || files.length === 0) {
      return new NextResponse(JSON.stringify({ error: 'No PDF uploaded' }), { status: 400 });
    }

    const pdfFile = files[0];
    const arrayBuffer = await pdfFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Save the uploaded PDF to the temporary directory
    await fs.promises.writeFile(pdfPath, buffer);

    // Convert the PDF to EPUB using calibre's ebook-convert
    const convertCommand = `ebook-convert ${pdfPath} ${epubPath}`;

    // Run the command to convert PDF to EPUB
    const { stdout, stderr } = await execPromise(convertCommand);

    // Log stdout and stderr from the ebook-convert command
    console.log("Calibre stdout:", stdout);
    console.error("Calibre stderr:", stderr);

    // Check if the output EPUB file was created
    if (!fs.existsSync(epubPath)) {
      throw new Error('EPUB file was not created.');
    }

    // Read the generated EPUB file
    const epubBuffer = await fs.promises.readFile(epubPath);

    return new NextResponse(epubBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/epub+zip',
        'Content-Disposition': 'attachment; filename="converted.epub"',
      },
    });
  } catch (error: any) {
    console.error('EPUB conversion failed:', error);
    return new NextResponse(
      JSON.stringify({ error: `EPUB conversion failed: ${error.message}` }),
      { status: 500 }
    );
  } finally {
    try {
      // Clean up the temporary directory and its contents
      if (fs.existsSync(tempDir)) {
        await fs.promises.rm(tempDir, { recursive: true, force: true });
      }
    } catch (err) {
      console.error("Cleanup failed:", err);
    }
  }
}

import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import { tmpdir } from 'os';
import { promisify } from 'util';
import { NextRequest, NextResponse } from 'next/server';

const execAsync = promisify(exec);

export async function POST(req: NextRequest) {
  let tempDocxPath = '';
  let outputDir = '';
  let pdfPath = '';

  try {
    const formData = await req.formData();
    const files = formData.getAll('files') as File[];

    if (!files || files.length === 0) {
      return new NextResponse(JSON.stringify({ error: 'No files provided' }), {
        status: 400,
      });
    }

    const file = files[0];
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const timestamp = Date.now();
    const filename = `upload-${timestamp}.docx`;

    tempDocxPath = path.join(tmpdir(), filename);
    outputDir = path.join(tmpdir(), `out-${timestamp}`);

    await fs.promises.mkdir(outputDir, { recursive: true });
    await fs.promises.writeFile(tempDocxPath, buffer);

    // Confirm file exists and log details
    if (!fs.existsSync(tempDocxPath)) {
      throw new Error(`DOCX file was not saved to disk: ${tempDocxPath}`);
    }
    const stats = await fs.promises.stat(tempDocxPath);
    console.log('Saved DOCX path:', tempDocxPath);
    console.log('DOCX file size:', stats.size, 'bytes');

    // Run LibreOffice conversion
    const convertCommand = `libreoffice --headless --nologo --nolockcheck --convert-to pdf --outdir "${outputDir}" "${tempDocxPath}"`;

    console.log('[Running]', convertCommand);
    const { stdout, stderr } = await execAsync(convertCommand);

    console.log('[LibreOffice stdout]', stdout || '(empty)');
    console.error('[LibreOffice stderr]', stderr || '(empty)');

    // Find the first PDF in the output directory
    const filesInOut = await fs.promises.readdir(outputDir);
    const pdfFile = filesInOut.find((f) => f.endsWith('.pdf'));

    if (!pdfFile) {
      throw new Error('PDF file not created by LibreOffice.');
    }

    pdfPath = path.join(outputDir, pdfFile);
    const pdfBuffer = await fs.promises.readFile(pdfPath);

    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="converted.pdf"',
      },
    });
  } catch (error: any) {
    console.error('Error during DOCX to PDF conversion:', error);
    return new NextResponse(
      JSON.stringify({
        error: `An error occurred: ${error.message}`,
      }),
      { status: 500 }
    );
  } finally {
    try {
      if (tempDocxPath && fs.existsSync(tempDocxPath)) {
        await fs.promises.unlink(tempDocxPath);
      }
      if (pdfPath && fs.existsSync(pdfPath)) {
        await fs.promises.unlink(pdfPath);
      }
      if (outputDir && fs.existsSync(outputDir)) {
        await fs.promises.rm(outputDir, { recursive: true, force: true }); // ✅ updated to avoid deprecation
      }
    } catch (cleanupError) {
      console.error('Cleanup error:', cleanupError);
    }
  }
}

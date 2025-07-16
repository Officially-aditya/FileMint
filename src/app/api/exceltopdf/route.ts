import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import { tmpdir } from 'os';
import { promisify } from 'util';
import { NextRequest, NextResponse } from 'next/server';

const execAsync = promisify(exec);

export async function POST(req: NextRequest) {
  let tempXlsxPath = '';
  let outputDir = '';
  let pdfPath = '';

  try {
    const formData = await req.formData();
    const files = formData.getAll('files') as File[];

    if (!files || files.length === 0) {
      return new NextResponse(
        JSON.stringify({ error: 'No Excel file uploaded' }),
        { status: 400 }
      );
    }

    const file = files[0];
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const timestamp = Date.now();
    const filename = `upload-${timestamp}.xlsx`;

    tempXlsxPath = path.join(tmpdir(), filename);
    outputDir = path.join(tmpdir(), `out-${timestamp}`);

    await fs.promises.mkdir(outputDir, { recursive: true });
    await fs.promises.writeFile(tempXlsxPath, buffer);

    const stats = await fs.promises.stat(tempXlsxPath);
    console.log('Saved XLSX path:', tempXlsxPath);
    console.log('XLSX file size:', stats.size, 'bytes');

    // Convert using LibreOffice CLI
    const convertCommand = `libreoffice --headless --nologo --nolockcheck --convert-to pdf --outdir "${outputDir}" "${tempXlsxPath}"`;

    console.log('[Running]', convertCommand);
    const { stdout, stderr } = await execAsync(convertCommand);

    console.log('[LibreOffice stdout]', stdout || '(empty)');
    console.error('[LibreOffice stderr]', stderr || '(empty)');

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
    console.error('Error during Excel to PDF conversion:', error);
    return new NextResponse(
      JSON.stringify({ error: `Conversion failed: ${error.message}` }),
      { status: 500 }
    );
  } finally {
    try {
      if (tempXlsxPath && fs.existsSync(tempXlsxPath)) {
        await fs.promises.unlink(tempXlsxPath);
      }
      if (pdfPath && fs.existsSync(pdfPath)) {
        await fs.promises.unlink(pdfPath);
      }
      if (outputDir && fs.existsSync(outputDir)) {
        await fs.promises.rm(outputDir, { recursive: true, force: true });
      }
    } catch (cleanupError) {
      console.error('Cleanup error:', cleanupError);
    }
  }
}

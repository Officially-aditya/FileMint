import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import { tmpdir } from 'os';
import { promisify } from 'util';
import { NextRequest, NextResponse } from 'next/server';
import ExcelJS from 'exceljs';

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
    const fileName = file.name;
    const mimeType = file.type;
    const arrayBuffer = await file.arrayBuffer();

    // Validate file type
    const validMimeTypes = [
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // .xlsx
      'application/vnd.ms-excel', // .xls
    ];
    const isXlsx = fileName.toLowerCase().endsWith('.xlsx');
    const isXls = fileName.toLowerCase().endsWith('.xls');
    if (!validMimeTypes.includes(mimeType) || (!isXlsx && !isXls)) {
      console.error('Invalid file type:', { fileName, mimeType });
      return new NextResponse(
        JSON.stringify({ error: 'Invalid file type. Please upload a valid .xlsx or .xls file.' }),
        { status: 400 }
      );
    }

    // Log file details for debugging
    console.log('Uploaded file:', { fileName, mimeType, size: arrayBuffer.byteLength });

    // Test write permissions to /tmp
    const testFilePath = path.join(tmpdir(), `test-write-${Date.now()}.txt`);
    try {
      await fs.promises.writeFile(testFilePath, 'test');
      await fs.promises.unlink(testFilePath);
      console.log('Write permission test successful in /tmp');
    } catch (writeError) {
      console.error('Failed to write test file to /tmp:', writeError);
      throw new Error('Server lacks write permissions to /tmp directory');
    }

    const timestamp = Date.now();
    const filename = isXls ? `upload-${timestamp}.xls` : `upload-${timestamp}.xlsx`;
    tempXlsxPath = path.join(tmpdir(), filename);
    outputDir = path.join(tmpdir(), `out-${timestamp}`);

    // Create output directory
    await fs.promises.mkdir(outputDir, { recursive: true });

    if (isXls) {
      // Handle .xls file (save directly and convert to PDF)
      const buffer = Buffer.from(arrayBuffer);
      try {
        await fs.promises.writeFile(tempXlsxPath, buffer);
        console.log('Saved XLS file at:', tempXlsxPath);
      } catch (writeError) {

      }
    } else {
      // Handle .xlsx file (add borders with ExcelJS)
      const workbook = new ExcelJS.Workbook();
      try {
        await workbook.xlsx.load(arrayBuffer);
      } catch (loadError: any) {
        console.error('Failed to load .xlsx file:', loadError.message);
        return new NextResponse(
          JSON.stringify({ error: 'Invalid or corrupted .xlsx file. Please ensure the file is a valid .xlsx file.' }),
          { status: 400 }
        );
      }

      // Add borders to all cells
      workbook.eachSheet((worksheet) => {
        worksheet.eachRow((row) => {
          row.eachCell((cell) => {
            cell.border = {
              top: { style: 'thin' },
              left: { style: 'thin' },
              bottom: { style: 'thin' },
              right: { style: 'thin' },
            };
          });
        });
      });

      // Save modified workbook
      try {
        await workbook.xlsx.writeFile(tempXlsxPath);
        console.log('Modified XLSX saved at:', tempXlsxPath);
      } catch (writeError) {
      }
    }

    // Verify the saved file exists
    if (!fs.existsSync(tempXlsxPath)) {
      throw new Error(`Saved file not found at ${tempXlsxPath}`);
    }

    const stats = await fs.promises.stat(tempXlsxPath);
    console.log('Saved file size:', stats.size, 'bytes');

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
        'Content-Disposition': `attachment; filename="converted-${timestamp}.pdf"`,
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
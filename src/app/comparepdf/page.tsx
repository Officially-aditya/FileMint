'use client';

import { useEffect, useRef, useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function ComparePDF() {
  const containerRef1 = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);
  const [file1, setFile1] = useState<File | null>(null);
  const [file2, setFile2] = useState<File | null>(null);

  // Renders PDF pages and sets up highlight canvases
  const renderAllPages = async (
    file: File,
    containerRef: React.RefObject<HTMLDivElement>,
    allowHighlight = false
  ) => {
    if (!file || !containerRef.current) return;

    const pdfjsLib = await import('pdfjs-dist');
    pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

    const arrayBuffer = await file.arrayBuffer();
    const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
    const pdf = await loadingTask.promise;
    const scale = 1.0;

    containerRef.current.innerHTML = '';

    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const viewport = page.getViewport({ scale });

      // PDF canvas
      const pdfCanvas = document.createElement('canvas');
      const pdfCtx = pdfCanvas.getContext('2d');
      if (!pdfCtx) continue;

      pdfCanvas.width = viewport.width;
      pdfCanvas.height = viewport.height;

      await page.render({ canvasContext: pdfCtx, viewport }).promise;

      // Wrapper for page + overlays
      const wrapper = document.createElement('div');
      wrapper.style.position = 'relative';
      wrapper.style.width = `${viewport.width}px`;
      wrapper.style.height = `${viewport.height}px`;
      wrapper.style.marginBottom = '1rem';

      wrapper.appendChild(pdfCanvas);

      if (allowHighlight) {
        // Create perm and temp highlight canvases
        const permCanvas = document.createElement('canvas');
        permCanvas.width = viewport.width;
        permCanvas.height = viewport.height;
        permCanvas.style.position = 'absolute';
        permCanvas.style.top = '0';
        permCanvas.style.left = '0';
        permCanvas.style.pointerEvents = 'none';
        permCanvas.style.zIndex = '9';

        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = viewport.width;
        tempCanvas.height = viewport.height;
        tempCanvas.style.position = 'absolute';
        tempCanvas.style.top = '0';
        tempCanvas.style.left = '0';
        tempCanvas.style.pointerEvents = 'auto';
        tempCanvas.style.zIndex = '10';

        wrapper.appendChild(permCanvas);
        wrapper.appendChild(tempCanvas);

        setupHighlightCanvas(tempCanvas, permCanvas);
      }

      containerRef.current.appendChild(wrapper);
    }
  };

  // Setup highlighting with two canvases: temp (draw live) + perm (commit)
  const setupHighlightCanvas = (
    tempCanvas: HTMLCanvasElement,
    permCanvas: HTMLCanvasElement
  ) => {
    const tempCtx = tempCanvas.getContext('2d');
    const permCtx = permCanvas.getContext('2d');
    if (!tempCtx || !permCtx) return;

    const strokeStyle = 'rgba(255, 255, 153, 0.15)'; // subtle yellow
    const lineWidth = 15;

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    const getPos = (e: MouseEvent) => {
      const rect = tempCanvas.getBoundingClientRect();
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const start = (e: MouseEvent) => {
      isDrawing = true;
      const pos = getPos(e);
      lastX = pos.x;
      lastY = pos.y;

      tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
      tempCtx.strokeStyle = strokeStyle;
      tempCtx.lineWidth = lineWidth;
      tempCtx.lineCap = 'round';
      tempCtx.beginPath();
      tempCtx.moveTo(lastX, lastY);
    };

    const draw = (e: MouseEvent) => {
      if (!isDrawing) return;
      const pos = getPos(e);

      tempCtx.lineTo(pos.x, pos.y);
      tempCtx.stroke();

      lastX = pos.x;
      lastY = pos.y;
    };

    const end = () => {
      if (!isDrawing) return;
      isDrawing = false;

      // Commit temp canvas drawing to perm canvas
      permCtx.drawImage(tempCanvas, 0, 0);
      // Clear temp canvas
      tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
    };

    tempCanvas.addEventListener('mousedown', start);
    tempCanvas.addEventListener('mousemove', draw);
    tempCanvas.addEventListener('mouseup', end);
    tempCanvas.addEventListener('mouseleave', end);
  };

  // Export annotated PDF (only first container for simplicity)
  const exportAnnotatedPDF = async () => {
    if (!containerRef1.current) return;
    const pdf = new jsPDF();

    const pages = containerRef1.current.querySelectorAll('div[style*="position: relative"]');

    for (let i = 0; i < pages.length; i++) {
      const pageDiv = pages[i] as HTMLElement;

      // Use html2canvas to capture both PDF and highlights
      const canvas = await html2canvas(pageDiv, { scale: 2 });
      const imgData = canvas.toDataURL('image/png');

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      if (i > 0) pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    }

    pdf.save('annotated.pdf');
  };

  useEffect(() => {
    if (file1) renderAllPages(file1, containerRef1, true);
  }, [file1]);

  useEffect(() => {
    if (file2) renderAllPages(file2, containerRef2);
  }, [file2]);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Compare PDFs with Highlighting</h1>
      <div
        style={{
          display: 'flex',
          gap: '2rem',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        {/* PDF 1 (highlightable) */}
        <div style={{ flex: '1 1 48%', maxHeight: '80vh', overflowY: 'auto' }}>
          <h2>PDF 1 (Annotatable)</h2>
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => e.target.files && setFile1(e.target.files[0])}
          />
          <div
            ref={containerRef1}
            style={{
              marginTop: '1rem',
              border: '1px solid #ccc',
              padding: '0.5rem',
            }}
          />
          {file1 && (
            <button
              onClick={exportAnnotatedPDF}
              style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}
            >
              Download Annotated PDF
            </button>
          )}
        </div>

        {/* PDF 2 (readonly) */}
        <div style={{ flex: '1 1 48%', maxHeight: '80vh', overflowY: 'auto' }}>
          <h2>PDF 2</h2>
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => e.target.files && setFile2(e.target.files[0])}
          />
          <div
            ref={containerRef2}
            style={{
              marginTop: '1rem',
              border: '1px solid #ccc',
              padding: '0.5rem',
            }}
          />
        </div>
      </div>
    </div>
  );
}

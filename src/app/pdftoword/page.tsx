'use client';

import React, { useRef, useState } from 'react';
import Navbar from "../components/Navbar";

const PdfToWordPage: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setFileName(file.name);
      // TODO: Upload logic here
    } else {
      alert('Please upload a valid PDF file.');
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type === 'application/pdf') {
      setFileName(file.name);
      // TODO: Upload logic here
    } else {
      alert('Please upload a valid PDF file.');
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div style={styles.page}>
      <Navbar />

      <main style={styles.main}>
        <h1 style={styles.heading}>PDF to Word</h1>

        <div
          style={styles.uploadBox}
          onClick={() => fileInputRef.current?.click()}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <p style={styles.label}>
            {fileName ? `Uploaded: ${fileName}` : 'Click or drag your PDF file here to upload'}
          </p>
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </div>
      </main>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    minHeight: '100vh',
    backgroundColor: '#f4f6f8',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '60px 20px',
  },
  heading: {
    fontSize: '32px',
    fontWeight: 600,
    color: '#333',
    marginBottom: '40px',
  },
  uploadBox: {
    width: '100%',
    maxWidth: '800px',
    height: '300px',
    backgroundColor: '#e6f4ea',
    border: '3px dashed #3bb54a',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#2e7d32',
    fontSize: '18px',
    fontWeight: 500,
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  label: {
    padding: '20px',
  },
};

export default PdfToWordPage;
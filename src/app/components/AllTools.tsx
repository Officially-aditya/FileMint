// src/app/components/AllTools.tsx
'use client';

import { useState } from 'react';

export default function AllTools() {
  const [searchTerm, setSearchTerm] = useState('');

  const sections = [
    {
      title: 'Merge & Split',
      items: ['Merge PDF', 'Split PDF', 'Combine & Reorder PDF', 'Split by Bookmark'],
      bg: '#DFF6DD'
    },
    {
      title: 'Compress & Optimize',
      items: ['Compress PDF', 'Flatten PDF', 'Optimize PDF'],
      bg: '#DFF6DD'
    },
    {
      title: 'Protect & Sign',
      items: [
        'Watermark PDF',
        'Protect PDF',
        'Unlock PDF',
        'E-sign PDF',
        'PDF Watermark Remover',
        'Certificate Management',
        'Audit Trails',
        'PDF Repair',
        'PDF Layers'
      ],
      bg: '#DFF6DD'
    },
    {
      title: 'Edit & Organize',
      items: [
        'Edit PDF',
        'Rotate PDF',
        'Delete PDF Pages',
        'Rearrange PDF Pages',
        'Extract PDF Pages',
        'Add Page Numbers',
        'Measure PDF',
        'Organize PDF',
        'Organize Bookmarks',
        'Edit Hyperlinks in PDF',
        'Replace Fonts in PDF',
        'PDF Viewer/Reader',
        'Annotate PDF',
        'Change PDF Background',
        'Redact PDF'
      ],
      bg: '#FFF5EB'
    },
    {
      title: 'Automation & Batch',
      items: ['Data Extraction from PDF', 'Batch Processing', 'Compare PDFs', 'Secure File Sharing'],
      bg: '#FFF5EB'
    },
    {
      title: 'Convert Files',
      items: [
        'Word to PDF',
        'Word to Excel',
        'Word to PowerPoint',
        'Word to JPG',
        'Word to PNG',
        'Word to Text',
        'PDF to Word',
        'Excel to PDF',
        'Excel to Word',
        'Excel to PowerPoint',
        'PDF to Excel',
        'PDF to PowerPoint',
        'PowerPoint to PDF',
        'PowerPoint to Word',
        'PowerPoint to PNG',
        'PDF to PowerPoint',
        'Webpage (URL) to PDF',
        'PDF to Webpage (URL)'
      ],
      bg: '#F0ECFF'
    },
    {
      title: 'Text to PDF',
      items: [
        'Text to PDF',
        'RTF to PDF',
        'HTML to PDF',
        'PDF to Text',
        'PDF to RTF',
        'PDF to HTML',
        'PDF to Document',
        'JPG to PDF',
        'PNG to PDF',
        'BMP to PDF',
        'GIF to PDF',
        'TIFF to PDF',
        'PDF to JPG',
        'PDF to PNG',
        'PDF to BMP',
        'PDF to GIF',
        'PDF to TIFF',
        'Scan to PDF',
        'Image to Text (OCR)',
        'Image to Word (OCR)',
        'CAD to PDF',
        'PDF to AutoCAD'
      ],
      bg: '#F0ECFF'
    },
    {
      title: 'AI & Premium Tools',
      items: [
        'OCR PDF + AI',
        'Audio to PDF',
        'PDF Language Converter',
        'AI Question Generator',
        'API Generator',
        'Bulk PDF Merger'
      ],
      bg: '#E7F2FF'
    }
  ];

  return (
    <>
      {/* Main Content */}
      <div style={{ padding: '3rem 5%' }}>
        {/* Header and Search */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            marginBottom: '2rem'
          }}
        >
          <div style={{ maxWidth: '600px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
              All-in-One PDF Toolkit
            </h2>
            <p style={{ fontSize: '1rem', color: '#555' }}>
              Easily manage your PDFs with our quick and reliable tools — split,
              merge, edit, or convert in just a few clicks.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <input
              type="text"
              placeholder="Search tools..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                padding: '0.6rem 1rem',
                border: '1px solid #ccc',
                borderRadius: '8px',
                fontSize: '1rem',
                width: '200px'
              }}
            />
            <button
              style={{
                padding: '0.6rem 1rem',
                backgroundColor: '#0070f3',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              Categories
            </button>
          </div>
        </div>

        {/* Sections Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {sections.map((sec, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: sec.bg,
                padding: '1rem',
                borderRadius: '12px',
                minHeight: '200px'
              }}
            >
              <h3 style={{ marginBottom: '0.75rem' }}>{sec.title}</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {sec.items.map((item, i) => (
                  <li key={i} style={{ marginBottom: '0.35rem' }}>
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Sticker */}
      <div
        style={{
          position: 'fixed',
          bottom: '1rem',
          left: '1rem',
          zIndex: 1000,
          cursor: 'pointer'
        }}
      >
        <img
          src="/sticker.png"
          alt="Helper Sticker"
          style={{ width: '60px', height: '60px' }}
        />
      </div>
    </>
  );
}

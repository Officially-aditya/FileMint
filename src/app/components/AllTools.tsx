// src/app/components/AllTools.tsx
'use client';

import { useState } from 'react';

export default function AllTools() {
  const [searchTerm, setSearchTerm] = useState('');

  const columns = [
    {
      title: 'Merge & Split',
      emoji: '🔗',
      bg: '#E3F9E5',
      items: [
        { label: 'Merge PDF', icon: '🔀' },
        { label: 'Split PDF', icon: '✂️' },
        { label: 'Combine & Reorder PDF', icon: '🔄' },
        { label: 'Split by Bookmark', icon: '📑' },
      ],
    },
    {
      title: 'Compress & Optimize',
      emoji: '📦',
      bg: '#E3F9E5',
      items: [
        { label: 'Compress PDF', icon: '📉' },
        { label: 'Flatten PDF', icon: '🗜️' },
        { label: 'Optimize PDF', icon: '⚙️' },
      ],
    },
    {
      title: 'Protect & Sign',
      emoji: '🔒',
      bg: '#E3F9E5',
      items: [
        { label: 'Watermark PDF', icon: '💧' },
        { label: 'Protect PDF', icon: '🔒' },
        { label: 'Unlock PDF', icon: '🔓' },
        { label: 'E-sign PDF', icon: '✒️' },
        { label: 'PDF Watermark Remover', icon: '🧼' },
        { label: 'Certificate Management', icon: '📜' },
        { label: 'Audit Trails', icon: '🕵️' },
        { label: 'PDF Repair', icon: '🛠️' },
        { label: 'PDF Layers', icon: '📚' },
      ],
    },
    {
      title: 'Edit & Organize',
      emoji: '✏️',
      bg: '#FFF5EB',
      items: [
        { label: 'Edit PDF', icon: '✏️' },
        { label: 'Rotate PDF', icon: '🔄' },
        { label: 'Delete PDF Pages', icon: '🗑️' },
        { label: 'Rearrange PDF Pages', icon: '↕️' },
        { label: 'Extract PDF Pages', icon: '📤' },
        { label: 'Add Page Numbers', icon: '🔢' },
        { label: 'Measure PDF', icon: '📏' },
        { label: 'Organize PDF', icon: '🗂️' },
        { label: 'Organize Bookmarks', icon: '🔖' },
        { label: 'Edit Hyperlinks in PDF', icon: '🔗' },
        { label: 'Replace Fonts in PDF', icon: '🔠' },
        { label: 'PDF Viewer/Reader', icon: '👓' },
        { label: 'Annotate PDF', icon: '🖋️' },
        { label: 'Change PDF Background', icon: '🎨' },
        { label: 'Redact PDF', icon: '🕶️' },
      ],
    },
    {
      title: 'Convert Files',
      emoji: '🔄',
      bg: '#F0ECFF',
      items: [
        { label: 'Word to PDF', icon: '📄➡️📑' },
        { label: 'Word to Excel', icon: '📄➡️📊' },
        { label: 'Word to PowerPoint', icon: '📄➡️📽️' },
        { label: 'Word to JPG', icon: '📄➡️🖼️' },
        { label: 'Word to PNG', icon: '📄➡️🖼️' },
        { label: 'Word to Text', icon: '📄➡️✏️' },
        { label: 'PDF to Word', icon: '📑➡️📄' },
        { label: 'Excel to PDF', icon: '📊➡️📑' },
        { label: 'Excel to Word', icon: '📊➡️📄' },
        { label: 'Excel to PowerPoint', icon: '📊➡️📽️' },
        { label: 'PDF to Excel', icon: '📑➡️📊' },
        { label: 'PDF to PowerPoint', icon: '📑➡️📽️' },
        { label: 'PowerPoint to PDF', icon: '📽️➡️📑' },
        { label: 'PowerPoint to Word', icon: '📽️➡️📄' },
        { label: 'PowerPoint to PNG', icon: '📽️➡️🖼️' },
        { label: 'PDF to JPG', icon: '📑➡️🖼️' },
        { label: 'PDF to PNG', icon: '📑➡️🖼️' },
        { label: 'PDF to BMP', icon: '📑➡️🖼️' },
        { label: 'PDF to GIF', icon: '📑➡️🎞️' },
        { label: 'PDF to TIFF', icon: '📑➡️🖼️' },
        { label: 'Scan to PDF', icon: '📷➡️📑' },
        { label: 'Image to Text (OCR)', icon: '🔍➡️✏️' },
        { label: 'Image to Word (OCR)', icon: '🔍➡️📄' },
        { label: 'CAD to PDF', icon: '🛠️➡️📑' },
        { label: 'PDF to AutoCAD', icon: '📑➡️🛠️' },
      ],
    },
    {
      title: 'Text to PDF',
      emoji: '📄',
      bg: '#F0ECFF',
      items: [
        { label: 'Text to PDF', icon: '📄➡️📑' },
        { label: 'RTF to PDF', icon: '📄➡️📑' },
        { label: 'HTML to PDF', icon: '🌐➡️📑' },
        { label: 'PDF to Text', icon: '📑➡️✏️' },
        { label: 'PDF to RTF', icon: '📑➡️📄' },
        { label: 'PDF to HTML', icon: '📑➡️🌐' },
        { label: 'PDF to Document', icon: '📑➡️📄' },
        { label: 'JPG to PDF', icon: '🖼️➡️📑' },
        { label: 'PNG to PDF', icon: '🖼️➡️📑' },
        { label: 'BMP to PDF', icon: '🖼️➡️📑' },
        { label: 'GIF to PDF', icon: '🎞️➡️📑' },
        { label: 'TIFF to PDF', icon: '🖼️➡️📑' },
      ],
    },
    {
      title: 'AI & Premium Tools',
      emoji: '🤖',
      bg: '#E8F0FF',
      items: [
        { label: 'OCR PDF + AI', icon: '🤖' },
        { label: 'Audio to PDF', icon: '🎧' },
        { label: 'PDF Language Converter', icon: '🌐' },
        { label: 'AI Question Generator', icon: '❓' },
        { label: 'API Generator', icon: '⚙️' },
        { label: 'Bulk PDF Merger', icon: '📦' },
      ],
    },
  ];
  const filtered = columns.map(col => ({
    ...col,
    items: col.items.filter(t =>
      t.label.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }));

  return (
    <div style={{ padding: '3rem 5%' }}>
      {/* Header & Search */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem',
          flexWrap: 'wrap'
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
            onChange={e => setSearchTerm(e.target.value)}
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

      {/* Seven-Column Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${filtered.length}, 1fr)`,
          gap: '1rem'
        }}
      >
        {filtered.map((col, i) => (
          <div
            key={i}
            style={{
              backgroundColor: col.bg,
              padding: '1.5rem',
              borderRadius: '12px',
              position: 'relative',
              boxSizing: 'border-box'
            }}
          >
            {/* Header Sticker Emoji */}
            <div
              style={{
                position: 'absolute',
                top: '-10px',
                right: '-10px',
                fontSize: '1.4rem',
                transform: 'rotate(-15deg)'
              }}
            >
              {col.emoji}
            </div>

            <h3 style={{ marginBottom: '1rem' }}>{col.title}</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {col.items.map((t, j) => (
                <li
                  key={j}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.5rem'
                  }}
                >
                  <span>{t.icon}</span>
                  <span>{t.label}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
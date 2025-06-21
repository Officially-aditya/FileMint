// src/app/about/page.tsx
import React from "react";

const About = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Why Choose FileMint.com</h1>
      <p>Fast, Secure & User-Friendly File Conversion</p>
      <p>
        Our platform empowers users to convert, compress, and manage documents
        quickly and easily — with an intuitive interface. Whether you’re merging
        PDFs, converting Word files, or compressing media, FileMint delivers with
        speed and precision.
      </p>

      <section style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        {/* Smart Conversion Tools */}
        <div style={{ width: "22%", padding: "1rem", backgroundColor: "#F4F4F4", borderRadius: "8px" }}>
          <h3>Smart Conversion Tools</h3>
          <p>
            Convert PDFs, images, Word docs, and more using powerful built-in
            conversion algorithms — no formatting loss, no hassle.
          </p>
        </div>

        {/* Privacy First */}
        <div style={{ width: "22%", padding: "1rem", backgroundColor: "#E4F9E4", borderRadius: "8px" }}>
          <h3>Privacy First</h3>
          <p>
            We don’t store your files. All uploads are encrypted and auto-deleted
            within hours. Your data stays yours — always.
          </p>
        </div>

        {/* Built for Everyone */}
        <div style={{ width: "22%", padding: "1rem", backgroundColor: "#E0F4F9", borderRadius: "8px" }}>
          <h3>Built for Everyone</h3>
          <p>
            From students to professionals, FileMint is designed for all workflow
            needs. Convert a report, blend existing images, merge invoices in a
            click, or convert scanned images into editable documents.
          </p>
        </div>

        {/* Cloud-Ready */}
        <div style={{ width: "22%", padding: "1rem", backgroundColor: "#F4E0F9", borderRadius: "8px" }}>
          <h3>Cloud-Ready</h3>
          <p>
            Seamlessly import and export from Google Drive, Dropbox, or OneDrive.
            No more downloads and reuploads — just convert directly from your cloud.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;

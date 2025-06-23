// src/app/about/page.tsx (if using app directory structure)
import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar"

const AboutPage = () => {
  return (
    <div style={{ margin: "0 auto" }}>
      <Navbar />
      <div style = {{ maxWidth: "1200px", margin: "0 auto", padding: "2rem"}}>
      <h1 style={{ fontSize: "4rem" }}>Why Choose FileMint.com</h1>
      <p>
        <h3 style={{fontSize: "2rem"}}>Fast, Secure & User-Friendly File Conversion</h3>
        <br />
        Our platform empowers users to convert, compress, and manage documents
        quickly and easily — with zero learning curve. Whether you're merging
        PDFs, converting Word files, or compressing media, FileMint delivers with
        speed and precision.
      </p>
      <div style={{ display: "flex", gap: "2rem", marginTop: "2rem" }}>
        <div style={{ flex: 1, backgroundColor: "#FEC18C", padding: "1rem" }}>
          <h2>Smart Conversion Tools</h2>
          <p>
            Convert PDFs, images, Word docs, and more using powerful and secure
            algorithms — no formatting loss, no hassle.
          </p>
        </div>
        <div style={{ flex: 1, backgroundColor: "#A4F7D2", padding: "1rem" }}>
          <h2>Privacy First</h2>
          <p>
            We don't store your files. All uploads are encrypted and auto-deleted
            within hours. Your data stays yours — always.
          </p>
        </div>
        <div style={{ flex: 1, backgroundColor: "#C6D8FE", padding: "1rem" }}>
          <h2>Built for Everyone</h2>
          <p>
            From students to professionals, FileMint is designed for streamlined
            workflows.
            <br />
            Convert a paper-based exam into digital, merge invoices in a click, or
            convert scanned images into editable documents.
          </p>
        </div>
        <div style={{ flex: 1, backgroundColor: "#F1CCF7", padding: "1rem" }}>
          <h2>Cloud-Ready</h2>
          <p>
            Seamlessly import and export from Google Drive, Dropbox, or
            OneDrive. No more downloads and reuploads — just convert directly from
            your cloud.
          </p>
        </div>
      </div>
    </div>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "white",
          padding: "2rem 0",
          borderTop: "1px solid #e5e7eb",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "2rem",
            }}
          >
            {/* Logo */}
            <div style={{ position: "absolute", left: "2rem" }}>
              <Link href="/">
                <img
                  src="/logo.png"
                  alt="Logo"
                  style={{ height: "20px", cursor: "pointer" }}
                />
              </Link>
            </div>

            {/* Navigation */}
            <nav style={{ display: "flex", gap: "2rem", fontSize: "0.9rem" }}>
              <Link
                href="/about"
                style={{ color: "#666", textDecoration: "none" }}
              >
                About
              </Link>
              <Link
                href="/blog"
                style={{ color: "#666", textDecoration: "none" }}
              >
                Blog Posts
              </Link>
              <Link
                href="/faq"
                style={{ color: "#666", textDecoration: "none" }}
              >
                FAQ
              </Link>
              <Link
                href="/terms"
                style={{ color: "#666", textDecoration: "none" }}
              >
                Terms & Conditions
              </Link>
              <Link
                href="/privacy-policy"
                style={{ color: "#666", textDecoration: "none" }}
              >
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;

"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

export default function TiffToPdfPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files).filter((file) =>
      file.name.endsWith(".tiff") || file.name.endsWith(".tif")
    );
    if (droppedFiles.length < e.dataTransfer.files.length) {
      setError("Only TIFF/TIF files are supported.");
    }
    setFiles((prev) => [...prev, ...droppedFiles]);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files).filter((file) =>
        file.name.endsWith(".tiff") || file.name.endsWith(".tif")
      );
      if (selectedFiles.length < e.target.files.length) {
        setError("Only TIFF/TIF files are supported.");
      }
      setFiles((prev) => [...prev, ...selectedFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
    setError(null);
  };

  const handleConvert = async () => {
    if (files.length === 0) {
      setError("Please upload at least one TIFF/TIF file.");
      return;
    }
    if (files.length > 10) {
      setError("You can convert up to 10 TIFF/TIF files at once.");
      return;
    }

    setIsConverting(true);
    setError(null);

    const formData = new FormData();
    files.forEach((file) => formData.append("files", file));

    try {
      const response = await fetch("/api/tifftopdf", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Conversion failed");
      }

      const contentType = response.headers.get("Content-Type");
      if (contentType !== "application/pdf") {
        const errorText = await response.text();
        throw new Error(`Unexpected response: ${errorText}`);
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "converted.pdf";
      a.click();
      window.URL.revokeObjectURL(url);
      setFiles([]);
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred";
      setError(errorMessage);
    } finally {
      setIsConverting(false);
    }
  };

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      <Navbar />

      <div style={{ maxWidth: "900px", margin: "4rem auto", padding: "0 2rem" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "2rem" }}>Convert TIFF to PDF</h1>

        {error && (
          <div
            style={{
              backgroundColor: "#ffe6e6",
              padding: "1rem",
              borderRadius: "5px",
              marginBottom: "1rem",
              color: "#d00",
            }}
          >
            {error}
          </div>
        )}

        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          style={{
            border: "2px dashed #90EE90",
            backgroundColor: "#f0fff0",
            borderRadius: "10px",
            padding: "4rem",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          <i className="fas fa-cloud-upload-alt" style={{ fontSize: "3rem", color: "#888" }}></i>
          <p style={{ marginTop: "1rem", marginBottom: "1rem" }}>
            Drag and drop a TIFF/TIF file here
          </p>
          <label
            htmlFor="fileInput"
            style={{
              backgroundColor: "white",
              padding: "0.5rem 1rem",
              border: "1px solid #ccc",
              borderRadius: "5px",
              cursor: "pointer",
              display: "inline-block",
            }}
          >
            Select File
            <input
              id="fileInput"
              type="file"
              accept=".tiff,.tif"
              multiple
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </label>
        </div>

        {files.length > 0 && (
          <div style={{ marginBottom: "2rem" }}>
            {files.map((file, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#f9f9f9",
                  padding: "0.75rem 1rem",
                  borderRadius: "5px",
                  marginBottom: "0.5rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>
                  <i
                    className="fas fa-file-image"
                    style={{ color: "#28a745", marginRight: "0.5rem" }}
                  ></i>
                  {file.name}
                </span>
                <button
                  onClick={() => removeFile(index)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#c00",
                    cursor: "pointer",
                    fontSize: "1rem",
                  }}
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>
            ))}

            <button
              onClick={handleConvert}
              disabled={isConverting}
              style={{
                marginTop: "1rem",
                backgroundColor: isConverting ? "#ccc" : "#28a745",
                color: "white",
                border: "none",
                padding: "0.6rem 1.2rem",
                borderRadius: "5px",
                cursor: isConverting ? "not-allowed" : "pointer",
                fontSize: "1rem",
              }}
            >
              <i className="fas fa-file-pdf" style={{ marginRight: "0.5rem" }}></i>
              {isConverting ? "Converting..." : "Convert to PDF"}
            </button>
          </div>
        )}

        <div style={{ marginTop: "3rem" }}>
          <p style={{ marginBottom: "1rem", fontSize: "0.95rem" }}>
            Easily convert TIFF and TIF images into high-quality PDFs.
          </p>
        </div>

        <div
          style={{
            marginTop: "3rem",
            padding: "1.5rem",
            backgroundColor: "#f0f9ff",
            border: "1px solid #cce5ff",
            borderRadius: "10px",
            fontSize: "0.95rem",
          }}
        >
          <strong>Protected. Encrypted. Automatically Deleted.</strong>
          <p style={{ marginTop: "0.5rem" }}>
            Your TIFF files are encrypted during upload and automatically deleted after 2 hours. No tracking. No storage. Full privacy.
          </p>
        </div>
      </div>
    </div>
  );
}

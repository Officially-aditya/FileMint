"use client";

import { useState } from "react";

export default function All() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div style={{ padding: "3rem 5%" }}>
     
      {/* Heading + Paragraph + Search */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          marginBottom: "2rem",
        }}
      >
        {/* Text Section */}
        <div style={{ maxWidth: "600px" }}>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
            All-in-One PDF Toolkit
          </h2>
          <p style={{ fontSize: "1rem", color: "#555" }}>
            Easily manage your PDFs with our quick and reliable tools — split,
            merge, edit, or convert in just a few clicks.
          </p>
        </div>

        {/* Search & Categories */}
        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
          <input
            type="text"
            placeholder="Search tools..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              padding: "0.6rem 1rem",
              border: "1px solid #ccc",
              borderRadius: "8px",
              fontSize: "1rem",
              width: "200px",
            }}
          />
          <button
            style={{
              padding: "0.6rem 1rem",
              backgroundColor: "#0070f3",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Categories
          </button>
        </div>
      </div>

      {/* Section: Merge & Split */}
      <div>
        <h3 style={{ fontSize: "1.8rem", marginBottom: "1.5rem" }}>
          Merge & Split
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.5rem",
          }}
        >
          {[
            {
              title: "Merge PDF",
              desc: "Combine multiple PDFs into one file.",
              color: "#4CAF50",
            },
            {
              title: "Split PDF",
              desc: "Separate PDF pages into individual files.",
              color: "#FF9800",
            },
            {
              title: "Combine & Reorder PDF",
              desc: "Merge and rearrange pages from multiple PDFs.",
              color: "#2196F3",
            },
            {
              title: "Split by Bookmark",
              desc: "Divide PDFs based on bookmark levels.",
              color: "#9C27B0",
            },
          ].map((tool, index) => (
            <div
              key={index}
              style={{
                backgroundColor: tool.color,
                color: "white",
                borderRadius: "10px",
                padding: "1.5rem",
                aspectRatio: "1 / 1",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <h4 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>
                {tool.title}
              </h4>
              <p style={{ fontSize: "0.95rem" }}>{tool.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// src/app/components/HomePage.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <main
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: "90vh",
          gap: 0,
          flexWrap: "wrap",
        }}
      >
        {/* Text Section */}
        <div
          style={{
            flex: "1",
            textAlign: "center",
            paddingRight: "0",
            marginLeft: "6vw"
          }}
        >
          <h1 style={{ fontSize: "4rem", marginBottom: "1rem" }}>
            Effortlessly Convert<br />Your Files in Seconds
          </h1>
          <p style={{ fontSize: "1.2rem" }}>Transform your documents with our easy-to-use file conversion tools.</p>
          <p style = {{ fontSize: "1.2rem" }}> Upload, convert, and download in just a few clicks!</p>

          <div>
            <button
              style={{
                padding: "1.5rem 3rem",
                marginLeft: "1rem",
                backgroundColor: "#0070f3",
                color: "white",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              Convert Now
            </button>
            <button
              style={{
                padding: "1.5rem 3rem",
                marginLeft: "4rem",
                backgroundColor: "#fff",
                color: "#0070f3",
                border: "2px solid #0070f3",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div style={{ flex: "1", display: "flex", justifyContent: "flex-start" }}>
          <img
            src="/BG.png"
            alt="Illustration"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              objectFit: "cover",
            }}
          />
        </div>
      </main>

      {/* Popular Tools Section */}
      <section style={{ padding: "0" }}>
        <h2 style={{ fontSize: "3rem", marginBottom: "2rem", textAlign: "center" }}>
          Popular Tools
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {[
            { title: "Merge PDF", desc: "Combine multiple PDF files into one organized, document in seconds - fast, simple and secure.", color: "#4CAF50" },
            { title: "Rearrange PDF Pages", desc: "Change the order of pages within a PDF by dragging and drooping or using tools.", color: "#FFEB3B", textColor: "#000" },
            { title: "Word to PDF", desc: "Transforms Microsoft Word documents into PDF format.", color: "#9C27B0" },
            { title: "Organize PDF", desc: "Tool for structuring and managing the overall layout and flow of a PDF document.", color: "#2196F3" },
            { title: "PowerPoint to PDF", desc: "Converts content from Powerpoint presentation to a PDF document.", color: "#FF9800" },
            { title: "PDF Watermark Remover", desc: "Eliminate existing watermarks from a PDF document.", color: "#009688" },
            { title: "Excel to PowerPoint", desc: "Convert content from an Excel spreadsheet into a PowerPoint presentation.", color: "#673AB7" },
            { title: "PDF to word", desc: "Converts PDF documents into editable Microsoft Word format.", color: "#E91E63" },
            { title: "OCR PDF + AI", desc: "Enhances text extraction from scanned PDFs using AI for improved accurace, even with complex layouts or diverse languages.", color: "#795548" },
          ].map((tool, index) => (
            <div
              key={index}
              style={{
                backgroundColor: tool.color,
                color: tool.textColor || "white",
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
              <h3 style={{ marginBottom: "0.5rem", fontSize: "1.5rem" }}>{tool.title}</h3>
              <p style={{ fontSize: "0.9rem" }}>{tool.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "right", marginTop: "1rem", maxWidth: "900px", marginLeft: "auto", marginRight: "auto" }}>
           <Link
            href="/all"
            style={{
                color: "black",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "1.1rem",
            }}
            >
            View All
            </Link>
        </div>
      </section>
    </>
  );
}

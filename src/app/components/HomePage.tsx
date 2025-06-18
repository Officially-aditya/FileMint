import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Font Awesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

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
            marginLeft: "6vw",
          }}
        >
          <h1 style={{ fontSize: "4rem", marginBottom: "1rem" }}>
            Effortlessly Convert
            <br />
            Your Files in Seconds
          </h1>
          <p style={{ fontSize: "1.2rem" }}>
            Transform your documents with our easy-to-use file conversion tools.
          </p>
          <p style={{ fontSize: "1.2rem" }}>
            {" "}
            Upload, convert, and download in just a few clicks!
          </p>

          <div>
            <button
              style={{
                padding: "1.5rem 3rem",
                marginLeft: "1rem",
                backgroundColor: "black",
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
        <div
          style={{ flex: "1", display: "flex", justifyContent: "flex-start" }}
        >
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
        <h2
          style={{
            fontSize: "3rem",
            marginBottom: "2rem",
            textAlign: "center",
          }}
        >
          Popular Tools
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          {[
            {
              title: "PDF to Word",
              icon: "fa-regular fa-file-word",
              color: "#E8D5FF",
            },
            {
              title: "Merge PDF",
              icon: "fas fa-upload",
              color: "#D5F5D5",
            },
            { title: "Edit PDF", icon: "fa-regular fa-edit", color: "#FFE5D5" },
            { title: "eSign PDF", icon: "fas fa-file-signature", color: "#F0D5FF" },
            { title: "Compare PDF", icon: "fas fa-columns", color: "#D5E5FF" },
            {
              title: "Optimize PDF",
              icon: "fas fa-code-branch",
              color: "#E5F0FF",
            },
          ].map((tool, index) => (
            <div
              key={index}
              style={{
                backgroundColor: tool.color,
                color: "#666",
                borderRadius: "16px",
                padding: "2rem 1.5rem",
                aspectRatio: "1 / 1",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                cursor: "pointer",
                transition: "transform 0.2s ease",
                maxWidth: "160px",
                minHeight: "140px",
              }}
            >
              <div style={{ marginBottom: "1rem" }}>
                <i
                  className={tool.icon}
                  style={{
                    fontSize: "2rem",
                    color: "#666",
                  }}
                ></i>
              </div>
              <h3
                style={{
                  marginBottom: "0",
                  fontSize: "0.95rem",
                  fontWeight: "600",
                  lineHeight: "1.2",
                }}
              >
                {tool.title}
              </h3>
            </div>
          ))}
        </div>

        <div
          style={{
            textAlign: "right",
            marginTop: "1.5rem",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
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

      {/* Easy Convert Your Files Section */}
      <section style={{ padding: "4rem 0" }}>
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4rem",
              flexWrap: "wrap",
            }}
          >
            {/* Left Content */}
            <div style={{ flex: "1", minWidth: "400px" }}>
              <h2
                style={{
                  fontSize: "3rem",
                  marginBottom: "1rem",
                  fontWeight: "",
                }}
              >
                Easy Convert Your Files
                <br />
                in Seconds
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "#666",
                  marginBottom: "2rem",
                }}
              >
                Our user-friendly platform allows you to convert files
                effortlessly. Just drag and drop your documents to get started.
              </p>

              {/* Steps */}
              <div style={{ marginBottom: "2rem" }}>
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1rem",
                      backgroundColor: "",
                      padding: "1.5rem",
                      borderRadius: "12px",
                      marginBottom: "1rem",
                    }}
                  >
                    <div style={{ fontSize: "2rem" }}>
                      <i
                        className="fas fa-folder"
                        style={{ color: "#FF6B6B" }}
                      ></i>
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: "1.3rem",
                          fontWeight: "600",
                          marginBottom: "0.5rem",
                        }}
                      >
                        Choose Files
                      </h3>
                      <p style={{ color: "#666", fontSize: "1rem" }}>
                        Start Customizing your file quickly and easily via an
                        intuitive interface.
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1rem",
                      backgroundColor: "",
                      padding: "1.5rem",
                      borderRadius: "12px",
                    }}
                  >
                    <div style={{ fontSize: "2rem" }}>
                      <i
                        className="fas fa-upload"
                        style={{ color: "#FF6B6B" }}
                      ></i>
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: "1.3rem",
                          fontWeight: "600",
                          marginBottom: "0.5rem",
                        }}
                      >
                        Get Started
                      </h3>
                      <p style={{ color: "#666", fontSize: "1rem" }}>
                        Just upload and start converting your file in different
                        formats.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/learn-more"
                style={{
                  color: "#0070f3",
                  textDecoration: "none",
                  fontWeight: "600",
                }}
              >
                Learn More →
              </Link>
            </div>

            {/* Right Image */}
            <div style={{ flex: "1", textAlign: "center", minWidth: "400px" }}>
              <img
                src="/conversion-illustration.png"
                alt="File conversion process"
                style={{ width: "100%", maxWidth: "500px", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* App Store Downloads Section */}
      <section style={{ padding: "3rem 0", backgroundColor: "white" }}>
        <div
          style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "3rem",
              flexWrap: "wrap",
            }}
          >
            {/* Chrome Web */}
            <div
              style={{
                display: "flex-bottom",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <img
                src="/chrome-web-badge.png"
                alt="Get it on Google Play"
                style={{ height: "60px" }}
              />
              <div style={{ display: "flex", margin: "1rem" }}>
                <div style={{ display: "flex", color: "#ffd700" }}>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <span
                  style={{
                    marginLeft: "0.5rem",
                    color: "#666",
                    fontSize: "0.9rem",
                  }}
                >
                  300,000+ users
                </span>
              </div>
            </div>

            {/* Firefox Add-on */}
            <div
              style={{
                display: "flex-bottom",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <img
                src="/firefox-addon-badge.png"
                alt="Firefox Add-on"
                style={{ height: "60px" }}
              />
              <div style={{ display: "flex", margin: "1rem" }}>
                <div style={{ display: "flex", color: "#ffd700" }}>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <span
                  style={{
                    marginLeft: "0.5rem",
                    color: "#666",
                    fontSize: "0.9rem",
                  }}
                >
                  10,000+ users
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: "4rem 0", backgroundColor: "" }}>
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}
        >
          <div style={{ textAlign: "left", marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "3rem",
                fontWeight: "",
                marginBottom: "0.5rem",
              }}
            >
              Effortlessly transform documents
              <br />
              with powerful tools.
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              {
                icon: (
                  <i className="fas fa-bolt" style={{ color: "#FF6B6B" }}></i>
                ),
                title: "Quick Convert & Compress",
                description:
                  "Our tool are designed for speed and reliability, ensuring your files are ready when you need them.",
                bgColor: "",
              },
              {
                icon: (
                  <i
                    className="fas fa-file-pdf"
                    style={{ color: "#FF8E53" }}
                  ></i>
                ),
                title: "Easy PDF Conversion",
                description:
                  "Experience robust conversion that maintains the highest quality and preserves your original formatting.",
                bgColor: "",
              },
              {
                icon: (
                  <i
                    className="fas fa-sync-alt"
                    style={{ color: "#FFD93D" }}
                  ></i>
                ),
                title: "Effortless File Merge",
                description:
                  "Combine your documents easily while preserving their original formatting and structure.",
                bgColor: "",
              },
            ].map((feature, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: feature.bgColor,
                  padding: "2rem",
                  borderRadius: "16px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                  {feature.icon}
                </div>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "",
                    marginBottom: "1rem",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    color: "#666",
                    fontSize: "1rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  {feature.description}
                </p>
                <button
                  style={{
                    color: "#0070f3",
                    backgroundColor: "transparent",
                    border: "none",
                    fontWeight: "600",
                    cursor: "pointer",
                    fontSize: "1rem",
                  }}
                >
                  Explore →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Steps Section */}
      <section style={{ padding: "4rem 0", backgroundColor: "white" }}>
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}
        >
          <div style={{ textAlign: "left", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "3rem", fontWeight: "" }}>
              Convert your files in 3 quick, hassle-
              <br />
              free steps!
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              {
                icon: (
                  <i className="fas fa-bolt" style={{ color: "#FF6B6B" }}></i>
                ),
                title:
                  "Experience quick and easy file conversion in just a few clicks",
                description:
                  "Follow these easy steps to convert your file seamlessly.",
                bgColor: "",
              },
              {
                icon: (
                  <i className="fas fa-upload" style={{ color: "#FF8E53" }}></i>
                ),
                title: "Upload your file and select your desired output format",
                description:
                  "Our platform supports various formats for your convenience.",
                bgColor: "",
              },
              {
                icon: (
                  <i
                    className="fas fa-download"
                    style={{ color: "#FFD93D" }}
                  ></i>
                ),
                title: "Download your converted file instantly and safely",
                description:
                  "Our file is ready for download. just click the 'finish' button.",
                bgColor: "",
              },
            ].map((step, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: step.bgColor,
                  padding: "2rem",
                  borderRadius: "16px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                  {step.icon}
                </div>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "",
                    marginBottom: "1rem",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    color: "#666",
                    fontSize: "1rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  {step.description}
                </p>
                <button
                  style={{
                    color: "#0070f3",
                    backgroundColor: "transparent",
                    border: "none",
                    fontWeight: "600",
                    cursor: "pointer",
                    fontSize: "1rem",
                  }}
                >
                  Convert →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section style={{ padding: "3rem 0", backgroundColor: "" }}>
        <div
          style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}
        >
          <h3
            style={{ fontSize: "1.5rem", fontWeight: "", marginBottom: "2rem" }}
          >
            Trusted By:
          </h3>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "3rem",
              flexWrap: "wrap",
            }}
          >
            <img
              src="/google-cloud-logo.png"
              alt="Google Cloud"
              style={{ height: "40px", opacity: "0.6" }}
            />
            <img
              src="/onedrive-logo.png"
              alt="OneDrive"
              style={{ height: "40px", opacity: "0.6" }}
            />
            <img
              src="/norton-logo.png"
              alt="Norton"
              style={{ height: "40px", opacity: "0.6" }}
            />
            <img
              src="/dropbox-logo.png"
              alt="Dropbox"
              style={{ height: "40px", opacity: "0.6" }}
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section style={{ padding: "4rem 0", backgroundColor: "white" }}>
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4rem",
              flexWrap: "wrap",
            }}
          >
            {/* Left Content */}
            <div style={{ flex: "1", minWidth: "400px" }}>
              <h2
                style={{
                  fontSize: "3rem",
                  marginBottom: "1rem",
                  fontWeight: "",
                }}
              >
                Convert Files in a Click
                <br />
                <span>Fast, Easy & Free</span>
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "#666",
                  marginBottom: "2rem",
                }}
              >
                Our user-friendly platform allows you to convert files
                effortlessly. Just drag and drop your documents to get started.
              </p>

              {/* Feature boxes */}
              <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                <div
                  style={{
                    backgroundColor: "",
                    padding: "1.5rem",
                    borderRadius: "12px",
                    flex: "1",
                    minWidth: "200px",
                  }}
                >
                  <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
                    <i
                      className="fas fa-file-alt"
                      style={{ color: "#FF6B6B" }}
                    ></i>
                  </div>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "600",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Completely Free
                  </h3>
                  <p
                    style={{
                      color: "#666",
                      fontSize: "0.9rem",
                      marginBottom: "1rem",
                    }}
                  >
                    Utilize unlimited file conversion with FileMint at no cost
                    whatsoever.
                  </p>
                  <button
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      fontWeight: "600",
                      cursor: "pointer",
                      fontSize: "0.9rem",
                    }}
                  >
                    Learn More →
                  </button>
                </div>

                <div
                  style={{
                    backgroundColor: "",
                    padding: "1.5rem",
                    borderRadius: "12px",
                    flex: "1",
                    minWidth: "200px",
                  }}
                >
                  <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
                    <i className="fas fa-bolt" style={{ color: "#FF8E53" }}></i>
                  </div>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "600",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Fast Processing
                  </h3>
                  <p style={{ color: "#666", fontSize: "0.9rem" }}>
                    Our tools files converted in seconds - our blazing your
                    valuable fast time.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div style={{ flex: "1", textAlign: "center", minWidth: "400px" }}>
              <img
                src="/final-cta-illustration.png"
                alt="File conversion illustration"
                style={{ width: "100%", maxWidth: "500px", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "white",
          padding: "2rem 0",
          borderTop: "1px solid #e5e7eb",
        }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}
        >
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
                href="/faq"
                style={{ color: "#666", textDecoration: "none" }}
              >
                FAQ Section
              </Link>
              <Link
                href="/blog"
                style={{ color: "#666", textDecoration: "none" }}
              >
                Blog Posts
              </Link>
              <Link
                href="/contact"
                style={{ color: "#666", textDecoration: "none" }}
              >
                Contact Us
              </Link>
              <Link
                href="/help"
                style={{ color: "#666", textDecoration: "none" }}
              >
                Help Center
              </Link>
            </nav>

            {/* Social Icons */}
            <div style={{ display: "flex", gap: "1rem" }}>
              <a href="#" style={{ color: "#666", fontSize: "1.2rem" }}>
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" style={{ color: "#666", fontSize: "1.2rem" }}>
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" style={{ color: "#666", fontSize: "1.2rem" }}>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" style={{ color: "#666", fontSize: "1.2rem" }}>
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

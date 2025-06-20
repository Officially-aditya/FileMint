// src/app/components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <header
      style={{
        backgroundColor: "#add8e6",
        padding: "1rem 5%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Logo */}
        <Link href="/">
          <img
            src="/logo.png"
            alt="FileMint Logo"
            style={{ height: "40px", cursor: "pointer" }}
          />
        </Link>

        {/* Main nav */}
        <nav>
          <ul
            style={{
              display: "flex",
              gap: "2rem",               // <-- more breathing room
              listStyle: "none",
              margin: 0,
              padding: 0,
              fontSize: "1.1rem",
            }}
          >
            <li>
              <Link href="/" style={{ textDecoration: "none", color: "black" }}>
                Home page
              </Link>
            </li>
            <li>
              <Link
                href="/tools"
                style={{ textDecoration: "none", color: "black" }}
              >
                Tools
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                style={{ textDecoration: "none", color: "black" }}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                style={{ textDecoration: "none", color: "black" }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/more"
                style={{ textDecoration: "none", color: "black" }}
              >
                More
              </Link>
            </li>


            
          </ul>
        </nav>

        {/* Globe, settings & profile */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <Link href="/language" style={{ fontSize: "1.2rem" }}>
            🌐
          </Link>
          <Link href="/settings" style={{ fontSize: "1.2rem" }}>
            ⚙️
          </Link>
          <Link href="/profile">
            <img
              src="/profile-icon.png"
              alt="Your Profile"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </Link>
        </div>
      </div>
    </header>
  );
}

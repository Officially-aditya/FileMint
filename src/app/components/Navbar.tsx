// C:\Users\khush\OneDrive\Documents\Desktop\file\code1\FileMint\src\app\components\Navbar.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem 10rem",
        gap: "1rem",
        position: "relative",
      }}
    >
      <div style={{ position: "absolute", left: "2rem" }}>
        <Link href="/">
          <img
            src="/logo.png"
            alt="Logo"
            style={{ height: "40px", cursor: "pointer" }}
          />
        </Link>
      </div>
      <nav
        style={{
          backgroundColor: "#add8e6",
          padding: "1.3rem 2.5rem",
          borderRadius: "20px",
          width: "25%",
          margin: "0 auto",
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            justifyContent: "space-around",
            listStyle: "none",
            margin: 0,
            padding: 0,
            fontSize: "1.1rem",
          }}
        >
          <li>
            <Link href="/" style={{ color: "black", textDecoration: "none" }}>
              HomePage
            </Link>
          </li>
          <li>
            <Link
              href="/tools"
              style={{ color: "black", textDecoration: "none" }}
            >
              Tools
            </Link>
          </li>
          <li>
            <Link
              href="/blogs"
              style={{ color: "black", textDecoration: "none" }}
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              style={{ color: "black", textDecoration: "none" }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/more"
              style={{ color: "black", textDecoration: "none" }}
            >
              More
            </Link>
          </li>
          <li>
            <Link
              href="/language"
              style={{ color: "black", textDecoration: "none" }}
            >
              🌐
            </Link>
          </li>
          <li>
            <Link
              href="/settings"
              style={{ color: "black", textDecoration: "none" }}
            >
              ⚙️
            </Link>
          </li>
        </ul>
      </nav>
      <div style={{ position: "absolute", right: "2rem" }}>
        <Link href="/profile">
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <img
              src="/profile-icon.png"
              alt="Profile"
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            />
          </div>
        </Link>
      </div>
    </header>
  );
}

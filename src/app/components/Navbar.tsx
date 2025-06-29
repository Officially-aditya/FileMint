import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px 24px ",
        gap: "36px",
        position: "relative",
      }}
    >
      <div style={{ position: "absolute", left: "2rem" }}>
        <Link href="/">
          <img
            src="/logo.png"
            alt="Logo"
            style={{marginLeft:"50px", height: "40px", cursor: "pointer" }}
          />
        </Link>
      </div>
      <nav
        style={{
          backgroundColor: "#F0F8FF",
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
              Home page
            </Link>
          </li>
          <li>
            <Link
              href="/all"
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
              <i className="fas fa-globe"></i>
            </Link>
          </li>
          <li>
            <Link
              href="/settings"
              style={{ color: "black", textDecoration: "none" }}
            >
              <i className="fas fa-gear"></i>
            </Link>
          </li>
        </ul>
      </nav>
      <div style={{marginRight:"100px"}}>
        <Link 
        href='/login' 
        style={{ color: "black", textDecoration: "none" }}
        >
          Login
        </Link>
      </div>
      <div style={{ position: "absolute", right: "2rem" }}>
        <Link href="/profile">
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <img
              src="/profile-icon.png"
              alt="Profile"
              style={{ marginRight:"50px",width: "50px", height: "50px", borderRadius: "50%" }}
            />
          </div>
        </Link>
      </div>
    </header>
  );
}

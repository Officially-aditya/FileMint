import Link from 'next/link';

export default function Header() {
    return (
        <header
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "1rem 10rem",
                gap: "1rem",
                position: "relative"
            }}
        >
            <div style={{ position: "absolute", left: "2rem" }}>
                <Link href = "/">
                <img
                src="/logo.png"
                alt="Logo"
                style={{ height:"40px", cursor: "pointer" }}
                />
                </Link>
            </div>
            <nav
      style={{
        backgroundColor: '#add8e6',
        padding: '1.3rem 2.5rem',
        borderRadius: '20px',
        width: '25%',
        margin: '0 auto',
        textAlign: 'center',
        marginTop: '10px',
      }}
    >
      <ul
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          fontSize: "1.4rem",
        }}
      >
        <li>
          <Link href="/" style={{ color: 'black', textDecoration: 'none' }}>
            Home page
          </Link>
        </li>
        <li>
          <Link href="/tools" style={{ color: 'black', textDecoration: 'none' }}>
            Tools
          </Link>
        </li>
        <li>
          <Link href="/about" style={{ color: 'black', textDecoration: 'none' }}>
            About
          </Link>
        </li>
      </ul>
    </nav>
    </header>
    )
}


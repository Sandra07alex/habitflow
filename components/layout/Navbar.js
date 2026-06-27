import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <Link href="/" className="navbar__logo">
        <span className="navbar__logo-icon" aria-hidden="true">
          ✦
        </span>
        HabitFlow
      </Link>
      <nav className="navbar__links">
        <a href="#features">Features</a>
        <a href="#how">How it works</a>
        <a href="#faq">FAQ</a>
      </nav>
      <Link href="/app" className="btn btn--primary">
        Open app →
      </Link>
    </header>
  );
}

import Link from "next/link";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "21/90 Rule", href: "#journey" },
  { label: "Pricing", href: "#cta" },
  { label: "Blog", href: "#footer" },
];

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Primary navigation">
        <Link href="/" className={styles.brand} aria-label="HabitFlow home">
          <span className={styles.logoMark} aria-hidden="true">
            <svg viewBox="0 0 54 34" fill="none">
              <path
                d="M4 24C8 9 15 4 21 15c6 11 11 14 16 2 3-7 8-9 13-5"
                stroke="url(#brandGradient)"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="brandGradient" x1="2" y1="25" x2="52" y2="10">
                  <stop stopColor="#20c8d8" />
                  <stop offset="0.34" stopColor="#ff4fa3" />
                  <stop offset="0.66" stopColor="#ffb53d" />
                  <stop offset="1" stopColor="#66d46e" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span>HabitFlow</span>
        </Link>

        <div className={styles.links}>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className={styles.actions}>
          <Link href="/dashboard" className={styles.login}>
            Log in
          </Link>
          <Link href="/dashboard" className={styles.cta}>
            Start Your Journey
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

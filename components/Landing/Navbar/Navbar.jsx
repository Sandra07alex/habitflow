import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <span>HabitFlow</span>
        </Link>

        <div className={styles.menu}>
          <Link href="#features">Features</Link>
          <Link href="#rule">21/90 Rule</Link>
          <Link href="#how">How It Works</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#blog">Blog</Link>
        </div>

        <div className={styles.actions}>
          <Link href="/dashboard" className={styles.loginBtn}>
            Log in
          </Link>
          <Link href="/dashboard" className={styles.ctaBtn}>
            Start Your Journey <span>→</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

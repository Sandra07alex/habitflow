import Link from "next/link";
import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>Your future is created by what you do <span className="gradient-text">today,</span> not tomorrow.</h2>
          <p>Start with one habit. One small step. One better day.</p>
          <Link href="/dashboard" className={styles.button}>
            Start Your Journey — It&apos;s Free <span>→</span>
          </Link>
          <div className={styles.features}>
            <div className={styles.feature}>
              <span className={styles.icon}>✓</span>
              <span>Free forever</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.icon}>✓</span>
              <span>No ads</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.icon}>✓</span>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>

        <div className={styles.illustration}>
          <svg viewBox="0 0 400 400" className={styles.svg}>
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff4444" />
                <stop offset="16%" stopColor="#ff9500" />
                <stop offset="33%" stopColor="#ffc107" />
                <stop offset="50%" stopColor="#4caf50" />
                <stop offset="66%" stopColor="#2196f3" />
                <stop offset="83%" stopColor="#5c6bc0" />
                <stop offset="100%" stopColor="#9c27b0" />
              </linearGradient>
            </defs>
            
            {/* Staircase path */}
            <g opacity="0.8">
              {[...Array(8)].map((_, i) => (
                <g key={i}>
                  <rect x={50 + i * 40} y={300 - i * 40} width="35" height="8" fill="url(#pathGradient)" />
                  <rect x={50 + i * 40} y={308 - i * 40} width="8" height="40" fill="url(#pathGradient)" />
                </g>
              ))}
            </g>

            {/* Flowers on sides */}
            <circle cx="30" cy="250" r="8" fill="#ff4444" opacity="0.6" />
            <circle cx="380" cy="180" r="8" fill="#9c27b0" opacity="0.6" />
            <circle cx="40" cy="150" r="8" fill="#4caf50" opacity="0.6" />
          </svg>
        </div>
      </div>
    </section>
  );
}

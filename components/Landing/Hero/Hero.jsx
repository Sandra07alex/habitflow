import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.star}>★</span>
            <span>Powered by the 21/90 Rule</span>
          </div>

          <h1 className={styles.heading}>
            Small Steps.
            <br />
            <span className="gradient-text">Big Changes.</span>
          </h1>

          <p className={styles.description}>
            It takes 21 days to build a habit, and 90 days to build a lifestyle.
            <br />
            Track your progress. Stay consistent. Become your best self.
          </p>

          <div className={styles.buttons}>
            <Link href="/dashboard" className={styles.primaryBtn}>
              Start for Free
              <span>→</span>
            </Link>
            <button className={styles.secondaryBtn}>
              <span className={styles.playIcon}>▶</span>
              Watch how it works
            </button>
          </div>

          <div className={styles.socialProof}>
            <div className={styles.avatars}>
              <div className={styles.avatar} style={{ backgroundColor: "#ff4444" }}>A</div>
              <div className={styles.avatar} style={{ backgroundColor: "#ff9500" }}>S</div>
              <div className={styles.avatar} style={{ backgroundColor: "#4caf50" }}>J</div>
              <div className={styles.avatar} style={{ backgroundColor: "#2196f3" }}>M</div>
            </div>
            <div className={styles.text}>
              <strong>Join 10,000+ people</strong>
              <br />
              building better habits
            </div>
          </div>
        </div>

        <div className={styles.illustration}>
          <div className={styles.mountain}>
            <svg viewBox="0 0 400 500" className={styles.mountainSvg}>
              {/* Mountain path */}
              <path d="M 50 400 Q 100 350 150 200 Q 200 100 250 150 Q 300 200 350 100 L 400 500" 
                fill="url(#mountainGradient)" />
              
              {/* Rainbow arc */}
              <g className={styles.rainbowArc}>
                <path d="M 200 250 A 80 80 0 0 1 280 170" 
                  stroke="url(#rainbowGradient)" strokeWidth="6" fill="none" strokeLinecap="round" />
              </g>
              
              {/* Shine effect */}
              <ellipse cx="200" cy="150" rx="60" ry="80" fill="rgba(255,255,255,0.15)" />
              
              <defs>
                <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffd89b" />
                  <stop offset="50%" stopColor="#f9b89b" />
                  <stop offset="100%" stopColor="#e8a8a8" />
                </linearGradient>
                <linearGradient id="rainbowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff4444" />
                  <stop offset="16%" stopColor="#ff9500" />
                  <stop offset="33%" stopColor="#ffc107" />
                  <stop offset="50%" stopColor="#4caf50" />
                  <stop offset="66%" stopColor="#2196f3" />
                  <stop offset="83%" stopColor="#5c6bc0" />
                  <stop offset="100%" stopColor="#9c27b0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className={styles.floatingBadge}>
            <div className={styles.dot}></div>
            <span>Every day is a new opportunity.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

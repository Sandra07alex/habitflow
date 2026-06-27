import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

const AVATARS = [
  styles.avatarOne,
  styles.avatarTwo,
  styles.avatarThree,
  styles.avatarFour,
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>

        <div className={styles.content}>

          <div className={styles.badge}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M7 1l1.545 3.09L12 4.763l-2.5 2.437.59 3.438L7 9.09l-3.09 1.548.59-3.438L2 4.763l3.455-.673L7 1z"
                fill="#FF6B35"
              />
            </svg>
            <span>Powered by the 21/90 Rule</span>
          </div>

          <h1 className={styles.heading}>
            <span className={styles.headingLine1}>Small Steps.</span>
            <span className={styles.headingLine2}>
              <span className={styles.gradientBig}>Big</span>
              {" "}
              <span className={styles.gradientChanges}>Changes</span>
              <span className={styles.gradientDot}>.</span>
            </span>
          </h1>

          <div className={styles.textBlock}>
            <p className={styles.subtitle}>
              It takes 21 days to build a habit,<br />
              and 90 days to build a lifestyle.
            </p>
            <p className={styles.body}>
              Track your progress. Stay consistent.<br />
              Become your best self.
            </p>
          </div>

          <div className={styles.ctas}>
            <Link href="/dashboard" className={styles.primaryCta}>
              Start for Free
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <button className={styles.secondaryCta} type="button">
              Watch how it works
              <span className={styles.playIcon}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M7.5 6.5l4 2.5-4 2.5V6.5z" fill="currentColor" />
                </svg>
              </span>
            </button>
          </div>

          <div className={styles.social}>
            <div className={styles.avatars} aria-hidden="true">
              {AVATARS.map((avatarClass, i) => (
                <span
                  key={i}
                  className={`${styles.avatar} ${avatarClass}`}
                />
              ))}
            </div>
            <div className={styles.socialText}>
              <span className={styles.socialStrong}>Join 10,000+ people</span>
              <span className={styles.socialMuted}>building better habits</span>
            </div>
          </div>

        </div>

        <div className={styles.visual}>
          <div className={styles.glow} aria-hidden="true" />
          <div className={styles.illustrationWrap}>
            <div className={styles.floatingBadge} aria-hidden="true">
              <svg width="22" height="20" viewBox="0 0 32 28" fill="none">
                <path
                  d="M4 18 C6 10, 10 6, 14 10 C18 14, 20 8, 24 6 C28 4, 30 8, 30 12"
                  stroke="url(#heroBadgeGrad)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
                <defs>
                  <linearGradient id="heroBadgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FF6B35" />
                    <stop offset="50%" stopColor="#4CAF50" />
                    <stop offset="100%" stopColor="#9C27B0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <Image
              src="/images/hero-rainbow.jpg"
              alt="A person walking a glowing rainbow path up a mountain, symbolising the habit-building journey"
              width={660}
              height={580}
              priority
              className={styles.illustration}
              sizes="(max-width: 768px) 100vw, 55vw"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

import styles from "./Header.module.css";

export default function Header({ streakData }) {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className={styles.header}>
      <div className={styles.greeting}>
        <h1>Good morning, Sandra! 👋</h1>
        <p>Stay consistent and make it count.</p>
        <p className={styles.date}>{currentDate}</p>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <div className={styles.badge} style={{ backgroundColor: "#ff4444" }}>
            <span className={styles.number}>{streakData?.currentStreak || 7}</span>
          </div>
          <div className={styles.label}>
            <span className={styles.value}>Current Streak</span>
            <span className={styles.trend}>↗ 2 days</span>
          </div>
        </div>

        <div className={styles.stat}>
          <div className={styles.badge} style={{ backgroundColor: "#9c27b0" }}>
            <span className={styles.number}>{streakData?.longestStreak || 18}</span>
          </div>
          <div className={styles.label}>
            <span className={styles.value}>Longest Streak</span>
            <span className={styles.record}>Personal best</span>
          </div>
        </div>
      </div>

      <div className={styles.progress}>
        <div className={styles.progressHeader}>
          <span>Today&apos;s Progress</span>
          <span className={styles.percentage}>75%</span>
        </div>
        <div className={styles.progressBar}>
          <div className={styles.fill} style={{ width: "75%" }}></div>
        </div>
        <span className={styles.count}>3 of 4 completed</span>
      </div>
    </header>
  );
}

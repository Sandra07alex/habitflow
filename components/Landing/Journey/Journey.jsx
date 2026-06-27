import styles from "./Journey.module.css";

export default function Journey() {
  return (
    <section className={styles.journey} id="rule">
      <div className={styles.container}>
        <h2 className={styles.title}>The 21/90 Rule</h2>
        <p className={styles.subtitle}>Real change takes time. But the right time is now.</p>

        <div className={styles.milestones}>
          <div className={styles.milestone}>
            <div className={styles.circle} style={{ borderColor: "#ff4444" }}>
              <span className={styles.number}>21</span>
              <span className={styles.label}>Days</span>
            </div>
            <h3>Build the Habit</h3>
            <p>It takes 21 days of consistency to form a new habit and make it part of your routine.</p>
          </div>

          <div className={styles.connector}></div>

          <div className={styles.milestone}>
            <div className={styles.circle} style={{ borderColor: "#ffc107" }}>
              <span className={styles.number}>90</span>
              <span className={styles.label}>Days</span>
            </div>
            <h3>Build the Lifestyle</h3>
            <p>Stay consistent for 90 days, and that habit becomes part of who you are.</p>
          </div>

          <div className={styles.connector}></div>

          <div className={styles.milestone}>
            <div className={styles.circle} style={{ borderColor: "#4caf50" }}>
              <span className={styles.infinity}>∞</span>
              <span className={styles.label}>Forever</span>
            </div>
            <h3>Forever</h3>
            <p>Small daily actions compound over time and create a life you love.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

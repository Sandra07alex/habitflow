import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span>HF</span>
            </div>
            <h3>HabitFlow</h3>
            <p>Build better habits, one day at a time.</p>
          </div>

          <div className={styles.links}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub">
              <span>→</span> GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <span>→</span> LinkedIn
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
              <span>→</span> Twitter
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; 2024 HabitFlow. All rights reserved.</p>
          <div className={styles.divider}></div>
          <p>Made with love and consistency.</p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>HF</div>
        <span>HabitFlow</span>
      </div>

      <nav className={styles.nav}>
        <div className={styles.navItem}>
          <span className={styles.icon}>🏠</span>
          <span>Today</span>
        </div>
        <div className={styles.navItem}>
          <span className={styles.icon}>📋</span>
          <span>All Habits</span>
        </div>
        <div className={styles.navItem}>
          <span className={styles.icon}>📅</span>
          <span>Calendar</span>
        </div>
        <div className={styles.navItem}>
          <span className={styles.icon}>📊</span>
          <span>Stats</span>
        </div>
        <div className={styles.navItem}>
          <span className={styles.icon}>⚙️</span>
          <span>Settings</span>
        </div>
      </nav>

      <div className={styles.footer}>
        <div className={styles.tagline}>
          <p>Small steps</p>
          <p>every day</p>
          <p>lead to</p>
          <p className={styles.highlight}>big</p>
          <p className={styles.highlight}>changes</p>
          <p>over</p>
          <p>time.</p>
        </div>
      </div>
    </aside>
  );
}

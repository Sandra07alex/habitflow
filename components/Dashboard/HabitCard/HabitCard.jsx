"use client";

import { useState } from "react";
import styles from "./HabitCard.module.css";

export default function HabitCard({ habit, onToggle }) {
  const [isCompleted, setIsCompleted] = useState(habit?.completed || false);

  const handleToggle = () => {
    setIsCompleted(!isCompleted);
    if (onToggle) onToggle(habit?.id, !isCompleted);
  };

  return (
    <div className={styles.card} style={{ borderLeftColor: habit?.color || "#ff4444" }}>
      <div className={styles.header}>
        <div className={styles.info}>
          <div className={styles.iconWrapper} style={{ backgroundColor: habit?.color + "15" }}>
            <span className={styles.icon}>{habit?.icon || "🎯"}</span>
          </div>
          <div className={styles.details}>
            <h3>{habit?.name || "Habit Name"}</h3>
            <p>{habit?.schedule || "Every day"}</p>
          </div>
        </div>
        <button
          className={`${styles.checkbox} ${isCompleted ? styles.checked : ""}`}
          onClick={handleToggle}
          style={isCompleted ? { backgroundColor: habit?.color, borderColor: habit?.color } : {}}
        >
          {isCompleted && <span>✓</span>}
        </button>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statLabel}>Current Streak</span>
          <span className={styles.statValue} style={{ color: habit?.color }}>
            {habit?.currentStreak || 0} days
          </span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statLabel}>Longest Streak</span>
          <span className={styles.statValue} style={{ color: habit?.color }}>
            {habit?.longestStreak || 0} days
          </span>
        </div>
      </div>

      <div className={styles.actions}>
        <button className={styles.actionBtn} title="Edit">
          ✏️
        </button>
        <button className={styles.actionBtn} title="Delete">
          🗑️
        </button>
      </div>
    </div>
  );
}

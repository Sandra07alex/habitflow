"use client";

import { useState } from "react";
import styles from "./Calendar.module.css";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 4)); // May 2025

  const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const getFirstDayOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);
  const days = [];

  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  const completedDays = [1, 2, 3, 4, 5, 8, 9, 10, 15, 16, 17, 18, 19, 22, 23, 24, 25];
  const colors = ["#ff4444", "#ff9500", "#ffc107", "#4caf50", "#2196f3", "#5c6bc0", "#9c27b0"];

  for (let i = 1; i <= daysInMonth; i++) {
    days.push({
      day: i,
      completed: completedDays.includes(i),
      color: colors[Math.floor(Math.random() * colors.length)],
    });
  }

  const monthName = currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  const prevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));

  return (
    <section className={styles.calendar}>
      <div className={styles.header}>
        <button onClick={prevMonth} className={styles.navBtn}>←</button>
        <h3>{monthName}</h3>
        <button onClick={nextMonth} className={styles.navBtn}>→</button>
      </div>

      <div className={styles.weekDays}>
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(day => (
          <div key={day} className={styles.weekDay}>{day}</div>
        ))}
      </div>

      <div className={styles.grid}>
        {days.map((day, idx) => (
          <div
            key={idx}
            className={`${styles.dayCell} ${day?.completed ? styles.completed : ""}`}
            style={day?.completed ? { backgroundColor: day.color } : {}}
          >
            {day?.day}
          </div>
        ))}
      </div>

      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <span className={styles.legendDot} style={{ backgroundColor: "#ff4444" }}></span>
          <span>All done</span>
        </div>
        <div className={styles.legendItem}>
          <span className={styles.legendDot} style={{ backgroundColor: "#ff9500" }}></span>
          <span>Great</span>
        </div>
        <div className={styles.legendItem}>
          <span className={styles.legendDot} style={{ backgroundColor: "#ffc107" }}></span>
          <span>Good</span>
        </div>
        <div className={styles.legendItem}>
          <span className={styles.legendDot} style={{ backgroundColor: "#4caf50" }}></span>
          <span>Okay</span>
        </div>
        <div className={styles.legendItem}>
          <span className={styles.legendDot} style={{ backgroundColor: "#e0e0e0" }}></span>
          <span>Missed</span>
        </div>
        <div className={styles.legendItem}>
          <span className={styles.legendDot} style={{ backgroundColor: "#ffffff", border: "1px solid #e0e0e0" }}></span>
          <span>No habits</span>
        </div>
      </div>
    </section>
  );
}

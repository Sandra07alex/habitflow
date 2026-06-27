"use client";

import { useState } from "react";
import HabitCard from "../HabitCard/HabitCard";
import styles from "./TodayHabits.module.css";

const defaultHabits = [
  {
    id: 1,
    name: "Drink Water",
    icon: "💧",
    color: "#ff4444",
    schedule: "Every day",
    currentStreak: 7,
    longestStreak: 18,
    completed: true,
  },
  {
    id: 2,
    name: "Read 20 Minutes",
    icon: "📖",
    color: "#ff9500",
    schedule: "Every day",
    currentStreak: 5,
    longestStreak: 14,
    completed: true,
  },
  {
    id: 3,
    name: "Workout",
    icon: "💪",
    color: "#4caf50",
    schedule: "Mon, Wed, Fri",
    currentStreak: 3,
    longestStreak: 12,
    completed: true,
  },
  {
    id: 4,
    name: "Meditate",
    icon: "🧘",
    color: "#9c27b0",
    schedule: "Every day",
    currentStreak: 2,
    longestStreak: 9,
    completed: false,
  },
];

export default function TodayHabits() {
  const [habits, setHabits] = useState(defaultHabits);
  const [showModal, setShowModal] = useState(false);

  const handleToggleHabit = (id, isCompleted) => {
    setHabits(habits.map(h => h.id === id ? { ...h, completed: isCompleted } : h));
  };

  const completed = habits.filter(h => h.completed).length;
  const total = habits.length;

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div>
          <h2>Today&apos;s Habits</h2>
          <span className={styles.count}>{total} habits</span>
          <span className={styles.badge}>{Math.round((completed / total) * 100)}%</span>
        </div>
        <div className={styles.info}>{completed} of {total} completed</div>
      </div>

      <div className={styles.list}>
        {habits.map(habit => (
          <HabitCard
            key={habit.id}
            habit={habit}
            onToggle={handleToggleHabit}
          />
        ))}
      </div>

      <button className={styles.addBtn} onClick={() => setShowModal(true)}>
        + Add Habit
      </button>
    </section>
  );
}

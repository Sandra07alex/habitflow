"use client";

import { useState } from "react";
import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";
import Header from "@/components/Dashboard/Header/Header";
import TodayHabits from "@/components/Dashboard/TodayHabits/TodayHabits";
import Calendar from "@/components/Dashboard/Calendar/Calendar";
import HabitModal from "@/components/Dashboard/HabitModal/HabitModal";
import styles from "./dashboard.module.css";

export default function DashboardPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.main}>
        <Header streakData={{ currentStreak: 7, longestStreak: 18 }} />
        <div className={styles.container}>
          <div className={styles.content}>
            <TodayHabits />
          </div>
          <aside className={styles.sidebar}>
            <Calendar />
          </aside>
        </div>
      </div>
      <HabitModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

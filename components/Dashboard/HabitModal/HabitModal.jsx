"use client";

import { useState } from "react";
import styles from "./HabitModal.module.css";

const colors = ["#ff4444", "#ff9500", "#ffc107", "#4caf50", "#2196f3", "#5c6bc0", "#9c27b0"];
const icons = ["🎯", "💧", "📖", "💪", "🧘", "🏃", "🎨", "📝"];

export default function HabitModal({ isOpen, onClose, onSave }) {
  const [formData, setFormData] = useState({
    name: "",
    color: colors[0],
    icon: icons[0],
    schedule: "Every day",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave?.(formData);
    setFormData({ name: "", color: colors[0], icon: icons[0], schedule: "Every day" });
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2>Add New Habit</h2>
          <button className={styles.closeBtn} onClick={onClose}>✕</button>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label>Habit Name</label>
            <input
              type="text"
              placeholder="e.g., Drink Water"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Color</label>
              <div className={styles.colorGrid}>
                {colors.map(color => (
                  <button
                    key={color}
                    type="button"
                    className={`${styles.colorBtn} ${formData.color === color ? styles.selected : ""}`}
                    style={{ backgroundColor: color }}
                    onClick={() => setFormData({ ...formData, color })}
                  />
                ))}
              </div>
            </div>

            <div className={styles.formGroup}>
              <label>Icon</label>
              <div className={styles.iconGrid}>
                {icons.map(icon => (
                  <button
                    key={icon}
                    type="button"
                    className={`${styles.iconBtn} ${formData.icon === icon ? styles.selected : ""}`}
                    onClick={() => setFormData({ ...formData, icon })}
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>Frequency</label>
            <select
              value={formData.schedule}
              onChange={(e) => setFormData({ ...formData, schedule: e.target.value })}
            >
              <option>Every day</option>
              <option>Monday to Friday</option>
              <option>Mon, Wed, Fri</option>
              <option>Weekends</option>
              <option>Custom</option>
            </select>
          </div>

          <div className={styles.actions}>
            <button type="button" className={styles.cancelBtn} onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className={styles.submitBtn}>
              Create Habit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

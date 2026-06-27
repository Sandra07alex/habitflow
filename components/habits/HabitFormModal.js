"use client";

import { HABIT_COLORS, HABIT_ICONS, WEEKDAYS } from "@/lib/habits";
import Modal from "@/components/ui/Modal";

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 11 8 15 16 6" />
    </svg>
  );
}

export default function HabitFormModal({ editing, form, onChange, onClose, onSave, onDelete }) {
  const isNew = editing === "new";
  const colorName = HABIT_COLORS.find((c) => c.value === form.color)?.name ?? "custom";

  function toggleDay(day) {
    onChange((prev) => {
      const set = new Set(prev.schedule);
      if (set.has(day)) set.delete(day);
      else set.add(day);
      return { ...prev, schedule: [...set].sort() };
    });
  }

  return (
    <Modal onClose={onClose}>
      <h2 className="modal__title">{isNew ? "New habit" : "Edit habit"}</h2>

      <label className="form-label" htmlFor="habit-name">
        Name
      </label>
      <input
        id="habit-name"
        autoFocus
        value={form.name}
        onChange={(e) => onChange({ ...form, name: e.target.value })}
        placeholder="e.g. Drink water"
        className="form-input"
      />

      <span className="form-label">Icon</span>
      <div className="icon-picker">
        {HABIT_ICONS.map((icon) => (
          <button
            type="button"
            key={icon}
            onClick={() => onChange({ ...form, icon })}
            className={`icon-picker__btn${form.icon === icon ? " icon-picker__btn--active" : ""}`}
          >
            {icon}
          </button>
        ))}
      </div>

      <div className="form-label-row">
        <span className="form-label">Accent color</span>
        <span className="form-label-hint">{colorName}</span>
      </div>
      <div className="color-picker-wrap">
        <div className="color-picker">
          {HABIT_COLORS.map((c) => {
            const active = form.color === c.value;
            return (
              <button
                type="button"
                key={c.name}
                onClick={() => onChange({ ...form, color: c.value })}
                aria-label={c.name}
                aria-pressed={active}
                className="color-picker__btn"
                style={{
                  backgroundColor: c.value,
                  boxShadow: active
                    ? `0 0 0 2px var(--background), 0 0 0 4px ${c.value}, 0 6px 16px -4px ${c.value}80`
                    : `0 2px 6px -2px ${c.value}80`,
                }}
              >
                {active ? <CheckIcon /> : null}
              </button>
            );
          })}
        </div>
      </div>

      <span className="form-label">Schedule</span>
      <div className="schedule-picker">
        {WEEKDAYS.map((day, index) => {
          const on = form.schedule.includes(index);
          return (
            <button
              type="button"
              key={day}
              onClick={() => toggleDay(index)}
              className={`schedule-picker__btn${on ? " schedule-picker__btn--active" : ""}`}
            >
              {day[0]}
            </button>
          );
        })}
      </div>

      <div className="form-actions">
        {!isNew ? (
          <button type="button" onClick={onDelete} className="btn btn--destructive">
            Delete
          </button>
        ) : (
          <span />
        )}
        <div className="form-actions__right">
          <button type="button" onClick={onClose} className="btn btn--ghost">
            Cancel
          </button>
          <button type="button" onClick={onSave} className="btn btn--primary">
            Save
          </button>
        </div>
      </div>
    </Modal>
  );
}

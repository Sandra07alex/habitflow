"use client";

import { useState } from "react";
import { useHabits } from "@/lib/use-habits";
import { HABIT_COLORS, HABIT_ICONS } from "@/lib/habits";
import HabitCard from "@/components/habits/HabitCard";
import HabitFormModal from "@/components/habits/HabitFormModal";

const DEFAULT_FORM = {
  name: "",
  icon: HABIT_ICONS[0],
  color: HABIT_COLORS[0].value,
  schedule: [0, 1, 2, 3, 4, 5, 6],
};

export default function HabitsView() {
  const { habits, mounted, addHabit, updateHabit, deleteHabit, resetSeed } = useHabits();
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(DEFAULT_FORM);

  function openNew() {
    setForm(DEFAULT_FORM);
    setEditing("new");
  }

  function openEdit(habit) {
    setForm({ name: habit.name, icon: habit.icon, color: habit.color, schedule: habit.schedule });
    setEditing(habit.id);
  }

  function close() {
    setEditing(null);
  }

  function save(e) {
    if (e) e.preventDefault();
    if (!form.name.trim()) return;
    if (editing === "new") addHabit(form);
    else if (editing) updateHabit(editing, form);
    close();
  }

  function handleDelete() {
    if (editing && editing !== "new" && confirm("Delete this habit? This cannot be undone.")) {
      deleteHabit(editing);
      close();
    }
  }

  if (!mounted) {
    return <div className="loading">Loading…</div>;
  }

  return (
    <div>
      <div className="habits-header">
        <div>
          <h1 className="habits-header__title">Your habits</h1>
          <p className="habits-header__count">{habits.length} total</p>
        </div>
        <button type="button" onClick={openNew} className="btn btn--primary">
          + New habit
        </button>
      </div>

      {habits.length === 0 ? (
        <div className="empty-state">
          <p className="empty-state__title">No habits yet.</p>
          <p className="empty-state__desc">Add your first one to start a streak.</p>
          <div className="empty-state__actions">
            <button type="button" onClick={openNew} className="btn btn--primary">
              Add habit
            </button>
            <button type="button" onClick={resetSeed} className="btn btn--secondary">
              Load sample data
            </button>
          </div>
        </div>
      ) : (
        <ul className="habits-list">
          {habits.map((habit) => (
            <HabitCard key={habit.id} habit={habit} onEdit={openEdit} />
          ))}
        </ul>
      )}

      {editing !== null && (
        <HabitFormModal
          editing={editing}
          form={form}
          onChange={setForm}
          onClose={close}
          onSave={save}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}

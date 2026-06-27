import { currentStreak, longestStreak } from "@/lib/habits";
import StreakChip from "./StreakChip";

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 11 8 15 16 6" />
    </svg>
  );
}

export default function HabitItem({ habit, activeKey, onToggle }) {
  const done = (habit.completions || []).includes(activeKey);
  const cs = currentStreak(habit, new Date());
  const ls = longestStreak(habit, new Date());

  const toggleStyle = done
    ? {
        backgroundColor: habit.color,
        borderColor: habit.color,
        color: "#fff",
        boxShadow: `0 6px 16px -4px ${habit.color}80`,
      }
    : {
        borderColor: "var(--border)",
        backgroundColor: "var(--background)",
      };

  return (
    <li className="habit-item">
      <span className="habit-item__accent" style={{ backgroundColor: habit.color }} aria-hidden="true" />
      <span
        className="habit-item__icon"
        style={{ backgroundColor: habit.color + "22", color: habit.color }}
      >
        {habit.icon}
      </span>
      <div className="habit-item__body">
        <p className={`habit-item__name${done ? " habit-item__name--done" : ""}`}>{habit.name}</p>
        <div className="habit-item__meta">
          <StreakChip color={habit.color} streak={cs} inline />
          <span className="habit-item__best">best {ls}</span>
        </div>
      </div>
      <button
        type="button"
        onClick={() => onToggle(habit.id, activeKey)}
        aria-label={done ? "Mark not done" : "Mark done"}
        className="habit-item__toggle"
        style={toggleStyle}
      >
        {done ? <CheckIcon /> : null}
      </button>
    </li>
  );
}

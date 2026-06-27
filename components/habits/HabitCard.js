import { WEEKDAYS, completionRate, currentStreak, longestStreak } from "@/lib/habits";
import StreakChip from "./StreakChip";

export default function HabitCard({ habit, onEdit }) {
  const cs = currentStreak(habit);
  const ls = longestStreak(habit);
  const rate = completionRate(habit, 30);

  const scheduleLabel =
    habit.schedule.length === 7 ? "Every day" : habit.schedule.map((d) => WEEKDAYS[d]).join(" · ");

  return (
    <li className="habit-card">
      <span className="habit-card__accent" style={{ backgroundColor: habit.color }} aria-hidden="true" />
      <div className="habit-card__row">
        <span
          className="habit-card__icon"
          style={{ backgroundColor: habit.color + "22", color: habit.color }}
        >
          {habit.icon}
        </span>
        <div className="habit-card__body">
          <p className="habit-card__name">{habit.name}</p>
          <p className="habit-card__schedule">{scheduleLabel}</p>
        </div>
        <StreakChip color={habit.color} streak={cs} />
        <button type="button" onClick={() => onEdit(habit)} className="btn--edit">
          Edit
        </button>
      </div>
      <div className="habit-card__stats">
        <span className="habit-card__stat-pill">Best {ls}</span>
        <span className="habit-card__stat-pill">{rate}% last 30d</span>
        <div className="habit-card__progress">
          <div
            className="habit-card__progress-fill"
            style={{ width: `${rate}%`, backgroundColor: habit.color }}
          />
        </div>
      </div>
    </li>
  );
}

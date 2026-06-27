import { WEEKDAYS } from "@/lib/habits";

export default function DayStrip({ days, selected, onSelect }) {
  return (
    <div className="day-strip">
      {days.map((day, index) => {
        const active = index === selected;
        return (
          <button
            key={index}
            type="button"
            onClick={() => onSelect(index)}
            className={`day-strip__btn${active ? " day-strip__btn--active" : ""}`}
          >
            <span className="day-strip__weekday">{WEEKDAYS[day.getDay()]}</span>
            <span className="day-strip__date">{day.getDate()}</span>
          </button>
        );
      })}
    </div>
  );
}

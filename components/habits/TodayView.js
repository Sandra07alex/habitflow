"use client";

import { useMemo, useState } from "react";
import { useHabits } from "@/lib/use-habits";
import { addDays, isDueToday, isScheduled, todayKey, WEEKDAYS } from "@/lib/habits";
import DayStrip from "@/components/habits/DayStrip";
import HabitItem from "@/components/habits/HabitItem";
import EmptyToday from "@/components/habits/EmptyToday";

export default function TodayView() {
  const { habits, mounted, toggleDay } = useHabits();
  const [selected, setSelected] = useState(0);

  const days = useMemo(() => {
    const today = new Date();
    return Array.from({ length: 7 }, (_, i) => addDays(today, -i));
  }, []);

  const activeDate = days[selected];
  const activeKey = todayKey(activeDate);
  const due = habits.filter((h) => isDueToday(h, activeDate));
  const doneCount = due.filter((h) => (h.completions || []).includes(activeKey)).length;

  if (!mounted) {
    return <div className="loading">Loading…</div>;
  }

  const titleLabel =
    selected === 0 ? "Today" : selected === 1 ? "Yesterday" : WEEKDAYS[activeDate.getDay()];

  return (
    <div>
      <div className="today-header">
        <div>
          <p className="today-header__date">
            {activeDate.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" })}
          </p>
          <h1 className="today-header__title">{titleLabel}</h1>
        </div>
        <div className="today-header__badge">
          {doneCount} / {due.length} done
        </div>
      </div>

      <DayStrip days={days} selected={selected} onSelect={setSelected} />

      {due.length === 0 ? (
        <EmptyToday />
      ) : (
        <ul className="habit-list">
          {due.map((habit) => (
            <HabitItem key={habit.id} habit={habit} activeKey={activeKey} onToggle={toggleDay} />
          ))}
        </ul>
      )}

      {habits.length > due.length && (
        <div className="off-schedule">
          <p className="off-schedule__label">Not scheduled today</p>
          <ul className="off-schedule__list">
            {habits
              .filter((h) => !isScheduled(h, activeDate))
              .map((h) => (
                <li key={h.id} className="off-schedule__item">
                  <span>{h.icon}</span>
                  <span>{h.name}</span>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

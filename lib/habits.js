export const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function todayKey(d = new Date()) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function parseKey(key) {
  const [y, m, day] = key.split("-").map(Number);
  return new Date(y, m - 1, day);
}

export function addDays(date, n) {
  const d = new Date(date);
  d.setDate(d.getDate() + n);
  return d;
}

export function isScheduled(habit, date) {
  if (!habit.schedule || habit.schedule.length === 0) return true;
  return habit.schedule.includes(date.getDay());
}

export function isDueToday(habit, date = new Date()) {
  const created = parseKey(habit.createdAt);
  if (date < new Date(created.getFullYear(), created.getMonth(), created.getDate())) return false;
  return isScheduled(habit, date);
}

export function currentStreak(habit, today = new Date()) {
  const done = new Set(habit.completions || []);
  const created = parseKey(habit.createdAt);
  const createdDay = new Date(created.getFullYear(), created.getMonth(), created.getDate());
  let streak = 0;
  let cursor = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  let allowMissToday = true;

  while (cursor >= createdDay) {
    if (isScheduled(habit, cursor)) {
      const k = todayKey(cursor);
      if (done.has(k)) {
        streak += 1;
      } else if (allowMissToday && k === todayKey(today)) {
        // today not done yet — skip without breaking
      } else {
        break;
      }
    }
    allowMissToday = false;
    cursor = addDays(cursor, -1);
  }
  return streak;
}

export function longestStreak(habit, today = new Date()) {
  const done = new Set(habit.completions || []);
  const created = parseKey(habit.createdAt);
  const createdDay = new Date(created.getFullYear(), created.getMonth(), created.getDate());
  let best = 0;
  let run = 0;
  let cursor = new Date(createdDay);
  const end = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  while (cursor <= end) {
    if (isScheduled(habit, cursor)) {
      if (done.has(todayKey(cursor))) {
        run += 1;
        if (run > best) best = run;
      } else {
        run = 0;
      }
    }
    cursor = addDays(cursor, 1);
  }
  return best;
}

export function completionRate(habit, days = 30, today = new Date()) {
  const done = new Set(habit.completions || []);
  let scheduled = 0;
  let completed = 0;
  for (let i = 0; i < days; i++) {
    const d = addDays(today, -i);
    if (d < parseKey(habit.createdAt)) continue;
    if (isScheduled(habit, d)) {
      scheduled += 1;
      if (done.has(todayKey(d))) completed += 1;
    }
  }
  if (scheduled === 0) return 0;
  return Math.round((completed / scheduled) * 100);
}

export const HABIT_COLORS = [
  { name: "red", value: "#FF5F57" },
  { name: "orange", value: "#FF9F0A" },
  { name: "yellow", value: "#FFD60A" },
  { name: "green", value: "#30D158" },
  { name: "cyan", value: "#64D2FF" },
  { name: "blue", value: "#0A84FF" },
  { name: "purple", value: "#BF5AF2" },
  { name: "pink", value: "#FF2D55" },
];

export const HABIT_ICONS = ["💧", "📚", "🏃", "🧘", "🥗", "😴", "✍️", "🎯", "🎨", "🌱"];

export function seedHabits() {
  const today = new Date();
  const mk = (offset) => todayKey(addDays(today, -offset));
  return [
    {
      id: crypto.randomUUID(),
      name: "Drink 8 glasses of water",
      icon: "💧",
      color: "#0A84FF",
      schedule: [0, 1, 2, 3, 4, 5, 6],
      createdAt: mk(20),
      completions: [mk(0), mk(1), mk(2), mk(3), mk(5), mk(6), mk(7), mk(9), mk(10)],
    },
    {
      id: crypto.randomUUID(),
      name: "Read 20 minutes",
      icon: "📚",
      color: "#FF9F0A",
      schedule: [1, 2, 3, 4, 5],
      createdAt: mk(14),
      completions: [mk(1), mk(2), mk(3), mk(4), mk(7), mk(8), mk(9)],
    },
    {
      id: crypto.randomUUID(),
      name: "Morning run",
      icon: "🏃",
      color: "#30D158",
      schedule: [1, 3, 5],
      createdAt: mk(21),
      completions: [mk(2), mk(4), mk(7), mk(9), mk(11), mk(14)],
    },
    {
      id: crypto.randomUUID(),
      name: "Meditate",
      icon: "🧘",
      color: "#BF5AF2",
      schedule: [0, 1, 2, 3, 4, 5, 6],
      createdAt: mk(10),
      completions: [mk(1), mk(2), mk(3), mk(4)],
    },
  ];
}

"use client";

import { useEffect, useState, useCallback, useSyncExternalStore } from "react";
import { seedHabits, todayKey } from "./habits";

const KEY = "habitflow:v1";
const listeners = new Set();
let cache = null;

function read() {
  if (typeof window === "undefined") return [];
  if (cache) return cache;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) {
      const seeded = seedHabits();
      window.localStorage.setItem(KEY, JSON.stringify(seeded));
      cache = seeded;
      return seeded;
    }
    cache = JSON.parse(raw);
    return cache;
  } catch {
    cache = [];
    return cache;
  }
}

function write(next) {
  cache = next;
  if (typeof window !== "undefined") {
    window.localStorage.setItem(KEY, JSON.stringify(next));
  }
  listeners.forEach((l) => l());
}

function subscribe(l) {
  listeners.add(l);
  return () => {
    listeners.delete(l);
  };
}

const EMPTY = [];

export function useHabits() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const habits = useSyncExternalStore(
    subscribe,
    () => read(),
    () => EMPTY,
  );

  const addHabit = useCallback((h) => {
    const next = [
      ...read(),
      {
        id: crypto.randomUUID(),
        createdAt: todayKey(),
        completions: [],
        schedule: [0, 1, 2, 3, 4, 5, 6],
        color: "#0A84FF",
        icon: "🎯",
        ...h,
      },
    ];
    write(next);
  }, []);

  const updateHabit = useCallback((id, patch) => {
    write(read().map((habit) => (habit.id === id ? { ...habit, ...patch } : habit)));
  }, []);

  const deleteHabit = useCallback((id) => {
    write(read().filter((habit) => habit.id !== id));
  }, []);

  const toggleDay = useCallback((id, dayKey) => {
    write(
      read().map((habit) => {
        if (habit.id !== id) return habit;
        const set = new Set(habit.completions || []);
        if (set.has(dayKey)) set.delete(dayKey);
        else set.add(dayKey);
        return { ...habit, completions: [...set].sort() };
      }),
    );
  }, []);

  const resetSeed = useCallback(() => {
    write(seedHabits());
  }, []);

  return {
    habits: mounted ? habits : EMPTY,
    mounted,
    addHabit,
    updateHabit,
    deleteHabit,
    toggleDay,
    resetSeed,
  };
}

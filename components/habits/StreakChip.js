export default function StreakChip({ color, streak, inline = false }) {
  const active = streak > 0;
  const className = inline ? "streak-chip streak-chip--inline" : "streak-chip";

  return (
    <span
      className={className}
      style={{
        backgroundColor: active ? color + "1f" : "var(--surface)",
        color: active ? color : "var(--muted-foreground)",
      }}
      title={`${streak}-day streak`}
    >
      <span aria-hidden="true">{active ? "🔥" : "·"}</span>
      <span>{streak}</span>
    </span>
  );
}

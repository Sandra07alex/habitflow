const items = [
  { icon: "💧", name: "Drink water", done: true, streak: 12 },
  { icon: "📚", name: "Read 20 min", done: true, streak: 7 },
  { icon: "🏃", name: "Morning run", done: false, streak: 4 },
  { icon: "🧘", name: "Meditate", done: true, streak: 21 },
];

export default function HeroCard() {
  return (
    <div className="hero-card">
      <div className="hero-card__glow" aria-hidden="true" />
      <div className="hero-card__panel">
        <div className="hero-card__header">
          <div>
            <p className="hero-card__day-label">Today</p>
            <p className="hero-card__day-name">Thursday</p>
          </div>
          <div className="hero-card__progress">3 of 4 done</div>
        </div>
        <ul className="hero-card__list">
          {items.map((item) => (
            <li key={item.name} className="hero-card__item">
              <span className="hero-card__item-icon">{item.icon}</span>
              <div className="hero-card__item-info">
                <p className="hero-card__item-name">{item.name}</p>
                <p className="hero-card__item-streak">🔥 {item.streak}-day streak</p>
              </div>
              <span
                className={`hero-card__check${item.done ? " hero-card__check--done" : ""}`}
                aria-hidden="true"
              >
                {item.done ? "✓" : ""}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

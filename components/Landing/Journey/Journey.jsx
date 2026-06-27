import styles from "./Journey.module.css";

const MILESTONES = [
  {
    value: "21",
    unit: "Days",
    title: "Build the Habit",
    description:
      "It takes 21 days of consistency to form a new habit and make it part of your routine.",
    accentStart: "#f472b6",
    accentEnd: "#fb7185",
    glowColor: "rgba(244, 114, 182, 0.18)",
    textColor: "#e91e8c",
  },
  {
    value: "90",
    unit: "Days",
    title: "Build the Lifestyle",
    description:
      "Stay consistent for 90 days, and that habit becomes a part of who you are.",
    accentStart: "#fbbf24",
    accentEnd: "#f59e0b",
    glowColor: "rgba(251, 191, 36, 0.18)",
    textColor: "#d97706",
  },
  {
    value: "∞",
    unit: null,
    title: "Forever",
    description:
      "Small daily actions compound over time and create a life you love.",
    accentStart: "#34d399",
    accentEnd: "#10b981",
    glowColor: "rgba(52, 211, 153, 0.18)",
    textColor: "#059669",
  },
];

export default function Journey() {
  return (
    <section className={styles.section} id="journey" aria-labelledby="journey-heading">
      <div className={styles.container}>

        <div className={styles.header}>
          <h2 id="journey-heading" className={styles.title}>The 21/90 Rule</h2>
          <p className={styles.subtitle}>
            Real change takes time. But the right time is now.
          </p>
        </div>

        <div className={styles.milestones} role="list">
          {MILESTONES.map((m, i) => (
            <article key={m.value} className={styles.milestone} role="listitem">

              {i < MILESTONES.length - 1 && (
                <div className={styles.connector} aria-hidden="true" />
              )}

              <div
                className={styles.circleWrap}
                style={{ "--glow": m.glowColor }}
              >
                <svg
                  className={styles.circleSvg}
                  viewBox="0 0 160 160"
                  fill="none"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient
                      id={`grad-${i}`}
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor={m.accentStart} />
                      <stop offset="100%" stopColor={m.accentEnd} />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="80"
                    cy="80"
                    r="72"
                    stroke={`url(#grad-${i})`}
                    strokeWidth="2.5"
                    strokeDasharray="452"
                    strokeDashoffset="113"
                    strokeLinecap="round"
                  />
                </svg>

                <div className={styles.circleInner}>
                  <span
                    className={styles.value}
                    style={{ color: m.textColor }}
                  >
                    {m.value}
                  </span>
                  {m.unit && (
                    <span className={styles.unit}>{m.unit}</span>
                  )}
                </div>
              </div>

              <div className={styles.text}>
                <h3 className={styles.milestoneTitle}>{m.title}</h3>
                <p className={styles.milestoneDesc}>{m.description}</p>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
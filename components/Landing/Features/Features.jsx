import styles from "./Features.module.css";

const features = [
  { icon: "🎯", title: "Track Habits", desc: "Simple and beautiful habit tracking" },
  { icon: "🔥", title: "Build Streaks", desc: "Stay motivated with streaks and milestones" },
  { icon: "📊", title: "See Progress", desc: "Calendar view to see your journey" },
  { icon: "💡", title: "Gain Insights", desc: "Powerful analytics to keep improving" },
  { icon: "🏆", title: "Earn Achievements", desc: "Unlock badges and celebrate wins" },
  { icon: "✨", title: "Stay Inspired", desc: "Motivational quotes and reminders" },
];

export default function Features() {
  return (
    <section className={styles.features} id="features">
      <div className={styles.container}>
        <h2 className={styles.title}>Powerful Features</h2>
        <p className={styles.subtitle}>Everything you need to build and track habits</p>

        <div className={styles.grid}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.feature}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>

        <svg className={styles.rainbowLine} viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path 
            d="M 0 50 Q 100 30 200 50 T 400 50 T 600 50 T 800 50 T 1000 50 T 1200 50" 
            stroke="url(#rainbow)" 
            strokeWidth="4" 
            fill="none" 
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="rainbow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff4444" />
              <stop offset="16%" stopColor="#ff9500" />
              <stop offset="33%" stopColor="#ffc107" />
              <stop offset="50%" stopColor="#4caf50" />
              <stop offset="66%" stopColor="#2196f3" />
              <stop offset="83%" stopColor="#5c6bc0" />
              <stop offset="100%" stopColor="#9c27b0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}

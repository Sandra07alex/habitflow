const features = [
  { icon: "🎯", title: "Flexible schedules", body: "Every day or specific weekdays — set what fits your real life." },
  { icon: "🔥", title: "Honest streaks", body: "Streaks respect your schedule. Missing a rest day never breaks one." },
  { icon: "📅", title: "Catch up past days", body: "Forgot to tick yesterday? Open the week view and check it off." },
  { icon: "🎨", title: "Color & icon", body: "A glance is enough to know what's done. Quietly beautiful." },
  { icon: "📱", title: "Phone first", body: "Designed for the moment you actually log it — on the go." },
  { icon: "🔒", title: "Privacy by default", body: "No accounts, no sync, no tracking. Just your habits, locally." },
];

export default function Features() {
  return (
    <section id="features" className="features">
      <div className="features__intro">
        <h2 className="features__title">Built for the days you don&apos;t feel like it.</h2>
        <p className="features__desc">
          Just enough structure to keep you going — never so much it gets in the way.
        </p>
      </div>
      <div className="features__grid">
        {features.map((feature) => (
          <div key={feature.title} className="feature-card">
            <div className="feature-card__icon">{feature.icon}</div>
            <h3 className="feature-card__title">{feature.title}</h3>
            <p className="feature-card__body">{feature.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

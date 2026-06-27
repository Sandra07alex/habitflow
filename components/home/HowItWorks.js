const steps = [
  { n: "01", t: "Add a habit", d: "Name it, pick a color, choose your days." },
  { n: "02", t: "Tap when done", d: "One tap on Today. That's the whole interaction." },
  { n: "03", t: "Watch it grow", d: "Streaks build. Momentum compounds. You keep showing up." },
];

export default function HowItWorks() {
  return (
    <section id="how" className="how">
      <div className="how__inner">
        <h2 className="how__title">Three steps. That&apos;s it.</h2>
        <div className="how__grid">
          {steps.map((step) => (
            <div key={step.n}>
              <div className="how__step-num">{step.n}</div>
              <h3 className="how__step-title">{step.t}</h3>
              <p className="how__step-desc">{step.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

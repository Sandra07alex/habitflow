const faqs = [
  { q: "Do I need to sign up?", a: "No. HabitFlow stores everything in your browser's local storage." },
  {
    q: "What happens if I miss a day?",
    a: "If the day was scheduled, your current streak resets. Your longest streak is preserved.",
  },
  {
    q: "Can I track weekday-only habits?",
    a: "Yes — pick the specific days. Off-days never break your streak.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="faq">
      <h2 className="faq__title">Questions</h2>
      <div className="faq__list">
        {faqs.map((item) => (
          <details key={item.q} className="faq__item">
            <summary className="faq__question">
              {item.q}
              <span className="faq__icon" aria-hidden="true">
                +
              </span>
            </summary>
            <p className="faq__answer">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

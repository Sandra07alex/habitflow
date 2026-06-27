import Link from "next/link";

export default function CTA() {
  return (
    <section className="cta">
      <div className="cta__panel">
        <h2 className="cta__title">Tomorrow&apos;s you will thank today&apos;s you.</h2>
        <p className="cta__desc">Start your first streak in under a minute.</p>
        <div className="cta__action">
          <Link href="/app" className="btn btn--inverse">
            Open HabitFlow →
          </Link>
        </div>
      </div>
    </section>
  );
}

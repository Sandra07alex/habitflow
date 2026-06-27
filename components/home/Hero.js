import Link from "next/link";
import HeroCard from "./HeroCard";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__grid">
        <div>
          <span className="hero__badge">
            <span className="hero__badge-dot" aria-hidden="true" />
            New · daily streaks
          </span>
          <h1 className="hero__title">
            Small habits, <em>big momentum.</em>
          </h1>
          <p className="hero__subtitle">
            HabitFlow is a calm daily tracker that helps you show up for the things that matter — one tick at a
            time. No accounts, no noise.
          </p>
          <div className="hero__actions">
            <Link href="/app" className="btn btn--primary btn--primary-lg">
              Start tracking — it&apos;s free
            </Link>
            <a href="#how" className="btn btn--secondary btn--secondary-lg">
              See how it works
            </a>
          </div>
          <p className="hero__note">Lives entirely in your browser. Your data never leaves your device.</p>
        </div>
        <HeroCard />
      </div>
    </section>
  );
}

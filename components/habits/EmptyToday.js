import Link from "next/link";

export default function EmptyToday() {
  return (
    <div className="empty-state">
      <p className="empty-state__title">Nothing scheduled today.</p>
      <p className="empty-state__desc">Enjoy your day — or add a new habit.</p>
      <Link href="/app/habits" className="btn btn--primary empty-state__cta">
        Manage habits
      </Link>
    </div>
  );
}

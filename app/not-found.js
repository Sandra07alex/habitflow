import Link from "next/link";

export default function NotFound() {
  return (
    <div className="error-page">
      <div className="error-page__content">
        <h1 className="error-page__code">404</h1>
        <h2 className="error-page__title">Page not found</h2>
        <p className="error-page__desc">We couldn&apos;t find that page.</p>
        <div className="error-page__actions">
          <Link href="/" className="btn btn--primary">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

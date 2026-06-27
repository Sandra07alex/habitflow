export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p>© {new Date().getFullYear()} HabitFlow</p>
        <p>Crafted with care.</p>
      </div>
    </footer>
  );
}

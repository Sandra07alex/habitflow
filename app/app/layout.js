import AppHeader from "@/components/layout/AppHeader";

export const metadata = {
  title: "HabitFlow — Your habits",
  description: "Track your daily habits and grow your streaks.",
};

export default function AppLayout({ children }) {
  return (
    <div className="page">
      <AppHeader />
      <main className="app-main">{children}</main>
    </div>
  );
}

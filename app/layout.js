import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "HabitFlow — Build habits that stick",
  description:
    "HabitFlow is a calm, beautiful daily habit tracker. Create habits, mark them done, watch your streaks grow.",
  openGraph: {
    title: "HabitFlow — Build habits that stick",
    description: "A calm, beautiful habit tracker that helps you grow daily streaks.",
    type: "website",
  },
  twitter: {
    card: "summary",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}

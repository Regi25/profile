import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { MotionProvider } from "@/components/ui/MotionProvider";

const serif = Newsreader({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap"
});

const title = "Regina Iuldasheva — Next.js / React Developer";
const description =
  "Next.js / React Developer with full-stack project experience: production Next.js features, Server Actions, PostgreSQL and LLM integrations.";

export const metadata: Metadata = {
  metadataBase: new URL("https://profile-chi-one-31.vercel.app"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://profile-chi-one-31.vercel.app",
    siteName: "Regina Iuldasheva",
    type: "website"
  },
  twitter: {
    card: "summary",
    title,
    description
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${serif.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <ThemeProvider>
          <MotionProvider>{children}</MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

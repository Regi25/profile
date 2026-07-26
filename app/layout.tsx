import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://profile-chi-one-31.vercel.app"),
  title: "Regina Iuldasheva — Frontend Developer",
  description:
    "Frontend Developer working in React, Next.js and TypeScript. Building full-stack and AI products end to end.",
  openGraph: {
    title: "Regina Iuldasheva — Frontend Developer",
    description:
      "Frontend Developer working in React, Next.js and TypeScript. Building full-stack and AI products end to end.",
    url: "https://profile-chi-one-31.vercel.app",
    siteName: "Regina Iuldasheva",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Regina Iuldasheva — Frontend Developer",
    description:
      "Frontend Developer working in React, Next.js and TypeScript. Building full-stack and AI products end to end."
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

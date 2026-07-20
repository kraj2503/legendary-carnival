import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jbmono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jbmono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kshitiz Raj — Software Engineer",
  description:
    "Kshitiz Raj is a software engineer at Barclays building full-stack platforms and agentic AI systems — from event-driven backends to multi-agent orchestration.",
  metadataBase: new URL("https://kshitizraj.com"),
  openGraph: {
    title: "Kshitiz Raj — Software Engineer",
    description:
      "Full-stack engineer and agentic AI systems builder. Barclays, SRM Institute of Science & Technology.",
    url: "https://kshitizraj.com",
    siteName: "Kshitiz Raj",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${jbmono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

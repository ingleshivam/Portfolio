import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "Shivam Ingle | AI & Full-Stack Developer",
  description:
    "AI and full-stack developer building production-minded LLM systems, data workflows, and thoughtful web products.",
  keywords: [
    "AI developer",
    "full-stack developer",
    "LangChain",
    "RAG systems",
    "Next.js",
    "Python",
  ],
  openGraph: {
    title: "Shivam Ingle | AI & Full-Stack Developer",
    description:
      "I build AI systems that ship, from retrieval pipelines to thoughtful full-stack products.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivam Ingle | AI & Full-Stack Developer",
    description: "I build AI systems that ship.",
  },
};

export const viewport: Viewport = {
  themeColor: "#111113",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body id="top" className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

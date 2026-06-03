import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shivam Ingle - AI & Full-Stack Developer",
  description:
    "Full-Stack and AI Developer specializing in LLM pipelines, RAG systems, and modern web applications built with React, Next.js, and Python.",
  keywords:
    "AI developer, LLM pipelines, RAG systems, Python, LangChain, LlamaIndex, React, Next.js, full-stack developer",
  openGraph: {
    title: "Shivam Ingle - AI & Full-Stack Developer",
    description:
      "Developer at the intersection of AI and the web — building LLM pipelines, RAG systems, and production-grade full-stack applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.className} bg-zinc-950 text-zinc-50 antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shivam Ingle - Next.Js Developer",
  description:
    "Cutting-edge portfolio showcasing modern web development with 3D elements, animations, and immersive user experiences.",
  keywords: [
    "frontend developer",
    "3D web development",
    "React",
    "Next.js",
    "Three.js",
    "portfolio",
  ],
  authors: [{ name: "Shivam Ingle" }],
  openGraph: {
    title: "Shivam Ingle - Next.Js Developer",
    description:
      "Cutting-edge portfolio showcasing modern web development with 3D elements and animations.",
    type: "website",
    url: "",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivam Ingle - Next.Js Developer",
    description:
      "Cutting-edge portfolio showcasing modern web development with 3D elements and animations.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

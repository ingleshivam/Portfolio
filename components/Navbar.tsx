"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks, socialLinks } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map(({ href }) => document.querySelector(href))
      .filter((section): section is Element => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(`#${visible.target.id}`);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0.05, 0.25, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className={cn(
          "mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full border px-3 transition-all duration-300 sm:px-4",
          scrolled || mobileOpen
            ? "border-white/10 bg-zinc-950/75 shadow-2xl shadow-black/20 backdrop-blur-xl"
            : "border-transparent bg-transparent",
        )}
      >
        <a href="#top" className="flex items-center gap-2 rounded-full px-2 py-1 text-sm font-semibold tracking-tight text-white">
          <span className="grid size-7 place-items-center rounded-full bg-amber-300 text-xs font-bold text-zinc-950">
            SI
          </span>
          <span className="hidden sm:inline">Shivam Ingle</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={cn(
                "rounded-full px-3 py-2 text-[13px] font-medium transition-colors",
                activeSection === href ? "bg-white/[0.07] text-white" : "text-zinc-400 hover:text-white",
              )}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm">
            <a href={socialLinks.email}>Let&apos;s talk</a>
          </Button>
        </div>

        <button
          type="button"
          className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/[0.035] text-zinc-300 md:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="mx-auto mt-3 max-w-6xl rounded-3xl border border-white/10 bg-zinc-950/95 p-3 shadow-2xl backdrop-blur-xl md:hidden"
        >
          <nav className="grid gap-1" aria-label="Mobile navigation">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm text-zinc-300 transition-colors hover:bg-white/[0.05] hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>
          <Button asChild className="mt-2 w-full">
            <a href={socialLinks.email}>Start a conversation</a>
          </Button>
        </div>
      )}
    </header>
  );
}

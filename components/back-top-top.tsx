"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after user scrolls 300px
      setVisible(window.scrollY > 300);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 320, damping: 24 }}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50"
        >
          <button
            aria-label="Back to top"
            onClick={scrollToTop}
            className="group gradient-border rounded-full"
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-foreground transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
            >
              <ArrowUp
                className="transition-transform group-hover:-translate-y-0.5"
                size={20}
              />
            </motion.span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

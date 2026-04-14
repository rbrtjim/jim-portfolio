// src/components/ui/SectionLabel.tsx
"use client";
import { motion } from "framer-motion";

interface SectionLabelProps {
  text: string;
  variant?: "light" | "dark";
}

export default function SectionLabel({
  text,
  variant = "light",
}: SectionLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center mb-4"
    >
      <span
        className={`
          inline-flex items-center gap-2
          px-4 py-1.5 rounded-full
          text-sm font-semibold tracking-widest uppercase
          ${
            variant === "dark"
              ? "bg-white/10 text-white border border-white/20"
              : "bg-blue-50 text-apple-blue border border-blue-100"
          }
        `}
      >
        {/* Dot indicator */}
        <span
          className={`
            w-1.5 h-1.5 rounded-full
            ${variant === "dark" ? "bg-white" : "bg-apple-blue"}
          `}
        />
        {text}
      </span>
    </motion.div>
  );
}
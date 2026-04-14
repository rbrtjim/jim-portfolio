// src/components/ui/AppleButton.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface AppleButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
  disabled?: boolean;
}

const variants = {
  primary:
    "bg-apple-blue text-white hover:bg-apple-blue-hover shadow-lg shadow-blue-500/25",
  secondary:
    "bg-apple-dark text-white hover:bg-gray-800 shadow-lg shadow-black/25",
  ghost: "bg-transparent text-apple-blue hover:bg-blue-50",
  outline:
    "bg-transparent border border-apple-blue text-apple-blue hover:bg-apple-blue hover:text-white",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function AppleButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  external = false,
  disabled = false,
}: AppleButtonProps) {
  const baseClasses = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium",
    "transition-all duration-300 cursor-pointer select-none",
    "focus:outline-none focus:ring-2 focus:ring-apple-blue focus:ring-offset-2",
    variants[variant],
    sizes[size],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  // ✅ Fix: use "spring" as const to satisfy TypeScript
  const springTransition = {
    type: "spring" as const,
    stiffness: 400,
    damping: 17,
  };

  if (href) {
    return (
      <motion.div
        whileHover={disabled ? {} : { scale: 1.02 }}
        whileTap={disabled ? {} : { scale: 0.98 }}
        transition={springTransition}
      >
        <Link
          href={href}
          className={baseClasses}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      transition={springTransition}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {children}
    </motion.button>
  );
}
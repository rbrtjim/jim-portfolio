// src/components/ui/CursorGlow.tsx
"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorGlow() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-0 rounded-full"
      style={{
        width: 400,
        height: 400,
        background:
          "radial-gradient(circle, rgba(0,113,227,0.06) 0%, transparent 70%)",
        left: mousePos.x - 200,
        top: mousePos.y - 200,
        opacity: isVisible ? 1 : 0,
      }}
      animate={{
        left: mousePos.x - 200,
        top: mousePos.y - 200,
      }}
      transition={{ type: "spring", stiffness: 150, damping: 20 }}
    />
  );
}
// src/components/layout/Navbar.tsx
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useScrollY, useActiveSection } from "@/hooks/useScrollAnimation";
import { useCallback } from "react";
import { navItems } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const scrollY = useScrollY();
  const scrollActiveSection = useActiveSection();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [optimisticActiveSection, setOptimisticActiveSection] = useState("");
  const isScrolled = scrollY > 20;

  // Combine optimistic click state with scroll state (optimistic takes precedence)
  const activeSection = optimisticActiveSection || scrollActiveSection;

  // Clear optimistic state after short delay or scroll change
  useEffect(() => {
    if (optimisticActiveSection) {
      const timeout = setTimeout(() => setOptimisticActiveSection(""), 2500);
      return () => clearTimeout(timeout);
    }
  }, [optimisticActiveSection]);

  const handleNavClick = useCallback((href: string) => {
    const sectionId = href.replace("#", "");
    setOptimisticActiveSection(sectionId);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "glass border-b border-white/20 shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#hero"
                className="text-xl font-bold text-apple-dark tracking-tight"
              >
                <span className="gradient-text">RJ</span>
                <span className="text-apple-gray font-light">.dev</span>
              </Link>
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                    activeSection === item.href.replace("#", "")
                      ? "text-apple-blue"
                      : "text-apple-gray hover:text-apple-dark"
                  )}
                >
                  {activeSection === item.href.replace("#", "") && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 bg-apple-blue/30 backdrop-blur-sm rounded-full shadow-sm border border-apple-blue/20"
                      transition={{ 
                        type: "spring", 
                        stiffness: 420, 
                        damping: 35,
                        scale: {
                          type: "spring",
                          stiffness: 400,
                          damping: 20
                        }
                      }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="#contact"
                  className="px-5 py-2 bg-apple-blue text-white text-sm font-medium rounded-full hover:bg-apple-blue-hover transition-colors duration-300"
                >
                  Hire Me
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X size={20} className="text-apple-dark" />
              ) : (
                <Menu size={20} className="text-apple-dark" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed top-20 left-4 right-4 glass rounded-2xl p-6 z-50 md:hidden shadow-xl"
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "relative block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200",
                        activeSection === item.href.replace("#", "")
                          ? "text-apple-blue"
                          : "text-apple-dark hover:bg-gray-50"
                      )}
                    >
                      {activeSection === item.href.replace("#", "") && (
                        <motion.span
                          layoutId="activeMobileNav"
                          className="absolute inset-0 bg-apple-blue/30 backdrop-blur-sm rounded-xl shadow-sm border border-apple-blue/20"
                          transition={{ 
                            type: "spring", 
                            stiffness: 420, 
                            damping: 35,
                            scale: {
                              type: "spring",
                              stiffness: 400,
                              damping: 20
                            }
                          }}
                        />
                      )}
                      <span className="relative z-10 block">{item.label}</span>
                    </Link>
                  </motion.div>
                ))}
                <div className="mt-2 pt-4 border-t border-gray-100">
                  <Link
                    href="#contact"
                    onClick={() => setMobileOpen(false)}
                    className="block w-full text-center px-4 py-3 bg-apple-blue text-white font-medium rounded-xl hover:bg-apple-blue-hover transition-colors"
                  >
                    Hire Me
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
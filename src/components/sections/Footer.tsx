// src/components/layout/Footer.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUp, Heart, Mail } from "lucide-react";
import { navItems } from "@/data/portfolio";

// ─────────────────────────────────────────────────────
// Custom SVG Icons (fixes lucide-react import errors)
// ─────────────────────────────────────────────────────
const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TwitterIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// ─────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────
const socialLinks = [
  {
    icon: GithubIcon,
    href: "https://github.com/yourusername",
    label: "GitHub",
  },
  {
    icon: LinkedinIcon,
    href: "https://linkedin.com/in/yourusername",
    label: "LinkedIn",
  },
  {
    icon: TwitterIcon,
    href: "https://twitter.com/yourusername",
    label: "Twitter",
  },
  {
    icon: Mail,
    href: "mailto:hello@yourname.dev",
    label: "Email",
  },
];

const services = [
  { label: "Web Development", href: "#" },
  { label: "UI/UX Design", href: "#" },
  { label: "Mobile Apps", href: "#" },
  { label: "API Development", href: "#" },
  { label: "DevOps & Cloud", href: "#" },
];

// ─────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-apple-dark relative overflow-hidden">
      {/* Top Gradient Line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,113,227,0.6), rgba(191,90,242,0.6), transparent)",
        }}
      />

      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-64 h-64 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,113,227,0.15) 0%, transparent 70%)",
          }}
        />
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2], scale: [1.1, 1, 1.1] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(191,90,242,0.12) 0%, transparent 70%)",
          }}
        />
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-8 relative z-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* ── Brand Column ── */}
          <div className="lg:col-span-1 space-y-6">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link href="#hero" className="inline-block">
                <span className="text-3xl font-bold">
                  <span className="gradient-text">RJ</span>
                  <span className="text-gray-500 font-light">.dev</span>
                </span>
              </Link>
            </motion.div>

            {/* Tagline */}
            <p className="text-gray-500 text-sm leading-relaxed">
              Building beautiful, performant digital experiences with a passion
              for clean code and elegant design.
            </p>

            {/* Status Badge */}
            <motion.div
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 text-xs font-medium">
                Available for work
              </span>
            </motion.div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-apple-blue hover:border-apple-blue transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* ── Navigation Column ── */}
          <div className="space-y-5">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-gray-500 hover:text-white text-sm transition-all duration-200"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-apple-blue transition-all duration-300" />
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* ── Services Column ── */}
          <div className="space-y-5">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={service.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={service.href}
                    className="group flex items-center gap-2 text-gray-500 hover:text-white text-sm transition-all duration-200"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-apple-blue transition-all duration-300" />
                    {service.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* ── Contact Column ── */}
          <div className="space-y-5">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-4">
              {[
                {
                  href: "mailto:hello@yourname.dev",
                  text: "hello@yourname.dev",
                },
                {
                  href: "tel:+15550000000",
                  text: "+1 (555) 000-0000",
                },
              ].map((item, index) => (
                <motion.li
                  key={item.text}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <a
                    href={item.href}
                    className="text-gray-500 hover:text-white text-sm transition-colors duration-200 block"
                  >
                    {item.text}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <span className="text-gray-500 text-sm block">
                  San Francisco, CA
                </span>
              </motion.li>
            </ul>

            {/* Hire Me Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-apple-blue text-white text-sm font-medium rounded-full hover:bg-apple-blue-hover transition-all duration-300                shadow-lg shadow-blue-500/20"
              >
                <Mail size={14} />
                Hire Me
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* ── Divider ── */}
        <div
          className="h-px mb-8"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
          }}
        />

        {/* ── Bottom Bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-gray-600 text-sm flex items-center gap-1.5 flex-wrap justify-center sm:justify-start"
          >
            © {currentYear} Robert Jim Placencia. All rights reserved. Made with{" "}
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-flex"
            >
              <Heart size={13} className="text-red-500 fill-red-500" />
            </motion.span>{" "}
            using Next.js & Framer Motion
          </motion.p>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Legal Links */}
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-400 text-xs transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-700 text-xs">•</span>
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-400 text-xs transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>

            {/* Scroll to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-apple-blue hover:border-apple-blue transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}

// src/components/sections/Projects.tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence, type Transition } from "framer-motion";
import { ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import { projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";

// ─────────────────────────────────────────────────────
// Custom Github SVG Icon
// ─────────────────────────────────────────────────────
const GithubIcon = ({ size = 15 }: { size?: number }) => (
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

// ─────────────────────────────────────────────────────
// Transitions
// ─────────────────────────────────────────────────────
const smoothTransition: Transition = {
  duration: 0.5,
  ease: [0.25, 0.46, 0.45, 0.94],
};

const springTransition: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 20,
};

// ─────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────
const filters = ["All", "Featured", "Web", "Mobile", "DevOps"];
const featuredEmojis = ["🛒", "📊"];
const regularEmojis = ["💬", "⚙️", "❤️", "₿"];

// ─────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Featured") return p.featured;
    return true;
  });

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const regularProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-0 w-full h-1/2 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at 20% 80%, rgba(0,113,227,0.08) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* ── Header ── */}
        <AnimatedSection className="text-center mb-16">
          <SectionLabel text="My Work" />
          <h2 className="text-5xl md:text-6xl font-bold text-apple-dark mt-4 mb-6 tracking-tight">
            Projects that{" "}
            <span className="gradient-text">speak for themselves</span>
          </h2>
          <p className="text-xl text-apple-gray max-w-2xl mx-auto">
            A collection of projects I&apos;ve built with passion, precision,
            and a relentless focus on user experience.
          </p>
        </AnimatedSection>

        {/* ── Filter Tabs ── */}
        <AnimatedSection
          delay={0.1}
          className="flex flex-wrap justify-center gap-2 mb-14"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeFilter === filter
                  ? "bg-apple-blue text-white shadow-lg shadow-blue-500/25"
                  : "bg-gray-100 text-apple-gray hover:bg-gray-200"
              )}
            >
              {filter}
            </motion.button>
          ))}
        </AnimatedSection>

        {/* ── Featured Projects ── */}
        <div className="space-y-8 mb-8">
          <AnimatePresence mode="wait">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ ...smoothTransition, delay: index * 0.1 }}
                onHoverStart={() => setHoveredId(project.id)}
                onHoverEnd={() => setHoveredId(null)}
                className="group relative rounded-3xl overflow-hidden bg-apple-light border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:shadow-2xl hover:shadow-black/10"
              >
                <div className="grid md:grid-cols-2 gap-0 min-h-[420px]">
                  {/* Content Side */}
                  <div className="p-10 md:p-14 flex flex-col justify-center">
                    {/* Project Number */}
                    <span className="text-sm font-mono text-apple-gray mb-4">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs font-medium"
                          style={{
                            backgroundColor: `${project.color}15`,
                            color: project.color,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl md:text-4xl font-bold text-apple-dark mb-3 tracking-tight">
                      {project.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-apple-blue font-medium mb-4">
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-apple-gray leading-relaxed mb-8">
                      {project.description}
                    </p>

                    {/* Action Links */}
                    <div className="flex items-center gap-4">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-apple-dark text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
                      >
                        <ExternalLink size={15} />
                        Live Demo
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 text-apple-dark text-sm font-medium rounded-full hover:border-gray-400 transition-colors"
                      >
                        <GithubIcon size={15} />
                        Source
                      </motion.a>
                    </div>
                  </div>

                  {/* Visual Side */}
                  <div
                    className="relative flex items-center justify-center p-10 min-h-[280px] md:min-h-auto overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${project.color}15 0%, ${project.color}05 100%)`,
                    }}
                  >
                    {/* Glow */}
                    <motion.div
                      animate={
                        hoveredId === project.id
                          ? { scale: 1.1, rotate: 5 }
                          : { scale: 1, rotate: 0 }
                      }
                      transition={springTransition}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div
                        className="w-64 h-64 rounded-full opacity-20"
                        style={{
                          background: `radial-gradient(circle, ${project.color} 0%, transparent 70%)`,
                        }}
                      />
                    </motion.div>

                    {/* Mock Browser Window */}
                    <motion.div
                      animate={
                        hoveredId === project.id
                          ? { y: -8, rotate: -1 }
                          : { y: 0, rotate: 0 }
                      }
                      transition={springTransition}
                      className="relative z-10 w-full max-w-xs bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
                    >
                      {/* Browser Bar */}
                      <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-400" />
                          <div className="w-3 h-3 rounded-full bg-yellow-400" />
                          <div className="w-3 h-3 rounded-full bg-green-400" />
                        </div>
                        <div className="flex-1 mx-3 h-5 bg-gray-200 rounded-full" />
                      </div>

                      {/* Browser Content */}
                      <div
                        className="h-40 flex items-center justify-center"
                        style={{
                          background: `linear-gradient(135deg, ${project.color}20, ${project.color}05)`,
                        }}
                      >
                        <span className="text-5xl">
                          {featuredEmojis[index % featuredEmojis.length]}
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* ── Regular Projects Grid ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {regularProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group bg-apple-light rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                {/* Card Visual */}
                <div
                  className="h-48 flex items-center justify-center relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}20 0%, ${project.color}08 100%)`,
                  }}
                >
                  <motion.span
                    className="text-5xl"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={springTransition}
                  >
                    {regularEmojis[index % regularEmojis.length]}
                  </motion.span>

                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/40 flex items-center justify-center gap-3"
                  >
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2.5 bg-white rounded-full text-apple-dark hover:bg-apple-blue hover:text-white transition-colors"
                    >
                      <ExternalLink size={16} />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2.5 bg-white rounded-full text-apple-dark hover:bg-apple-blue hover:text-white transition-colors"
                    >
                      <GithubIcon size={16} />
                    </motion.a>
                  </motion.div>
                </div>
              
                {/* Card Content */}
                <div className="p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full text-xs font-medium"
                        style={{
                          backgroundColor: `${project.color}15`,
                          color: project.color,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-apple-dark mb-2 group-hover:text-apple-blue transition-colors duration-200">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-apple-gray text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Footer Links */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-apple-blue text-xs font-medium hover:underline flex items-center gap-1"
                    >
                      <ExternalLink size={12} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-apple-gray text-xs font-medium hover:text-apple-dark flex items-center gap-1 transition-colors"
                    >
                      <GithubIcon size={12} />
                      Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* ── View All Button ── */}
        <AnimatedSection delay={0.3} className="text-center mt-14">
          <motion.a
            href="https://github.com/rbrtjim"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-apple-dark text-apple-dark font-semibold rounded-full hover:bg-apple-dark hover:text-white transition-all duration-300"
          >
            <GithubIcon size={20} />
            View All on GitHub
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
}
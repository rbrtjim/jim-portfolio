// src/components/sections/Experience.tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import { experiences } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export default function Experience() {
  const [activeId, setActiveId] = useState(experiences[0].id);
  const activeExp = experiences.find((e) => e.id === activeId)!;

  return (
    <section
      id="experience"
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-1/3 h-full opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at 100% 50%, rgba(191,90,242,0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <SectionLabel text="Experience" />
          <h2 className="text-5xl md:text-6xl font-bold text-apple-dark mt-4 mb-6 tracking-tight">
            Where I&apos;ve{" "}
            <span className="gradient-text">worked</span>
          </h2>
          <p className="text-xl text-apple-gray max-w-2xl mx-auto">
            My professional journey building products at world-class companies.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Tabs - Left */}
          <AnimatedSection direction="left" className="lg:col-span-2">
            <div className="space-y-3">
              {experiences.map((exp) => (
                <motion.button
                  key={exp.id}
                  onClick={() => setActiveId(exp.id)}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "w-full text-left p-5 rounded-2xl border transition-all duration-300",
                    activeId === exp.id
                      ? "bg-apple-blue text-white border-apple-blue shadow-lg shadow-blue-500/25"
                      : "bg-apple-light text-apple-dark border-gray-100 hover:border-gray-200 hover:bg-gray-50"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0",
                        activeId === exp.id ? "bg-white/20" : "bg-white"
                      )}
                    >
                      {exp.logo}
                    </div>
                    <div className="min-w-0">
                      <div
                        className={cn(
                          "font-bold text-base truncate",
                          activeId === exp.id
                            ? "text-white"
                            : "text-apple-dark"
                        )}
                      >
                        {exp.company}
                      </div>
                      <div
                        className={cn(
                          "text-sm truncate mt-0.5",
                          activeId === exp.id
                            ? "text-blue-100"
                            : "text-apple-gray"
                        )}
                      >
                        {exp.role}
                      </div>
                      <div
                        className={cn(
                          "text-xs mt-1 font-mono",
                          activeId === exp.id
                            ? "text-blue-200"
                            : "text-apple-gray"
                        )}
                      >
                        {exp.period}
                      </div>
                                        </div>
                    <ChevronRight
                      size={16}
                      className={cn(
                        "ml-auto shrink-0 transition-transform duration-300",
                        activeId === exp.id
                          ? "text-white rotate-90"
                          : "text-apple-gray"
                      )}
                    />
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Timeline Visual */}
            <div className="mt-8 p-6 bg-apple-light rounded-2xl border border-gray-100">
              <h4 className="text-sm font-semibold text-apple-gray mb-4 uppercase tracking-wider">
                Career Timeline
              </h4>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200" />
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    className="relative flex items-start gap-4 pb-6 last:pb-0"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div
                      className={cn(
                        "relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-sm shrink-0 border-2 transition-all duration-300",
                        activeId === exp.id
                          ? "bg-apple-blue border-apple-blue text-white"
                          : "bg-white border-gray-200 text-apple-gray"
                      )}
                    >
                      {exp.logo}
                    </motion.div>
                    <div className="pt-1">
                      <div className="text-sm font-semibold text-apple-dark">
                        {exp.company}
                      </div>
                      <div className="text-xs text-apple-gray font-mono mt-0.5">
                        {exp.period}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Experience Detail - Right */}
          <AnimatedSection direction="right" delay={0.2} className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="bg-apple-light rounded-3xl p-8 md:p-10 border border-gray-100 h-full"
              >
                {/* Header */}
                <div className="flex items-start gap-5 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-3xl shrink-0">
                    {activeExp.logo}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-apple-dark">
                      {activeExp.role}
                    </h3>
                    <p className="text-apple-blue font-semibold mt-1">
                      {activeExp.company}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="px-3 py-1 bg-white rounded-full text-xs font-mono text-apple-gray border border-gray-100">
                        {activeExp.period}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-200 mb-8" />

                {/* Responsibilities */}
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-apple-gray uppercase tracking-wider mb-5">
                    Key Achievements
                  </h4>
                  {activeExp.description.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      className="flex items-start gap-3 group"
                    >
                      <CheckCircle2
                        size={18}
                        className="text-apple-blue shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                      />
                      <p className="text-apple-gray leading-relaxed">{item}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Skills Used */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-sm font-semibold text-apple-gray uppercase tracking-wider mb-4">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["React", "TypeScript", "Node.js", "AWS", "PostgreSQL"].map(
                      (tech, i) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.05 + 0.4 }}
                          className="px-3 py-1.5 bg-white rounded-full text-xs font-medium text-apple-dark border border-gray-100 hover:border-apple-blue hover:text-apple-blue transition-colors duration-200 cursor-default"
                        >
                          {tech}
                        </motion.span>
                      )
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
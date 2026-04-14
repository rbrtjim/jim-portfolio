// src/components/sections/Skills.tsx
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import { skills } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const categories = ["All", "Frontend", "Backend", "DevOps"];

const techStack = [
  { name: "Next.js", icon: "▲" },
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Docker", icon: "🐳" },
  { name: "AWS", icon: "☁️" },
  { name: "GraphQL", icon: "◈" },
  { name: "Redis", icon: "🔴" },
  { name: "Kubernetes", icon: "⚙️" },
  { name: "Terraform", icon: "🏗️" },
];

function SkillBar({
  skill,
  index,
}: {
  skill: (typeof skills)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-xl">{skill.icon}</span>
          <span className="text-sm font-semibold text-apple-dark">
            {skill.name}
          </span>
        </div>
        <span className="text-sm font-mono text-apple-gray">
          {skill.level}%
        </span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: index * 0.06 + 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="h-full rounded-full relative"
          style={{
            background: "linear-gradient(90deg, #0071e3, #00c7ff)",
          }}
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-md shadow-blue-500/50"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = skills.filter(
    (s) => activeCategory === "All" || s.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="section-padding bg-apple-light relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full border border-blue-100/50"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full border border-purple-100/50"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <SectionLabel text="Skills & Expertise" />
          <h2 className="text-5xl md:text-6xl font-bold text-apple-dark mt-4 mb-6 tracking-tight">
            Tools I{" "}
            <span className="gradient-text">master</span>
          </h2>
          <p className="text-xl text-apple-gray max-w-2xl mx-auto">
            A curated set of technologies I use to build world-class digital
            products.
          </p>
        </AnimatedSection>

        {/* Category Filter */}
        <AnimatedSection delay={0.1} className="flex justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === cat
                  ? "bg-apple-blue text-white shadow-lg shadow-blue-500/25"
                  : "bg-white text-apple-gray hover:bg-gray-100 border border-gray-200"
              )}
            >
              {cat}
            </motion.button>
          ))}
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Skill Bars */}
          <AnimatedSection direction="left">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-apple-dark mb-8">
                Proficiency Levels
              </h3>
              <div className="space-y-6">
                {filteredSkills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Tech Stack Grid */}
            <AnimatedSection direction="right" delay={0.1}>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-apple-dark mb-6">
                  Tech Stack
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "#eff6ff",
                        borderColor: "#bfdbfe",
                      }}
                      className="flex flex-col items-center gap-2 p-3 rounded-2xl border border-gray-100 cursor-default transition-colors duration-200"
                    >
                      <span className="text-2xl">{tech.icon}</span>
                      <span className="text-xs font-medium text-apple-gray text-center leading-tight">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* What I Do Cards */}
            <AnimatedSection direction="right" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    title: "Frontend Dev",
                    desc: "Pixel-perfect UIs with smooth animations",
                    icon: "🎨",
                    color: "#0071e3",
                  },
                  {
                    title: "Backend Dev",
                    desc: "Scalable APIs and microservices",
                    icon: "⚙️",
                    color: "#bf5af2",
                  },
                  {
                    title: "UI/UX Design",
                    desc: "Intuitive and beautiful interfaces",
                    icon: "✏️",
                    color: "#30d158",
                  },
                  {
                    title: "DevOps",
                    desc: "CI/CD pipelines and cloud infra",
                    icon: "🚀",
                    color: "#ff9f0a",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm cursor-default"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-3"
                      style={{ backgroundColor: `${item.color}15` }}
                    >
                      {item.icon}
                    </div>
                    <h4 className="text-sm font-bold text-apple-dark mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-apple-gray leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
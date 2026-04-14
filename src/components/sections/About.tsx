// src/components/sections/About.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import { Download, MapPin, Coffee, Code2 } from "lucide-react";
import ID from "@/assets/profid.png";

const facts = [
  { icon: MapPin, label: "Location", value: "Cebu City, Philippines" },
  { icon: Coffee, label: "Fuel", value: "Matcha Latte ☕" },
  { icon: Code2, label: "Lines of Code", value: "500k+" },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-padding bg-apple-light relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "radial-gradient(circle at 70% 50%, #0071e3 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-20">
          <SectionLabel text="About Me" />
          <h2 className="text-5xl md:text-6xl font-bold text-apple-dark mt-4 tracking-tight">
            Passionate about{" "}
            <span className="gradient-text">great software</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Image / Visual */}
          <AnimatedSection direction="left">
            <div className="relative">
              {/* Profile Image Container */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-full aspect-square max-w-md mx-auto"
              >
                {/* Decorative rings */}
                <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-apple-blue/20 to-purple-500/20 rotate-6" />
                <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-apple-blue/10 to-purple-500/10 -rotate-3" />

                {/* Main image box */}
                <div className="relative rounded-3xl overflow-hidden bg-linear-to-br from-blue-100 to-purple-100 aspect-square flex items-center justify-center">
                  {/* Replace with your actual image */}
                  <div className="text-center">
                    <div className="text-8xl mb-4">👨‍💻</div>
                    <Image src={ID} alt="Profile Picture" fill className="object-cover" />
                  </div>

                  {/* Floating badge */}
                  <motion.div
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-6 right-6 glass rounded-2xl px-4 py-3 shadow-lg"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-sm font-semibold text-apple-dark">
                        Open to Work
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating Stats Cards */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-6 -left-6 glass rounded-2xl px-5 py-4 shadow-lg"
              >
                <div className="text-2xl font-bold text-apple-dark">5+</div>
                <div className="text-xs text-apple-gray">Years Exp.</div>
              </motion.div>

              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -right-6 glass rounded-2xl px-5 py-4 shadow-lg"
              >
                <div className="text-2xl font-bold text-apple-dark">50+</div>
                <div className="text-xs text-apple-gray">Projects</div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Right: Content */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-apple-dark leading-tight">
                Building digital products that make a difference
              </h3>

              <p className="text-apple-gray text-lg leading-relaxed">
                I&apos;m a full-stack developer with over 3 years of experience
                building scalable web applications. I specialize in React, Next.JS and .NET desktop applications with a passion for creating
                intuitive user experiences.
              </p>

              <p className="text-apple-gray text-lg leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me exploring new
                technologies, contributing to open-source projects, or playing team sports.
                              </p>

              {/* Facts Grid */}
              <div className="grid grid-cols-3 gap-4 py-6">
                {facts.map(({ icon: Icon, label, value }) => (
                  <motion.div
                    key={label}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100"
                  >
                    <Icon size={20} className="text-apple-blue mx-auto mb-2" />
                    <div className="text-sm font-semibold text-apple-dark">{value}</div>
                    <div className="text-xs text-apple-gray mt-1">{label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <motion.a
                  href="/resume.pdf"
                  download
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-apple-blue text-white font-semibold rounded-full hover:bg-apple-blue-hover transition-all duration-300 shadow-lg shadow-blue-500/25"
                >
                  <Download size={18} />
                  Download Resume
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-apple-dark text-apple-dark font-semibold rounded-full hover:bg-apple-dark hover:text-white transition-all duration-300"
                >
                  Let&apos;s Talk
                </motion.a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
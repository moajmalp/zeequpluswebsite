"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Users,
  Heart,
  CheckCircle2,
  Sparkles,
  Target
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const highlights = [
    {
      title: "Basics to Fluency",
      description: "Starting with Arabic letters and makhārij, progressing to fluent recitation with Tajweed.",
      icon: <BookOpen className="w-8 h-8" />,
      color: "bg-violet-50 dark:bg-violet-900/10 text-zeeque-violet",
    },
    {
      title: "Class 1–10 Levels",
      description: "Age-appropriate syllabus for each class with gradual, clear milestones and targets.",
      icon: <Target className="w-8 h-8" />,
      color: "bg-indigo-50 dark:bg-indigo-900/10 text-indigo-500",
    },
    {
      title: "Certified Teachers",
      description: "Handpicked male and female teachers experienced in teaching children online.",
      icon: <Users className="w-8 h-8" />,
      color: "bg-blue-50 dark:bg-blue-900/10 text-blue-500",
    },
    {
      title: "Balanced Approach",
      description: "Qur'an recitation, memorisation, daily Adkār, and value-based life lessons.",
      icon: <Sparkles className="w-8 h-8" />,
      color: "bg-emerald-50 dark:bg-emerald-900/10 text-emerald-500",
    },
  ];

  const outcomes = [
    "Read the Qur'an correctly with Tajweed basics",
    "Memorise selected Surahs and important passages",
    "Learn daily duas, Adkār and Islamic etiquette",
    "Build a personal connection with the Qur'an",
    "Develop discipline and focus through regular classes",
  ];

  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="container-fluid relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            {/* Left Column: Content */}
            <div className="space-y-10 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 dark:bg-violet-900/10 border border-violet-100 dark:border-violet-800/20"
              >
                <Sparkles className="w-4 h-4 text-zeeque-violet" />
                <span className="text-xs font-black uppercase tracking-widest text-zeeque-violet">Admissions Open 2026</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-7xl lg:text-8xl font-serif font-black leading-[1.1] tracking-tight"
              >
                <span className="bg-clip-text text-transparent bg-zeeque-gradient">
                  Future-Proof Your Child&apos;s Deen.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-foreground/60 leading-relaxed font-sans max-w-xl mx-auto md:mx-0 font-medium"
              >
                A structured, step-by-step Qur&apos;an learning journey for school-going children — with Tajweed, Hifz, Akhlaq and Adkār.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start pt-4"
              >
                <Link
                  href="/enroll"
                  className="px-10 py-5 rounded-2xl bg-zeeque-gradient text-white font-black text-xl hover:shadow-2xl hover:scale-105 dark:hover:brightness-110 transition-all flex items-center justify-center gap-2"
                >
                  Enroll Now
                  <ArrowRight className="w-6 h-6" />
                </Link>
                <Link
                  href="/prospectus"
                  className="px-10 py-5 rounded-2xl border-2 border-violet-200 dark:border-violet-900/50 text-zeeque-violet dark:text-violet-400 font-black text-xl hover:bg-violet-50 dark:hover:bg-violet-900/10 transition-all flex items-center justify-center gap-2"
                >
                  Prospectus
                </Link>
              </motion.div>
            </div>

            {/* Right Column: Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative w-full aspect-square"
            >
              <div className="absolute inset-0 rounded-[4rem] overflow-hidden shadow-2xl shadow-violet-500/10 border-8 border-white/50 dark:border-zinc-900/50 bg-zinc-50 dark:bg-zinc-900">
                <div className="w-full h-full bg-gradient-to-br from-violet-100/50 to-indigo-50/50 dark:from-violet-900/20 dark:to-indigo-900/20 flex items-center justify-center text-violet-300">
                  <GraduationCap className="w-48 h-48 opacity-10" />
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-8 -left-8 bg-background dark:bg-zinc-900 p-6 rounded-[2rem] shadow-2xl border border-violet-100 dark:border-violet-900/30 hidden lg:flex items-center gap-4 animate-bounce duration-[3000ms]">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/20 rounded-2xl flex items-center justify-center text-emerald-600">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="font-black text-foreground">Certified Tutors</p>
                  <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest">Expert Guidance</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. HIGHLIGHTS SECTION */}
      <section className="bg-zinc-50 dark:bg-zinc-900/30 py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#5B21B6_1px,transparent_1px)] bg-[length:48px_48px]" />
        </div>

        <div className="container-fluid relative z-10">
          <div className="text-center mb-24 space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-violet-50 dark:bg-violet-900/10 border border-violet-100 dark:border-violet-800/20 text-zeeque-violet text-xs font-black uppercase tracking-widest mb-6">
              The ZEEQUE Edge
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-serif font-black bg-clip-text text-transparent bg-zeeque-gradient py-2"
            >
              Why Choose ZeeQue Plus?
            </motion.h2>
            <p className="text-foreground/60 text-xl md:text-2xl max-w-2xl mx-auto font-medium">
              Qualified teachers meets child-friendly methods to make learning joyful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-[#121212] p-10 rounded-[3rem] shadow-2xl flex flex-col items-center text-center group transition-all duration-500 border border-zinc-200 dark:border-violet-500/20"
              >
                <div className={`w-24 h-24 ${item.color} rounded-[2rem] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm border border-border/50`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black text-foreground mb-4">{item.title}</h3>
                <p className="text-foreground/60 font-medium leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUTCOMES SECTION */}
      <section className="py-32 relative overflow-hidden">
        <div className="container-fluid relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            {/* Left: Content */}
            <div className="flex-1 space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-zeeque-violet font-black tracking-widest uppercase text-xs">
                  <Target size={16} /> Learning Outcomes
                </div>
                <h3 className="text-5xl md:text-7xl font-serif font-black tracking-tight bg-clip-text text-transparent bg-zeeque-gradient">The Gain of Growth.</h3>
                <p className="text-xl md:text-2xl text-foreground/60 leading-relaxed font-medium">
                  Our comprehensive curriculum ensures your child not only reads but understands and loves the Deen.
                </p>
              </div>

              <div className="space-y-5">
                {outcomes.map((outcome, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-5 bg-violet-50 dark:bg-violet-900/10 p-6 rounded-[2rem] hover:bg-violet-100 dark:hover:bg-violet-900/20 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-zeeque-gradient rounded-full flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-violet-500/30">
                      <CheckCircle2 size={20} />
                    </div>
                    <span className="text-xl font-bold text-foreground/80 tracking-tight">{outcome}</span>
                  </motion.div>
                ))}
              </div>

              <Link
                href="/enroll"
                className="inline-flex items-center gap-3 text-zeeque-violet font-black text-2xl hover:gap-5 transition-all pt-6"
              >
                Start Their Journey
                <ArrowRight size={28} />
              </Link>
            </div>

            {/* Right: Visual */}
            <div className="flex-1 w-full max-w-xl">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square rounded-[4rem] bg-gradient-to-br from-violet-100 to-indigo-50 dark:from-violet-900/20 dark:to-indigo-900/20 overflow-hidden flex items-center justify-center"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                      rotate: [0, 2, -2, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity }}
                    className="w-2/3 h-2/3 bg-background dark:bg-zinc-900 rounded-[4rem] shadow-2xl flex items-center justify-center relative overflow-hidden border border-border"
                  >
                    <GraduationCap className="w-40 h-40 text-violet-500/10" />
                  </motion.div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-15, 15, -15] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute top-[20%] right-[10%] bg-background dark:bg-zinc-900 p-6 rounded-3xl shadow-2xl border border-border flex items-center gap-4"
                >
                  <div className="w-10 h-10 bg-rose-100 dark:bg-rose-900/20 rounded-xl flex items-center justify-center text-rose-500">
                    <Heart size={22} fill="currentColor" />
                  </div>
                  <span className="font-black text-sm tracking-tight text-foreground">Character First</span>
                </motion.div>

                <motion.div
                  animate={{ y: [15, -15, 15] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute bottom-[20%] left-[5%] bg-background dark:bg-zinc-900 p-6 rounded-3xl shadow-2xl border border-border flex items-center gap-4"
                >
                  <div className="w-10 h-10 bg-violet-100 dark:bg-violet-900/20 rounded-xl flex items-center justify-center text-zeeque-violet">
                    <BookOpen size={22} />
                  </div>
                  <span className="font-black text-sm tracking-tight text-foreground">Structured Hifz</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA SECTION */}
      <section className="py-32 relative overflow-hidden mx-6 mb-12">
        <div className="absolute inset-0 bg-zeeque-gradient rounded-[4rem]" />
        <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="container-fluid relative z-10 text-center space-y-12">
          <h2 className="text-4xl md:text-7xl font-serif font-black text-white leading-tight">Ready to Sculpt <br />Their Spiritual Future?</h2>
          <p className="text-white/80 text-xl md:text-2xl max-w-2xl mx-auto font-medium">
            Join ZeeQue Plus today and give your child the gift of lifelong Qur&apos;anic fluency.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/enroll"
              className="bg-white text-zeeque-violet px-12 py-6 rounded-[2.5rem] font-black text-2xl hover:scale-110 active:scale-95 transition-all shadow-2xl"
            >
              Enroll Your Child Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
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
                className="text-6xl md:text-7xl lg:text-8xl font-serif font-black leading-[1.1] tracking-tight relative"
              >
                <span className="bg-clip-text text-transparent bg-zeeque-gradient">
                  Future-Proof Your Child&apos;s Deen.
                </span>
                {/* Floating Emojis */}
                <motion.span
                  animate={{ y: [0, -10, 0], rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-12 right-0 text-4xl md:text-5xl hidden lg:block"
                >
                  ⭐
                </motion.span>
                <motion.span
                  animate={{ y: [0, 15, 0], x: [0, 5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-8 -left-12 text-3xl md:text-4xl hidden lg:block"
                >
                  🌈
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-foreground/60 leading-relaxed font-sans max-w-xl mx-auto md:mx-0 font-medium relative"
              >
                A structured, step-by-step Qur&apos;an learning journey for school-going children — with Tajweed, Hifz, Akhlaq and Adkār. ✨
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start pt-4 relative"
              >
                {/* Magical Floating Bubbles */}
                <div className="absolute -left-20 top-1/2 w-4 h-4 bg-violet-400/20 rounded-full blur-sm animate-pulse" />
                <div className="absolute -right-20 bottom-0 w-6 h-6 bg-indigo-400/20 rounded-full blur-sm animate-pulse delay-700" />

                <Link
                  href="/enroll"
                  className="px-10 py-5 rounded-2xl bg-zeeque-gradient text-white font-black text-xl hover:shadow-2xl hover:scale-105 dark:hover:brightness-110 transition-all flex items-center justify-center gap-2 group"
                >
                  Enroll Now
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.span>
                </Link>
                <Link
                  href="/prospectus"
                  className="px-10 py-5 rounded-2xl border-2 border-violet-200 dark:border-violet-900/50 text-zeeque-violet dark:text-violet-400 font-black text-xl hover:bg-violet-50 dark:hover:bg-violet-900/10 transition-all flex items-center justify-center gap-2"
                >
                  Prospectus 📖
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative w-full aspect-square group"
            >
              {/* Premium Glow Background */}
              <div className="absolute inset-0 bg-zeeque-gradient opacity-20 blur-[100px] rounded-full animate-pulse z-0" />

              <div className="relative z-10 w-full h-full rounded-[4rem] overflow-hidden shadow-2xl shadow-violet-500/10 border-8 border-white/50 dark:border-zinc-900/50 bg-zinc-50 dark:bg-zinc-900">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-100/30 to-indigo-50/30 dark:from-violet-900/10 dark:to-indigo-900/10 z-10" />
                <Image
                  src="/hero_image.png"
                  alt="ZeeQue Plus Hero"
                  fill
                  className="object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>

              {/* Decorative Rings */}
              <div className="absolute -inset-4 border border-violet-500/10 rounded-[4.5rem] z-0 animate-spin-slow" />
              <div className="absolute -inset-8 border border-white/5 rounded-[5rem] z-0 animate-spin-slower" />

              {/* Floating Badge */}
              <div className="absolute -bottom-8 -left-8 bg-background dark:bg-zinc-900 p-6 rounded-[2rem] shadow-2xl border border-violet-100 dark:border-violet-900/30 hidden lg:flex items-center gap-4 animate-bounce duration-[3000ms] z-20">
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

      {/* 2.5 WHO IS THIS FOR SECTION - CREATIVE REDESIGN */}
      <section className="py-40 relative overflow-hidden bg-background">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-violet-600/10 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-600/10 blur-[120px] rounded-full delay-1000 animate-pulse" />
        </div>

        <div className="container-fluid relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Sticky Header Side */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-zeeque-violet text-xs font-black uppercase tracking-[0.2em]">
                  <Target size={14} className="animate-spin-slow" /> Target Audience
                </div>
                <h2 className="text-5xl md:text-7xl font-serif font-black tracking-tighter leading-[1.05] text-foreground">
                  Who Is This <br />
                  <span className="bg-clip-text text-transparent bg-zeeque-gradient">Built For?</span>
                </h2>
                <p className="text-xl text-foreground/50 font-medium leading-relaxed max-w-sm">
                  ZeeQue Plus isn&apos;t just another online class. It&apos;s a dedicated ecosystem for those who prioritize spiritual and academic excellence.
                </p>

                <div className="pt-8 hidden lg:block">
                  <div className="flex items-center gap-4 text-zeeque-violet group cursor-pointer">
                    <div className="w-12 h-12 rounded-full border border-violet-500/30 flex items-center justify-center group-hover:bg-zeeque-violet group-hover:text-white transition-all duration-500">
                      <ArrowRight size={20} />
                    </div>
                    <span className="font-black text-sm uppercase tracking-widest">Explore our Philosophy</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Creative Bento Grid Side */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Feature 1: The Primary Focus */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:col-span-2 group relative overflow-hidden p-10 md:p-14 rounded-[4rem] bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/5 backdrop-blur-xl transition-all duration-700 hover:border-violet-500/30 hover:shadow-[0_0_50px_rgba(139,92,246,0.1)]"
              >
                <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                  <div className="w-28 h-28 bg-zeeque-gradient p-0.5 rounded-[2rem] shrink-0 rotate-3 group-hover:rotate-6 transition-transform duration-500">
                    <div className="w-full h-full bg-white dark:bg-zinc-900 rounded-[1.95rem] flex items-center justify-center text-zeeque-violet dark:text-white">
                      <GraduationCap size={44} />
                    </div>
                  </div>
                  <div className="space-y-6 text-center md:text-left">
                    <span className="px-4 py-1 rounded-full bg-violet-500/10 text-zeeque-violet text-[10px] font-black uppercase tracking-[0.2em]">Academic Integration</span>
                    <h3 className="text-4xl md:text-5xl font-black text-foreground dark:text-white tracking-tight">Classes 1 to 10</h3>
                    <p className="text-lg text-foreground/60 dark:text-zinc-400 font-medium leading-relaxed max-w-lg">
                      Tailored learning paths for school-going children across any syllabus. We bridge the gap between academic pressure and spiritual grounding.
                    </p>
                  </div>
                </div>
                {/* Decorative mesh */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/5 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
              </motion.div>

              {/* Feature 2: For Parents */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group relative overflow-hidden p-10 rounded-[3.5rem] bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-white/5 backdrop-blur-md transition-all duration-700 hover:border-blue-500/20 hover:bg-zinc-100 dark:hover:bg-zinc-900/50"
              >
                <div className="relative z-10 space-y-8">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 shadow-inner">
                    <Users size={28} />
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-2xl font-black text-foreground dark:text-white">Partnered Parents</h4>
                    <p className="text-foreground/60 dark:text-zinc-500 font-medium leading-relaxed">
                      For parents seeking a consistent, guided Quran journey that breathes alongside regular schooling.
                    </p>
                  </div>
                  <div className="pt-2">
                    <div className="h-1 w-12 bg-blue-500/30 rounded-full group-hover:w-24 transition-all duration-700" />
                  </div>
                </div>
              </motion.div>

              {/* Feature 3: For Students */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="group relative overflow-hidden p-10 rounded-[3.5rem] bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-white/5 backdrop-blur-md transition-all duration-700 hover:border-emerald-500/20 hover:bg-zinc-100 dark:hover:bg-zinc-900/50"
              >
                <div className="relative z-10 space-y-8">
                  <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 shadow-inner">
                    <Sparkles size={28} />
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-2xl font-black text-foreground dark:text-white">Dedicated Hearts</h4>
                    <p className="text-foreground/60 dark:text-zinc-500 font-medium leading-relaxed">
                      Students who thrive on regularity, expert correction, and a sense of community over casual learning.
                    </p>
                  </div>
                  <div className="pt-2">
                    <div className="h-1 w-12 bg-emerald-500/30 rounded-full group-hover:w-24 transition-all duration-700" />
                  </div>
                </div>
              </motion.div>

            </div>
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

      {/* 3.5 TRUST & CONTINUITY SECTION */}
      <section className="py-32 bg-zinc-50 dark:bg-zinc-900/30 relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" />
        <div className="container-fluid relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* Left: Content */}
            <div className="space-y-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-800/20 text-emerald-600 text-xs font-black uppercase tracking-widest">
                <Sparkles size={14} /> Trust & Continuity
              </div>
              <h2 className="text-5xl md:text-7xl font-serif font-black tracking-tight leading-[1.1]">Legacy of Learning.</h2>
              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-foreground/60 leading-relaxed font-medium">
                  Built on the foundational experience of <span className="text-zeeque-violet font-black underline decoration-violet-500/30 decoration-4 underline-offset-4">ZeeQue Preschool & Quran programs</span>.
                </p>
                <p className="text-lg md:text-xl text-foreground/50 leading-relaxed font-medium">
                  We continue the same Quran-centric, child-friendly philosophy that has nurtured hundreds of young hearts — now made available online and optimized for school-aged children in <span className="text-foreground">Classes 1–10</span>.
                </p>
              </div>

              <div className="pt-6 flex items-center gap-8">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-14 h-14 rounded-2xl border-4 border-white dark:border-zinc-900 bg-gradient-to-br from-violet-100 to-indigo-100 dark:from-violet-900/40 dark:to-indigo-900/40 flex items-center justify-center text-violet-400 font-bold text-xs ring-1 ring-black/5">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-black text-foreground">500+</p>
                  <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest">Trusted Families</p>
                </div>
              </div>
            </div>

            {/* Right: Testimonials Card Stack */}
            <div className="relative space-y-6">
              {[
                {
                  quote: "The transition from preschool to Plus was completely seamless. My daughter looks forward to her Quran time even with her school busy schedule.",
                  author: "Dr. Farah J.",
                  role: "Parent of Class 4 Student",
                  initial: "F"
                },
                {
                  quote: "Finally a program that balances academic rigor with spiritual growth. The regularity and correction they provide is unmatched for home learning.",
                  author: "Abdullah K.",
                  role: "Father of Class 7 Student",
                  initial: "A"
                }
              ].map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  className="bg-white dark:bg-[#121212] p-10 rounded-[3rem] shadow-2xl border border-zinc-100 dark:border-violet-500/10 relative group hover:border-zeeque-violet/30 transition-all duration-500"
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-zeeque-gradient rounded-2xl flex items-center justify-center text-white text-3xl font-serif shadow-xl group-hover:rotate-12 transition-transform">“</div>
                  <p className="text-xl font-medium text-foreground/80 mb-8 italic leading-relaxed tracking-tight">
                    &quot;{t.quote}&quot;
                  </p>
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-violet-50 dark:bg-violet-900/20 flex items-center justify-center text-zeeque-violet font-black border border-violet-100 dark:border-violet-800/20 group-hover:bg-violet-100 dark:group-hover:bg-violet-900/40 transition-colors">
                      {t.initial}
                    </div>
                    <div>
                      <p className="font-black text-lg text-foreground tracking-tight">{t.author}</p>
                      <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Background Glow */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-violet-500/5 blur-[120px] rounded-full" />
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

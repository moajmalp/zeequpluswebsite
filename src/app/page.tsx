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
      color: "bg-blue-100 text-primary",
    },
    {
      title: "Class 1–10 Levels",
      description: "Age-appropriate syllabus for each class with gradual, clear milestones and targets.",
      icon: <Target className="w-8 h-8" />,
      color: "bg-sky-100 text-accent",
    },
    {
      title: "Certified Teachers",
      description: "Handpicked male and female teachers experienced in teaching children online.",
      icon: <Users className="w-8 h-8" />,
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      title: "Balanced Approach",
      description: "Qur'an recitation, memorisation, daily Adkār, and value-based life lessons.",
      icon: <Sparkles className="w-8 h-8" />,
      color: "bg-teal-100 text-teal-600",
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
      <section className="relative pt-32 pb-20 lg:pt-56 lg:pb-48 overflow-hidden bg-white">
        {/* Professional Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-[140px]" />
          <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-primary/20 rounded-full animate-ping" />
          <div className="absolute top-[40%] right-[15%] w-3 h-3 bg-accent/20 rounded-full animate-bounce" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

            {/* Left Column: Content */}
            <div className="flex-1 text-center lg:text-left space-y-10">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-zinc-50 border border-zinc-100 shadow-sm"
                >
                  <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-bold text-foreground/70 tracking-tight flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    Admissions Open for Batch 2026
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "circOut" }}
                  className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground leading-[1] tracking-tight"
                >
                  Future-Proof Your Child&apos;s <span className="text-primary italic">Deen.</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-lg md:text-xl text-foreground/50 leading-relaxed max-w-2xl lg:mx-0 mx-auto font-medium"
                >
                  ZeeQue Plus offers a structured, school-aligned Qur&apos;an learning ecosystem for <span className="text-foreground font-black">Classes 1–10</span>. We bridge the gap between academic excellence and spiritual mastery.
                </motion.p>
              </div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
              >
                <Link
                  href="/enroll"
                  className="relative h-16 px-10 rounded-2xl bg-primary text-white font-black text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  Enroll Now
                  <ArrowRight className="group-hover:translate-x-1 transition-transform w-5 h-5" />
                </Link>
                <Link
                  href="/learning-experience"
                  className="h-16 px-10 rounded-2xl bg-white border-2 border-zinc-100 text-foreground font-bold text-lg hover:border-primary/30 hover:bg-zinc-50 transition-all flex items-center justify-center gap-3 shadow-sm"
                >
                  View Curriculum
                  <BookOpen className="w-5 h-5 text-primary/50" />
                </Link>
              </motion.div>

              {/* Trust Badge Bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-8 border-t border-zinc-100"
              >
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-foreground">500+</span>
                  <span className="text-xs font-bold text-foreground/40 uppercase tracking-widest">Students Enrolled</span>
                </div>
                <div className="w-px h-10 bg-zinc-100 hidden sm:block" />
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-foreground">4.9/5</span>
                  <span className="text-xs font-bold text-foreground/40 uppercase tracking-widest">Parent Rating</span>
                </div>
                <div className="w-px h-10 bg-zinc-100 hidden sm:block" />
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-foreground">50+</span>
                  <span className="text-xs font-bold text-foreground/40 uppercase tracking-widest">Expert Mentors</span>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Visual Component */}
            <div className="flex-1 w-full flex items-center justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "circOut" }}
                className="relative w-full max-w-[500px] aspect-square"
              >
                {/* Visual Card Stack */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-[4rem] rotate-6 opacity-10 animate-pulse" />
                <div className="absolute inset-x-8 -bottom-8 bg-zinc-900/5 h-32 blur-3xl rounded-full" />

                <div className="relative h-full bg-white rounded-[4rem] border-8 border-zinc-50 shadow-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 pointer-events-none" />

                  {/* Floating Stats UI in Image */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-10 right-[-20px] bg-white p-5 rounded-3xl shadow-2xl border border-zinc-50 z-20 flex flex-col gap-1"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-xs font-black text-foreground/40 uppercase">Live Now</span>
                    </div>
                    <span className="text-xl font-black text-primary">Class 4A • Tajweed</span>
                  </motion.div>

                  <div className="h-full flex flex-col items-center justify-center p-12 text-center space-y-8">
                    <div className="w-32 h-32 bg-primary/10 rounded-[2.5rem] flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                      <GraduationCap size={64} />
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-3xl font-black tracking-tight">Personalized Learning</h4>
                      <p className="text-foreground/50 font-medium">Small batches for maximum attention.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 w-full">
                      <div className="h-14 bg-zinc-50 rounded-2xl border border-zinc-100 flex items-center justify-center gap-2">
                        <CheckCircle2 size={20} className="text-primary" />
                        <span className="font-bold text-sm">Age Group 6-15</span>
                      </div>
                      <div className="h-14 bg-zinc-50 rounded-2xl border border-zinc-100 flex items-center justify-center gap-2">
                        <CheckCircle2 size={20} className="text-primary" />
                        <span className="font-bold text-sm">Daily Adkar</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Orbiting Element */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-40px] pointer-events-none"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-2xl shadow-xl flex items-center justify-center text-accent rotate-[-45deg]">
                    <Target size={24} />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. KEY HIGHLIGHTS SECTION (Blue Theme Contrast) */}
      <section className="bg-primary pt-24 pb-32 relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#fff_1px,transparent_1px)] bg-[length:40px_40px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20 space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white text-3xl md:text-5xl font-black"
            >
              Why Choose ZeeQue Plus?
            </motion.h2>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
              We combine qualified teachers with child-friendly methods to make learning joyful and effective.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-[2.5rem] shadow-2xl shadow-black/10 flex flex-col items-center text-center group cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 12 }}
                  className={`w-20 h-20 ${item.color} rounded-3xl flex items-center justify-center mb-6 transition-all duration-500`}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-2xl font-black text-foreground mb-4">{item.title}</h3>
                <p className="text-foreground/60 font-medium leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUTCOMES SECTION (White Theme) */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left: Content */}
            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                <h2 className="text-primary font-black tracking-widest uppercase text-sm">Learning Outcomes</h2>
                <h3 className="text-4xl md:text-5xl font-black text-foreground">What Your Child Will Gain</h3>
                <p className="text-xl text-foreground/60 leading-relaxed font-medium">
                  Our comprehensive curriculum ensures your child not only reads but understands and loves the Deen.
                </p>
              </div>

              <div className="space-y-4">
                {outcomes.map((outcome, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 bg-blue-50/50 p-4 rounded-2xl hover:bg-blue-50 transition-colors group cursor-default"
                  >
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="text-lg font-bold text-foreground/80">{outcome}</span>
                  </motion.div>
                ))}
              </div>

              <Link
                href="/curriculum"
                className="inline-flex items-center gap-2 text-primary font-black text-lg hover:gap-4 transition-all pt-4"
              >
                Explore the Full Curriculum
                <ArrowRight />
              </Link>
            </div>

            {/* Right: Visual Element */}
            <div className="flex-1 w-full max-w-xl">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square rounded-[3rem] bg-gradient-to-br from-blue-100 to-sky-50 overflow-hidden flex items-center justify-center"
              >
                {/* Abstract child-friendly visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="w-2/3 h-2/3 bg-white rounded-[4rem] shadow-2xl flex items-center justify-center relative overflow-hidden"
                  >
                    <GraduationCap className="w-32 h-32 text-primary/20" />
                    <div className="absolute top-4 left-4 w-4 h-4 bg-accent rounded-full animate-pulse" />
                    <div className="absolute bottom-10 right-10 w-8 h-8 bg-primary/20 rounded-full" />
                  </motion.div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-[20%] right-[15%] bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3"
                >
                  <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600">
                    <Heart size={18} fill="currentColor" />
                  </div>
                  <span className="font-bold text-sm">Character Building</span>
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute bottom-[20%] left-[10%] bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3"
                >
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-primary">
                    <GraduationCap size={18} />
                  </div>
                  <span className="font-bold text-sm">Classes 1–10</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION SECTION */}
      <section className="py-20 bg-accent relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="container mx-auto px-6 text-center space-y-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white">Ready to Start Your Child&apos;s Journey?</h2>
          <p className="text-white/80 text-lg md:text-xl max-w-xl mx-auto font-medium">
            Join thousands of students learning the Qur&apos;an with a structured, modern approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/enroll"
              className="bg-white text-accent px-10 py-5 rounded-[2rem] font-black text-xl hover:scale-105 transition-all shadow-2xl"
            >
              Enroll Your Child Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import {
    FileText,
    Download,
    BookOpen,
    CheckCircle2,
    Calendar,
    Target,
    Award,
    Sparkles,
    ArrowRight
} from "lucide-react";
import Link from "next/link";

const curriculum = [
    {
        level: "Foundation (Classes 1-3)",
        focus: "Basics of Recitation",
        items: ["Arabic Alphabet & Makharij", "Basic Tajweed Rules", "Short Surah Memorization", "Daily Adkar (Level 1)"]
    },
    {
        level: "Intermediate (Classes 4-7)",
        focus: "Fluency & Hifz",
        items: ["Advanced Tajweed (Tanween, Madd)", "Juz Amma Memorization", "Fiqh of Prayer", "Prophetic Stories"]
    },
    {
        level: "Advanced (Classes 8-10)",
        focus: "Tafsir & Application",
        items: ["Critical Tajweed Analysis", "Selected Surah Tafsir", "Islamic Etiquette (Akhlaq)", "Contemporary Challenges"]
    }
];

export default function ProspectusPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-zinc-50 dark:bg-zinc-900/30">
                <div className="container-fluid relative z-10 text-center">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 dark:bg-violet-900/10 border border-violet-100 dark:border-violet-800/20 mb-8"
                    >
                        <FileText size={16} className="text-zeeque-violet" />
                        <span className="text-xs font-black uppercase tracking-widest text-zeeque-violet">Official Prospectus 2026</span>
                    </motion.div>
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-6xl md:text-8xl font-serif font-black tracking-tight leading-[1.1] mb-8 bg-clip-text text-transparent bg-zeeque-gradient"
                    >
                        The ZEEQUE <br />
                        Standard.
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-foreground/60 font-medium max-w-2xl mx-auto leading-relaxed mb-12">
                        Download our comprehensive guide to your child&apos;s spiritual and academic growth in Qur&apos;anic sciences.
                    </p>
                    <button className="px-10 py-5 bg-zeeque-gradient text-white rounded-2xl font-black text-xl shadow-2xl shadow-violet-500/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 mx-auto">
                        <Download size={24} />
                        Download PDF Prospectus
                    </button>
                </div>
            </section>

            {/* Curriculum Summary Grid */}
            <section className="py-24 container-fluid">
                <div className="text-center mb-20 space-y-4">
                    <div className="inline-flex items-center gap-2 text-zeeque-violet font-black tracking-widest uppercase text-xs">
                        <BookOpen size={16} /> Course Structure
                    </div>
                    <h2 className="text-5xl font-serif font-black bg-clip-text text-transparent bg-zeeque-gradient">A Journey in Three Stages</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {curriculum.map((stage, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-10 rounded-[3rem] bg-white dark:bg-[#121212] border border-zinc-200 dark:border-violet-500/20 shadow-xl hover:shadow-2xl hover:border-violet-200 dark:hover:border-violet-800 transition-all group flex flex-col"
                        >
                            <div className="mb-8">
                                <h3 className="text-2xl font-black text-foreground mb-2">{stage.level}</h3>
                                <p className="text-zeeque-violet font-bold text-sm uppercase tracking-widest">{stage.focus}</p>
                            </div>
                            <div className="h-px w-full bg-border mb-8" />
                            <ul className="space-y-6 flex-grow">
                                {stage.items.map((item, j) => (
                                    <li key={j} className="flex gap-4 items-start group/item">
                                        <div className="w-6 h-6 rounded-full bg-violet-50 dark:bg-violet-900/10 flex items-center justify-center text-zeeque-violet shrink-0 mt-1 transition-transform group-hover/item:scale-110">
                                            <CheckCircle2 size={14} />
                                        </div>
                                        <span className="text-lg font-medium text-foreground/70">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Key Features Section */}
            <section className="py-24 bg-zinc-50 dark:bg-zinc-900/30">
                <div className="container-fluid">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Calendar, title: "Flexible Batches", detail: "Morning, Evening & Weekend slots available.", color: "bg-blue-50 dark:bg-blue-900/10 text-blue-500" },
                            { icon: Target, title: "Individualized Goal", detail: "Progress tracking for every single child.", color: "bg-emerald-50 dark:bg-emerald-900/10 text-emerald-500" },
                            { icon: Award, title: "Certification", detail: "Formal recognition for every level completed.", color: "bg-amber-50 dark:bg-amber-900/10 text-amber-500" },
                            { icon: Sparkles, title: "Akhlaq Focus", detail: "Building character alongside recitation.", color: "bg-violet-50 dark:bg-violet-900/10 text-zeeque-violet" }
                        ].map((item, i) => (
                            <div key={i} className="bg-white dark:bg-[#121212] p-8 rounded-[2.5rem] border border-zinc-200 dark:border-violet-500/20 shadow-sm flex flex-col items-center text-center space-y-6">
                                <div className={`w-20 h-20 ${item.color} rounded-2xl flex items-center justify-center shadow-sm`}>
                                    <item.icon size={32} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-black text-foreground mb-2">{item.title}</h4>
                                    <p className="text-foreground/50 font-medium">{item.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ready to Enroll? */}
            <section className="py-24 text-center">
                <div className="container-fluid space-y-10">
                    <h2 className="text-5xl font-serif font-black bg-clip-text text-transparent bg-zeeque-gradient">Start the Transformation.</h2>
                    <p className="text-xl text-foreground/60 font-medium max-w-2xl mx-auto">
                        Ready to give your child the ZeeQue advantage? Enrollment takes less than 2 minutes.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                            href="/enroll"
                            className="bg-zeeque-gradient text-white px-12 py-6 rounded-2xl font-black text-2xl shadow-2xl shadow-violet-500/20 hover:scale-105 dark:hover:brightness-110 active:scale-95 transition-all flex items-center gap-3"
                        >
                            Enroll Your Child <ArrowRight size={28} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

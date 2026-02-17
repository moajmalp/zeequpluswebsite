"use client";

import { motion } from "framer-motion";
import {
    History,
    Target,
    Heart,
    GraduationCap,
    Star,
    Users,
    CheckCircle2,
    Sparkles,
    ShieldCheck,
    Compass
} from "lucide-react";

const teachers = [
    {
        name: "Dr. Ahmed Mansoor",
        role: "Lead Instructor, Tajweed Specialist",
        bio: "15+ years experience in teaching Qur'anic sciences to young children.",
        color: "bg-blue-50 dark:bg-blue-900/10 text-blue-500",
    },
    {
        name: "Ustadha Fatima Zahra",
        role: "Hifz & Akhlaq Mentor",
        bio: "Certified Hafiza with a passion for creative child psychology in learning.",
        color: "bg-emerald-50 dark:bg-emerald-900/10 text-emerald-500",
    },
    {
        name: "Shaykh Zaid Ibrahim",
        role: "Adkar & Tafsir Teacher",
        bio: "Specializes in making complex Tafsir concepts simple for primary students.",
        color: "bg-violet-50 dark:bg-violet-900/10 text-zeeque-violet",
    },
    {
        name: "Ustadha Maryam Ali",
        role: "Preschool Transition Expert",
        bio: "Expert in helping preschoolers adapt to structured school-level Qur'an learning.",
        color: "bg-orange-50 dark:bg-orange-900/10 text-orange-500",
    },
];

export default function AboutPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="container-fluid relative z-10 text-center">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 dark:bg-violet-900/10 border border-violet-100 dark:border-violet-800/20 mb-8"
                    >
                        <History size={16} className="text-zeeque-violet" />
                        <span className="text-xs font-black uppercase tracking-widest text-zeeque-violet">Our Heritage & Mission</span>
                    </motion.div>
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-6xl md:text-8xl font-serif font-black tracking-tight leading-[1.1] mb-8 bg-clip-text text-transparent bg-zeeque-gradient"
                    >
                        The Journey of <br />
                        ZeeQue Plus
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-foreground/60 font-medium max-w-3xl mx-auto leading-relaxed"
                    >
                        ZeeQue Plus was born from a simple observation: children excel when their spiritual learning matches the same high standards as their academic schooling.
                    </motion.p>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="container-fluid relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="flex flex-col gap-8"
                        >
                            <div className="flex-1 p-12 bg-background dark:bg-zinc-900/50 rounded-[3rem] shadow-2xl border border-border group">
                                <div className="flex items-center gap-6 mb-8">
                                    <div className="w-16 h-16 bg-zeeque-gradient rounded-2xl flex items-center justify-center text-white shadow-xl shadow-violet-500/20">
                                        <Heart size={32} />
                                    </div>
                                    <h2 className="text-4xl font-serif font-black tracking-tight bg-clip-text text-transparent bg-zeeque-gradient">Our Mission</h2>
                                </div>
                                <p className="text-xl text-foreground/70 leading-relaxed font-medium">
                                    To provide school-going children with a structured, engaging, and spiritually enriching Qur&apos;anic ecosystem. We aim to bridge the gap between traditional learning and modern educational standards.
                                </p>
                            </div>

                            <div className="flex-1 p-12 bg-zeeque-gradient text-white rounded-[4rem] shadow-2xl shadow-violet-500/20 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-bl-[4rem] transition-transform group-hover:scale-110" />
                                <div className="flex items-center gap-6 mb-8">
                                    <div className="w-16 h-16 bg-white text-zeeque-violet rounded-2xl flex items-center justify-center shadow-lg">
                                        <Compass size={32} />
                                    </div>
                                    <h2 className="text-4xl font-serif font-black tracking-tight bg-clip-text text-transparent bg-zeeque-gradient">Our Vision</h2>
                                </div>
                                <p className="text-xl text-white/90 leading-relaxed font-medium">
                                    To raise a generation that reads the Qur&apos;an with fluency, understands its core values, and implements beautiful character (Akhlaq) in their daily lives.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-8"
                        >
                            {[
                                { title: "Structured Syllabus", icon: CheckCircle2, bg: "bg-blue-50 dark:bg-blue-900/10", color: "text-blue-500" },
                                { title: "Interactive Groups", icon: Users, bg: "bg-indigo-50 dark:bg-indigo-900/10", color: "text-indigo-500" },
                                { title: "Certified Experts", icon: ShieldCheck, bg: "bg-violet-50 dark:bg-violet-900/10", color: "text-zeeque-violet" },
                                { title: "Character Focused", icon: Star, bg: "bg-amber-50 dark:bg-amber-900/10", color: "text-amber-500" }
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className={`${item.bg} rounded-[3rem] flex flex-col items-center justify-center p-10 text-center space-y-6 hover:scale-[1.02] transition-transform shadow-xl shadow-zinc-100 dark:shadow-none border border-border`}
                                >
                                    <div className={`w-20 h-20 bg-background dark:bg-zinc-900 rounded-[1.5rem] flex items-center justify-center ${item.color} shadow-sm border border-border`}>
                                        <item.icon size={40} />
                                    </div>
                                    <p className="font-black text-lg tracking-tight text-foreground">{item.title}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Teacher Profiles Section */}
            <section className="py-24 bg-zinc-50 dark:bg-zinc-900/30">
                <div className="container-fluid">
                    <div className="text-center mb-24 space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/10 text-emerald-600 font-bold text-xs uppercase tracking-widest">
                            <Sparkles size={16} /> The Mentors
                        </div>
                        <h2 className="text-5xl md:text-6xl font-serif font-black bg-clip-text text-transparent bg-zeeque-gradient">Led by Passionate Educators</h2>
                        <p className="text-xl text-foreground/60 font-medium max-w-2xl mx-auto">Meet the certified experts who guide your children through their spiritual journey.</p>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
                    >
                        {teachers.map((teacher, i) => (
                            <motion.div
                                key={teacher.name}
                                variants={itemVariants}
                                className="group p-10 rounded-[3rem] border border-zinc-200 dark:border-violet-500/20 bg-white dark:bg-[#121212] hover:border-zeeque-violet transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/10 flex flex-col items-center text-center relative overflow-hidden"
                            >
                                <div className={`w-28 h-28 ${teacher.color} rounded-[2rem] mb-8 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm`}>
                                    <Users size={56} className="opacity-20" />
                                </div>
                                <h3 className="text-2xl font-black mb-2 text-foreground">{teacher.name}</h3>
                                <p className="text-zeeque-violet font-bold text-sm mb-6 uppercase tracking-widest">{teacher.role}</p>
                                <p className="text-foreground/50 text-base font-medium leading-relaxed">
                                    {teacher.bio}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

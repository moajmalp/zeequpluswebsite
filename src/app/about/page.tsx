"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
    Compass,
    Clock,
    BookOpen
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
        <div className="min-h-screen bg-background text-foreground/90">
            {/* 1. CREATIVE STORY HERO */}
            <section className="relative pt-40 pb-24 overflow-hidden">
                {/* Immersive Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-[10%] -left-20 text-[25rem] font-serif font-black text-white/[0.02] dark:text-white/[0.03] leading-none select-none">Z</div>
                    <div className="absolute top-1/4 right-[5%] w-96 h-96 bg-violet-600/10 blur-[150px] rounded-full animate-pulse" />
                </div>

                <div className="container-fluid relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col lg:flex-row gap-20 items-center">

                            {/* Left Side: The Narrative */}
                            <div className="flex-1 space-y-12">
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="space-y-8"
                                >
                                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-violet-50 dark:bg-zinc-900 border border-violet-100 dark:border-white/10 text-zeeque-violet text-[10px] font-black uppercase tracking-[0.3em] shadow-sm dark:shadow-2xl">
                                        <History size={12} className="animate-spin-slow" /> Our Heritage
                                    </div>

                                    <h1 className="text-6xl md:text-8xl font-serif font-black tracking-tighter leading-[0.95] text-foreground relative">
                                        About <br />
                                        <span className="bg-clip-text text-transparent bg-zeeque-gradient dark:text-white">ZeeQue Plus</span><br />
                                        <span className="text-4xl md:text-6xl opacity-50">Quran Course 🌙</span>
                                    </h1>

                                    <div className="relative group">
                                        <div className="absolute -left-8 top-0 bottom-0 w-1 bg-zeeque-gradient rounded-full opacity-20 group-hover:opacity-100 transition-opacity duration-700" />
                                        <p className="text-2xl md:text-3xl font-black text-foreground leading-tight tracking-tight">
                                            ZeeQue Plus was born from a simple observation: children excel when their spiritual learning matches the same high standards as their academic schooling. 💡
                                        </p>
                                    </div>

                                    <div className="space-y-6 text-lg md:text-xl text-foreground/50 font-medium leading-relaxed max-w-2xl">
                                        <p>
                                            ZeeQue started with a singular vision: to nurture children in the light of the Qur&apos;an.
                                            From preschool initiatives like <span className="text-foreground font-bold border-b-2 border-violet-500/30">Zahratul Qur&apos;an</span> to today&apos;s structured online programs, we&apos;ve always believed that learning should be systematic, joyful, and value-centered.
                                        </p>
                                        <p>
                                            ZeeQue Plus is our answer for today&apos;s busy children — delivering regularity without the overwhelm.
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Creative Highlight Bar */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="pt-10 grid grid-cols-1 sm:grid-cols-3 gap-4"
                                >
                                    {[
                                        { title: "REGULAR ONLINE CLASSES", icon: Clock },
                                        { title: "QUALIFIED TEACHERS", icon: Users },
                                        { title: "CLASS 1-10 SYLLABUS", icon: GraduationCap }
                                    ].map((item, i) => (
                                        <div key={i} className="group relative p-6 rounded-[2rem] bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/5 backdrop-blur-sm transition-all duration-500 hover:bg-violet-50 dark:hover:bg-zinc-900 hover:border-violet-500/30 overflow-hidden shadow-sm dark:shadow-none">
                                            <div className="relative z-10 flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center text-zeeque-violet group-hover:bg-zeeque-violet group-hover:text-white transition-all duration-500">
                                                    <item.icon size={18} />
                                                </div>
                                                <span className="text-[10px] font-black leading-[1.2] uppercase tracking-[0.1em] text-foreground/60 group-hover:text-foreground">
                                                    {item.title}
                                                </span>
                                            </div>
                                            <div className="absolute inset-0 bg-zeeque-gradient opacity-0 group-hover:opacity-[0.03] transition-opacity" />
                                        </div>
                                    ))}
                                </motion.div>
                            </div>

                            {/* Right Side: Visual Depth */}
                            <div className="flex-1 relative w-full aspect-square max-w-[500px]">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    className="relative w-full h-full"
                                >
                                    {/* Main Frame */}
                                    <div className="absolute inset-0 rounded-[4rem] border-2 border-violet-500/10 dark:border-violet-500/20 bg-zinc-100/50 dark:bg-zinc-900/50 backdrop-blur-xl shadow-[0_0_100px_rgba(139,92,246,0.05)] dark:shadow-[0_0_100px_rgba(139,92,246,0.1)] overflow-hidden group">
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.1)_0%,transparent_100%)] z-10 opacity-40" />
                                        <Image
                                            src="/about%20hero%20image.png"
                                            alt="About ZeeQue Plus Hero"
                                            fill
                                            className="object-cover opacity-80 dark:opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                                            priority
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-zinc-900/80 via-transparent to-transparent z-10" />
                                    </div>

                                    {/* Floating Stats/Badges */}
                                    <motion.div
                                        animate={{ y: [-15, 15] }}
                                        transition={{ duration: 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                                        className="absolute -bottom-6 -left-10 p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-violet-100 dark:border-violet-500/30 shadow-2xl z-20"
                                    >
                                        <Sparkles className="text-zeeque-violet mb-3" size={24} />
                                        <p className="text-sm font-black text-foreground tracking-tighter leading-tight">
                                            Systematic. Joyful. 🎨 <br /> Value-centered. ⭐
                                        </p>
                                    </motion.div>

                                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-zeeque-gradient opacity-10 blur-[80px] rounded-full" />
                                </motion.div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent mx-auto max-w-7xl" />


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
                                    <h2 className="text-4xl font-serif font-black tracking-tight text-foreground dark:text-white">Our Mission</h2>
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
                                    <h2 className="text-4xl font-serif font-black tracking-tight text-white">Our Vision</h2>
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

            {/* Our Approach Section */}
            <section className="py-24 relative overflow-hidden bg-zinc-50 dark:bg-zinc-900/10">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" />
                <div className="container-fluid relative z-10">
                    <div className="text-center mb-20 space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 dark:bg-violet-900/10 text-zeeque-violet font-bold text-xs uppercase tracking-widest">
                            <Target size={16} /> Strategy & Method
                        </div>
                        <h2 className="text-5xl md:text-6xl font-serif font-black text-foreground dark:text-white">Our Approach</h2>
                        <p className="text-xl text-foreground/60 font-medium max-w-2xl mx-auto italic transition-all group-hover:not-italic group-hover:text-foreground">How We Teach Matters.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                        {[
                            {
                                title: "Child-Centered Teaching",
                                description: "We use age-appropriate examples, repetition, and encouragement to keep children engaged and excited about learning.",
                                icon: Heart,
                                color: "text-rose-500",
                                bg: "bg-rose-500/10",
                                index: "01",
                                span: "md:col-span-12 lg:col-span-7"
                            },
                            {
                                title: "Step-by-Step Levels",
                                description: "Clear progression: Letters → Words → Sentences → Full-page recitation → Selected Surahs with mastery at every stage.",
                                icon: GraduationCap,
                                color: "text-blue-500",
                                bg: "bg-blue-500/10",
                                index: "02",
                                span: "md:col-span-6 lg:col-span-5"
                            },
                            {
                                title: "Tajweed Made Simple",
                                description: "Complex rules like Makhārij and Qalqala are taught in simple language that children can grasp and apply instantly.",
                                icon: BookOpen,
                                color: "text-violet-500",
                                bg: "bg-violet-500/10",
                                index: "03",
                                span: "md:col-span-6 lg:col-span-5"
                            },
                            {
                                title: "Integrated Values",
                                description: "Beyond recitation, we nurture the soul through Akhlaq, Adab, Islamic habits, and essential daily duas.",
                                icon: Star,
                                color: "text-amber-500",
                                bg: "bg-amber-500/10",
                                index: "04",
                                span: "md:col-span-12 lg:col-span-7"
                            }
                        ].map((approach, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`group relative p-12 rounded-[4rem] bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/5 backdrop-blur-xl transition-all duration-700 hover:border-violet-500/30 overflow-hidden shadow-sm dark:shadow-none ${approach.span}`}
                            >
                                {/* Index Background */}
                                <div className="absolute top-10 right-14 text-9xl font-serif font-black text-white/[0.03] select-none transition-transform duration-700 group-hover:scale-110 group-hover:text-violet-500/[0.05]">
                                    {approach.index}
                                </div>

                                <div className="relative z-10 flex flex-col h-full justify-between">
                                    <div className={`w-20 h-20 ${approach.bg} rounded-[2rem] flex items-center justify-center ${approach.color} mb-12 shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                                        <approach.icon size={36} />
                                    </div>

                                    <div className="space-y-6">
                                        <h3 className="text-3xl md:text-4xl font-black text-foreground dark:text-white tracking-tight">{approach.title}</h3>
                                        <p className="text-xl text-foreground/60 dark:text-zinc-400 font-medium leading-relaxed max-w-xl">
                                            {approach.description}
                                        </p>
                                    </div>

                                    {/* Bottom Decor Line */}
                                    <div className="pt-10">
                                        <div className="h-1.5 w-12 bg-white/10 rounded-full group-hover:w-full group-hover:bg-zeeque-gradient transition-all duration-1000" />
                                    </div>
                                </div>

                                {/* Floating Mesh Glow */}
                                <div className={`absolute -bottom-20 -right-20 w-64 h-64 ${approach.color.replace('text', 'bg').split('-')[0]}-600/5 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" />
            </section>

            {/* Teacher Profiles Section */}
            <section className="py-24 bg-zinc-50 dark:bg-zinc-900/30">
                <div className="container-fluid">
                    <div className="text-center mb-24 space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/10 text-emerald-600 font-bold text-xs uppercase tracking-widest">
                            <Sparkles size={16} /> The Mentors
                        </div>
                        <h2 className="text-5xl md:text-6xl font-serif font-black text-foreground dark:text-white">Led by Passionate Educators</h2>
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

            {/* Parent Partnership Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="container-fluid relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="bg-zinc-50 dark:bg-zinc-900/40 rounded-[4rem] border border-zinc-200 dark:border-white/5 backdrop-blur-xl p-12 md:p-20 relative overflow-hidden">
                            {/* Decorative Background Glow */}
                            <div className="absolute -top-24 -left-24 w-96 h-96 bg-violet-600/10 blur-[120px] rounded-full" />

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                                <div className="space-y-8">
                                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-zeeque-violet text-xs font-black uppercase tracking-[0.2em]">
                                        <Users size={14} /> Partnership
                                    </div>
                                    <h2 className="text-5xl md:text-7xl font-serif font-black tracking-tighter leading-[1.05] text-foreground dark:text-white">
                                        Parent <br />
                                        <span className="bg-clip-text text-transparent bg-zeeque-gradient dark:text-white">Partnership.</span>
                                    </h2>
                                    <p className="text-xl text-foreground/60 dark:text-zinc-400 font-medium leading-relaxed">
                                        We believe parents are our primary partners in a child&apos;s spiritual development. ZeeQue Plus keeps you involved at every milestone.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {[
                                        { title: "Attendance & Consistancy", icon: CheckCircle2 },
                                        { title: "Lesson Progress", icon: BookOpen },
                                        { title: "Strengths & Growth", icon: Sparkles },
                                        { title: "Assessments & More", icon: ShieldCheck }
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                            className="p-8 rounded-[2.5rem] bg-white dark:bg-white/[0.03] border border-zinc-200 dark:border-white/5 hover:border-violet-500/30 transition-all duration-500 group shadow-sm dark:shadow-none"
                                        >
                                            <div className="w-12 h-12 rounded-2xl bg-violet-500/10 flex items-center justify-center text-zeeque-violet mb-6 group-hover:bg-zeeque-violet group-hover:text-white transition-all duration-500">
                                                <item.icon size={24} />
                                            </div>
                                            <p className="font-black text-sm uppercase tracking-widest text-foreground/80 dark:text-white/80">{item.title}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

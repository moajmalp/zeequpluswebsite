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
    Sparkles
} from "lucide-react";
import Image from "next/image";

const teachers = [
    {
        name: "Dr. Ahmed Mansoor",
        role: "Lead Instructor, Tajweed Specialist",
        bio: "15+ years experience in teaching Qur'anic sciences to young children.",
        color: "bg-blue-100",
    },
    {
        name: "Ustadha Fatima Zahra",
        role: "Hifz & Akhlaq Mentor",
        bio: "Certified Hafiza with a passion for creative child psychology in learning.",
        color: "bg-green-100",
    },
    {
        name: "Shaykh Zaid Ibrahim",
        role: "Adkar & Tafsir Teacher",
        bio: "Specializes in making complex Tafsir concepts simple for primary students.",
        color: "bg-purple-100",
    },
    {
        name: "Ustadha Maryam Ali",
        role: "Preschool Transition Expert",
        bio: "Expert in helping preschoolers adapt to structured school-level Qur'an learning.",
        color: "bg-orange-100",
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
        <div className="min-h-screen pt-32 pb-20 overflow-hidden">
            {/* Hero Section */}
            <section className="container mx-auto px-6 mb-24">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest"
                    >
                        <History size={14} /> Our Story
                    </motion.div>
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-5xl md:text-7xl font-black text-foreground tracking-tight leading-tight"
                    >
                        The Journey of <span className="text-primary italic">ZeeQue Plus</span>
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-foreground/60 font-medium max-w-2xl mx-auto"
                    >
                        ZeeQue Plus was born from a simple observation: children excel when their spiritual learning matches the same high standards as their academic schooling.
                    </motion.p>
                </div>
            </section>

            {/* Story & Vision Grid */}
            <section className="container mx-auto px-6 mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="p-10 bg-white rounded-[3rem] shadow-xl shadow-primary/5 border border-primary/5 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[4rem] transition-transform group-hover:scale-110" />
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                                    <Heart size={28} />
                                </div>
                                <h2 className="text-3xl font-black">Our Mission</h2>
                            </div>
                            <p className="text-lg text-foreground/70 leading-relaxed font-medium">
                                To provide school-going children with a structured, engaging, and spiritually enriching Qur&apos;anic ecosystem. We aim to bridge the gap between traditional learning and modern educational standards.
                            </p>
                        </div>

                        <div className="p-10 bg-primary text-white rounded-[3rem] shadow-2xl shadow-primary/20 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-[4rem] transition-transform group-hover:scale-110" />
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 bg-white text-primary rounded-2xl flex items-center justify-center shadow-lg">
                                    <Target size={28} />
                                </div>
                                <h2 className="text-3xl font-black">Our Vision</h2>
                            </div>
                            <p className="text-lg text-white/90 leading-relaxed font-medium">
                                To raise a generation that reads the Qur&apos;an with fluency, understands its core values, and implements beautiful character (Akhlaq) in their daily lives.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-6"
                    >
                        <div className="aspect-square bg-blue-50 rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center space-y-4 hover:scale-105 transition-transform">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm">
                                <CheckCircle2 size={32} />
                            </div>
                            <p className="font-black text-foreground">Structured Syllabus</p>
                        </div>
                        <div className="aspect-square bg-sky-50 rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center space-y-4 mt-12 hover:scale-105 transition-transform">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-accent shadow-sm">
                                <Users size={32} />
                            </div>
                            <p className="font-black text-foreground">Interactive Groups</p>
                        </div>
                        <div className="aspect-square bg-indigo-50 rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center space-y-4 -mt-12 hover:scale-105 transition-transform">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm">
                                <GraduationCap size={32} />
                            </div>
                            <p className="font-black text-foreground">Certified Experts</p>
                        </div>
                        <div className="aspect-square bg-zinc-50 rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center space-y-4 hover:scale-105 transition-transform">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-zinc-400 shadow-sm">
                                <Star size={32} />
                            </div>
                            <p className="font-black text-foreground">Character Focused</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Teacher Profiles Section */}
            <section className="container mx-auto px-6 py-24 bg-white rounded-[4rem]">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-xs uppercase tracking-widest">
                        <Sparkles size={14} /> The Mentors
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-foreground">Led by Passionate Educators</h2>
                    <p className="text-foreground/60 font-medium max-w-xl mx-auto">Meet the certified experts who guide your children through their spiritual journey.</p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {teachers.map((teacher) => (
                        <motion.div
                            key={teacher.name}
                            variants={itemVariants}
                            className="group p-8 rounded-[2.5rem] border-2 border-zinc-50 hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 bg-white flex flex-col items-center text-center"
                        >
                            <div className={`w-32 h-32 ${teacher.color} rounded-[2rem] mb-6 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                                <Users size={48} className="text-foreground/20" />
                            </div>
                            <h3 className="text-xl font-black mb-2">{teacher.name}</h3>
                            <p className="text-primary font-bold text-sm mb-4">{teacher.role}</p>
                            <p className="text-foreground/50 text-sm font-medium leading-relaxed">
                                {teacher.bio}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </div>
    );
}

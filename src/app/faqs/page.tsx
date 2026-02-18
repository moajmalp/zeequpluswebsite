"use client";

import { motion } from "framer-motion";
import {
    Plus,
    Minus,
    HelpCircle,
    MessageCircle,
    BookOpen,
    Clock,
    Users,
    ChevronDown
} from "lucide-react";
import { useState } from "react";

const faqData = [
    {
        category: "Joining & Beginners",
        questions: [
            {
                q: "What is ZeeQue Plus?",
                a: "ZeeQue Plus is an online Qur'anic education platform designed specifically for school-going children. We provide a structured, level-wise curriculum that includes Tajweed, Hifz, Akhlaq (Character building), and Adkar."
            },
            {
                q: "My child doesn't know any Arabic yet. Can they join?",
                a: "Yes. Beginners are most welcome. We place students in levels based on a short evaluation."
            }
        ]
    },
    {
        category: "Classes & Schedule",
        questions: [
            {
                q: "How many days a week are classes?",
                a: "Classes are conducted on fixed days per week as per batch. Details will be shared in the admission communication."
            },
            {
                q: "If we miss a class, what happens?",
                a: "Teachers give revision points and practice tasks so the child can catch up. In some cases, a brief extra support slot may be arranged as per policy."
            }
        ]
    },
    {
        category: "Certification & Support",
        questions: [
            {
                q: "Do students get a certificate?",
                a: "Yes. On completing the yearly syllabus and assessments, students receive a ZeeQue Plus level completion certificate."
            },
            {
                q: "Who are the teachers?",
                a: "Our teachers are certified experts in Qur'anic sciences, handpicked for their experience and ability to engage with children in an online setting."
            }
        ]
    }
];

export default function FAQsPage() {
    const [openIndex, setOpenIndex] = useState<string | null>("0-0");

    const toggle = (id: string) => {
        setOpenIndex(openIndex === id ? null : id);
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="container-fluid relative z-10 text-center">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 dark:bg-violet-900/10 border border-violet-100 dark:border-violet-800/20 mb-8"
                    >
                        <HelpCircle size={16} className="text-zeeque-violet" />
                        <span className="text-xs font-black uppercase tracking-widest text-zeeque-violet">Common Questions</span>
                    </motion.div>
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-6xl md:text-8xl font-serif font-black tracking-tight leading-[1.1] mb-8 bg-clip-text text-transparent bg-zeeque-gradient"
                    >
                        Everything You <br />
                        Need to Know.
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-foreground/60 font-medium max-w-2xl mx-auto leading-relaxed"
                    >
                        Find answers to common questions about our curriculum, classes, and how we help your child grow.
                    </motion.p>
                </div>
            </section>

            {/* Accordion Section */}
            <section className="pb-32 container-fluid max-w-4xl">
                <div className="space-y-16">
                    {faqData.map((group, groupIdx) => (
                        <div key={groupIdx} className="space-y-6">
                            <h2 className="text-2xl font-black text-foreground/40 uppercase tracking-widest pl-4">
                                {group.category}
                            </h2>
                            <div className="space-y-4">
                                {group.questions.map((faq, faqIdx) => {
                                    const id = `${groupIdx}-${faqIdx}`;
                                    const isOpen = openIndex === id;
                                    return (
                                        <motion.div
                                            key={id}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            className={`group rounded-[2rem] border transition-all duration-300 ${isOpen
                                                ? "bg-white dark:bg-[#121212] border-zeeque-violet shadow-2xl shadow-violet-500/10"
                                                : "bg-white dark:bg-[#121212] border-zinc-200 dark:border-violet-500/10 hover:border-violet-200 dark:hover:border-violet-500/30"
                                                }`}
                                        >
                                            <button
                                                onClick={() => toggle(id)}
                                                className="w-full text-left p-8 flex items-center justify-between"
                                            >
                                                <span className={`text-xl font-bold tracking-tight transition-colors ${isOpen ? "text-zeeque-violet" : "text-foreground"}`}>
                                                    {faq.q}
                                                </span>
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-zeeque-gradient text-white rotate-180" : "bg-violet-50 dark:bg-violet-900/10 text-zeeque-violet"
                                                    }`}>
                                                    <ChevronDown size={20} />
                                                </div>
                                            </button>
                                            <div className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                                                <div className="px-8 pb-8 pt-0">
                                                    <div className="h-px w-full bg-border mb-6" />
                                                    <p className="text-lg text-foreground/60 font-medium leading-relaxed">
                                                        {faq.a}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Support CTA */}
            <section className="py-24 bg-zinc-50 dark:bg-zinc-900/30">
                <div className="container-fluid text-center space-y-8">
                    <div className="w-20 h-20 bg-zeeque-gradient rounded-[2rem] mx-auto flex items-center justify-center text-white shadow-2xl shadow-violet-500/20">
                        <MessageCircle size={32} />
                    </div>
                    <h2 className="text-4xl font-serif font-black bg-clip-text text-transparent bg-zeeque-gradient">Still Have Questions?</h2>
                    <p className="text-xl text-foreground/60 font-medium max-w-xl mx-auto italic">
                        &quot;Seek knowledge from the cradle to the grave.&quot; Our team is here to help you every step of the way.
                    </p>
                    <div className="flex justify-center pt-4">
                        <button className="px-10 py-5 bg-background border-2 border-zeeque-violet text-zeeque-violet hover:bg-zeeque-gradient hover:text-white hover:border-transparent transition-all rounded-2xl font-black text-xl shadow-xl hover:shadow-violet-500/20">
                            Chat with an Advisor
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

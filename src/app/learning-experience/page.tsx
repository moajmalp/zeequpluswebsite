"use client";

import { motion } from "framer-motion";
import {
    Monitor,
    Smartphone,
    Tablet,
    Wifi,
    Video,
    Users,
    Calendar,
    HelpCircle,
    Zap,
    CheckCircle2
} from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
    {
        question: "What if we miss a class?",
        answer: "We understand that school schedules can be busy. For missed classes, we provide recorded session access and a 15-minute doubt-clearing slot on Fridays to ensure no child falls behind."
    },
    {
        question: "How frequent are the assessments?",
        answer: "We follow a 'Progressive Assessment' model. There are weekly micro-quizzes (5 mins) and a more formal review every 4 weeks to track Tajweed and Hifz fluency."
    },
    {
        question: "What device is best for the classes?",
        answer: "While smartphones work, we recommend a Laptop or Tablet (iPad/Android) for a better visual experience of the digital Qur'an scripts and slides."
    },
    {
        question: "Are the classes grouped by age or class level?",
        answer: "Classes are strictly grouped based on school classes (1-10). This ensures children are learning with peers of similar maturity levels and academic understanding."
    },
    {
        question: "Will my child get a certificate?",
        answer: "Yes! Every student receives a certificate of completion at the end of each level, recognizing their achievement in Tajweed, Hifz, and Akhlaq."
    }
];

export default function ExperiencePage() {
    return (
        <div className="min-h-screen pt-32 pb-20">
            {/* Hero Section */}
            <section className="container mx-auto px-6 mb-24">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest"
                    >
                        <Video size={14} /> The Classroom
                    </motion.div>
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-5xl md:text-7xl font-black text-foreground tracking-tight leading-tight"
                    >
                        Interactive <span className="text-primary">Live Learning</span> Experience
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-foreground/60 font-medium max-w-2xl mx-auto"
                    >
                        We use cutting-edge Ed-Tech tools to make Qur&apos;anic education as immersive as their favorite school subjects.
                    </motion.p>
                </div>
            </section>

            {/* Class Format Details */}
            <section className="container mx-auto px-6 mb-32">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Small Batches",
                            desc: "Limited to 10-12 students per batch to ensure personalized attention for every child's pronunciation.",
                            icon: <Users className="text-blue-600" />,
                            bg: "bg-blue-50"
                        },
                        {
                            title: "Live Interaction",
                            desc: "Real-time Q&A, group recitations, and interactive whiteboard games to keep motivation high.",
                            icon: <Zap className="text-amber-500" />,
                            bg: "bg-amber-50"
                        },
                        {
                            title: "Weekly Planning",
                            desc: "A clear weekly roadmap shared with parents, covering Hifz goals and Akhlaq stories.",
                            icon: <Calendar className="text-green-600" />,
                            bg: "bg-green-50"
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`p-10 ${item.bg} rounded-[3rem] space-y-6 hover:scale-[1.02] transition-transform`}
                        >
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-black">{item.title}</h3>
                            <p className="text-foreground/70 font-medium leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Tech Requirements */}
            <section className="container mx-auto px-6 mb-32">
                <div className="bg-primary rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-5xl font-black leading-tight">Technology <br />Requirements</h2>
                            <p className="text-white/80 text-lg font-medium">To ensure a smooth learning journey, we recommend the following setup:</p>

                            <div className="space-y-4">
                                {[
                                    { icon: <Monitor size={20} />, label: "Stable Internet Connection (2Mbps+)" },
                                    { icon: <Smartphone size={20} />, label: "Laptop, Tablet or Smartphone" },
                                    { icon: <CheckCircle2 size={20} />, label: "Clear Webcam & Microphone" },
                                    { icon: <Wifi size={20} />, label: "Zoom or Google Meet App" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl border border-white/10">
                                        <div className="text-white">{item.icon}</div>
                                        <span className="font-bold">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="aspect-square bg-white/10 rounded-[3rem] border border-white/20 flex flex-col items-center justify-center p-8 text-center space-y-4">
                                <Smartphone size={48} className="text-sky-300" />
                                <span className="font-black">Smartphone</span>
                            </div>
                            <div className="aspect-square bg-white/10 rounded-[3rem] border border-white/20 flex flex-col items-center justify-center p-8 text-center space-y-4 mt-12">
                                <Tablet size={48} className="text-sky-300" />
                                <span className="font-black">Tablet / iPad</span>
                            </div>
                            <div className="aspect-square bg-white/10 rounded-[3rem] border border-white/20 flex flex-col items-center justify-center p-8 text-center space-y-4 -mt-12">
                                <Monitor size={48} className="text-sky-300" />
                                <span className="font-black">Laptop / PC</span>
                            </div>
                            <div className="aspect-square bg-white/10 rounded-[3rem] border border-white/20 flex flex-col items-center justify-center p-8 text-center space-y-4">
                                <Wifi size={48} className="text-sky-300" />
                                <span className="font-black">4G / Wifi</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Accordion Section */}
            <section className="container mx-auto px-6 mb-32">
                <div className="max-w-3xl mx-auto space-y-12">
                    <div className="text-center space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest">
                            <HelpCircle size={14} /> Questions?
                        </div>
                        <h2 className="text-4xl font-black">Frequently Asked Questions</h2>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                        {faqItems.map((item, i) => (
                            <AccordionItem
                                key={i}
                                value={`item-${i}`}
                                className="border-2 border-zinc-100 rounded-3xl px-6 bg-white overflow-hidden data-[state=open]:border-primary/50 transition-all shadow-sm"
                            >
                                <AccordionTrigger className="hover:no-underline py-6">
                                    <span className="text-lg font-black text-left">{item.question}</span>
                                </AccordionTrigger>
                                <AccordionContent className="pb-6 text-foreground/60 font-medium text-base leading-relaxed">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* Final CTA */}
            <section className="container mx-auto px-6">
                <div className="bg-zinc-50 rounded-[3rem] p-12 text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-black">Ready to experience it?</h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-primary text-white px-8 py-4 rounded-2xl font-black text-lg hover:scale-105 transition-transform shadow-lg shadow-primary/20">
                            Book a Trial Class
                        </button>
                        <button className="bg-white border-2 border-zinc-200 px-8 py-4 rounded-2xl font-black text-lg hover:bg-zinc-50 transition-colors">
                            View Sample Batch
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

"use client";

import { motion } from "framer-motion";
import {
    Smartphone,
    Laptop,
    Headphones,
    Wifi,
    Video,
    Mic,
    ArrowRight,
    HelpCircle,
    PlayCircle,
    Monitor,
    Users
} from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ExperiencePage() {
    const techStack = [
        {
            icon: <Monitor size={40} />,
            title: "Laptop / PC",
            description: "Best for viewing shared screens and detailed lessons.",
            color: "bg-blue-50 dark:bg-blue-900/10 text-blue-500",
        },
        {
            icon: <Smartphone size={40} />,
            title: "Smartphone / Tablet",
            description: "Learn on the go with our fully responsive platform.",
            color: "bg-indigo-50 dark:bg-indigo-900/10 text-indigo-500",
        },
        {
            icon: <Headphones size={40} />,
            title: "Clear Audio",
            description: "Two-way audio ensures perfect recitation correction.",
            color: "bg-violet-50 dark:bg-violet-900/10 text-zeeque-violet",
        },
    ];

    const faqs = [
        {
            question: "What if we miss a class?",
            answer:
                "Don't worry! All live sessions are recorded. You can access the recording from your dashboard immediately after the class ends to catch up.",
        },
        {
            question: "Is the camera mandatory?",
            answer:
                "For Tajweed correction, seeing the student's articulation points is helpful but not strictly mandatory if parents prefer otherwise. However, audio interaction is essential.",
        },
        {
            question: "How do I track my child's progress?",
            answer:
                "We provide a weekly progress report via WhatsApp and a detailed monthly assessment card covering attendance, recitation quality, and memorization status.",
        },
        {
            question: "Can I choose the class timing?",
            answer:
                "Yes! During enrollment, you can select from our available batch slots (Morning, Evening, or Night) that best fit your schedule.",
        },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-background">
            {/* 1. HERO SECTION */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="container-fluid relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 dark:bg-rose-900/10 border border-rose-100 dark:border-rose-800/20 text-rose-500 font-black text-xs uppercase tracking-widest">
                            <div className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
                            Live Interactive Experience
                        </div>
                        <h1 className="text-6xl md:text-8xl font-serif font-black tracking-tight leading-[1.1] bg-clip-text text-transparent bg-zeeque-gradient">
                            Bring the <span className="italic">Madrasa</span> Home.
                        </h1>
                        <p className="text-xl md:text-2xl text-foreground/60 max-w-2xl mx-auto leading-relaxed font-medium">
                            Experience the spiritual connection of a traditional classroom with the convenience of modern technology.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="mt-20 relative max-w-5xl mx-auto rounded-[3rem] overflow-hidden shadow-2xl shadow-violet-500/10 border-[12px] border-white/50 dark:border-zinc-900/50 bg-zinc-900"
                    >
                        <div className="aspect-video relative flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1610484826967-09c5720778c7?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-zinc-900/40" />

                            <div className="relative z-10 flex flex-col items-center gap-8">
                                <button className="w-24 h-24 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white border border-white/20 cursor-pointer hover:scale-110 active:scale-95 transition-all shadow-2xl">
                                    <PlayCircle size={48} fill="currentColor" className="opacity-90" />
                                </button>
                                <p className="text-white font-black tracking-widest text-sm uppercase bg-white/10 px-6 py-2 rounded-full backdrop-blur-md border border-white/10">Watch the Experience</p>
                            </div>

                            {/* Fake UI Elements */}
                            <div className="absolute bottom-10 left-10 flex gap-3">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-12 h-12 rounded-2xl bg-zinc-800 border-2 border-white/10 flex items-center justify-center text-white/20">
                                        <Users size={20} />
                                    </div>
                                ))}
                                <div className="w-12 h-12 rounded-2xl bg-zeeque-gradient border-2 border-white/10 flex items-center justify-center text-xs font-black text-white">
                                    +24
                                </div>
                            </div>
                            <div className="absolute bottom-10 right-10 flex gap-6 text-white/50">
                                <Mic size={24} />
                                <Video size={24} />
                                <Wifi size={24} />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. TECHNOLOGY GRID SECTION */}
            <section className="py-32 bg-zinc-50 dark:bg-zinc-900/30 relative">
                <div className="container-fluid relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                        <h2 className="text-5xl font-serif font-black bg-clip-text text-transparent bg-zeeque-gradient">Learn on Any Device</h2>
                        <p className="text-xl text-foreground/60 font-medium">
                            Our platform is optimized for seamless learning across all your devices. No complex software installation required.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {techStack.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="bg-white dark:bg-[#121212] p-10 rounded-[3rem] shadow-2xl shadow-zinc-200 dark:shadow-none flex flex-col items-center text-center group border border-zinc-200 dark:border-violet-500/20 transition-all duration-500"
                            >
                                <div className={`w-24 h-24 ${item.color} rounded-[2rem] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-black text-foreground mb-4 tracking-tight">{item.title}</h3>
                                <p className="text-foreground/60 font-medium leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. FAQ ACCORDION SECTION */}
            <section className="py-32 relative overflow-hidden">
                <div className="container-fluid max-w-4xl relative z-10">
                    <div className="text-center mb-20 space-y-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-violet-50 dark:bg-violet-900/10 text-zeeque-violet mb-4 shadow-sm border border-border">
                            <HelpCircle size={32} />
                        </div>
                        <h2 className="text-5xl font-serif font-black bg-clip-text text-transparent bg-zeeque-gradient">Experience Details</h2>
                        <p className="text-xl text-foreground/60 font-medium">Everything you need to know about the ZeeQue Plus method.</p>
                    </div>

                    <Accordion type="single" collapsible className="w-full space-y-6">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border border-zinc-200 dark:border-violet-500/20 rounded-[2rem] px-8 bg-white dark:bg-[#121212] data-[state=open]:border-zeeque-violet data-[state=open]:shadow-2xl data-[state=open]:shadow-violet-500/10 transition-all duration-500 overflow-hidden"
                            >
                                <AccordionTrigger className="text-xl font-black text-left py-8 hover:no-underline hover:text-zeeque-violet transition-colors">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-foreground/60 text-lg font-medium leading-relaxed pb-8">
                                    <div className="h-px bg-border w-full mb-6" />
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    <div className="mt-20 text-center space-y-8">
                        <p className="text-foreground/40 font-black uppercase tracking-widest text-sm">Have more questions?</p>
                        <Button
                            asChild
                            className="bg-zeeque-gradient text-white px-12 py-8 rounded-[2rem] font-black text-xl hover:scale-110 dark:hover:brightness-110 active:scale-95 transition-all shadow-2xl shadow-violet-500/20"
                        >
                            <Link href="/contact" className="flex items-center gap-3">
                                Contact Support
                                <ArrowRight size={24} />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}

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
    Users,
    BookOpen,
    MessageSquare,
    CheckCircle2,
    Clock,
    Layers,
    Calendar,
    ClipboardCheck,
    BarChart3,
    MessagesSquare
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

    const classFormatItems = [
        {
            title: "Live Online Classes",
            description: "Conducted through secure online platforms, in small batches for better attention.",
            icon: <Video size={32} />,
            color: "text-blue-500",
            bg: "bg-blue-500/10"
        },
        {
            title: "Interactive Sessions",
            description: "Students recite individually, get corrections, and participate in Q&A.",
            icon: <Users size={32} />,
            color: "text-emerald-500",
            bg: "bg-emerald-500/10"
        },
        {
            title: "Home Practice",
            description: "Simple daily practice tasks are given for revision between classes.",
            icon: <BookOpen size={32} />,
            color: "text-zeeque-violet",
            bg: "bg-zeeque-violet/10"
        }
    ];

    const batchOptions = [
        {
            title: "Flexible Scheduling",
            description: "Multiple timing options available throughout the day to perfectly suit school schedules and busy routines.",
            icon: <Clock size={32} />,
            color: "text-orange-500",
            bg: "bg-orange-500/10",
            accent: "orange"
        },
        {
            title: "Level-Based Grouping",
            description: "Students are placed in separate batches based on their age and current level for personalized attention.",
            icon: <Layers size={32} />,
            color: "text-indigo-500",
            bg: "bg-indigo-500/10",
            accent: "indigo"
        }
    ];

    const parentCommItems = [
        {
            title: "Monthly Progress Updates",
            description: "Receive detailed monthly reports tracking your child's recitation quality and memorization milestones.",
            icon: <ClipboardCheck size={32} />,
            color: "text-rose-500",
            bg: "bg-rose-500/10"
        },
        {
            title: "Attendance Transparency",
            description: "Access attendance reports via your dashboard or on-request to stay informed about consistency.",
            icon: <BarChart3 size={32} />,
            color: "text-blue-500",
            bg: "bg-blue-500/10"
        },
        {
            title: "Parent-Teacher Meetings",
            description: "Regular opportunities to interact directly with teachers to discuss progress and areas for focus.",
            icon: <MessagesSquare size={32} />,
            color: "text-emerald-500",
            bg: "bg-emerald-500/10"
        }
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
            {/* 1. CLASS FORMAT HERO SECTION */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white dark:bg-background overflow-hidden">
                <div className="container-fluid relative">
                    {/* Decorative Background Text */}
                    <div className="absolute -top-20 -left-20 text-[15rem] font-serif font-black text-zinc-100 dark:text-zinc-900/40 select-none pointer-events-none -z-10">
                        Format
                    </div>

                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="w-full lg:w-1/2 space-y-8">
                            <h2 className="text-5xl md:text-7xl font-serif font-black leading-tight">
                                Our <span className="italic text-zeeque-violet">Class Format 🎓</span>
                            </h2>
                            <p className="text-xl text-foreground/60 font-medium leading-relaxed max-w-xl">
                                We've designed our classes to be as effective as traditional one-on-one sessions, leveraging the best of digital learning.
                            </p>

                            <div className="space-y-6 pt-4">
                                {classFormatItems.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex gap-6 items-start group"
                                    >
                                        <div className={`flex-shrink-0 w-16 h-16 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                                            {item.icon}
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-2xl font-black tracking-tight">{item.title}</h3>
                                            <p className="text-foreground/60 font-medium leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative rounded-[4rem] overflow-hidden border-[16px] border-zinc-100 dark:border-zinc-900 shadow-2xl"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1577891772427-68d51a9af32a?q=80&w=2070&auto=format&fit=crop"
                                    alt="Learning Class"
                                    className="w-full h-full object-cover aspect-[4/5]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                                <div className="absolute bottom-12 left-12 right-12 p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem]">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="flex -space-x-4">
                                            {[1, 2, 3, 4].map(i => (
                                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-zinc-200 overflow-hidden">
                                                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                                                </div>
                                            ))}
                                        </div>
                                        <div className="text-white font-black text-sm uppercase tracking-widest">
                                            Small Batch (5-7 Students)
                                        </div>
                                    </div>
                                    <p className="text-white/80 font-medium">
                                        "The small batch size ensures my teacher hears every letter I recite with perfect clarity."
                                    </p>
                                </div>
                            </motion.div>

                            {/* Floating Stats */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-10 -right-10 bg-white dark:bg-zinc-800 p-8 rounded-3xl shadow-2xl border border-border hidden md:block"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-500">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-black leading-none">100%</div>
                                        <div className="text-xs font-black uppercase tracking-widest text-foreground/40 mt-1">Direct Correction</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. BATCH OPTIONS SECTION */}
            <section className="py-32 relative overflow-hidden bg-zinc-50 dark:bg-zinc-900/10">
                <div className="container-fluid relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-800/20 text-indigo-500 font-black text-xs uppercase tracking-widest">
                            Batch Options
                        </div>
                        <h2 className="text-5xl font-serif font-black">
                            <span className="bg-clip-text text-transparent bg-zeeque-gradient">Tailored to Your Schedule</span> ⏰
                        </h2>
                        <p className="text-xl text-foreground/60 font-medium">
                            We offer flexible batch structures to ensure that learning never clashes with school or other commitments.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                        {batchOptions.map((option, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                whileHover={{ y: -10 }}
                                className="group bg-white dark:bg-[#121212] p-12 rounded-[3.5rem] border border-zinc-200 dark:border-white/5 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
                            >
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-${option.accent}-500/5 rounded-bl-[5rem] -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700`} />

                                <div className={`w-20 h-20 ${option.bg} ${option.color} rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm relative z-10`}>
                                    {option.icon}
                                </div>

                                <div className="relative z-10">
                                    <h3 className="text-3xl font-black text-foreground mb-6 tracking-tight">{option.title}</h3>
                                    <p className="text-xl text-foreground/60 font-medium leading-relaxed">
                                        {option.description}
                                    </p>
                                </div>

                                <div className="mt-8 flex items-center gap-2 text-foreground/40 font-black text-xs uppercase tracking-[0.2em] group-hover:text-zeeque-violet transition-colors">
                                    Learn More <ArrowRight size={14} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. PARENT COMMUNICATION SECTION */}
            <section className="py-32 bg-white dark:bg-background relative overflow-hidden">
                <div className="container-fluid">
                    <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
                        <div className="w-full lg:w-1/2 space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 dark:bg-rose-900/10 border border-rose-100 dark:border-rose-800/20 text-rose-500 font-black text-xs uppercase tracking-widest">
                                Communication
                            </div>
                            <h2 className="text-5xl md:text-7xl font-serif font-black leading-tight">
                                Parent <span className="italic text-zeeque-violet">Insights 👨‍👩‍👧</span>
                            </h2>
                            <p className="text-xl text-foreground/60 font-medium leading-relaxed max-w-xl">
                                We believe education is a partnership. Stay connected with your child's spiritual journey through our comprehensive reporting system.
                            </p>

                            <div className="grid grid-cols-1 gap-8 pt-4">
                                {parentCommItems.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex gap-6 items-start group p-6 rounded-[2rem] hover:bg-zinc-50 dark:hover:bg-zinc-900/40 transition-colors"
                                    >
                                        <div className={`flex-shrink-0 w-16 h-16 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                                            {item.icon}
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-2xl font-black tracking-tight">{item.title}</h3>
                                            <p className="text-foreground/60 font-medium leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative rounded-[4rem] overflow-hidden border-[16px] border-zinc-50 dark:border-zinc-900 shadow-2xl"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop"
                                    alt="Parent Communication"
                                    className="w-full h-full object-cover aspect-[4/5]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />

                                {/* Mock Report Card */}
                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-10 right-10 p-6 bg-white/95 dark:bg-zinc-900/95 backdrop-blur shadow-2xl rounded-3xl border border-border w-64"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-8 h-8 rounded-full bg-zeeque-gradient" />
                                        <div className="text-[10px] font-black uppercase tracking-widest opacity-40">Weekly Report</div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="h-2 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                                            <div className="h-full w-[85%] bg-emerald-500" />
                                        </div>
                                        <div className="flex justify-between items-center text-xs font-bold">
                                            <span>Makhraj Accuracy</span>
                                            <span className="text-emerald-500">85%</span>
                                        </div>
                                        <div className="h-2 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                                            <div className="h-full w-[90%] bg-blue-500" />
                                        </div>
                                        <div className="flex justify-between items-center text-xs font-bold">
                                            <span>Attendance</span>
                                            <span className="text-blue-500">90%</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>



            {/* 3. TECHNOLOGY GRID SECTION */}
            <section className="py-32 bg-white dark:bg-background relative">
                <div className="container-fluid relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                        <h2 className="text-5xl font-serif font-black">
                            <span className="bg-clip-text text-transparent bg-zeeque-gradient">Learn on Any Device</span> 🖥️
                        </h2>
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

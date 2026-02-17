"use client";

import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    Send,
    MessageSquare,
    Clock,
    Globe,
    ArrowRight
} from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thank you for reaching out! We will get back to you soon.");
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
                        <MessageSquare size={16} className="text-zeeque-violet" />
                        <span className="text-xs font-black uppercase tracking-widest text-zeeque-violet">Get in Touch</span>
                    </motion.div>
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-6xl md:text-8xl font-serif font-black tracking-tight leading-[1.1] mb-8 bg-clip-text text-transparent bg-zeeque-gradient"
                    >
                        Let&apos;s Start a <br />
                        Conversation.
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-foreground/60 font-medium max-w-2xl mx-auto leading-relaxed">
                        Have questions about our programs? Our friendly team is here to help your child embark on their spiritual journey.
                    </p>
                </div>
            </section>

            {/* Contact Grid */}
            <section className="pb-32 container-fluid">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* Contact Info Chips */}
                    <div className="lg:col-span-5 space-y-10">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-serif font-black bg-clip-text text-transparent bg-zeeque-gradient">Contact Information</h2>
                            <p className="text-lg text-foreground/60 font-medium leading-relaxed">
                                Join our community of parents dedicated to providing the best Qur&apos;anic education for their children.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                            {[
                                { icon: Phone, title: "Phone", detail: "+91 1800-419-ZEE", bg: "bg-blue-50 dark:bg-blue-900/10", color: "text-blue-500" },
                                { icon: Mail, title: "Email", detail: "learn@zeequplus.com", bg: "bg-violet-50 dark:bg-violet-900/10", color: "text-zeeque-violet" },
                                { icon: MapPin, title: "Location", detail: "CODO Space, Kerala, India", bg: "bg-emerald-50 dark:bg-emerald-900/10", color: "text-emerald-500" },
                                { icon: Clock, title: "Support Hours", detail: "Mon-Sat, 9AM-6PM", bg: "bg-orange-50 dark:bg-orange-900/10", color: "text-orange-500" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white dark:bg-[#121212] p-8 rounded-[3rem] border border-zinc-200 dark:border-violet-500/20 flex items-center gap-6 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all"
                                >
                                    <div className={`w-16 h-16 bg-background dark:bg-zinc-900 rounded-2xl flex items-center justify-center ${item.color} shadow-sm border border-border`}>
                                        <item.icon size={28} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-widest text-foreground/40 mb-1">{item.title}</p>
                                        <p className="text-xl font-bold text-foreground">{item.detail}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-white dark:bg-[#121212] p-10 lg:p-16 rounded-[4rem] border border-zinc-200 dark:border-violet-500/20 shadow-2xl shadow-violet-500/5 relative"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-zeeque-gradient opacity-10 rounded-bl-[4rem]" />

                            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-sm font-black uppercase tracking-widest text-foreground/60 ml-4">Child / Parent Name</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Enter your name"
                                            className="w-full px-8 py-5 rounded-2xl bg-zinc-50 dark:bg-background border border-border focus:border-zeeque-violet focus:ring-4 focus:ring-violet-500/10 outline-none transition-all font-medium text-lg placeholder:text-foreground/20"
                                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-sm font-black uppercase tracking-widest text-foreground/60 ml-4">Email Address</label>
                                        <input
                                            type="email"
                                            required
                                            placeholder="you@example.com"
                                            className="w-full px-8 py-5 rounded-2xl bg-zinc-50 dark:bg-background border border-border focus:border-zeeque-violet focus:ring-4 focus:ring-violet-500/10 outline-none transition-all font-medium text-lg placeholder:text-foreground/20"
                                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-sm font-black uppercase tracking-widest text-foreground/60 ml-4">Interested Program</label>
                                    <select
                                        className="w-full px-8 py-5 rounded-2xl bg-zinc-50 dark:bg-background border border-border focus:border-zeeque-violet focus:ring-4 focus:ring-violet-500/10 outline-none transition-all font-medium text-lg appearance-none cursor-pointer"
                                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                                    >
                                        <option value="">Select a program</option>
                                        <option value="foundation">Classes 1-3 (Foundation)</option>
                                        <option value="intermediate">Classes 4-7 (Intermediate)</option>
                                        <option value="advanced">Classes 8-10 (Advanced)</option>
                                        <option value="hifz">Dedicated Hifz Program</option>
                                        <option value="vacation">Vacation Specials</option>
                                    </select>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-sm font-black uppercase tracking-widest text-foreground/60 ml-4">Message</label>
                                    <textarea
                                        rows={5}
                                        placeholder="How can we help your child?"
                                        className="w-full px-8 py-5 rounded-2xl bg-zinc-50 dark:bg-background border border-border focus:border-zeeque-violet focus:ring-4 focus:ring-violet-500/10 outline-none transition-all font-medium text-lg resize-none placeholder:text-foreground/20"
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-6 rounded-2xl bg-zeeque-gradient text-white font-black text-xl shadow-2xl shadow-violet-500/20 hover:scale-[1.02] dark:hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-3"
                                >
                                    Send Message
                                    <Send size={24} />
                                </button>
                            </form>
                        </motion.div>
                    </div>

                </div>
            </section>
        </div>
    );
}

"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-background border-t border-border relative overflow-hidden transition-colors duration-300">
            {/* Decorative background element - Subtle Glow */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-zeeque-violet/10 rounded-full blur-3xl opacity-50 dark:opacity-20" />

            <div className="container-fluid py-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                    {/* Brand Column */}
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="w-12 h-12 bg-zeeque-gradient rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-violet-500/20 group-hover:rotate-6 transition-transform">
                                Z
                            </div>
                            <span className="text-3xl font-black bg-clip-text text-transparent bg-zeeque-gradient tracking-tight">
                                ZeeQue Plus
                            </span>
                        </Link>
                        <p className="text-foreground/60 leading-relaxed max-w-xs font-medium">
                            Empowering the next generation with a structured, step-by-step Qur&apos;anic journey. Excellence in Tajweed, Hifz, and Character.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                                <Link
                                    key={i}
                                    href="#"
                                    className="w-12 h-12 bg-violet-50 dark:bg-violet-900/10 text-zeeque-violet dark:text-violet-400 rounded-2xl flex items-center justify-center hover:bg-zeeque-gradient hover:!text-white transition-all duration-300 shadow-sm"
                                >
                                    <Icon size={22} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-black mb-8 text-foreground tracking-tight">Quick Links</h4>
                        <ul className="space-y-4">
                            {[
                                { name: "Home", path: "/" },
                                { name: "About Us", path: "/about" },
                                { name: "Experience", path: "/learning-experience" },
                                { name: "FAQs", path: "/faqs" },
                                { name: "Enroll Now", path: "/enroll" }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.path}
                                        className="text-foreground/60 hover:text-zeeque-violet transition-colors flex items-center gap-3 group font-medium"
                                    >
                                        <span className="w-2 h-2 bg-violet-200 dark:bg-violet-900 rounded-full group-hover:bg-zeeque-violet group-hover:scale-150 transition-all duration-300" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Courses */}
                    <div>
                        <h4 className="text-xl font-black mb-8 text-foreground tracking-tight">Target Groups</h4>
                        <ul className="space-y-4">
                            {["Foundation (Classes 1-3)", "Intermediate (Classes 4-7)", "Advanced (Classes 8-10)", "Vacation Specials"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-foreground/60 hover:text-zeeque-violet transition-colors font-medium">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h4 className="text-xl font-black mb-8 text-foreground tracking-tight">Connect</h4>
                        <ul className="space-y-6">
                            <li className="flex gap-4 items-start text-foreground/60">
                                <div className="p-3 bg-violet-50 dark:bg-violet-900/10 rounded-xl text-zeeque-violet dark:text-violet-400">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-foreground/40 mb-1">Call Us</p>
                                    <span className="font-bold text-foreground">+91 1800-419-ZEE</span>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start text-foreground/60">
                                <div className="p-3 bg-violet-50 dark:bg-violet-900/10 rounded-xl text-zeeque-violet dark:text-violet-400">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-foreground/40 mb-1">Email</p>
                                    <span className="font-bold text-foreground text-sm uppercase">learn@zeequplus.com</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-20 pt-10 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 text-foreground/40 text-sm font-bold tracking-tight">
                    <p>© {new Date().getFullYear()} ZEEQUE PLUS. ALL RIGHTS RESERVED.</p>
                    <div className="flex gap-10">
                        <Link href="/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-zeeque-violet transition-colors">PRIVACY POLICY</Link>
                        <Link href="/terms" target="_blank" rel="noopener noreferrer" className="hover:text-zeeque-violet transition-colors">TERMS OF USE</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

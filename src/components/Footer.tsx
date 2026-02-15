"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50" />

            <div className="container mx-auto px-6 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl">
                                Z
                            </div>
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                                ZeeQue Plus
                            </span>
                        </Link>
                        <p className="text-foreground/70 leading-relaxed max-w-xs">
                            A structured, step-by-step Qur&apos;an learning journey for school-going children — with Tajweed, Hifz, Akhlaq and Adkār.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="w-10 h-10 bg-blue-50 text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                <Facebook size={20} />
                            </Link>
                            <Link href="#" className="w-10 h-10 bg-blue-50 text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                <Instagram size={20} />
                            </Link>
                            <Link href="#" className="w-10 h-10 bg-blue-50 text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                <Twitter size={20} />
                            </Link>
                            <Link href="#" className="w-10 h-10 bg-blue-50 text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                <Youtube size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-foreground">Quick Links</h4>
                        <ul className="space-y-4">
                            {["Home", "About Us", "Learning Experience", "FAQs", "Enroll Now"].map((link) => (
                                <li key={link}>
                                    <Link href={`/${link.toLowerCase().replace(/ /g, "-")}`} className="text-foreground/70 hover:text-primary transition-colors flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 bg-primary/30 rounded-full group-hover:w-3 transition-all" />
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Courses */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-foreground">Our Programs</h4>
                        <ul className="space-y-4">
                            {["Classes 1-3", "Classes 4-6", "Classes 7-8", "Classes 9-10", "Summer Specials"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-foreground">Get in Touch</h4>
                        <ul className="space-y-4">
                            <li className="flex gap-3 text-foreground/70">
                                <Phone size={20} className="text-primary shrink-0" />
                                <span>+91 1800-ZEEQUE-PLUS</span>
                            </li>
                            <li className="flex gap-3 text-foreground/70">
                                <Mail size={20} className="text-primary shrink-0" />
                                <span>info@zeequplus.com</span>
                            </li>
                            <li className="flex gap-3 text-foreground/70">
                                <MapPin size={20} className="text-primary shrink-0" />
                                <span>CODO Space, Oriental Academy Campus, Kerala, India</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-foreground/50 text-sm">
                    <p>© {new Date().getFullYear()} ZeeQue Plus. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

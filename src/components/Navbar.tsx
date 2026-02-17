"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Learning Experience", href: "/learning-experience" },
        { name: "FAQs", href: "/faqs" },
        { name: "Contact Us", href: "/contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "glass-nav py-3 border-b border-violet-100 dark:border-violet-900/20 dark:shadow-[0_4px_20px_-4px_rgba(139,92,246,0.2)]"
                : "bg-transparent py-5"
                }`}
        >
            <div className="container-fluid flex justify-between items-center">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group relative z-50">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:rotate-12 transition-transform shadow-lg shadow-violet-500/30">
                        Z
                    </div>
                    <span className="text-2xl font-black bg-clip-text text-transparent bg-zeeque-gradient tracking-tight">
                        ZeeQue Plus
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-foreground/80 hover:text-primary font-medium transition-colors text-sm tracking-wide"
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* Theme Toggle */}
                    {mounted && (
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="rounded-full hover:bg-violet-100 dark:hover:bg-violet-900/30 text-foreground transition-all"
                        >
                            {theme === "dark" ? (
                                <Sun size={20} className="text-yellow-400" />
                            ) : (
                                <Moon size={20} className="text-violet-600" />
                            )}
                        </Button>
                    )}

                    <Link
                        href="/enroll"
                        className="bg-zeeque-gradient text-white px-6 py-2.5 rounded-2xl font-bold text-sm hover:opacity-90 hover:scale-[1.02] transition-all shadow-lg shadow-indigo-500/20"
                    >
                        Enroll Now
                    </Link>
                </div>

                {/* Mobile Controls */}
                <div className="flex md:hidden items-center gap-4">
                    {/* Theme Toggle Mobile */}
                    {mounted && (
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="rounded-full hover:bg-violet-100 dark:hover:bg-violet-900/30 text-foreground"
                        >
                            {theme === "dark" ? (
                                <Sun size={20} className="text-yellow-400" />
                            ) : (
                                <Moon size={20} className="text-violet-600" />
                            )}
                        </Button>
                    )}

                    <button
                        className="text-foreground p-2 hover:bg-violet-50 dark:hover:bg-violet-900/20 rounded-xl transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu with Violet Gradient */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 min-h-screen bg-zeeque-gradient backdrop-blur-xl animate-in slide-in-from-top duration-300 z-40">
                    <div className="flex flex-col gap-6 p-8 text-white">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-2xl font-bold hover:text-white/80 transition-colors border-b border-white/10 pb-4"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/enroll"
                            className="bg-white text-zeeque-violet text-center py-4 rounded-2xl font-bold text-xl mt-4 shadow-xl active:scale-95 transition-transform"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Enroll Now
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

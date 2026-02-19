import { ArrowLeft, ShieldCheck, Clock, FileText } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Privacy Policy | ZeeQue Plus",
    description: "Our commitment to protecting the privacy of our students and their families.",
};

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen pt-32 pb-20 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zeeque-violet/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-zeeque-indigo/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

            <div className="container-fluid relative z-10">
                {/* Navigation Breadcrumb */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-foreground/60 hover:text-zeeque-violet transition-colors mb-12 group"
                >
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-bold text-sm tracking-tight">Back to Home</span>
                </Link>

                {/* Hero Section */}
                <div className="max-w-4xl mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zeeque-violet/5 dark:bg-zeeque-violet/10 border border-zeeque-violet/20 text-zeeque-violet mb-6">
                        <ShieldCheck size={16} />
                        <span className="text-xs font-black uppercase tracking-widest">Legal Document</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter">
                        Privacy <span className="bg-clip-text text-transparent bg-zeeque-gradient">Policy</span>
                    </h1>
                    <div className="flex items-center gap-3 text-foreground/60">
                        <Clock size={18} className="text-zeeque-violet" />
                        <span className="font-bold text-sm">Effective Date: February 19, 2026</span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Main Content */}
                    <div className="lg:col-span-8 space-y-12">
                        <section className="bg-card/50 backdrop-blur-sm border border-border p-8 md:p-10 rounded-[2rem] shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 bg-zeeque-violet rounded-xl flex items-center justify-center text-white font-bold">1</div>
                                <h2 className="text-2xl font-black tracking-tight">Introduction</h2>
                            </div>
                            <p className="text-foreground/70 leading-relaxed text-lg">
                                ZeeQue Plus is committed to protecting the privacy of our students and their families. This policy explains how we collect and use information for our online Qur’an school services.
                            </p>
                        </section>

                        <section className="bg-card/50 backdrop-blur-sm border border-border p-8 md:p-10 rounded-[2rem] shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 bg-zeeque-violet rounded-xl flex items-center justify-center text-white font-bold">2</div>
                                <h2 className="text-2xl font-black tracking-tight">Information We Collect</h2>
                            </div>
                            <p className="text-foreground/70 leading-relaxed mb-6">
                                We collect information through our admission form, including:
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { title: "Student Details", desc: "Full Name, Date of Birth, Gender, and optional Aadhaar number." },
                                    { title: "Parent/Guardian", desc: "Name, occupation, mobile number, and email address." },
                                    { title: "Academic History", desc: "Current school, grade, and previous ZeeQue Preschool attendance." },
                                    { title: "Contact Info", desc: "Residential address and WhatsApp number for communication." }
                                ].map((item, idx) => (
                                    <li key={idx} className="p-4 rounded-2xl bg-violet-50/50 dark:bg-violet-900/10 border border-violet-100 dark:border-violet-800/20">
                                        <h3 className="font-black text-zeeque-violet text-sm mb-1 uppercase tracking-tight">{item.title}</h3>
                                        <p className="text-foreground/70 text-sm leading-snug">{item.desc}</p>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section className="bg-card/50 backdrop-blur-sm border border-border p-8 md:p-10 rounded-[2rem] shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 bg-zeeque-violet rounded-xl flex items-center justify-center text-white font-bold">3</div>
                                <h2 className="text-2xl font-black tracking-tight">Use of Information</h2>
                            </div>
                            <p className="text-foreground/70 leading-relaxed mb-6">Your data is used to:</p>
                            <div className="space-y-4">
                                {[
                                    "Manage student enrollment and batch assignments.",
                                    "Facilitate live online classes and interactive sessions.",
                                    "Provide parents with progress reports, attendance updates, and certifications.",
                                    "Communicate important course updates via WhatsApp or email."
                                ].map((text, idx) => (
                                    <div key={idx} className="flex gap-4 items-start group">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-zeeque-violet/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <div className="w-2 h-2 rounded-full bg-zeeque-violet" />
                                        </div>
                                        <p className="text-foreground/70 leading-relaxed">{text}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="bg-card/50 backdrop-blur-sm border border-border p-8 md:p-10 rounded-[2rem] shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 bg-zeeque-violet rounded-xl flex items-center justify-center text-white font-bold">4</div>
                                <h2 className="text-2xl font-black tracking-tight">Technology & Security</h2>
                            </div>
                            <p className="text-foreground/70 leading-relaxed text-lg italic border-l-4 border-zeeque-violet pl-6 py-2 bg-violet-50/30 dark:bg-violet-900/5 rounded-r-xl">
                                Classes are conducted through secure online platforms. We recommend students use headphones and a dedicated learning space to maintain privacy during recitation.
                            </p>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-32 space-y-8">
                            <div className="bg-zeeque-gradient p-8 rounded-[2rem] text-white shadow-xl shadow-violet-500/20">
                                <FileText className="mb-4 opacity-80" size={32} />
                                <h3 className="text-2xl font-black mb-4 tracking-tight">Need Help?</h3>
                                <p className="text-white/80 text-sm leading-relaxed mb-8">
                                    If you have any questions about our Privacy Policy, please contact our support team.
                                </p>
                                <Link
                                    href="/contact"
                                    className="block w-full text-center py-4 bg-white text-zeeque-violet font-black rounded-2xl hover:bg-opacity-90 transition-all active:scale-95"
                                >
                                    Contact Us
                                </Link>
                            </div>

                            <div className="p-8 border border-border rounded-[2rem] bg-card/30 backdrop-blur-sm">
                                <h3 className="text-lg font-black mb-6 tracking-tight">Other Documents</h3>
                                <div className="space-y-4">
                                    <Link
                                        href="/terms"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between p-4 rounded-xl hover:bg-violet-50 dark:hover:bg-violet-900/10 transition-colors group"
                                    >
                                        <span className="font-bold text-sm tracking-tight group-hover:text-zeeque-violet">Terms of Use</span>
                                        <ArrowLeft className="rotate-180 opacity-0 group-hover:opacity-100 transition-all" size={16} />
                                    </Link>
                                    <Link
                                        href="/prospectus"
                                        className="flex items-center justify-between p-4 rounded-xl hover:bg-violet-50 dark:hover:bg-violet-900/10 transition-colors group"
                                    >
                                        <span className="font-bold text-sm tracking-tight group-hover:text-zeeque-violet">Fee Prospectus</span>
                                        <ArrowLeft className="rotate-180 opacity-0 group-hover:opacity-100 transition-all" size={16} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

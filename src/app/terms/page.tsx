import { ArrowLeft, Scale, Clock, FileText, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Terms of Use | ZeeQue Plus",
    description: "Guidelines and terms designed to ensure a structured Qur’an learning journey.",
};

export default function TermsOfUse() {
    return (
        <main className="min-h-screen pt-32 pb-20 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-zeeque-indigo/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-zeeque-violet/10 rounded-full blur-[120px] translate-y-1/2 translate-x-1/2" />

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
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zeeque-indigo/5 dark:bg-zeeque-indigo/10 border border-zeeque-indigo/20 text-zeeque-indigo mb-6">
                        <Scale size={16} />
                        <span className="text-xs font-black uppercase tracking-widest">User Agreement</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter">
                        Terms of <span className="bg-clip-text text-transparent bg-zeeque-gradient">Use</span>
                    </h1>
                    <div className="flex items-center gap-3 text-foreground/60">
                        <Clock size={18} className="text-zeeque-violet" />
                        <span className="font-bold text-sm">Last Updated: February 19, 2026</span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Main Content */}
                    <div className="lg:col-span-8 space-y-12">
                        <section className="bg-card/50 backdrop-blur-sm border border-border p-8 md:p-10 rounded-[2rem] shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 bg-zeeque-indigo rounded-xl flex items-center justify-center text-white font-bold">1</div>
                                <h2 className="text-2xl font-black tracking-tight">Acceptance of Terms</h2>
                            </div>
                            <p className="text-foreground/70 leading-relaxed text-lg">
                                By enrolling in ZeeQue Plus, parents and guardians agree to these terms designed to ensure a structured Qur’an learning journey.
                            </p>
                        </section>

                        <section className="bg-card/50 backdrop-blur-sm border border-border p-8 md:p-10 rounded-[2rem] shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 bg-zeeque-indigo rounded-xl flex items-center justify-center text-white font-bold">2</div>
                                <h2 className="text-2xl font-black tracking-tight">Eligibility & Enrollment</h2>
                            </div>
                            <div className="space-y-4">
                                {[
                                    "The program is designed for school-going children from Classes 1 to 10.",
                                    "Admission is confirmed after the completion of the evaluation and fee payment."
                                ].map((text, idx) => (
                                    <div key={idx} className="flex gap-4 items-center p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-800/20">
                                        <CheckCircle2 className="text-zeeque-indigo shrink-0" size={20} />
                                        <p className="text-foreground/70 font-medium">{text}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="bg-card/50 backdrop-blur-sm border border-border p-8 md:p-10 rounded-[2rem] shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 bg-zeeque-indigo rounded-xl flex items-center justify-center text-white font-bold">3</div>
                                <h2 className="text-2xl font-black tracking-tight">Attendance & Conduct</h2>
                            </div>
                            <div className="space-y-6">
                                {[
                                    { title: "Schedules", desc: "Students are expected to join live sessions at their preferred batch timings (e.g., 7 AM, 5 PM, etc.)." },
                                    { title: "Missed Classes", desc: "If a class is missed, students should follow practice tasks provided by teachers to catch up." },
                                    { title: "Islamic Etiquette", desc: "Students must maintain Islamic etiquette (Akhlaq and Adab) during interactive sessions." }
                                ].map((item, idx) => (
                                    <div key={idx} className="relative pl-8 border-l-2 border-zeeque-indigo/20 group">
                                        <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-black border-2 border-zeeque-indigo ring-4 ring-zeeque-indigo/10 group-hover:bg-zeeque-indigo transition-all" />
                                        <h3 className="font-black text-foreground mb-1 tracking-tight uppercase text-xs tracking-widest text-zeeque-indigo">{item.title}</h3>
                                        <p className="text-foreground/70 leading-relaxed font-bold">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="bg-card/50 backdrop-blur-sm border border-border p-8 md:p-10 rounded-[2rem] shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 bg-zeeque-indigo rounded-xl flex items-center justify-center text-white font-bold">4</div>
                                <h2 className="text-2xl font-black tracking-tight">Fees & Certification</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-6 rounded-3xl bg-gradient-to-br from-violet-500/5 to-indigo-500/5 border border-border">
                                    <h3 className="font-black mb-2 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-zeeque-violet" />
                                        Official Fees
                                    </h3>
                                    <p className="text-sm text-foreground/60 leading-relaxed">
                                        Course fees must be paid according to the official ZeeQue Plus fee chart/prospectus.
                                    </p>
                                </div>
                                <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-500/5 to-blue-500/5 border border-border">
                                    <h3 className="font-black mb-2 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-zeeque-indigo" />
                                        Certification
                                    </h3>
                                    <p className="text-sm text-foreground/60 leading-relaxed">
                                        Certificates are awarded upon successful completion of the yearly syllabus and assessments.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="bg-card/50 backdrop-blur-sm border border-border p-8 md:p-10 rounded-[2rem] shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 bg-zeeque-indigo rounded-xl flex items-center justify-center text-white font-bold">5</div>
                                <h2 className="text-2xl font-black tracking-tight">Parent Responsibility</h2>
                            </div>
                            <div className="space-y-4">
                                {[
                                    "Parents are primary partners and must ensure students have the required technology (Smartphone/Laptop/Internet).",
                                    "Parents should monitor progress through the regular updates provided by the ZeeQue Plus team."
                                ].map((text, idx) => (
                                    <div key={idx} className="flex gap-4 items-start p-4 bg-white/50 dark:bg-black/50 rounded-2xl border border-border hover:border-zeeque-indigo/50 transition-colors">
                                        <div className="w-8 h-8 rounded-full bg-zeeque-indigo/10 flex items-center justify-center text-zeeque-indigo font-bold shrink-0">{idx + 1}</div>
                                        <p className="text-foreground/70 leading-relaxed pt-1">{text}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-32 space-y-8">
                            <div className="bg-zeeque-gradient p-8 rounded-[2rem] text-white shadow-xl shadow-indigo-500/20">
                                <FileText className="mb-4 opacity-80" size={32} />
                                <h3 className="text-2xl font-black mb-4 tracking-tight">Got Questions?</h3>
                                <p className="text-white/80 text-sm leading-relaxed mb-8">
                                    Understanding our terms is important. Feel free to reach out if any part of the journey is unclear.
                                </p>
                                <Link
                                    href="/contact"
                                    className="block w-full text-center py-4 bg-white text-zeeque-violet font-black rounded-2xl hover:bg-opacity-90 transition-all active:scale-95"
                                >
                                    Contact Support
                                </Link>
                            </div>

                            <div className="p-8 border border-border rounded-[2rem] bg-card/30 backdrop-blur-sm">
                                <h3 className="text-lg font-black mb-6 tracking-tight">Related Links</h3>
                                <div className="space-y-4">
                                    <Link
                                        href="/privacy"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between p-4 rounded-xl hover:bg-violet-50 dark:hover:bg-violet-900/10 transition-colors group"
                                    >
                                        <span className="font-bold text-sm tracking-tight group-hover:text-zeeque-violet">Privacy Policy</span>
                                        <ArrowLeft className="rotate-180 opacity-0 group-hover:opacity-100 transition-all" size={16} />
                                    </Link>
                                    <Link
                                        href="/learning-experience"
                                        className="flex items-center justify-between p-4 rounded-xl hover:bg-violet-50 dark:hover:bg-violet-900/10 transition-colors group"
                                    >
                                        <span className="font-bold text-sm tracking-tight group-hover:text-zeeque-violet">How we teach</span>
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

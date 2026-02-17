"use client";

import { useEffect, useState } from "react";

export default function BackgroundShapes() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute top-[10%] -left-[5%] w-[30%] h-[30%] bg-blue-100 dark:bg-indigo-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-50 dark:opacity-20 animate-blob" />
            <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-sky-100 dark:bg-violet-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-50 dark:opacity-20 animate-blob animation-delay-2000" />
            <div className="absolute -bottom-[10%] left-[20%] w-[35%] h-[35%] bg-blue-50 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-50 dark:opacity-20 animate-blob animation-delay-4000" />
        </div>
    );
}

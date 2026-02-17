"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm, type Path } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    ArrowLeft,
    CheckCircle2,
    User,
    Users,
    School,
    Sparkles,
    Calendar as CalendarIcon,
    Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox"; // Assuming Checkbox exists or using generic input
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

// --- VALIDATION SCHEMAS ---

const studentSchema = z.object({
    fullName: z.string().min(3, "Full name is required"),
    dob: z.string().min(1, "Date of birth is required"),
    gender: z.enum(["male", "female"] as const),
    aadhaar: z.string().optional(),
    completedZeeQuePreschool: z.boolean(),
});

const parentSchema = z.object({
    fatherName: z.string().min(3, "Father's name is required"),
    fatherOccupation: z.string().min(1, "Father's occupation is required"),
    fatherMobile: z.string().regex(/^[0-9]{10}$/, "Enter a valid 10-digit mobile number"),
    motherName: z.string().min(3, "Mother's name is required"),
    motherOccupation: z.string().min(1, "Mother's occupation is required"),
    motherMobile: z.string().regex(/^[0-9]{10}$/, "Enter a valid 10-digit mobile number"),
});

const programSchema = z.object({
    targetClass: z.string().min(1, "Please select a class"),
    preferredTiming: z.string().min(1, "Please select a batch timing"),
});

const enrollSchema = studentSchema.merge(parentSchema).merge(programSchema);

type EnrollFormData = z.infer<typeof enrollSchema>;

// --- STEPS DEFINITION ---

const STEPS = [
    { id: "student", title: "Student Profile", icon: <User size={18} /> },
    { id: "parent", title: "Parent Details", icon: <Users size={18} /> },
    { id: "program", title: "Program Selection", icon: <School size={18} /> },
];

export default function EnrollPage() {
    const [currentStep, setCurrentStep] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        trigger,
        formState: { errors },
    } = useForm<EnrollFormData>({
        resolver: zodResolver(enrollSchema),
        defaultValues: {
            fullName: "",
            dob: "",
            gender: "male",
            aadhaar: "",
            completedZeeQuePreschool: false,
            fatherName: "",
            fatherOccupation: "",
            fatherMobile: "",
            motherName: "",
            motherOccupation: "",
            motherMobile: "",
            targetClass: "",
            preferredTiming: "",
        }
    });

    const nextStep = async () => {
        const fieldsToValidate = getFieldsForStep(currentStep);
        const isValid = await trigger(fieldsToValidate as Path<EnrollFormData>[]);

        if (isValid) {
            if (currentStep < STEPS.length - 1) {
                setCurrentStep(prev => prev + 1);
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(prev => (prev > 0 ? prev - 1 : 0));
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const getFieldsForStep = (step: number): string[] => {
        switch (step) {
            case 0: return ["fullName", "dob", "gender", "aadhaar", "completedZeeQuePreschool"];
            case 1: return ["fatherName", "fatherOccupation", "fatherMobile", "motherName", "motherOccupation", "motherMobile"];
            case 2: return ["targetClass", "preferredTiming"];
            default: return [];
        }
    };

    const onSubmit = (data: EnrollFormData) => {
        console.log("Form Data:", data);
        setIsSubmitted(true);
    };

    const watchPreschool = watch("completedZeeQuePreschool");
    const watchClass = watch("targetClass");
    const watchTiming = watch("preferredTiming");
    const watchGender = watch("gender");

    if (isSubmitted) {
        return (
            <div className="min-h-screen pt-32 pb-20 flex items-center justify-center px-6 bg-background">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="max-w-md w-full text-center space-y-6 bg-white dark:bg-[#121212] p-12 rounded-[3rem] shadow-2xl border-4 border-violet-50 dark:border-violet-900/20"
                >
                    <div className="w-24 h-24 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 size={48} />
                    </div>
                    <h1 className="text-3xl font-serif font-black text-foreground leading-tight">Registration Submitted!</h1>
                    <p className="text-foreground/60 dark:text-foreground/50 font-medium">
                        Thank you for choosing ZeeQue Plus. Our team will contact you shortly with the assessment details.
                    </p>
                    <Button
                        asChild
                        className="w-full bg-zeeque-gradient text-white py-6 rounded-2xl text-lg font-bold hover:opacity-90 dark:hover:brightness-110 shadow-xl shadow-violet-500/20 transition-all"
                    >
                        <Link href="/">Back to Home</Link>
                    </Button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 pb-20 px-4 md:px-6 bg-background">
            <div className="max-w-3xl mx-auto space-y-10">

                {/* Header */}
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100/50 dark:bg-violet-900/10 text-zeeque-violet font-bold text-xs uppercase tracking-widest border border-violet-100 dark:border-violet-800/20">
                        <Sparkles size={14} /> Start Your Journey
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black font-serif text-foreground tracking-tight">Admission Form</h1>
                    <p className="text-foreground/60 font-medium font-sans">Join our structured Online Qur&apos;an learning ecosystem today.</p>
                </div>

                {/* Progress Journey */}
                <div className="space-y-6">
                    <div className="flex justify-between items-center px-4 md:px-12">
                        {STEPS.map((step, index) => (
                            <div key={step.id} className="flex flex-col items-center gap-3 relative z-10">
                                <div
                                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 border-4 ${index <= currentStep
                                        ? "bg-zeeque-violet text-white border-violet-100 dark:border-violet-800 shadow-xl shadow-violet-200 dark:shadow-violet-900/20"
                                        : "bg-white dark:bg-zinc-800 text-gray-300 dark:text-zinc-600 border-zinc-100 dark:border-zinc-700"
                                        }`}
                                >
                                    {index < currentStep ? <CheckCircle2 size={24} /> : step.icon}
                                </div>
                                <span className={`text-xs uppercase font-bold tracking-widest hidden sm:block ${index <= currentStep ? "text-zeeque-violet" : "text-gray-400 dark:text-zinc-600"
                                    }`}>
                                    {step.title}
                                </span>
                            </div>
                        ))}
                    </div>
                    {/* Custom Progress Bar with Gradient */}
                    <div className="relative h-3 bg-zinc-100 dark:bg-zinc-800 rounded-full mx-4 md:mx-12 -mt-10 mb-10 -z-0">
                        <motion.div
                            className="absolute top-0 left-0 h-full rounded-full bg-zeeque-gradient shadow-[0_0_15px_rgba(139,92,246,0.5)]"
                            initial={{ width: "0%" }}
                            animate={{ width: `${(currentStep / (STEPS.length - 1)) * 100}%` }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        />
                    </div>
                </div>

                {/* Form Card */}
                <Card className="rounded-[2.5rem] shadow-2xl shadow-violet-500/5 dark:shadow-violet-900/10 border-zinc-200 dark:border-violet-500/20 bg-white dark:bg-[#121212] overflow-hidden">
                    <CardContent className="p-6 md:p-12">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentStep}
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: -20, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: "circOut" }}
                                    className="space-y-8"
                                >
                                    {/* STEP 1: STUDENT DETAILS */}
                                    {currentStep === 0 && (
                                        <div className="space-y-8">
                                            <div className="space-y-6">
                                                <div className="space-y-3">
                                                    <Label className="text-lg font-bold text-foreground/80">Student's Full Name</Label>
                                                    <Input
                                                        {...register("fullName")}
                                                        placeholder="Enter legal name"
                                                        className="h-14 rounded-2xl px-6 bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 focus:bg-white dark:focus:bg-zinc-900 focus:ring-2 focus:ring-zeeque-violet focus:border-transparent transition-all text-lg"
                                                    />
                                                    {errors.fullName && <p className="text-red-500 dark:text-red-400 text-sm font-medium ml-2">{errors.fullName.message}</p>}
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div className="space-y-3">
                                                        <Label className="text-lg font-bold text-foreground/80">Date of Birth</Label>
                                                        <Popover>
                                                            <PopoverTrigger asChild>
                                                                <Button
                                                                    variant="outline"
                                                                    className={cn(
                                                                        "w-full h-14 rounded-2xl px-6 bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-left font-medium text-lg focus:ring-2 focus:ring-zeeque-violet",
                                                                        !watch("dob") && "text-muted-foreground"
                                                                    )}
                                                                >
                                                                    <Calendar size={18} className="mr-3 text-zeeque-violet" />
                                                                    {watch("dob") ? format(new Date(watch("dob")), "PPP") : "Select date"}
                                                                </Button>
                                                            </PopoverTrigger>
                                                            <PopoverContent className="w-auto p-0 rounded-2xl bg-white dark:bg-[#121212] border-zinc-100 dark:border-violet-500/20" align="start">
                                                                <Calendar
                                                                    mode="single"
                                                                    selected={watch("dob") ? new Date(watch("dob")) : undefined}
                                                                    onSelect={(date: Date | undefined) => setValue("dob", date ? date.toISOString().split('T')[0] : "")}
                                                                    initialFocus
                                                                    disabled={(date: Date) => date > new Date() || date < new Date("1900-01-01")}
                                                                />
                                                            </PopoverContent>
                                                        </Popover>
                                                        {errors.dob && <p className="text-red-500 dark:text-red-400 text-sm font-medium ml-2">{errors.dob.message}</p>}
                                                    </div>

                                                    <div className="space-y-3">
                                                        <Label className="text-lg font-bold text-foreground/80">Gender</Label>
                                                        <RadioGroup
                                                            value={watchGender}
                                                            onValueChange={(val) => setValue("gender", val as "male" | "female")}
                                                            className="flex gap-4 h-14"
                                                        >
                                                            <div className="flex-1 h-full">
                                                                <RadioGroupItem value="male" id="male" className="peer sr-only" />
                                                                <Label
                                                                    htmlFor="male"
                                                                    className="flex h-full items-center justify-center bg-zinc-50 dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 rounded-2xl cursor-pointer hover:bg-white dark:hover:bg-zinc-800/50 peer-data-[state=checked]:bg-violet-50 dark:peer-data-[state=checked]:bg-violet-900/10 peer-data-[state=checked]:border-zeeque-violet peer-data-[state=checked]:text-zeeque-violet transition-all font-bold"
                                                                >
                                                                    Male
                                                                </Label>
                                                            </div>
                                                            <div className="flex-1 h-full">
                                                                <RadioGroupItem value="female" id="female" className="peer sr-only" />
                                                                <Label
                                                                    htmlFor="female"
                                                                    className="flex h-full items-center justify-center bg-zinc-50 dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 rounded-2xl cursor-pointer hover:bg-white dark:hover:bg-zinc-800/50 peer-data-[state=checked]:bg-violet-50 dark:peer-data-[state=checked]:bg-violet-900/10 peer-data-[state=checked]:border-zeeque-violet peer-data-[state=checked]:text-zeeque-violet transition-all font-bold"
                                                                >
                                                                    Female
                                                                </Label>
                                                            </div>
                                                        </RadioGroup>
                                                    </div>
                                                </div>

                                                <div className="space-y-3">
                                                    <Label className="text-lg font-bold text-foreground/80">Aadhaar Number <span className="text-gray-400 font-normal">(Optional)</span></Label>
                                                    <Input
                                                        {...register("aadhaar")}
                                                        placeholder="xxxx xxxx xxxx"
                                                        className="h-14 rounded-2xl px-6 bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 focus:bg-white dark:focus:bg-zinc-900 focus:ring-2 focus:ring-zeeque-violet focus:border-transparent transition-all text-lg"
                                                    />
                                                </div>

                                                <div className="flex items-center space-x-3 p-4 rounded-2xl bg-violet-50/50 dark:bg-violet-900/5 border border-violet-100/50 dark:border-violet-900/20 transition-all hover:bg-violet-50 dark:hover:bg-violet-900/10">
                                                    <Checkbox
                                                        id="completedZeeQuePreschool"
                                                        checked={watchPreschool}
                                                        onCheckedChange={(checked) => setValue("completedZeeQuePreschool", !!checked)}
                                                        className="w-6 h-6 rounded-lg border-2 border-violet-200 dark:border-violet-800 data-[state=checked]:bg-zeeque-violet data-[state=checked]:border-zeeque-violet"
                                                    />
                                                    <div className="grid gap-1.5 leading-none">
                                                        <Label
                                                            htmlFor="completedZeeQuePreschool"
                                                            className="text-base font-bold text-foreground/80 cursor-pointer"
                                                        >
                                                            Has completed ZeeQue Preschool?
                                                        </Label>
                                                        <p className="text-sm text-foreground/40 font-medium">Check this if the student has previously studied in our preschool program.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* STEP 2: PARENT DETAILS */}
                                    {currentStep === 1 && (
                                        <div className="space-y-12">
                                            {/* Father */}
                                            <div className="space-y-6 relative p-6 rounded-3xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30">
                                                <div className="absolute -top-4 left-6 bg-white dark:bg-zinc-900 px-4 py-1 rounded-full border border-zinc-100 dark:border-zinc-800 shadow-sm text-sm font-black text-zeeque-violet uppercase tracking-wider">
                                                    Father&apos;s Details
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div className="space-y-3">
                                                        <Label className="font-bold">Name</Label>
                                                        <Input {...register("fatherName")} className="h-14 rounded-2xl bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 focus:ring-2 focus:ring-zeeque-violet" placeholder="Enter name" />
                                                        {errors.fatherName && <p className="text-red-500 dark:text-red-400 text-xs font-bold">{errors.fatherName.message}</p>}
                                                    </div>
                                                    <div className="space-y-3">
                                                        <Label className="font-bold">Occupation</Label>
                                                        <Input {...register("fatherOccupation")} className="h-14 rounded-2xl bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 focus:ring-2 focus:ring-zeeque-violet" placeholder="Enter occupation" />
                                                        {errors.fatherOccupation && <p className="text-red-500 dark:text-red-400 text-xs font-bold">{errors.fatherOccupation.message}</p>}
                                                    </div>
                                                    <div className="space-y-3 md:col-span-2">
                                                        <Label className="font-bold">Mobile Number</Label>
                                                        <Input {...register("fatherMobile")} className="h-14 rounded-2xl bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 focus:ring-2 focus:ring-zeeque-violet" placeholder="10-digit number" />
                                                        {errors.fatherMobile && <p className="text-red-500 dark:text-red-400 text-xs font-bold">{errors.fatherMobile.message}</p>}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Mother */}
                                            <div className="space-y-6 relative p-6 rounded-3xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30">
                                                <div className="absolute -top-4 left-6 bg-white dark:bg-zinc-900 px-4 py-1 rounded-full border border-zinc-100 dark:border-zinc-800 shadow-sm text-sm font-black text-zeeque-violet uppercase tracking-wider">
                                                    Mother&apos;s Details
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div className="space-y-3">
                                                        <Label className="font-bold">Name</Label>
                                                        <Input {...register("motherName")} className="h-14 rounded-2xl bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 focus:ring-2 focus:ring-zeeque-violet" placeholder="Enter name" />
                                                        {errors.motherName && <p className="text-red-500 dark:text-red-400 text-xs font-bold">{errors.motherName.message}</p>}
                                                    </div>
                                                    <div className="space-y-3">
                                                        <Label className="font-bold">Occupation</Label>
                                                        <Input {...register("motherOccupation")} className="h-14 rounded-2xl bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 focus:ring-2 focus:ring-zeeque-violet" placeholder="Enter occupation" />
                                                        {errors.motherOccupation && <p className="text-red-500 dark:text-red-400 text-xs font-bold">{errors.motherOccupation.message}</p>}
                                                    </div>
                                                    <div className="space-y-3 md:col-span-2">
                                                        <Label className="font-bold">Mobile Number</Label>
                                                        <Input {...register("motherMobile")} className="h-14 rounded-2xl bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 focus:ring-2 focus:ring-zeeque-violet" placeholder="10-digit number" />
                                                        {errors.motherMobile && <p className="text-red-500 dark:text-red-400 text-xs font-bold">{errors.motherMobile.message}</p>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* STEP 3: PROGRAM SELECTION (Classes & Batches) */}
                                    {currentStep === 2 && (
                                        <div className="space-y-10">

                                            {/* Class Selection */}
                                            <div className="space-y-4">
                                                <Label className="text-xl font-black text-foreground">Select Class</Label>
                                                <Select
                                                    value={watchClass}
                                                    onValueChange={(val) => setValue("targetClass", val)}
                                                >
                                                    <SelectTrigger className="h-20 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border-2 border-zinc-100 dark:border-zinc-800 focus:ring-2 focus:ring-zeeque-violet px-8 text-xl font-bold">
                                                        <SelectValue placeholder="Choose a class" />
                                                    </SelectTrigger>
                                                    <SelectContent className="rounded-2xl border-zinc-100 dark:border-violet-500/20 bg-white dark:bg-[#121212]">
                                                        {Array.from({ length: 10 }, (_, i) => {
                                                            const classNum = `${i + 1}`;
                                                            return (
                                                                <SelectItem key={classNum} value={classNum} className="py-4 text-lg font-bold focus:bg-violet-50 dark:focus:bg-violet-900/20">
                                                                    Class {classNum}
                                                                </SelectItem>
                                                            );
                                                        })}
                                                    </SelectContent>
                                                </Select>
                                                {errors.targetClass && <p className="text-red-500 dark:text-red-400 text-sm font-bold ml-2">{errors.targetClass.message}</p>}
                                            </div>

                                            {/* Batch Selection */}
                                            <div className="space-y-4">
                                                <Label className="text-xl font-black text-foreground">Preferred Batch Timing</Label>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {[
                                                        { id: "7-8am", label: "7:00 AM - 8:00 AM", icon: "🌞", meta: "Morning" },
                                                        { id: "5-6pm", label: "5:00 PM - 6:00 PM", icon: "🌆", meta: "Evening" },
                                                        { id: "7-8pm", label: "7:00 PM - 8:00 PM", icon: "🌙", meta: "Night" },
                                                        { id: "8-9pm", label: "8:00 PM - 9:00 PM", icon: "🌌", meta: "Late Night" },
                                                    ].map((timing) => (
                                                        <div key={timing.id} className="relative">
                                                            <input
                                                                type="radio"
                                                                id={timing.id}
                                                                value={timing.label}
                                                                {...register("preferredTiming")}
                                                                className="peer sr-only"
                                                            />
                                                            <Label
                                                                htmlFor={timing.id}
                                                                className="flex items-center gap-4 p-5 rounded-3xl border-2 border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 cursor-pointer hover:border-violet-200 dark:hover:border-violet-900 transition-all peer-checked:border-zeeque-violet peer-checked:bg-violet-50/30 dark:peer-checked:bg-violet-900/10 peer-checked:ring-offset-0 peer-checked:shadow-lg peer-checked:shadow-violet-100 dark:peer-checked:shadow-violet-900/20"
                                                            >
                                                                <div className="w-14 h-14 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-3xl peer-checked:bg-white dark:peer-checked:bg-zinc-900">
                                                                    {timing.icon}
                                                                </div>
                                                                <div className="flex-1">
                                                                    <div className="text-xs font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-wider mb-1">{timing.meta}</div>
                                                                    <div className="text-lg font-black text-foreground">{timing.label}</div>
                                                                </div>
                                                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${watchTiming === timing.label ? "border-zeeque-violet" : "border-zinc-200 dark:border-zinc-700"}`}>
                                                                    {watchTiming === timing.label && <div className="w-3 h-3 rounded-full bg-zeeque-violet shadow-[0_0_8px_rgba(139,92,246,0.6)]" />}
                                                                </div>
                                                            </Label>
                                                        </div>
                                                    ))}
                                                </div>
                                                {errors.preferredTiming && <p className="text-red-500 dark:text-red-400 text-sm font-bold ml-2">{errors.preferredTiming.message}</p>}
                                            </div>

                                            <div className="p-5 bg-blue-50/50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-800 flex gap-4 text-sm text-blue-900 dark:text-blue-300">
                                                <Clock className="shrink-0 w-5 h-5 text-blue-600 dark:text-blue-400" />
                                                <p><span className="font-bold">Note:</span> Standard classes are conducted Monday to Friday, 1 hour per day.</p>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>

                            {/* Navigation Actions */}
                            <div className="flex items-center gap-4 pt-6 mt-6 border-t border-zinc-100/50 dark:border-zinc-800/50">
                                {currentStep > 0 && (
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={prevStep}
                                        className="h-14 px-8 rounded-2xl border-2 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 font-bold text-gray-600 dark:text-gray-400 transition-all hover:border-zinc-300 dark:hover:border-zinc-700 bg-white dark:bg-[#121212]"
                                    >
                                        <ArrowLeft size={18} className="mr-2" />
                                        Back
                                    </Button>
                                )}
                                <Button
                                    type="button"
                                    onClick={currentStep < STEPS.length - 1 ? nextStep : handleSubmit(onSubmit)}
                                    className="flex-1 h-14 bg-zeeque-gradient text-white rounded-2xl font-bold text-lg hover:opacity-90 dark:hover:brightness-110 hover:scale-[1.01] shadow-xl shadow-indigo-200 dark:shadow-violet-900/20 transition-all"
                                >
                                    {currentStep < STEPS.length - 1 ? (
                                        <>Continue <ArrowRight size={18} className="ml-2" /></>
                                    ) : (
                                        <>Submit Application <CheckCircle2 size={18} className="ml-2" /></>
                                    )}
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>

                <div className="text-center text-gray-400 text-xs font-medium">
                    Protected by ZeeQue Secure Enrollment. By continuing, you agree to our Terms & Privacy Policy.
                </div>
            </div>
        </div>
    );
}

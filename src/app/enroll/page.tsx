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
    Clock,
    Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";

// --- VALIDATION SCHEMAS ---

const studentSchema = z.object({
    fullName: z.string().min(3, "Full name is required"),
    dob: z.string().min(1, "Date of birth is required"),
    gender: z.enum(["male", "female"] as [string, ...string[]]),
    aadhaar: z.string().optional(),
});

const parentSchema = z.object({
    fatherName: z.string().min(3, "Father's name is required"),
    fatherOccupation: z.string().min(1, "Father's occupation is required"),
    fatherMobile: z.string().regex(/^[0-9]{10}$/, "Enter a valid 10-digit mobile number"),
    motherName: z.string().min(3, "Mother's name is required"),
    motherOccupation: z.string().min(1, "Mother's occupation is required"),
    motherMobile: z.string().regex(/^[0-9]{10}$/, "Enter a valid 10-digit mobile number"),
});

const academicSchema = z.object({
    currentSchool: z.string().min(1, "Current school name is required"),
    targetClass: z.string().min(1, "Please select class"),
    completedZeeQuePreschool: z.enum(["yes", "no"] as [string, ...string[]]),
    preschoolInfo: z.object({
        name: z.string().optional(),
        year: z.string().optional(),
        certificateNo: z.string().optional(),
    }).optional(),
});

const batchSchema = z.object({
    preferredTiming: z.string().min(1, "Please select a batch timing"),
});

const enrollSchema = z.object({
    ...studentSchema.shape,
    ...parentSchema.shape,
    ...academicSchema.shape,
    ...batchSchema.shape,
});

type EnrollFormData = z.infer<typeof enrollSchema>;

// --- STEPS DEFINITION ---

const STEPS = [
    { id: "student", title: "Student Details", icon: <User size={18} /> },
    { id: "parent", title: "Parent Details", icon: <Users size={18} /> },
    { id: "academic", title: "Academic Info", icon: <School size={18} /> },
    { id: "batch", title: "Batch Selection", icon: <Clock size={18} /> },
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
            gender: "male",
            completedZeeQuePreschool: "no",
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
            case 0: return ["fullName", "dob", "gender", "aadhaar"];
            case 1: return ["fatherName", "fatherOccupation", "fatherMobile", "motherName", "motherOccupation", "motherMobile"];
            case 2: return ["currentSchool", "targetClass", "completedZeeQuePreschool"];
            case 3: return ["preferredTiming"];
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
            <div className="min-h-screen pt-32 pb-20 flex items-center justify-center px-6">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="max-w-md w-full text-center space-y-6 bg-white p-12 rounded-[3rem] shadow-2xl border-4 border-primary/5"
                >
                    <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 size={48} />
                    </div>
                    <h1 className="text-3xl font-black text-foreground leading-tight">Registration Submitted!</h1>
                    <p className="text-foreground/60 font-medium">
                        Thank you for choosing ZeeQue Plus. Our team will contact you shortly with the assessment details and fee information.
                    </p>
                    <Button
                        asChild
                        className="w-full bg-primary py-6 rounded-2xl text-lg font-bold hover:bg-primary/90"
                    >
                        <Link href="/">Back to Home</Link>
                    </Button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 bg-zinc-50/50">
            <div className="max-w-2xl mx-auto space-y-10">

                {/* Header */}
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest">
                        <Sparkles size={14} /> Start Your Journey
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-foreground tracking-tight">Admission Form</h1>
                    <p className="text-foreground/60 font-medium">Join our structured Online Qur&apos;an learning ecosystem today.</p>
                </div>

                {/* Progress Journey */}
                <div className="space-y-6">
                    <div className="flex justify-between items-center px-2">
                        {STEPS.map((step, index) => (
                            <div key={step.id} className="flex flex-col items-center gap-2">
                                <div
                                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${index <= currentStep
                                        ? "bg-primary text-white shadow-lg shadow-primary/20 scale-110"
                                        : "bg-white text-foreground/30 border-2 border-zinc-100"
                                        }`}
                                >
                                    {index < currentStep ? <CheckCircle2 size={20} /> : step.icon}
                                </div>
                                <span className={`text-[10px] uppercase font-black tracking-tighter hidden sm:block ${index <= currentStep ? "text-primary opacity-100" : "text-foreground opacity-30"
                                    }`}>
                                    {step.title}
                                </span>
                            </div>
                        ))}
                    </div>
                    <Progress value={(currentStep / (STEPS.length - 1)) * 100} className="h-2 rounded-full bg-white" />
                </div>

                {/* Form Card */}
                <Card className="rounded-[2.5rem] shadow-xl shadow-primary/5 border-none bg-white overflow-hidden">
                    <CardContent className="p-8 md:p-12">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentStep}
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: -20, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-8"
                                >
                                    {/* STEP 1: STUDENT DETAILS */}
                                    {currentStep === 0 && (
                                        <div className="space-y-6">
                                            <div className="grid gap-6">
                                                <div className="space-y-3">
                                                    <Label className="text-lg font-bold">Full Name of Student</Label>
                                                    <Input
                                                        {...register("fullName")}
                                                        placeholder="Enter legal name"
                                                        className="bg-zinc-50/50 border-2 border-zinc-100 h-14 rounded-2xl px-6 focus:bg-white transition-all text-lg"
                                                    />
                                                    {errors.fullName && <p className="text-red-500 text-sm font-bold ml-2">{errors.fullName.message}</p>}
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div className="space-y-3">
                                                        <Label className="text-lg font-bold">Date of Birth</Label>
                                                        <Input
                                                            type="date"
                                                            {...register("dob")}
                                                            className="bg-zinc-50/50 border-2 border-zinc-100 h-14 rounded-2xl px-6 focus:bg-white text-lg"
                                                        />
                                                        {errors.dob && <p className="text-red-500 text-sm font-bold ml-2">{errors.dob.message}</p>}
                                                    </div>
                                                    <div className="space-y-3">
                                                        <Label className="text-lg font-bold">Gender</Label>
                                                        <RadioGroup
                                                            value={watchGender}
                                                            onValueChange={(val) => setValue("gender", val as "male" | "female")}
                                                            className="flex gap-4"
                                                        >
                                                            <div className="flex-1">
                                                                <RadioGroupItem value="male" id="male" className="peer sr-only" />
                                                                <Label
                                                                    htmlFor="male"
                                                                    className="flex items-center justify-center h-14 bg-zinc-50 border-2 border-zinc-100 rounded-2xl cursor-pointer hover:bg-white peer-data-[state=checked]:bg-primary peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-white transition-all font-bold"
                                                                >
                                                                    Male
                                                                </Label>
                                                            </div>
                                                            <div className="flex-1">
                                                                <RadioGroupItem value="female" id="female" className="peer sr-only" />
                                                                <Label
                                                                    htmlFor="female"
                                                                    className="flex items-center justify-center h-14 bg-zinc-50 border-2 border-zinc-100 rounded-2xl cursor-pointer hover:bg-white peer-data-[state=checked]:bg-primary peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-white transition-all font-bold"
                                                                >
                                                                    Female
                                                                </Label>
                                                            </div>
                                                        </RadioGroup>
                                                    </div>
                                                </div>
                                                <div className="space-y-3">
                                                    <Label className="text-lg font-bold">Aadhaar Number (Optional)</Label>
                                                    <Input
                                                        {...register("aadhaar")}
                                                        placeholder="xxxx xxxx xxxx"
                                                        className="bg-zinc-50/50 border-2 border-zinc-100 h-14 rounded-2xl px-6 focus:bg-white text-lg"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* STEP 2: PARENT DETAILS */}
                                    {currentStep === 1 && (
                                        <div className="space-y-10">
                                            <div className="space-y-6">
                                                <h3 className="text-xl font-black text-primary border-b-2 border-primary/5 pb-2">Father&apos;s Information</h3>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div className="space-y-3">
                                                        <Label className="font-bold">Full Name</Label>
                                                        <Input {...register("fatherName")} className="h-14 rounded-2xl" placeholder="Father's name" />
                                                        {errors.fatherName && <p className="text-red-500 text-xs font-bold">{errors.fatherName.message}</p>}
                                                    </div>
                                                    <div className="space-y-3">
                                                        <Label className="font-bold">Occupation</Label>
                                                        <Input {...register("fatherOccupation")} className="h-14 rounded-2xl" placeholder="Occupation" />
                                                        {errors.fatherOccupation && <p className="text-red-500 text-xs font-bold">{errors.fatherOccupation.message}</p>}
                                                    </div>
                                                    <div className="space-y-3 md:col-span-2">
                                                        <Label className="font-bold">Mobile Number</Label>
                                                        <Input {...register("fatherMobile")} className="h-14 rounded-2xl" placeholder="10-digit number" />
                                                        {errors.fatherMobile && <p className="text-red-500 text-xs font-bold">{errors.fatherMobile.message}</p>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="space-y-6">
                                                <h3 className="text-xl font-black text-primary border-b-2 border-primary/5 pb-2">Mother&apos;s Information</h3>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div className="space-y-3">
                                                        <Label className="font-bold">Full Name</Label>
                                                        <Input {...register("motherName")} className="h-14 rounded-2xl" placeholder="Mother's name" />
                                                        {errors.motherName && <p className="text-red-500 text-xs font-bold">{errors.motherName.message}</p>}
                                                    </div>
                                                    <div className="space-y-3">
                                                        <Label className="font-bold">Occupation</Label>
                                                        <Input {...register("motherOccupation")} className="h-14 rounded-2xl" placeholder="Occupation" />
                                                        {errors.motherOccupation && <p className="text-red-500 text-xs font-bold">{errors.motherOccupation.message}</p>}
                                                    </div>
                                                    <div className="space-y-3 md:col-span-2">
                                                        <Label className="font-bold">Mobile Number</Label>
                                                        <Input {...register("motherMobile")} className="h-14 rounded-2xl" placeholder="10-digit number" />
                                                        {errors.motherMobile && <p className="text-red-500 text-xs font-bold">{errors.motherMobile.message}</p>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* STEP 3: ACADEMIC INFO */}
                                    {currentStep === 2 && (
                                        <div className="space-y-8">
                                            <div className="space-y-3">
                                                <Label className="text-lg font-bold">Current School Name</Label>
                                                <Input {...register("currentSchool")} className="h-14 rounded-2xl" placeholder="Name of school child attends" />
                                                {errors.currentSchool && <p className="text-red-500 text-xs font-bold">{errors.currentSchool.message}</p>}
                                            </div>
                                            <div className="space-y-3">
                                                <Label className="text-lg font-bold">Class / Grade Admitting To</Label>
                                                <Select
                                                    value={watchClass}
                                                    onValueChange={(val) => setValue("targetClass", val)}
                                                >
                                                    <SelectTrigger className="h-14 rounded-2xl text-lg font-medium border-2 border-zinc-100 bg-zinc-50/50">
                                                        <SelectValue placeholder="Select Class (1-10)" />
                                                    </SelectTrigger>
                                                    <SelectContent className="rounded-2xl border-2">
                                                        {Array.from({ length: 10 }, (_, i) => (
                                                            <SelectItem key={i + 1} value={`${i + 1}`} className="text-lg py-3">Class {i + 1}</SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                                {errors.targetClass && <p className="text-red-500 text-xs font-bold">{errors.targetClass.message}</p>}
                                            </div>
                                            <div className="space-y-6 pt-4">
                                                <Label className="text-lg font-bold">Did the student complete ZeeQue Preschool?</Label>
                                                <RadioGroup
                                                    value={watchPreschool}
                                                    onValueChange={(val) => setValue("completedZeeQuePreschool", val as "yes" | "no")}
                                                    className="flex gap-4"
                                                >
                                                    <div className="flex-1">
                                                        <RadioGroupItem value="yes" id="yes" className="peer sr-only" />
                                                        <Label htmlFor="yes" className="flex items-center justify-center h-12 bg-zinc-50 border-2 border-zinc-100 rounded-xl cursor-pointer peer-data-[state=checked]:bg-primary peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-white transition-all font-bold">Yes</Label>
                                                    </div>
                                                    <div className="flex-1">
                                                        <RadioGroupItem value="no" id="no" className="peer sr-only" />
                                                        <Label htmlFor="no" className="flex items-center justify-center h-12 bg-zinc-50 border-2 border-zinc-100 rounded-xl cursor-pointer peer-data-[state=checked]:bg-primary peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-white transition-all font-bold">No</Label>
                                                    </div>
                                                </RadioGroup>
                                            </div>
                                        </div>
                                    )}

                                    {/* STEP 4: BATCH SELECTION */}
                                    {currentStep === 3 && (
                                        <div className="space-y-8">
                                            <div className="space-y-4">
                                                <Label className="text-xl font-black text-foreground block mb-4">Preferred Batch Timing</Label>
                                                <div className="grid grid-cols-1 gap-4">
                                                    {[
                                                        { id: "7-8am", label: "7:00 AM to 8:00 AM", icon: "🌞" },
                                                        { id: "5-6pm", label: "5:00 PM to 6:00 PM", icon: "🌆" },
                                                        { id: "7-8pm", label: "7:00 PM to 8:00 PM", icon: "🌙" },
                                                        { id: "8-9pm", label: "8:00 PM to 9:00 PM", icon: "🌌" },
                                                    ].map((timing) => (
                                                        <div key={timing.id}>
                                                            <input
                                                                type="radio"
                                                                id={timing.id}
                                                                className="peer sr-only"
                                                                value={timing.label}
                                                                name="preferredTiming"
                                                                checked={watchTiming === timing.label}
                                                                onChange={() => setValue("preferredTiming", timing.label)}
                                                            />
                                                            <Label
                                                                htmlFor={timing.id}
                                                                className="flex items-center justify-between p-6 bg-zinc-50 border-2 border-zinc-100 rounded-3xl cursor-pointer peer-checked:bg-primary peer-checked:border-primary peer-checked:text-white transition-all group active:scale-[0.98]"
                                                            >
                                                                <div className="flex items-center gap-4">
                                                                    <span className="text-2xl">{timing.icon}</span>
                                                                    <span className="text-lg font-black">{timing.label}</span>
                                                                </div>
                                                                <div className={`w-6 h-6 rounded-full border-4 flex items-center justify-center transition-all ${watchTiming === timing.label ? "border-white bg-white" : "border-zinc-200"
                                                                    }`}>
                                                                    {watchTiming === timing.label && <div className="w-2 h-2 rounded-full bg-primary" />}
                                                                </div>
                                                            </Label>
                                                        </div>
                                                    ))}
                                                </div>
                                                {errors.preferredTiming && <p className="text-red-500 text-xs font-bold pl-2">{errors.preferredTiming.message}</p>}
                                            </div>

                                            <div className="p-6 bg-blue-50/50 rounded-3xl border-2 border-blue-100 flex gap-4">
                                                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shrink-0">
                                                    <Clock size={24} />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-primary">Class Schedule</p>
                                                    <p className="text-sm text-foreground/60 font-medium">Standard classes are conducted Monday to Friday, 1-hour duration per day.</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>

                            {/* Navigation Actions */}
                            <div className="flex items-center gap-4 pt-4">
                                {currentStep > 0 && (
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={prevStep}
                                        className="flex-1 h-14 rounded-2xl border-2 border-zinc-100 hover:bg-zinc-50 font-bold transition-all"
                                    >
                                        <ArrowLeft size={18} className="mr-2" />
                                        Back
                                    </Button>
                                )}
                                {currentStep < STEPS.length - 1 ? (
                                    <Button
                                        type="button"
                                        onClick={nextStep}
                                        className="flex-[2] h-14 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-primary/90 hover:scale-[1.02] shadow-xl shadow-primary/20 transition-all"
                                    >
                                        Continue
                                        <ArrowRight size={18} className="ml-2" />
                                    </Button>
                                ) : (
                                    <Button
                                        type="submit"
                                        className="flex-[2] h-14 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-primary/90 hover:scale-[1.02] shadow-xl shadow-primary/20 transition-all"
                                    >
                                        Submit Registration
                                        <CheckCircle2 size={18} className="ml-2" />
                                    </Button>
                                )}
                            </div>
                        </form>
                    </CardContent>
                </Card>

                {/* Support Footer */}
                <div className="text-center text-foreground/40 text-xs font-medium px-4">
                    By submitting this form, you agree to our <Link href="/terms" className="underline hover:text-primary">Terms of Service</Link> and <Link href="/privacy" className="underline hover:text-primary">Privacy Policy</Link>. Our team will review your admission and schedule an assessment session.
                </div>
            </div>
        </div>
    );
}

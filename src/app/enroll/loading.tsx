import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export default function Loading() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-4 md:px-6 bg-background">
            <div className="max-w-3xl mx-auto space-y-10">
                {/* Header Skeleton */}
                <div className="text-center space-y-4">
                    <div className="mx-auto">
                        <Skeleton className="h-8 w-48 rounded-full mx-auto" />
                    </div>
                    <Skeleton className="h-12 w-64 mx-auto" />
                    <Skeleton className="h-6 w-96 mx-auto" />
                </div>

                {/* Progress Journey Skeleton */}
                <div className="space-y-6">
                    <div className="flex justify-between items-center px-4 md:px-12">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex flex-col items-center gap-3">
                                <Skeleton className="w-12 h-12 rounded-2xl" />
                                <Skeleton className="h-4 w-20 hidden sm:block" />
                            </div>
                        ))}
                    </div>
                    <Skeleton className="h-3 w-full rounded-full" />
                </div>

                {/* Form Card Skeleton */}
                <Card className="rounded-[2.5rem] border-zinc-200 dark:border-violet-500/20 bg-white dark:bg-[#121212] overflow-hidden">
                    <CardContent className="p-6 md:p-12 space-y-8">
                        <div className="space-y-6">
                            <Skeleton className="h-6 w-32" />
                            <Skeleton className="h-14 w-full rounded-2xl" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <Skeleton className="h-6 w-24" />
                                <Skeleton className="h-14 w-full rounded-2xl" />
                            </div>
                            <div className="space-y-3">
                                <Skeleton className="h-6 w-24" />
                                <div className="flex gap-4">
                                    <Skeleton className="h-14 flex-1 rounded-2xl" />
                                    <Skeleton className="h-14 flex-1 rounded-2xl" />
                                </div>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <Skeleton className="h-6 w-40" />
                            <Skeleton className="h-14 w-full rounded-2xl" />
                        </div>
                        <div className="flex items-center gap-4 pt-6 border-t border-zinc-100 dark:border-zinc-800">
                            <Skeleton className="h-14 flex-1 rounded-2xl" />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

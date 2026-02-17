import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-20">
            <div className="container-fluid space-y-12">
                {/* Hero Skeleton */}
                <div className="text-center space-y-6">
                    <Skeleton className="h-8 w-40 mx-auto rounded-full" />
                    <Skeleton className="h-20 w-3/4 mx-auto" />
                    <Skeleton className="h-8 w-1/2 mx-auto" />
                    <Skeleton className="h-14 w-56 mx-auto rounded-2xl" />
                </div>

                {/* Grid Skeleton */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 py-20">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="p-10 rounded-[3rem] border border-border space-y-6">
                            <Skeleton className="h-8 w-3/4" />
                            <Skeleton className="h-4 w-1/2" />
                            <div className="space-y-4">
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-2/3" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

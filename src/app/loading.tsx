import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Skeleton */}
            <section className="pt-32 pb-20 lg:pt-48 lg:pb-40">
                <div className="container-fluid text-center space-y-8">
                    <Skeleton className="h-8 w-40 mx-auto rounded-full" />
                    <Skeleton className="h-24 w-3/4 mx-auto" />
                    <Skeleton className="h-8 w-1/2 mx-auto" />
                    <div className="flex justify-center gap-6">
                        <Skeleton className="h-16 w-48 rounded-2xl" />
                        <Skeleton className="h-16 w-48 rounded-2xl" />
                    </div>
                </div>
            </section>

            {/* Content Skeletons */}
            <section className="py-24 container-fluid">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {[1, 2, 3].map((i) => (
                        <Skeleton key={i} className="h-96 rounded-[3rem]" />
                    ))}
                </div>
            </section>
        </div>
    );
}

import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-20">
            <div className="container-fluid space-y-12">
                <div className="text-center space-y-6">
                    <Skeleton className="h-16 w-3/4 mx-auto" />
                    <Skeleton className="h-6 w-1/2 mx-auto" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <Skeleton key={i} className="h-80 rounded-[2.5rem]" />
                    ))}
                </div>
            </div>
        </div>
    );
}

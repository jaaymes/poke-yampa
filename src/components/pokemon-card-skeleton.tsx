import { Card, CardContent } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

export function PokemonCardSkeleton() {
  return (
    <Card className="overflow-hidden transition-all border-0">
      <CardContent className="p-4 flex flex-col">
        {/* Header section with Pokemon info and image */}
        <div className="flex gap-4 mb-2 justify-between px-4 items-center">
          {/* Pokemon Information */}
          <div className="flex flex-col gap-1 flex-1">
            {/* Name */}
            <Skeleton className="h-6 w-24" />

            {/* Types */}
            <div className="flex flex-wrap gap-2">
              <Skeleton className="h-5 w-16 rounded-full" />
              <Skeleton className="h-5 w-16 rounded-full" />
            </div>

            {/* Stats Summary */}
            <div className="flex flex-col gap-2.5 mt-2">
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-8" />
                <Skeleton className="h-4 w-8" />
              </div>
            </div>
          </div>

          {/* Pokemon Image */}
          <div className="h-24 w-24 flex items-center justify-center rounded flex-shrink-0">
            <Skeleton className="w-full h-full rounded-md" />
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-0 pt-2 justify-around">
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-24" />
        </div>
      </CardContent>
    </Card>
  );
}

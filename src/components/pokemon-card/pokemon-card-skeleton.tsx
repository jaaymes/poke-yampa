import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export function PokemonCardSkeleton() {
  return (
    <Card
      className="overflow-hidden transition-all border-0"
      data-testid="pokemon-card-skeleton"
    >
      <CardContent
        className="p-4 flex flex-col"
        data-testid="pokemon-card-skeleton-content"
      >
        {/* Header section with Pokemon info and image */}
        <div
          className="flex gap-4 mb-2 justify-between px-4 items-center"
          data-testid="pokemon-card-skeleton-header"
        >
          {/* Pokemon Information */}
          <div
            className="flex flex-col gap-1 flex-1"
            data-testid="pokemon-card-skeleton-info"
          >
            {/* Name */}
            <Skeleton
              className="h-6 w-24"
              data-testid="pokemon-card-skeleton-name"
            />

            {/* Types */}
            <div
              className="flex flex-wrap gap-2"
              data-testid="pokemon-card-skeleton-types"
            >
              <Skeleton
                className="h-5 w-16 rounded-full"
                data-testid="pokemon-card-skeleton-type-1"
              />
              <Skeleton
                className="h-5 w-16 rounded-full"
                data-testid="pokemon-card-skeleton-type-2"
              />
            </div>

            {/* Stats Summary */}
            <div
              className="flex flex-col gap-2.5 mt-2"
              data-testid="pokemon-card-skeleton-stats"
            >
              <div
                className="flex items-center gap-2"
                data-testid="pokemon-card-skeleton-stats-row"
              >
                <Skeleton
                  className="h-4 w-8"
                  data-testid="pokemon-card-skeleton-stat-1"
                />
                <Skeleton
                  className="h-4 w-8"
                  data-testid="pokemon-card-skeleton-stat-2"
                />
              </div>
            </div>
          </div>

          {/* Pokemon Image */}
          <div
            className="h-24 w-24 flex items-center justify-center rounded flex-shrink-0"
            data-testid="pokemon-card-skeleton-image-container"
          >
            <Skeleton
              className="w-full h-full rounded-md"
              data-testid="pokemon-card-skeleton-image"
            />
          </div>
        </div>

        {/* Action buttons */}
        <div
          className="flex gap-0 pt-2 justify-around"
          data-testid="pokemon-card-skeleton-actions"
        >
          <Skeleton
            className="h-8 w-20"
            data-testid="pokemon-card-skeleton-button-1"
          />
          <Skeleton
            className="h-8 w-24"
            data-testid="pokemon-card-skeleton-button-2"
          />
        </div>
      </CardContent>
    </Card>
  );
}

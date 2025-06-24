import { cn } from "@/lib/utils";

interface LoadingProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  text?: string;
}

export function Loading({
  size = "md",
  className,
  text = "Carregando...",
}: LoadingProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3",
        className
      )}
      data-testid="loading"
    >
      <div className="relative">
        {/* Pokéball loading animation */}
        <div
          role="presentation"
          className={cn(
            "rounded-full border-4 border-primary border-t-transparent animate-spin",
            sizeClasses[size]
          )}
        />
        <div
          className={cn(
            "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
            size === "sm" && "w-1 h-1",
            size === "lg" && "w-3 h-3"
          )}
        />
      </div>

      {text && <p className="text-sm  animate-pulse">{text}</p>}
    </div>
  );
}

// Loading skeleton for cards
export function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          role="presentation"
          className="bg-card rounded-lg p-4 space-y-3"
        >
          <div className="w-full h-32 bg-muted animate-pulse rounded" />
          <div className="space-y-2">
            <div className="h-4 bg-muted animate-pulse rounded w-3/4" />
            <div className="h-3 bg-muted animate-pulse rounded w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
}

// Simple spinner
export function Spinner({ className }: { className?: string }) {
  return (
    <div
      role="presentation"
      className={cn(
        "w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin",
        className
      )}
    />
  );
}

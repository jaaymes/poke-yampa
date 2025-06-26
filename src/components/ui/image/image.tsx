import { useLanguage } from "@/hooks/use-language";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Skeleton } from "../skeleton";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
  blurDataURL?: string;
  onLoad?: () => void;
  onError?: () => void;
  style?: React.CSSProperties;
  showLoadingIndicator?: boolean;
  "data-testid"?: string;
}

// Optimized placeholder with better visual feedback
const DEFAULT_BLUR_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9InNoaW1tZXIiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjZjhmOGY4IiBzdG9wLW9wYWNpdHk9IjAuMiIvPjxzdG9wIG9mZnNldD0iMjUlIiBzdG9wLWNvbG9yPSIjZjFmMWYxIiBzdG9wLW9wYWNpdHk9IjAuNCIvPjxzdG9wIG9mZnNldD0iNTAlIiBzdG9wLWNvbG9yPSIjZWFlYWVhIiBzdG9wLW9wYWNpdHk9IjAuNSIvPjxzdG9wIG9mZnNldD0iNzUlIiBzdG9wLWNvbG9yPSIjZjFmMWYxIiBzdG9wLW9wYWNpdHk9IjAuNCIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2Y4ZjhmOCIgc3RvcC1vcGFjaXR5PSIwLjIiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3NoaW1tZXIpIi8+PC9zdmc+";

// Image cache to avoid reloading
const imageCache = new Set<string>();

// Shared IntersectionObserver instance for better performance
let sharedObserver: IntersectionObserver | null = null;
const observedElements = new Map<Element, () => void>();

const getSharedObserver = () => {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const callback = observedElements.get(entry.target);
            if (callback) {
              callback();
              observedElements.delete(entry.target);
              sharedObserver?.unobserve(entry.target);
            }
          }
        });
      },
      {
        rootMargin: "100px",
        threshold: 0.1,
      }
    );
  }
  return sharedObserver;
};

export function Image({
  src,
  alt,
  className = "",
  priority = false,
  width,
  height,
  blurDataURL = DEFAULT_BLUR_DATA_URL,
  onLoad,
  onError,
  style,
  showLoadingIndicator = true,
  "data-testid": dataTestId,
}: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(() => imageCache.has(src));
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(isLoaded ? src : blurDataURL);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  // Memoize computed values to avoid unnecessary recalculations
  const computedClassName = useMemo(() => {
    const baseClasses = `${className} transition-all duration-500 ease-out`;

    if (isLoaded) {
      return `${baseClasses} opacity-100 scale-100`;
    } else if (isLoading) {
      return `${baseClasses} opacity-75 scale-95`;
    } else {
      return `${baseClasses} opacity-50 scale-95`;
    }
  }, [className, isLoaded, isLoading]);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    setIsLoading(false);
    setHasError(false);
    imageCache.add(src);
    onLoad?.();
  }, [src, onLoad]);

  const handleError = useCallback(() => {
    setHasError(true);
    setIsLoaded(false);
    setIsLoading(false);
    onError?.();
  }, [onError]);

  const loadImage = useCallback(() => {
    if (imageCache.has(src)) {
      setCurrentSrc(src);
      setIsLoaded(true);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    const img = new window.Image();
    img.src = src;
    img.onload = () => {
      setCurrentSrc(src);
      handleLoad();
    };
    img.onerror = () => handleError();
  }, [src, handleLoad, handleError]);

  useEffect(() => {
    // If priority is true or image is already cached, load immediately
    if (priority || imageCache.has(src)) {
      loadImage();
      return;
    }

    // Otherwise use shared IntersectionObserver for lazy loading
    if (!imgRef.current) return;

    const observer = getSharedObserver();
    const element = imgRef.current;

    observedElements.set(element, loadImage);
    observer.observe(element);

    return () => {
      observedElements.delete(element);
      observer.unobserve(element);
    };
  }, [src, priority, loadImage]);

  // Reset states when src changes
  useEffect(() => {
    if (!imageCache.has(src)) {
      setIsLoaded(false);
      setIsLoading(false);
      setHasError(false);
      setCurrentSrc(blurDataURL);
    }
  }, [src, blurDataURL]);

  // Error fallback
  if (hasError) {
    return (
      <div
        className={`${className} bg-muted/30 flex items-center justify-center text-muted-foreground border border-dashed border-muted-foreground/20 rounded-md`}
        style={{ width, height, ...style }}
        aria-label={t("imageLoadError")}
      >
        <div className="flex flex-col items-center gap-2 p-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-60"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
          </svg>
          <span className="text-xs opacity-60">{t("error")}</span>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden"
      style={{ width, height }}
    >
      {/* Loading indicator overlay */}
      {showLoadingIndicator && (isLoading || (!isLoaded && !hasError)) && (
        <Skeleton data-testid="skeleton-image" className="absolute inset-0" />
      )}

      {/* Main image */}
      <img
        ref={imgRef}
        src={currentSrc}
        alt={alt}
        className={computedClassName}
        width={width}
        height={height}
        style={{
          ...style,
          filter: !isLoaded && !hasError ? "blur(10px)" : "none",
        }}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={currentSrc === src ? handleLoad : undefined}
        onError={currentSrc === src ? handleError : undefined}
        data-testid={dataTestId}
      />
    </div>
  );
}

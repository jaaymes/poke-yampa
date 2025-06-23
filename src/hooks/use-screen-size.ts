import { useEffect, useState } from "react";

export type ScreenSize = "mobile" | "tablet" | "desktop";

interface ScreenSizeInfo {
  size: ScreenSize;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  width: number;
}

export function useScreenSize(): ScreenSizeInfo {
  const [screenInfo, setScreenInfo] = useState<ScreenSizeInfo>(() => {
    // Initial state with fallback for SSR
    const width = typeof window !== "undefined" ? window.innerWidth : 1024;
    return {
      size: getScreenSize(width),
      isMobile: width < 640,
      isTablet: width >= 640 && width < 1024,
      isDesktop: width >= 1024,
      width,
    };
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const size = getScreenSize(width);

      setScreenInfo({
        size,
        isMobile: size === "mobile",
        isTablet: size === "tablet",
        isDesktop: size === "desktop",
        width,
      });
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenInfo;
}

function getScreenSize(width: number): ScreenSize {
  if (width < 640) return "mobile";
  if (width < 1024) return "tablet";
  return "desktop";
}

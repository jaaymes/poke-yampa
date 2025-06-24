import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { Loading } from "./components/loading/loading";
import "./i18n";
import { router } from "./routes";
import { CACHE_TIME } from "./utils/enums";

// Optimize React Query configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: CACHE_TIME.TEN_MINUTES,
      gcTime: CACHE_TIME.THIRTY_MINUTES, // Increased garbage collection time
      retry: (failureCount) => {
        // Smart retry logic
        if (failureCount < 2) return true;
        return false;
      },
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      refetchOnMount: true,
    },
    mutations: {
      retry: 1,
    },
  },
});

// Performance monitoring
if (typeof window !== "undefined") {
  // Monitor Core Web Vitals
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.entryType === "navigation") {
        console.log("Navigation timing:", entry);
      }
      if (entry.entryType === "paint") {
        console.log("Paint timing:", entry.name, entry.startTime);
      }
    }
  });

  try {
    observer.observe({ entryTypes: ["navigation", "paint"] });
  } catch {
    // Ignore if performance observer is not supported
    console.log("Performance observer not supported");
  }
}

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <Suspense fallback={<Loading />}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Suspense>
  </StrictMode>
);

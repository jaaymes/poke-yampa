import { CACHE_TIME } from "@/utils/enums";
import { QueryClient } from "@tanstack/react-query";

// Optimize React Query configuration
export const queryClient = new QueryClient({
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

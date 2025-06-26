import { CACHE_TIME } from "@/utils/enums";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { QueryClient } from "@tanstack/react-query";
import { persistQueryClient } from "@tanstack/react-query-persist-client";

// Create a persister for localStorage
// This will save all React Query cache data to localStorage
const localStoragePersister = createSyncStoragePersister({
  storage: window.localStorage,
  key: "poke-yampa-cache", // Key used in localStorage
  throttleTime: 1000, // Throttle saves to avoid spam (1 second)
});

// Optimize React Query configuration
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: CACHE_TIME.TEN_MINUTES,
      gcTime: CACHE_TIME.THIRTY_MINUTES, // Keep data in memory for 30 minutes
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

// Configure persistence
// This automatically saves successful queries to localStorage
// and restores them when the app loads
persistQueryClient({
  queryClient,
  persister: localStoragePersister,
  maxAge: CACHE_TIME.ONE_DAY, // Cache persists for 1 day in localStorage
  hydrateOptions: {
    // Configure how data is restored from localStorage
  },
  dehydrateOptions: {
    // Only persist successful queries to localStorage
    shouldDehydrateQuery: (query) => {
      return query.state.status === "success";
    },
  },
});

/**
 * How it works:
 *
 * 1. When a query is successful, it's automatically saved to localStorage
 * 2. When the app loads, data is restored from localStorage
 * 3. If restored data is still fresh (within staleTime), it won't refetch
 * 4. If restored data is stale, it will be shown immediately but refetched in background
 * 5. Data older than maxAge (1 day) is automatically discarded
 *
 * Benefits:
 * - Faster app startup (data available immediately)
 * - Better offline experience
 * - Reduced API calls
 * - Improved user experience
 */

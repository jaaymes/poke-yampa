import { CACHE_TIME } from "@/utils/enums";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { QueryClient } from "@tanstack/react-query";
import { persistQueryClient } from "@tanstack/react-query-persist-client";

const localStoragePersister = createSyncStoragePersister({
  storage: window.localStorage,
  key: "poke-yampa-cache",
  throttleTime: 1000,
});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: CACHE_TIME.TEN_MINUTES,
      gcTime: CACHE_TIME.THIRTY_MINUTES,
      retry: (failureCount) => {
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

persistQueryClient({
  queryClient,
  persister: localStoragePersister,
  maxAge: CACHE_TIME.ONE_DAY,
  hydrateOptions: {},
  dehydrateOptions: {
    shouldDehydrateQuery: (query) => {
      return query.state.status === "success";
    },
  },
});

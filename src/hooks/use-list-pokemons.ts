import { getPokemons } from "@/services/pokemon";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useMemo } from "react";
import { useInView } from "react-intersection-observer";

const ITEMS_PER_PAGE = 20;

export const useListPokemons = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "100px",
  });

  const pokemonsQuery = useInfiniteQuery({
    queryKey: ["pokemons"],
    queryFn: ({ pageParam = 0 }) =>
      getPokemons({ limit: ITEMS_PER_PAGE, offset: pageParam }),
    getNextPageParam: (lastPage, allPages) => {
      const nextOffset = allPages.length * ITEMS_PER_PAGE;
      return nextOffset < lastPage.count ? nextOffset : undefined;
    },
    initialPageParam: 0,
    // staleTime: CACHE_TIME.FIVE_MINUTES, // 5 minutos
  });

  // Extrai propriedades específicas para evitar problemas de referência
  const {
    data,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
    refetch,
  } = pokemonsQuery;

  // Combina todos os pokémons de todas as páginas
  const allPokemons = useMemo(() => {
    if (!data?.pages) return [];
    return data.pages.flatMap((page) => page.results);
  }, [data]);

  // Trigger fetch when intersection observer detects the ref element
  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  return {
    pokemons: allPokemons,
    isLoading,
    isError,
    isFetchingNextPage,
    hasNextPage,
    refetch,
    loadMoreRef: ref,
    totalCount: data?.pages[0]?.count || 0,
    windowInfo: {
      start: 0,
      end: allPokemons.length,
      total: data?.pages[0]?.count,
      windowSize: allPokemons.length,
      allPokemonsLength: allPokemons.length,
    },
  };
};

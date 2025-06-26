import { getPokemons } from "@/services/pokemon";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useCallback, useMemo, useState } from "react";

const POKEMON_PER_PAGE = 20;

export const useListPokemons = () => {
  const [itemHeights, setItemHeights] = useState<Record<number, number> | null>(
    null
  );

  const pokemonsQuery = useInfiniteQuery({
    queryKey: ["pokemons-list"],
    queryFn: ({ pageParam = 0 }) =>
      getPokemons({
        limit: POKEMON_PER_PAGE,
        offset: pageParam,
      }),
    getNextPageParam: (lastPage, pages) => {
      if (!lastPage.next) return undefined;
      return pages.length * POKEMON_PER_PAGE;
    },
    initialPageParam: 0,
  });

  const allPokemon = useMemo(() => {
    return pokemonsQuery.data?.pages.flatMap((page) => page.results) ?? [];
  }, [pokemonsQuery.data]);

  // const filteredPokemon = useMemo(() => {
  //   if (!searchTerm.trim()) {
  //     return allPokemon;
  //   }

  //   const searchLower = searchTerm.toLowerCase().trim();
  //   return allPokemon.filter((pokemon) =>
  //     pokemon.name.toLowerCase().includes(searchLower)
  //   );
  // }, [allPokemon, searchTerm]);

  // const handleSearch = useCallback(() => {
  //   const trimmedSearch = searchTerm.trim();
  //   setActiveSearch(trimmedSearch);
  // }, [searchTerm]);

  // const handleClearSearch = useCallback(() => {
  //   setSearchTerm("");
  //   setActiveSearch("");
  //   setItemHeights(null);
  // }, []);

  const handleHeightChange = useCallback((index: number, height: number) => {
    setItemHeights((prev) => {
      const adjustedHeight = height + 16;
      if (prev?.[index] !== adjustedHeight) {
        return { ...prev, [index]: adjustedHeight };
      }
      return prev;
    });
  }, []);

  const updateItemHeight = useCallback(
    (index: number, height: number, measureFn?: () => void) => {
      setItemHeights((prev) => {
        const adjustedHeight = height + 16;
        if (prev?.[index] !== adjustedHeight) {
          const newHeights = { ...prev, [index]: adjustedHeight };
          if (measureFn) {
            setTimeout(() => measureFn(), 0);
          }
          return newHeights;
        }
        return prev;
      });
    },
    []
  );

  const getColumns = useCallback((isMobile: boolean, isTablet: boolean) => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 3;
  }, []);

  const shouldFetchNextPage = useCallback(
    (
      lastIndex: number,
      totalRows: number,
      hasNextPage: boolean,
      isFetchingNextPage: boolean
    ) => {
      return lastIndex >= totalRows - 1 && hasNextPage && !isFetchingNextPage;
    },
    []
  );

  const getEstimatedSize = useCallback(
    (index: number) => {
      return itemHeights?.[index] || 200;
    },
    [itemHeights]
  );

  return {
    itemHeights,

    pokemonsQuery,
    allPokemon,

    handleHeightChange,
    updateItemHeight,
    setItemHeights,

    getColumns,
    shouldFetchNextPage,
    getEstimatedSize,
  };
};

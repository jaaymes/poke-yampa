import { getPokemons } from "@/services/pokemon";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useCallback, useMemo, useState } from "react";

const ITEMS_PER_PAGE = 20;
const WINDOW_SIZE = 40; // Manter apenas 40 itens na tela

export const useListPokemons = () => {
  const [windowStart, setWindowStart] = useState(0);

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
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    isLoading,
    isError,
    refetch,
  } = pokemonsQuery;

  // Combina todos os pokémons de todas as páginas
  const allPokemons = useMemo(() => {
    if (!data?.pages) return [];
    return data.pages.flatMap((page) => page.results);
  }, [data]);

  // Implementa a janela deslizante de 40 itens
  const windowedPokemons = useMemo(() => {
    if (allPokemons.length === 0) return [];

    // Se temos menos de 40 itens, retorna todos
    if (allPokemons.length <= WINDOW_SIZE) {
      return allPokemons;
    }

    // Garante que o windowStart não ultrapasse os limites
    const maxStart = Math.max(0, allPokemons.length - WINDOW_SIZE);
    const safeStart = Math.min(windowStart, maxStart);

    return allPokemons.slice(safeStart, safeStart + WINDOW_SIZE);
  }, [allPokemons, windowStart]);

  // Função para avançar a janela (carregar mais itens)
  const loadMore = useCallback(async () => {
    console.log("loadMore chamado:", {
      hasNextPage,
      isFetchingNextPage,
      windowStart,
      allPokemonsLength: allPokemons.length,
      windowSize: WINDOW_SIZE,
    });

    // Se ainda há páginas para carregar, carrega mais
    if (hasNextPage && !isFetchingNextPage) {
      console.log("Carregando próxima página...");
      await fetchNextPage();
    }

    // Avança a janela se possível
    const maxStart = Math.max(0, allPokemons.length - WINDOW_SIZE);
    const newStart = Math.min(windowStart + ITEMS_PER_PAGE, maxStart);

    if (newStart > windowStart) {
      console.log("Avançando janela de", windowStart, "para", newStart);
      setWindowStart(newStart);
    }
  }, [
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    windowStart,
    allPokemons.length,
  ]);

  // Função para retroceder a janela
  const loadPrevious = useCallback(() => {
    const newStart = Math.max(0, windowStart - ITEMS_PER_PAGE);
    console.log(
      "loadPrevious chamado - windowStart atual:",
      windowStart,
      "novo:",
      newStart
    );
    setWindowStart(newStart);
  }, [windowStart]);

  // Verifica se pode carregar mais (para frente)
  const canLoadMore = useMemo(() => {
    const canLoad =
      (hasNextPage || windowStart + WINDOW_SIZE < allPokemons.length) &&
      !isFetchingNextPage;

    if (process.env.NODE_ENV === "development") {
      console.log("canLoadMore calculado:", {
        canLoad,
        hasNextPage,
        windowStart,
        windowSize: WINDOW_SIZE,
        allPokemonsLength: allPokemons.length,
        isFetchingNextPage,
        windowEnd: windowStart + WINDOW_SIZE,
      });
    }

    return canLoad;
  }, [hasNextPage, isFetchingNextPage, windowStart, allPokemons.length]);

  // Verifica se pode retroceder
  const canLoadPrevious = useMemo(() => {
    const canLoad = windowStart > 0;

    if (process.env.NODE_ENV === "development") {
      console.log("canLoadPrevious calculado:", {
        canLoad,
        windowStart,
      });
    }

    return canLoad;
  }, [windowStart]);

  // Reset da janela quando necessário
  const resetWindow = useCallback(() => {
    console.log("resetWindow chamado");
    setWindowStart(0);
  }, []);

  return {
    pokemons: windowedPokemons,
    isLoading,
    isError,
    isFetchingNextPage,
    hasNextPage,
    loadMore,
    loadPrevious,
    canLoadMore,
    canLoadPrevious,
    refetch,
    resetWindow,
    totalCount: data?.pages[0]?.count || 0,
    windowInfo: {
      start: windowStart,
      end: Math.min(windowStart + WINDOW_SIZE, allPokemons.length),
      total: data?.pages[0]?.count,
      windowSize: WINDOW_SIZE,
      allPokemonsLength: allPokemons.length,
    },
  };
};

import { getPokemons } from "@/services/pokemon";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useCallback, useMemo, useRef } from "react";

const ITEMS_PER_PAGE = 20;
const MAX_VISIBLE_ITEMS = 40;
const OVERSCAN = 2;
const ITEMS_PER_ROW = 4;

export const useListPokemons = () => {
  const parentRef = useRef<HTMLDivElement>(null);

  // Infinite Query para gerenciar os dados
  const pokemonsQuery = useInfiniteQuery({
    queryKey: ["pokemons"],
    queryFn: ({ pageParam = 0 }) => {
      return getPokemons({ limit: ITEMS_PER_PAGE, offset: pageParam });
    },
    getNextPageParam: (lastPage, allPages) => {
      const nextOffset = allPages.length * ITEMS_PER_PAGE;
      return nextOffset < lastPage.count ? nextOffset : undefined;
    },
    getPreviousPageParam: (_, allPages) => {
      const previousOffset = (allPages.length - 2) * ITEMS_PER_PAGE;
      return previousOffset >= 0 ? previousOffset : undefined;
    },
    initialPageParam: 0,
    // Manter no máximo 3 páginas em cache para otimizar memória
    maxPages: 3,
    staleTime: 5 * 60 * 1000, // 5 minutos
  });

  // Extrair dados das páginas
  const {
    data,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
    refetch,
    isFetchingPreviousPage,
    fetchPreviousPage,
    hasPreviousPage,
  } = pokemonsQuery;

  // Combinar todos os pokémons de todas as páginas
  const allPokemons = useMemo(() => {
    if (!data?.pages) return [];
    return data.pages.flatMap((page) => page.results);
  }, [data]);

  // Total de itens disponíveis
  const totalCount = data?.pages[0]?.count || 0;

  // Calcular número de linhas baseado nos pokémons carregados
  const totalRows = Math.ceil(allPokemons.length / ITEMS_PER_ROW);

  // Virtualizer configurado para linhas
  const virtualizer = useVirtualizer({
    count: totalRows,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 320, // Altura estimada de cada linha (card + gap)
    overscan: OVERSCAN,
    // Configurações para otimização de performance
    enabled: true,
    debug: false,
  });

  // Itens virtuais visíveis (linhas)
  const virtualItems = virtualizer.getVirtualItems();

  // Lógica para carregar mais dados quando necessário
  const handleScroll = useCallback(() => {
    if (!virtualItems.length) return;

    const lastItem = virtualItems[virtualItems.length - 1];
    const lastRowIndex = Math.ceil(allPokemons.length / ITEMS_PER_ROW) - 1;

    const shouldLoadMore =
      lastItem &&
      lastItem.index >= lastRowIndex - OVERSCAN &&
      hasNextPage &&
      !isFetchingNextPage;

    if (shouldLoadMore) {
      fetchNextPage();
    }

    // Lógica para carregar dados anteriores (se necessário)
    const firstItem = virtualItems[0];
    const shouldLoadPrevious =
      firstItem &&
      firstItem.index <= OVERSCAN &&
      hasPreviousPage &&
      !isFetchingPreviousPage;

    if (shouldLoadPrevious) {
      fetchPreviousPage();
    }
  }, [
    virtualItems,
    allPokemons.length,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    hasPreviousPage,
    isFetchingPreviousPage,
    fetchPreviousPage,
  ]);

  // Dados dos pokémons visíveis otimizados (retorna todos os pokémons para o componente gerenciar as linhas)
  const visiblePokemons = useMemo(() => {
    return virtualItems.map((virtualItem) => {
      const startIndex = virtualItem.index * ITEMS_PER_ROW;
      const endIndex = Math.min(startIndex + ITEMS_PER_ROW, allPokemons.length);
      const rowPokemons = allPokemons.slice(startIndex, endIndex);

      return {
        virtualItem,
        pokemons: rowPokemons,
      };
    });
  }, [virtualItems, allPokemons]);

  // Informações da janela atual
  const windowInfo = useMemo(() => {
    const visibleStart = virtualItems[0]?.index || 0;
    const visibleEnd = virtualItems[virtualItems.length - 1]?.index || 0;

    return {
      visibleStart: visibleStart * ITEMS_PER_ROW,
      visibleEnd: Math.min(
        (visibleEnd + 1) * ITEMS_PER_ROW - 1,
        allPokemons.length - 1
      ),
      visibleCount: virtualItems.length * ITEMS_PER_ROW,
      totalLoaded: allPokemons.length,
      totalCount,
      totalRows,
      currentPage: data?.pages.length || 0,
      hasNextPage,
      hasPreviousPage,
      isWithinLimit: allPokemons.length <= MAX_VISIBLE_ITEMS,
    };
  }, [
    virtualItems,
    allPokemons.length,
    totalCount,
    totalRows,
    data?.pages.length,
    hasNextPage,
    hasPreviousPage,
  ]);

  return {
    // Dados
    pokemons: visiblePokemons,
    allPokemons,

    // Estados de carregamento
    isLoading,
    isError,
    isFetchingNextPage,
    isFetchingPreviousPage,

    // Controles de paginação
    hasNextPage,
    hasPreviousPage,
    fetchNextPage,
    fetchPreviousPage,
    refetch,

    // Virtualização
    virtualizer,
    parentRef,
    virtualItems,
    totalSize: virtualizer.getTotalSize(),

    // Manipulador de scroll
    handleScroll,

    // Informações da janela
    windowInfo,

    // Compatibilidade com implementação anterior
    loadMoreRef: null, // Não usado mais com virtualização
  };
};

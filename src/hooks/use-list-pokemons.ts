import { getPokemons } from "@/services/pokemon";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useCallback, useMemo, useState } from "react";

const POKEMON_PER_PAGE = 20;

export const useListPokemons = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSearch, setActiveSearch] = useState(""); // Termo de busca ativo
  const [itemHeights, setItemHeights] = useState<Record<number, number> | null>(
    null
  );

  // Infinite Query para gerenciar os dados
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

  // Memoizar a lista completa de Pokémon
  const allPokemon = useMemo(() => {
    return pokemonsQuery.data?.pages.flatMap((page) => page.results) ?? [];
  }, [pokemonsQuery.data]);

  // Para busca, usar os dados diretamente da API
  const filteredPokemon = useMemo(() => {
    return allPokemon;
  }, [allPokemon]);

  // Callback para executar a busca
  const handleSearch = useCallback(() => {
    const trimmedSearch = searchTerm.trim();
    setActiveSearch(trimmedSearch);
    // Reset das alturas dos itens quando fazer nova busca
    setItemHeights(null);
  }, [searchTerm]);

  // Callback para limpar a busca
  const handleClearSearch = useCallback(() => {
    setSearchTerm("");
    setActiveSearch("");
    setItemHeights(null);
  }, []);

  const handleHeightChange = useCallback((index: number, height: number) => {
    setItemHeights((prev) => {
      const adjustedHeight = height + 16; // Adicionar padding
      if (prev?.[index] !== adjustedHeight) {
        return { ...prev, [index]: adjustedHeight };
      }
      return prev;
    });
  }, []);

  // Callback para atualizar as alturas dos itens e forçar remeasure
  const updateItemHeight = useCallback(
    (index: number, height: number, measureFn?: () => void) => {
      setItemHeights((prev) => {
        const adjustedHeight = height + 16; // Adicionar padding
        if (prev?.[index] !== adjustedHeight) {
          const newHeights = { ...prev, [index]: adjustedHeight };
          // Agenda a remeasure para o próximo tick
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

  // Função para calcular número de colunas baseado no tamanho da tela
  const getColumns = useCallback((isMobile: boolean, isTablet: boolean) => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 3;
  }, []);

  // Função para verificar se deve carregar mais dados
  const shouldFetchNextPage = useCallback(
    (
      lastIndex: number,
      totalRows: number,
      hasNextPage: boolean,
      isFetchingNextPage: boolean,
      currentActiveSearch: string
    ) => {
      return (
        lastIndex >= totalRows - 1 &&
        hasNextPage &&
        !isFetchingNextPage &&
        !currentActiveSearch.trim() // Só carrega mais se não estiver buscando
      );
    },
    []
  );

  // Função para obter estimativa de altura do item
  const getEstimatedSize = useCallback(
    (index: number) => {
      return itemHeights?.[index] || 200;
    },
    [itemHeights]
  );

  return {
    // Estado
    searchTerm,
    setSearchTerm,
    activeSearch,
    itemHeights,

    // Dados
    pokemonsQuery,
    allPokemon,
    filteredPokemon,

    // Handlers
    handleSearch,
    handleClearSearch,
    handleHeightChange,
    updateItemHeight,
    setItemHeights,

    // Utilitários
    getColumns,
    shouldFetchNextPage,
    getEstimatedSize,
  };
};

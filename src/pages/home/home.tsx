import { Loading } from "@/components/loading/loading";
import { PokemonDetailDrawer } from "@/components/pokemon-detail-drawer";
import { useLanguage } from "@/hooks/use-language";
import { useScreenSize } from "@/hooks/use-screen-size";
import { useSearchPokemon } from "@/hooks/use-search-pokemon";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useEffect, useMemo, useRef } from "react";
import { MdClear, MdSearch, MdSend } from "react-icons/md";
import { PokemonCard } from "../../components/pokemon-card";
import { Button } from "../../components/ui/button";
import { Header } from "../../components/ui/header";
import { Input } from "../../components/ui/input";
import { useListPokemons } from "../../hooks/use-list-pokemons";

export const Home = () => {
  const {
    searchTerm,
    activeSearch,
    itemHeights,
    setSearchTerm,

    pokemonsQuery,
    filteredPokemon,

    handleSearch,
    handleClearSearch,
    updateItemHeight,

    getColumns,
    shouldFetchNextPage,
    getEstimatedSize,
  } = useListPokemons();

  // Add search pokemon functionality
  const {
    isDetailOpen,
    searchQuery,
    handleSearchPokemon,
    openDetailDrawer,
    closeDetailDrawer,
  } = useSearchPokemon();

  const { t } = useLanguage();
  const { isMobile, isTablet, isDesktop } = useScreenSize();
  const parentRef = useRef<HTMLDivElement>(null);

  // Calcular número de colunas baseado no tamanho da tela
  const columns = useMemo(() => {
    return getColumns(isMobile, isTablet);
  }, [getColumns, isMobile, isTablet]);

  const virtualizer = useVirtualizer({
    count: Math.ceil(filteredPokemon.length / columns),
    getScrollElement: () => parentRef.current,
    estimateSize: getEstimatedSize,
    overscan: 5, // Aumentar overscan para melhor performance
    measureElement: (element) => element?.getBoundingClientRect().height,
  });

  // Handler otimizado para mudança de altura
  const handleHeightChangeOptimized = (index: number, height: number) => {
    updateItemHeight(index, height, () => virtualizer.measure());
  };

  // Handler para Enter no input
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  // Handler para buscar Pokémon específico
  const handleSearchSpecificPokemon = () => {
    if (searchTerm.trim()) {
      handleSearchPokemon(searchTerm);
      handleSearch(); // Manter a funcionalidade original
    }
  };

  // Efeito para abrir o drawer quando a busca for bem-sucedida
  useEffect(() => {
    if (searchQuery.isSuccess) {
      openDetailDrawer();
    }
  }, [searchQuery.isSuccess, openDetailDrawer]);

  // Mostrar mensagem de erro quando a busca falhar
  useEffect(() => {
    if (searchQuery.isError) {
      // Pode adicionar uma notificação de erro aqui se tiver um componente de toast
      console.error("Erro ao buscar Pokémon:", searchQuery.error);
    }
  }, [searchQuery.isError, searchQuery.error]);

  // Efeito para carregar mais dados quando necessário
  useEffect(() => {
    const [lastItem] = [...virtualizer.getVirtualItems()].reverse();

    if (!lastItem) {
      return;
    }

    const totalRows = Math.ceil(filteredPokemon.length / columns);

    if (
      shouldFetchNextPage(
        lastItem.index,
        totalRows,
        pokemonsQuery.hasNextPage,
        pokemonsQuery.isFetchingNextPage,
        activeSearch
      )
    ) {
      pokemonsQuery.fetchNextPage();
    }
  }, [
    virtualizer,
    filteredPokemon.length,
    columns,
    activeSearch,
    pokemonsQuery,
    shouldFetchNextPage,
  ]);

  // Efeito para remeasure quando alturas mudam
  useEffect(() => {
    virtualizer.measure();
  }, [itemHeights, virtualizer]);

  // Show loading state
  if (pokemonsQuery.isLoading) {
    return (
      <div className="flex min-h-screen flex-col p-4">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <Loading />
        </main>
      </div>
    );
  }

  // Show error state
  if (pokemonsQuery.isError) {
    return (
      <div className="flex min-h-screen flex-col p-4">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-lg mb-4">{t("errorLoading")}</p>
            <Button
              onClick={() => pokemonsQuery.refetch()}
              aria-label={t("tryAgain")}
            >
              {t("tryAgain")}
            </Button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 ">
        <section className="container mx-auto max-w-7xl py-2">
          <div className="mb-5 flex justify-center items-center">
            <div className="relative w-full max-w-sm">
              <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-primary" />
              <Input
                placeholder={t("searchPlaceholder")}
                className="bg-card pl-10 pr-20 h-11 placeholder:text-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyPress}
              />
              {/* Botão de limpar busca */}
              {(searchTerm || activeSearch) && (
                <Button
                  onClick={handleClearSearch}
                  aria-label={t("clear")}
                  variant="ghost"
                  size="icon"
                  className="absolute right-10 top-1/2 -translate-y-1/2 cursor-pointer hover:text-primary h-8 w-8"
                >
                  <MdClear className="size-4" />
                </Button>
              )}
              {/* Botão de buscar */}
              <Button
                onClick={handleSearchSpecificPokemon}
                aria-label={t("search")}
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 -translate-y-1/2 cursor-pointer hover:text-primary h-8 w-8"
                disabled={pokemonsQuery.isFetching || searchQuery.isFetching}
              >
                <MdSend className="size-4" />
              </Button>
            </div>
          </div>

          {filteredPokemon.length > 0 ? (
            <div ref={parentRef} className={`overflow-auto max-h-[88vh]`}>
              <div
                style={{
                  height: `${virtualizer.getTotalSize()}px`,
                  width: "100%",
                  position: "relative",
                }}
              >
                {virtualizer.getVirtualItems().map((virtualItem) => {
                  const startIndex = virtualItem.index * columns;
                  const endIndex = Math.min(
                    startIndex + columns,
                    filteredPokemon.length
                  );
                  const rowPokemons = filteredPokemon.slice(
                    startIndex,
                    endIndex
                  );

                  return (
                    <div
                      key={virtualItem.key}
                      className={`absolute top-0 left-0 z-0 w-full ${
                        isMobile ? "flex flex-col px-2" : "grid px-4"
                      } ${
                        isTablet
                          ? "grid-cols-2"
                          : isDesktop
                          ? "grid-cols-3"
                          : ""
                      }`}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: `${virtualItem.size}px`,
                        transform: `translateY(${virtualItem.start}px)`,
                      }}
                    >
                      {rowPokemons.map((pokemon) => (
                        <div key={pokemon.url} className="p-2">
                          <PokemonCard
                            pokemon={pokemon}
                            onHeightChange={(height) =>
                              handleHeightChangeOptimized(
                                virtualItem.index,
                                height
                              )
                            }
                          />
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-4">
              <p className="mb-4 text-lg">{t("pokemonNotFound")}</p>
              {activeSearch && (
                <Button
                  onClick={handleClearSearch}
                  variant="outline"
                  aria-label={t("clear")}
                >
                  {t("clear")} {t("search")}
                </Button>
              )}
            </div>
          )}
        </section>
      </main>

      {/* Pokemon Detail Drawer */}
      {isDetailOpen && searchQuery.data && (
        <PokemonDetailDrawer
          isOpen={isDetailOpen}
          abilities={searchQuery.data.abilities}
          onClose={closeDetailDrawer}
          name={searchQuery.data.name}
          types={searchQuery.data.types}
          stats={searchQuery.data.stats}
          avatar={searchQuery.data.sprites}
        />
      )}
    </div>
  );
};

import { Loading } from "@/components/loading/loading";
import { PokemonDetailDrawer } from "@/components/pokemon-detail-drawer";
import { useLanguage } from "@/hooks/use-language";
import { useScreenSize } from "@/hooks/use-screen-size";
import { useSearchPokemon } from "@/hooks/use-search-pokemon";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useEffect, useMemo, useRef } from "react";
import { PokemonCard } from "../../components/pokemon-card";
import { Button } from "../../components/ui/button";
import { Header } from "../../components/ui/header";
import { SearchInput } from "../../components/ui/search-input";
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

  const {
    isDetailOpen,
    searchMutation,
    handleSearchPokemon,
    openDetailDrawer,
    closeDetailDrawer,
  } = useSearchPokemon();

  const { t } = useLanguage();
  const { isMobile, isTablet, isDesktop } = useScreenSize();
  const parentRef = useRef<HTMLDivElement>(null);

  const columns = useMemo(() => {
    return getColumns(isMobile, isTablet);
  }, [getColumns, isMobile, isTablet]);

  const virtualizer = useVirtualizer({
    count: Math.ceil(filteredPokemon.length / columns),
    getScrollElement: () => parentRef.current,
    estimateSize: getEstimatedSize,
    overscan: 5,
    measureElement: (element) => element?.getBoundingClientRect().height,
  });

  const handleHeightChangeOptimized = (index: number, height: number) => {
    updateItemHeight(index, height, () => virtualizer.measure());
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  const handleSearchSpecificPokemon = () => {
    if (searchTerm.trim()) {
      handleSearchPokemon(searchTerm);
      searchMutation.mutate();
      handleSearch();
    }
  };

  useEffect(() => {
    if (searchMutation.isSuccess) {
      openDetailDrawer();
    }
  }, [searchMutation.isSuccess, openDetailDrawer]);

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

  useEffect(() => {
    virtualizer.measure();
  }, [itemHeights, virtualizer]);

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
    <div className="flex min-h-screen flex-col relative">
      {pokemonsQuery.isLoading && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-50 backdrop-blur-sm">
          <Loading />
        </div>
      )}
      <Header />
      <main className="container mx-auto max-w-7xl py-1">
        <div
          ref={parentRef}
          className={`overflow-auto max-h-[88vh] flex flex-col gap-2`}
        >
          <SearchInput
            searchTerm={searchTerm}
            activeSearch={activeSearch}
            isLoading={pokemonsQuery.isFetching || searchMutation.isPending}
            onSearchTermChange={setSearchTerm}
            onSearch={handleSearchSpecificPokemon}
            onClearSearch={handleClearSearch}
            onKeyPress={handleKeyPress}
          />
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
              const rowPokemons = filteredPokemon.slice(startIndex, endIndex);

              return (
                <div
                  key={virtualItem.key}
                  className={`absolute top-0 left-0 z-0 w-full ${
                    isMobile ? "flex flex-col px-2" : "grid px-4"
                  } ${
                    isTablet ? "grid-cols-2" : isDesktop ? "grid-cols-3" : ""
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
                          handleHeightChangeOptimized(virtualItem.index, height)
                        }
                      />
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {isDetailOpen && searchMutation.data && (
        <PokemonDetailDrawer
          isOpen={isDetailOpen}
          abilities={searchMutation.data.abilities}
          onClose={closeDetailDrawer}
          name={searchMutation.data.name}
          types={searchMutation.data.types}
          stats={searchMutation.data.stats}
          avatar={searchMutation.data.sprites}
        />
      )}
    </div>
  );
};

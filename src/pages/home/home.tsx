import { Loading } from "@/components/loading/loading";
import { useLanguage } from "@/hooks/use-language";
import { useScreenSize } from "@/hooks/use-screen-size";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useEffect, useMemo, useRef, useState } from "react";
import { MdSearch, MdSend } from "react-icons/md";
import { PokemonCard } from "../../components/pokemon-card";
import { Button } from "../../components/ui/button";
import { Header } from "../../components/ui/header";
import { Input } from "../../components/ui/input";
import { useListPokemons } from "../../hooks/use-list-pokemons";

export const Home = () => {
  const { pokemonsQuery } = useListPokemons();
  const { t } = useLanguage();
  const { isMobile, isTablet, isDesktop } = useScreenSize();
  const [searchTerm, setSearchTerm] = useState("");
  const parentRef = useRef<HTMLDivElement>(null);
  const [itemHeights, setItemHeights] = useState<Record<number, number> | null>(
    null
  );
  const allPokemon = useMemo(() => {
    return pokemonsQuery.data?.pages.flatMap((page) => page.results) ?? [];
  }, [pokemonsQuery.data]);

  // Calcular número de colunas baseado no tamanho da tela
  const columns = useMemo(() => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 3;
  }, [isMobile, isTablet]);

  const virtualizer = useVirtualizer({
    count: Math.ceil(allPokemon.length / columns),
    getScrollElement: () => parentRef.current,
    estimateSize: (index) => itemHeights?.[index] || 200,
    overscan: 3, // Aumentar overscan para melhor performance
    measureElement: (element) => element?.getBoundingClientRect().height,
  });

  const virtualItems = virtualizer.getVirtualItems();

  const handleHeightChange = (index: number, height: number) => {
    setItemHeights((prev) => {
      const adjustedHeight = height + 16; // Adicionar padding
      if (prev?.[index] !== adjustedHeight) {
        const newHeights = { ...prev, [index]: adjustedHeight };
        // Força a remeasure do virtualizer
        setTimeout(() => virtualizer.measure(), 0);
        return newHeights;
      }
      return prev;
    });
  };

  // Debug: mostrar quantos itens estão sendo renderizados
  useEffect(() => {
    console.log(`🎨 Renderizando ${virtualItems.length} rows virtuais`);
    console.log(`📊 Total de Pokémon carregados: ${allPokemon.length}`);
    console.log(`🔍 Colunas: ${columns}`);
    console.log(
      `📱 Mobile: ${isMobile}, Tablet: ${isTablet}, Desktop: ${isDesktop}`
    );
  }, [
    virtualItems.length,
    allPokemon.length,
    columns,
    isMobile,
    isTablet,
    isDesktop,
  ]);

  useEffect(() => {
    const [lastItem] = [...virtualizer.getVirtualItems()].reverse();

    if (!lastItem) {
      return;
    }

    if (
      lastItem.index >= Math.ceil(allPokemon.length / columns) - 1 &&
      pokemonsQuery.hasNextPage &&
      !pokemonsQuery.isFetchingNextPage &&
      !searchTerm
    ) {
      pokemonsQuery.fetchNextPage();
    }
  }, [allPokemon.length, virtualizer, searchTerm, pokemonsQuery, columns]);

  useEffect(() => {
    virtualizer.measure();
  }, [itemHeights, virtualizer]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  // Show loading state
  if (pokemonsQuery.isLoading) {
    return (
      <div className="flex min-h-screen flex-col p-4">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <Loading />
        </main>
        {/* <Footer windowInfo={windowInfo} /> */}
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
        {/* <Footer windowInfo={windowInfo} /> */}
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
                type="search"
                placeholder={t("searchPlaceholder")}
                className="bg-card pl-10 pr-12 h-11 placeholder:text-primary"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <Button
                aria-label={t("searchButton")}
                variant="link"
                size="icon"
                className="absolute right-1 top-1/2 -translate-y-1/2 cursor-pointer hover:text-primary"
              >
                <MdSend className="size-4" />
              </Button>
            </div>
          </div>

          {allPokemon.length > 0 ? (
            <div ref={parentRef} className={`overflow-auto max-h-[85vh]`}>
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
                    allPokemon.length
                  );
                  const rowPokemons = allPokemon.slice(startIndex, endIndex);

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
                              handleHeightChange(virtualItem.index, height)
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
            </div>
          )}
        </section>
      </main>
      {/* <Footer windowInfo={windowInfo} /> */}
    </div>
  );
};

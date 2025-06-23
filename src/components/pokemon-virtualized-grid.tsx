import { useEffect, useState } from "react";
import { useListPokemons } from "../hooks/use-list-pokemons";
import type { IPokemon } from "../interface/pokemon";
import { Loading } from "./loading";
import { PokemonCard } from "./pokemon-card";
import { PokemonDetailDrawer } from "./pokemon-detail-drawer";
import { Footer } from "./ui/footer";

interface PokemonVirtualizedGridProps {
  className?: string;
}

export function PokemonVirtualizedGrid({
  className,
}: PokemonVirtualizedGridProps) {
  const [selectedPokemon, setSelectedPokemon] = useState<IPokemon | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const {
    pokemons: pokemonRows,
    isLoading,
    isError,
    isFetchingNextPage,
    parentRef,
    virtualizer,
    totalSize,
    handleScroll,
    windowInfo,
    refetch,
  } = useListPokemons();

  const handlePokemonClick = (pokemon: IPokemon) => {
    setSelectedPokemon(pokemon);
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  // Adicionar listener de scroll para carregar mais dados
  useEffect(() => {
    const scrollElement = parentRef.current;
    if (!scrollElement) return;

    const handleScrollEvent = () => {
      handleScroll();
    };

    scrollElement.addEventListener("scroll", handleScrollEvent);
    return () => scrollElement.removeEventListener("scroll", handleScrollEvent);
  }, [handleScroll]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <Loading />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <p className="text-red-500 text-lg">Erro ao carregar Pokémons</p>
        <button
          onClick={() => refetch()}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Tentar novamente
        </button>
      </div>
    );
  }

  // Converter windowInfo para o formato esperado pelo Footer
  const footerWindowInfo = {
    end: windowInfo.visibleEnd + 1,
    total: windowInfo.totalCount,
    windowSize: windowInfo.totalLoaded,
    currentPage: windowInfo.currentPage,
    offset: windowInfo.visibleStart,
  };

  return (
    <>
      <div className={className}>
        {/* Informações de debug (remover em produção) */}
        <div className="mb-4 p-2 bg-gray-100 rounded text-sm">
          <p>
            Visíveis: {windowInfo.visibleCount} | Carregados:{" "}
            {windowInfo.totalLoaded} | Total: {windowInfo.totalCount}
          </p>
          <p>
            Intervalo: {windowInfo.visibleStart} - {windowInfo.visibleEnd} |
            Página: {windowInfo.currentPage}
          </p>
          <p>
            Linhas: {windowInfo.totalRows} | Linhas visíveis:{" "}
            {pokemonRows.length}
          </p>
        </div>

        {/* Container virtualizado */}
        <div
          ref={parentRef}
          className="h-[600px] overflow-auto border rounded-lg"
          style={{
            contain: "strict",
          }}
        >
          {/* Container interno com altura total */}
          <div
            style={{
              height: `${totalSize}px`,
              width: "100%",
              position: "relative",
            }}
          >
            {/* Renderizar apenas as linhas visíveis */}
            {pokemonRows.map(({ virtualItem, pokemons: rowPokemons }) => (
              <div
                key={virtualItem.key}
                data-index={virtualItem.index}
                ref={virtualizer.measureElement}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  transform: `translateY(${virtualItem.start}px)`,
                }}
              >
                {/* Grid CSS para a linha atual */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                  {rowPokemons.map((pokemon: IPokemon) => (
                    <PokemonCard
                      key={pokemon.id}
                      pokemon={pokemon}
                      onClick={handlePokemonClick}
                    />
                  ))}
                </div>
              </div>
            ))}

            {/* Indicador de carregamento */}
            {isFetchingNextPage && (
              <div
                className="flex justify-center items-center py-4"
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                }}
              >
                <Loading />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer com informações da virtualização */}
      <Footer windowInfo={footerWindowInfo} />

      {/* Drawer de detalhes */}
      <PokemonDetailDrawer
        pokemon={selectedPokemon}
        isOpen={isDrawerOpen}
        onClose={handleDrawerClose}
      />
    </>
  );
}

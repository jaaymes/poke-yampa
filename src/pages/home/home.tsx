import { Loading } from "@/components/loading";
import { useInfiniteScroll } from "@/hooks/use-infinite-scroll";
import { useLanguage } from "@/hooks/use-language";
import { useEffect, useState } from "react";
import { MdSearch, MdSend } from "react-icons/md";
import { PokemonGrid } from "../../components/pokemon-grid";
import { Button } from "../../components/ui/button";
import { Footer } from "../../components/ui/footer";
import { Header } from "../../components/ui/header";
import { Input } from "../../components/ui/input";
import { useListPokemons } from "../../hooks/use-list-pokemons";

export const Home = () => {
  const {
    pokemons,
    isLoading,
    isError,
    isFetchingNextPage,
    loadMore,
    loadPrevious,
    canLoadMore,
    canLoadPrevious,
    refetch,
    resetWindow,
    windowInfo,
  } = useListPokemons();
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");

  // Configurar infinite scroll com melhorias
  const { isScrollingUp, getDebugInfo, resetScroll } = useInfiniteScroll({
    hasNextPage: canLoadMore,
    hasPreviousPage: canLoadPrevious,
    isFetching: isFetchingNextPage,
    fetchNextPage: () => {
      console.log(
        "fetchNextPage chamado - canLoadMore:",
        canLoadMore,
        "isFetching:",
        isFetchingNextPage
      );
      if (canLoadMore && !isFetchingNextPage) {
        loadMore();
      }
    },
    fetchPreviousPage: () => {
      console.log(
        "fetchPreviousPage chamado - canLoadPrevious:",
        canLoadPrevious,
        "isFetching:",
        isFetchingNextPage
      );
      if (canLoadPrevious && !isFetchingNextPage) {
        loadPrevious();
      }
    },
    threshold: 200, // Ajustado para um valor mais conservador
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  // Reset scroll quando componente monta ou dados mudam significativamente
  useEffect(() => {
    if (pokemons.length === 0 && !isLoading) {
      resetScroll();
    }
  }, [pokemons.length, isLoading, resetScroll]);

  // Debug info (remover em produção)
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      const debugInfo = getDebugInfo();
      console.log("Debug Infinite Scroll:", {
        ...debugInfo,
        canLoadMore,
        canLoadPrevious,
        isFetchingNextPage,
        pokemonsCount: pokemons.length,
      });
    }
  }, [
    getDebugInfo,
    canLoadMore,
    canLoadPrevious,
    isFetchingNextPage,
    pokemons.length,
  ]);

  // Show loading state
  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col p-4">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <Loading />
        </main>
        <Footer windowInfo={windowInfo} />
      </div>
    );
  }

  // Show error state
  if (isError) {
    return (
      <div className="flex min-h-screen flex-col p-4">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-lg mb-4">{t("errorLoading")}</p>
            <Button
              onClick={() => {
                resetScroll();
                resetWindow();
                refetch();
              }}
            >
              {t("tryAgain")}
            </Button>
          </div>
        </main>
        <Footer windowInfo={windowInfo} />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pb-12 p-4">
        <section className="container mx-auto max-w-7xl py-4">
          <div className="mb-10 flex justify-center items-center">
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
                variant="link"
                size="icon"
                className="absolute right-1 top-1/2 -translate-y-1/2 cursor-pointer hover:text-primary"
              >
                <MdSend className="size-4" />
              </Button>
            </div>
          </div>

          {pokemons.length > 0 ? (
            <>
              {/* Loading indicator for previous data (top) */}
              {isFetchingNextPage && isScrollingUp && canLoadPrevious && (
                <div className="flex justify-center items-center py-4 mb-4">
                  <Loading />
                  <span className="ml-2 text-sm text-muted-foreground">
                    Carregando pokémons anteriores...
                  </span>
                </div>
              )}

              <PokemonGrid pokemons={pokemons} />

              {/* Loading indicator for next data (bottom) */}
              {isFetchingNextPage && !isScrollingUp && canLoadMore && (
                <div className="flex justify-center items-center py-8">
                  <Loading />
                  <span className="ml-2 text-sm text-muted-foreground">
                    Carregando mais pokémons...
                  </span>
                </div>
              )}

              {/* Indicador quando não há mais dados para carregar */}
              {!canLoadMore && !isFetchingNextPage && (
                <div className="flex justify-center items-center py-8">
                  <span className="text-sm text-muted-foreground">
                    Todos os pokémons foram carregados!
                  </span>
                </div>
              )}
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-4">
              <p className="mb-4 text-lg">{t("pokemonNotFound")}</p>
            </div>
          )}
        </section>
      </main>
      <Footer windowInfo={windowInfo} />
    </div>
  );
};

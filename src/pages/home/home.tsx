import { Loading } from "@/components/loading";
import { useLanguage } from "@/hooks/use-language";
import { useState } from "react";
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
    hasNextPage,
    refetch,
    loadMoreRef,
    windowInfo,
  } = useListPokemons();
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

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
            <Button onClick={() => refetch()}>{t("tryAgain")}</Button>
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
              <PokemonGrid pokemons={pokemons} />

              {/* Loading indicator and intersection observer trigger */}
              <div
                ref={loadMoreRef}
                className="flex justify-center items-center py-8"
              >
                {isFetchingNextPage && (
                  <>
                    <Loading />
                    <span className="ml-2 text-sm text-muted-foreground">
                      Carregando mais pokémons...
                    </span>
                  </>
                )}
                {!hasNextPage && !isFetchingNextPage && (
                  <span className="text-sm text-muted-foreground">
                    Todos os pokémons foram carregados!
                  </span>
                )}
              </div>
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

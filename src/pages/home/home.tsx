import { useLanguage } from "@/hooks/use-language";
import { useState } from "react";
import { MdSearch, MdSend } from "react-icons/md";
import { PokemonVirtualizedGrid } from "../../components/pokemon-virtualized-grid";
import { Button } from "../../components/ui/button";
import { Header } from "../../components/ui/header";
import { Input } from "../../components/ui/input";

export const Home = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

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

          {/* Grid virtualizado de Pokémons */}
          <PokemonVirtualizedGrid />
        </section>
      </main>
    </div>
  );
};

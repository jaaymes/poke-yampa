import type { PokemonDetail } from "@/interface/pokemon-detail";
import { getPokemon } from "@/services/pokemon";
import { CACHE_TIME } from "@/utils/enums";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useState } from "react";

export const useSearchPokemon = () => {
  const [searchedPokemon, setSearchedPokemon] = useState<string>("");
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const searchQuery = useQuery<PokemonDetail>({
    queryKey: ["pokemon-search", searchedPokemon],
    queryFn: () => getPokemon(searchedPokemon.toLowerCase()),
    enabled: !!searchedPokemon,
    retry: false,
    staleTime: CACHE_TIME.FIVE_MINUTES,
  });

  const handleSearchPokemon = async (name: string) => {
    if (!name.trim()) return;

    // Reset state if searching for a new pokemon
    if (name.trim().toLowerCase() !== searchedPokemon.toLowerCase()) {
      setIsDetailOpen(false);
    }

    setSearchedPokemon(name.trim().toLowerCase());
  };

  const openDetailDrawer = useCallback(() => {
    setIsDetailOpen(true);
  }, []);

  const closeDetailDrawer = useCallback(() => {
    setIsDetailOpen(false);
    setSearchedPokemon("");
  }, []);

  const resetSearch = () => {
    setSearchedPokemon("");
    setIsDetailOpen(false);
  };

  return {
    searchedPokemon,
    isDetailOpen,
    searchQuery,
    handleSearchPokemon,
    openDetailDrawer,
    closeDetailDrawer,
    resetSearch,
  };
};

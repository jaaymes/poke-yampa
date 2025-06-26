import type { PokemonDetail } from "@/interface/pokemon-detail";
import { getPokemon } from "@/services/pokemon";
import { useMutation } from "@tanstack/react-query";
import { useCallback, useState } from "react";

export const useSearchPokemon = () => {
  const [searchedPokemon, setSearchedPokemon] = useState<string>("");
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const searchMutation = useMutation<PokemonDetail>({
    mutationFn: () => getPokemon(searchedPokemon.toLowerCase()),
    onError: () => {
      setSearchedPokemon("");
      setIsDetailOpen(false);
    },
    retry: false,
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
    searchMutation,
    handleSearchPokemon,
    openDetailDrawer,
    closeDetailDrawer,
    resetSearch,
  };
};

import { getPokemonDetail } from "@/services/pokemon-detail";
import { CACHE_TIME } from "@/utils/enums";
import { useQuery } from "@tanstack/react-query";

export const useDetailPokemon = (url: string) => {
  const pokemonDetailQuery = useQuery({
    queryKey: ["pokemon-detail", url],
    queryFn: () => getPokemonDetail(url),
    staleTime: CACHE_TIME.FIVE_MINUTES,
  });

  return {
    pokemonDetailQuery,
  };
};

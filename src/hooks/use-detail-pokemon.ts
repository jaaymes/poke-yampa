import { getPokemonDetail } from "@/services/pokemon-detail";
import { useQuery } from "@tanstack/react-query";

export const useDetailPokemon = (id: string) => {
  const pokemonDetailQuery = useQuery({
    queryKey: ["pokemon", id],
    queryFn: () => getPokemonDetail(id),
  });

  return {
    pokemonDetailQuery,
  };
};

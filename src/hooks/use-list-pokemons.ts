import { getPokemons } from "@/services/pokemon";
import { useInfiniteQuery } from "@tanstack/react-query";

const POKEMON_PER_PAGE = 40;

export const useListPokemons = () => {
  // Infinite Query para gerenciar os dados
  const pokemonsQuery = useInfiniteQuery({
    queryKey: ["pokemons-list"],
    queryFn: ({ pageParam = 0 }) =>
      getPokemons({ limit: POKEMON_PER_PAGE, offset: pageParam }),
    getNextPageParam: (lastPage, pages) => {
      if (!lastPage.next) return undefined;
      return pages.length * POKEMON_PER_PAGE;
    },
    initialPageParam: 0,
  });

  return {
    pokemonsQuery,
  };
};

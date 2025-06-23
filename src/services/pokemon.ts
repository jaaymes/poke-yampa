import type { IPokemon, IPokemonResponse } from "@/interface/pokemon";
import type { PokemonDetail } from "@/interface/pokemon-detail";
import api from "./api";

const extractPokemonId = (url: string): number => {
  const segments = url.replace(/\/$/, "").split("/");
  return parseInt(segments[segments.length - 1], 10);
};

const generateAvatarUrl = (id: number): string => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
};

const extractInfoPokemon = async (id: number): Promise<PokemonDetail> => {
  const response = await api.get<PokemonDetail>(`/pokemon/${id}`);
  return response.data;
};

const processPokemon = async (pokemon: {
  name: string;
  url: string;
}): Promise<IPokemon> => {
  const id = extractPokemonId(pokemon.url);
  const avatar = generateAvatarUrl(id);
  const { types, stats } = await extractInfoPokemon(id);
  return {
    id,
    name: pokemon.name,
    url: pokemon.url,
    avatar,
    types,
    stats,
  };
};

export const getPokemons = async ({
  limit = 20,
  offset = 0,
}: {
  limit?: number;
  offset?: number;
}) => {
  const response = await api.get<IPokemonResponse>(
    `/pokemon?limit=${limit}&offset=${offset}`
  );

  const processedResults = await Promise.all(
    response.data.results.map(processPokemon)
  );

  return {
    count: response.data.count,
    next: response.data.next,
    previous: response.data.previous,
    results: processedResults,
  };
};

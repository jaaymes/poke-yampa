import type { IPokemonResponse } from "@/interface/pokemon";
import type { PokemonDetail } from "@/interface/pokemon-detail";
import api from "./api";

export const getPokemons = async ({
  limit = 20,
  offset = 0,
}: {
  limit?: number;
  offset?: number;
}) => {
  const { data } = await api.get<IPokemonResponse>(
    `/pokemon?limit=${limit}&offset=${offset}`
  );

  return data;
};

export const getPokemon = async (name: string) => {
  const { data } = await api.get<PokemonDetail>(`/pokemon/${name}`);
  return data;
};

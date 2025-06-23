import type { IPokemonResponse } from "@/interface/pokemon";
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

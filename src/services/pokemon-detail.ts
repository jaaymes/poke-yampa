import type { PokemonDetail } from "@/interface/pokemon-detail";
import api from "./api";

export const getPokemonDetail = async (id: string) => {
  const response = await api.get<PokemonDetail>(`/pokemon/${id}`);
  return response.data;
};

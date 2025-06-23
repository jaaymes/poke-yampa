import type { PokemonDetail } from "@/interface/pokemon-detail";
import axios from "axios";

export const getPokemonDetail = async (url: string) => {
  const response = await axios.get<PokemonDetail>(url);
  return response.data;
};

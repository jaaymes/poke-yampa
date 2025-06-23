import { z } from "zod";
import { PokemonStatSchema, PokemonTypeSchema } from "./pokemon-detail";

export const SchemaPokemonResponse = z.object({
  count: z.number(),
  next: z.string().nullable(),
  previous: z.string().nullable(),
  results: z.array(
    z.object({
      name: z.string(),
      url: z.string(),
    })
  ),
});

export type IPokemonResponse = z.infer<typeof SchemaPokemonResponse>;

// Interface para o Pokemon processado com id e avatar
export const SchemaPokemon = z.object({
  id: z.number(),
  name: z.string(),
  url: z.string(),
  avatar: z.string(),
  types: z.array(PokemonTypeSchema),
  stats: z.array(PokemonStatSchema),
});

export type IPokemon = z.infer<typeof SchemaPokemon>;

// Interface para a resposta processada
export const SchemaProcessedPokemonResponse = z.object({
  count: z.number(),
  next: z.string().nullable(),
  previous: z.string().nullable(),
  results: z.array(SchemaPokemon),
});

export type IProcessedPokemonResponse = z.infer<
  typeof SchemaProcessedPokemonResponse
>;

import { z } from "zod";

// Schema para referência básica (name + url)
const NamedAPIResourceSchema = z.object({
  name: z.string(),
  url: z.string().url(),
});

// Schema para habilidades
const PokemonAbilitySchema = z.object({
  ability: NamedAPIResourceSchema,
  is_hidden: z.boolean(),
  slot: z.number(),
});

// Schema para sons/gritos
const PokemonCriesSchema = z.object({
  latest: z.string().url(),
  legacy: z.string().url(),
});

// Schema para índices de jogos
const PokemonGameIndexSchema = z.object({
  game_index: z.number(),
  version: NamedAPIResourceSchema,
});

// Schema para detalhes de versão de movimento
const PokemonMoveVersionSchema = z.object({
  level_learned_at: z.number(),
  move_learn_method: NamedAPIResourceSchema,
  order: z.number().nullable(),
  version_group: NamedAPIResourceSchema,
});

// Schema para movimentos
const PokemonMoveSchema = z.object({
  move: NamedAPIResourceSchema,
  version_group_details: z.array(PokemonMoveVersionSchema),
});

// Schema para habilidades passadas
const PokemonPastAbilitySchema = z.object({
  abilities: z.array(
    z.object({
      ability: NamedAPIResourceSchema.nullable(),
      is_hidden: z.boolean(),
      slot: z.number(),
    })
  ),
  generation: NamedAPIResourceSchema,
});

// Schema para sprites de versões específicas
const PokemonVersionSpritesSchema = z
  .object({
    back_default: z.string().url().nullable(),
    back_female: z.string().url().nullable(),
    back_shiny: z.string().url().nullable(),
    back_shiny_female: z.string().url().nullable(),
    front_default: z.string().url().nullable(),
    front_female: z.string().url().nullable(),
    front_shiny: z.string().url().nullable(),
    front_shiny_female: z.string().url().nullable(),
  })
  .partial();

// Schema para sprites de versões com propriedades adicionais
const PokemonVersionSpritesExtendedSchema = PokemonVersionSpritesSchema.extend({
  back_gray: z.string().url().nullable(),
  back_transparent: z.string().url().nullable(),
  front_gray: z.string().url().nullable(),
  front_transparent: z.string().url().nullable(),
  back_shiny_transparent: z.string().url().nullable(),
  front_shiny_transparent: z.string().url().nullable(),
  animated: z
    .object({
      back_default: z.string().url().nullable(),
      back_female: z.string().url().nullable(),
      back_shiny: z.string().url().nullable(),
      back_shiny_female: z.string().url().nullable(),
      front_default: z.string().url().nullable(),
      front_female: z.string().url().nullable(),
      front_shiny: z.string().url().nullable(),
      front_shiny_female: z.string().url().nullable(),
    })
    .partial()
    .optional(),
}).partial();

// Schema para sprites de outras fontes
const PokemonOtherSpritesSchema = z.object({
  dream_world: z.object({
    front_default: z.string().url().nullable(),
    front_female: z.string().url().nullable(),
  }),
  home: z.object({
    front_default: z.string().url().nullable(),
    front_female: z.string().url().nullable(),
    front_shiny: z.string().url().nullable(),
    front_shiny_female: z.string().url().nullable(),
  }),
  "official-artwork": z.object({
    front_default: z.string().url().nullable(),
    front_shiny: z.string().url().nullable(),
  }),
  showdown: z.object({
    back_default: z.string().url().nullable(),
    back_female: z.string().url().nullable(),
    back_shiny: z.string().url().nullable(),
    back_shiny_female: z.string().url().nullable(),
    front_default: z.string().url().nullable(),
    front_female: z.string().url().nullable(),
    front_shiny: z.string().url().nullable(),
    front_shiny_female: z.string().url().nullable(),
  }),
});

// Schema para sprites por versões de jogos
const PokemonVersionGroupSpritesSchema = z
  .object({
    "generation-i": z.object({
      "red-blue": PokemonVersionSpritesExtendedSchema,
      yellow: PokemonVersionSpritesExtendedSchema,
    }),
    "generation-ii": z.object({
      crystal: PokemonVersionSpritesExtendedSchema,
      gold: PokemonVersionSpritesExtendedSchema,
      silver: PokemonVersionSpritesExtendedSchema,
    }),
    "generation-iii": z.object({
      emerald: PokemonVersionSpritesSchema,
      "firered-leafgreen": PokemonVersionSpritesSchema,
      "ruby-sapphire": PokemonVersionSpritesSchema,
    }),
    "generation-iv": z.object({
      "diamond-pearl": PokemonVersionSpritesSchema,
      "heartgold-soulsilver": PokemonVersionSpritesSchema,
      platinum: PokemonVersionSpritesSchema,
    }),
    "generation-v": z.object({
      "black-white": PokemonVersionSpritesExtendedSchema,
    }),
    "generation-vi": z.object({
      "omegaruby-alphasapphire": PokemonVersionSpritesSchema,
      "x-y": PokemonVersionSpritesSchema,
    }),
    "generation-vii": z.object({
      icons: z.object({
        front_default: z.string().url().nullable(),
        front_female: z.string().url().nullable(),
      }),
      "ultra-sun-ultra-moon": PokemonVersionSpritesSchema,
    }),
    "generation-viii": z.object({
      icons: z.object({
        front_default: z.string().url().nullable(),
        front_female: z.string().url().nullable(),
      }),
    }),
  })
  .partial();

// Schema principal para sprites
const PokemonSpritesSchema = z.object({
  back_default: z.string().url().nullable(),
  back_female: z.string().url().nullable(),
  back_shiny: z.string().url().nullable(),
  back_shiny_female: z.string().url().nullable(),
  front_default: z.string().url().nullable(),
  front_female: z.string().url().nullable(),
  front_shiny: z.string().url().nullable(),
  front_shiny_female: z.string().url().nullable(),
  other: PokemonOtherSpritesSchema,
  versions: PokemonVersionGroupSpritesSchema,
});

// Schema para estatísticas
export const PokemonStatSchema = z.object({
  base_stat: z.number(),
  effort: z.number(),
  stat: NamedAPIResourceSchema,
});

// Schema para tipos
export const PokemonTypeSchema = z.object({
  slot: z.number(),
  type: NamedAPIResourceSchema,
});

// Schema principal para detalhes do Pokémon
export const PokemonDetailSchema = z.object({
  abilities: z.array(PokemonAbilitySchema),
  base_experience: z.number(),
  cries: PokemonCriesSchema,
  forms: z.array(NamedAPIResourceSchema),
  game_indices: z.array(PokemonGameIndexSchema),
  height: z.number(),
  held_items: z.array(z.unknown()), // Array vazio no exemplo, pode ser expandido se necessário
  id: z.number(),
  is_default: z.boolean(),
  location_area_encounters: z.string().url(),
  moves: z.array(PokemonMoveSchema),
  name: z.string(),
  order: z.number(),
  past_abilities: z.array(PokemonPastAbilitySchema),
  past_types: z.array(z.unknown()), // Array vazio no exemplo, pode ser expandido se necessário
  species: NamedAPIResourceSchema,
  sprites: PokemonSpritesSchema,
  stats: z.array(PokemonStatSchema),
  types: z.array(PokemonTypeSchema),
  weight: z.number(),
});

// Tipos TypeScript inferidos do schema Zod
export type PokemonDetail = z.infer<typeof PokemonDetailSchema>;
export type PokemonAbility = z.infer<typeof PokemonAbilitySchema>;
export type PokemonCries = z.infer<typeof PokemonCriesSchema>;
export type PokemonGameIndex = z.infer<typeof PokemonGameIndexSchema>;
export type PokemonMove = z.infer<typeof PokemonMoveSchema>;
export type PokemonMoveVersion = z.infer<typeof PokemonMoveVersionSchema>;
export type PokemonSprites = z.infer<typeof PokemonSpritesSchema>;
export type PokemonStat = z.infer<typeof PokemonStatSchema>;
export type PokemonType = z.infer<typeof PokemonTypeSchema>;
export type NamedAPIResource = z.infer<typeof NamedAPIResourceSchema>;

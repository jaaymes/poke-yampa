import { useDetailPokemon } from "@/hooks/use-detail-pokemon";
import { useLanguage } from "@/hooks/use-language";
import { useScreenSize } from "@/hooks/use-screen-size";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PokemonCard } from "./pokemon-card";

// Mock the hooks
jest.mock("@/hooks/use-detail-pokemon");
jest.mock("@/hooks/use-screen-size");
jest.mock("@/hooks/use-language");

// Create a wrapper with QueryClientProvider
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

const meta = {
  title: "Components/PokemonCard",
  component: PokemonCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    pokemon: {
      description: "Pokemon object with name and URL",
    },
    onHeightChange: {
      description: "Callback function when the card height changes",
      action: "height changed",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "350px" }}>
        <Wrapper>
          <Story />
        </Wrapper>
      </div>
    ),
  ],
} satisfies Meta<typeof PokemonCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// Mock data for the stories
const mockPokemonData = {
  name: "bulbasaur",
  types: [
    {
      slot: 1,
      type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
    },
    {
      slot: 2,
      type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
    },
  ],
  stats: [
    {
      base_stat: 45,
      effort: 0,
      stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" },
    },
    {
      base_stat: 49,
      effort: 0,
      stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" },
    },
    {
      base_stat: 49,
      effort: 0,
      stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" },
    },
    {
      base_stat: 65,
      effort: 1,
      stat: {
        name: "special-attack",
        url: "https://pokeapi.co/api/v2/stat/4/",
      },
    },
    {
      base_stat: 65,
      effort: 0,
      stat: {
        name: "special-defense",
        url: "https://pokeapi.co/api/v2/stat/5/",
      },
    },
    {
      base_stat: 45,
      effort: 0,
      stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" },
    },
  ],
  sprites: {
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    other: {
      dream_world: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
        front_female: "",
      },
      home: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
        front_female: "",
        front_shiny: "",
        front_shiny_female: "",
      },
      "official-artwork": {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        front_shiny: "",
      },
      showdown: {
        back_default: null,
        back_female: null,
        back_shiny: null,
        back_shiny_female: null,
        front_default: null,
        front_female: null,
        front_shiny: null,
        front_shiny_female: null,
      },
    },
    versions: {},
    back_default: null,
    back_female: null,
    back_shiny: null,
    back_shiny_female: null,
    front_female: null,
    front_shiny: null,
    front_shiny_female: null,
  },
  abilities: [
    {
      ability: {
        name: "overgrow",
        url: "https://pokeapi.co/api/v2/ability/65/",
      },
      is_hidden: false,
      slot: 1,
    },
    {
      ability: {
        name: "chlorophyll",
        url: "https://pokeapi.co/api/v2/ability/34/",
      },
      is_hidden: true,
      slot: 3,
    },
  ],
};

// Mock the hooks for each story
const setupMocks = (isLoading = false, hasData = true, isMobile = false) => {
  // Mock useDetailPokemon
  (useDetailPokemon as jest.Mock).mockReturnValue({
    pokemonDetailQuery: {
      isLoading,
      data: hasData ? mockPokemonData : null,
    },
  });

  // Mock useScreenSize
  (useScreenSize as jest.Mock).mockReturnValue({
    isMobile,
  });

  // Mock useLanguage
  (useLanguage as jest.Mock).mockReturnValue({
    t: (key: string) => {
      const translations: Record<string, string> = {
        pokemonNotFound: "Pokémon não encontrado",
        total: "Total",
        type: "Tipo",
        grass: "Planta",
        poison: "Veneno",
        sprite: "Sprite",
        expand: "Expandir",
        collapse: "Recolher",
        stats: "Estatísticas",
        viewDetails: "Ver detalhes",
        detailedStats: "Estatísticas detalhadas",
        clickToCopy: "Clique para copiar",
        pokemonTypes: "Tipos de Pokémon",
      };
      return translations[key] || key;
    },
  });
};

export const Default: Story = {
  args: {
    pokemon: {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/",
    },
    onHeightChange: () => {},
  },
  decorators: [
    (Story) => {
      setupMocks(false, true, false);
      return <Story />;
    },
  ],
};

export const Mobile: Story = {
  args: {
    pokemon: {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/",
    },
    onHeightChange: () => {},
  },
  decorators: [
    (Story) => {
      setupMocks(false, true, true);
      return <Story />;
    },
  ],
};

export const Loading: Story = {
  args: {
    pokemon: {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/",
    },
    onHeightChange: () => {},
  },
  decorators: [
    (Story) => {
      setupMocks(true, false, false);
      return <Story />;
    },
  ],
};

export const NotFound: Story = {
  args: {
    pokemon: {
      name: "missingno",
      url: "https://pokeapi.co/api/v2/pokemon/9999/",
    },
    onHeightChange: () => {},
  },
  decorators: [
    (Story) => {
      setupMocks(false, false, false);
      return <Story />;
    },
  ],
};

export const CharizardCard: Story = {
  args: {
    pokemon: {
      name: "charizard",
      url: "https://pokeapi.co/api/v2/pokemon/6/",
    },
    onHeightChange: () => {},
  },
  decorators: [
    (Story) => {
      // Override the mock data for this specific story
      const charizardData = {
        ...mockPokemonData,
        name: "charizard",
        types: [
          {
            slot: 1,
            type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
          },
          {
            slot: 2,
            type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
          },
        ],
        stats: [
          {
            base_stat: 78,
            effort: 0,
            stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" },
          },
          {
            base_stat: 84,
            effort: 0,
            stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" },
          },
          {
            base_stat: 78,
            effort: 0,
            stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" },
          },
          {
            base_stat: 109,
            effort: 3,
            stat: {
              name: "special-attack",
              url: "https://pokeapi.co/api/v2/stat/4/",
            },
          },
          {
            base_stat: 85,
            effort: 0,
            stat: {
              name: "special-defense",
              url: "https://pokeapi.co/api/v2/stat/5/",
            },
          },
          {
            base_stat: 100,
            effort: 0,
            stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" },
          },
        ],
        sprites: {
          ...mockPokemonData.sprites,
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
          other: {
            ...mockPokemonData.sprites.other,
            dream_world: {
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg",
              front_female: "",
            },
            "official-artwork": {
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
              front_shiny: "",
            },
          },
        },
      };

      (useDetailPokemon as jest.Mock).mockReturnValue({
        pokemonDetailQuery: {
          isLoading: false,
          data: charizardData,
        },
      });

      (useScreenSize as jest.Mock).mockReturnValue({
        isMobile: false,
      });

      (useLanguage as jest.Mock).mockReturnValue({
        t: (key: string) => {
          const translations: Record<string, string> = {
            pokemonNotFound: "Pokémon não encontrado",
            total: "Total",
            type: "Tipo",
            fire: "Fogo",
            flying: "Voador",
            sprite: "Sprite",
            expand: "Expandir",
            collapse: "Recolher",
            stats: "Estatísticas",
            viewDetails: "Ver detalhes",
            detailedStats: "Estatísticas detalhadas",
            clickToCopy: "Clique para copiar",
            pokemonTypes: "Tipos de Pokémon",
          };
          return translations[key] || key;
        },
      });

      return <Story />;
    },
  ],
};

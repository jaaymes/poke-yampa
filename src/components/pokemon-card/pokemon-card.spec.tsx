/* eslint-disable @typescript-eslint/no-explicit-any */
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import type { IPokemon } from "../../interface/pokemon";
import { PokemonCard } from "./pokemon-card";

// Mock dos hooks
vi.mock("@/hooks/use-detail-pokemon", () => ({
  useDetailPokemon: vi.fn(),
}));

vi.mock("@/hooks/use-language", () => ({
  useLanguage: vi.fn(),
}));

vi.mock("@/hooks/use-screen-size", () => ({
  useScreenSize: vi.fn(),
}));

// Mock dos componentes
vi.mock("../pokemon-detail-drawer", () => ({
  PokemonDetailDrawer: ({
    isOpen,
    onClose,
    name,
  }: {
    isOpen: boolean;
    onClose: () => void;
    name: string;
  }) => (
    <div data-testid="pokemon-detail-drawer" data-open={isOpen}>
      <button onClick={onClose} data-testid="close-drawer">
        Close {name}
      </button>
    </div>
  ),
}));

vi.mock("../pokemon-stats-expanded", () => ({
  PokemonStatsExpanded: ({
    stats,
  }: {
    stats: Array<{ stat: { name: string }; base_stat: number }>;
  }) => (
    <div data-testid="pokemon-stats-expanded">
      {stats.map((stat) => (
        <div key={stat.stat.name} data-testid={`stat-${stat.stat.name}`}>
          {stat.stat.name}: {stat.base_stat}
        </div>
      ))}
    </div>
  ),
}));

vi.mock("./pokemon-card-skeleton", () => ({
  PokemonCardSkeleton: () => (
    <div data-testid="pokemon-card-skeleton">Loading...</div>
  ),
}));

// Mock dos componentes UI
vi.mock("../ui/image", () => ({
  Image: ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} data-testid="pokemon-image" />
  ),
}));

// Dados de mock
const mockPokemon: IPokemon = {
  name: "pikachu",
  url: "https://pokeapi.co/api/v2/pokemon/25/",
};

const mockPokemonDetail = {
  name: "pikachu",
  types: [
    {
      slot: 1,
      type: {
        name: "electric",
        url: "https://pokeapi.co/api/v2/type/13/",
      },
    },
  ],
  stats: [
    {
      base_stat: 35,
      effort: 0,
      stat: {
        name: "hp",
        url: "https://pokeapi.co/api/v2/stat/1/",
      },
    },
    {
      base_stat: 55,
      effort: 0,
      stat: {
        name: "attack",
        url: "https://pokeapi.co/api/v2/stat/2/",
      },
    },
    {
      base_stat: 40,
      effort: 0,
      stat: {
        name: "defense",
        url: "https://pokeapi.co/api/v2/stat/3/",
      },
    },
  ],
  sprites: {
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    other: {
      dream_world: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg",
      },
    },
  },
};

const mockTranslations = {
  pokemonNotFound: "Pokémon não encontrado",
  pokemonTypes: "Tipos do Pokémon",
  type: "Tipo",
  electric: "Elétrico",
  totalStats: "Stats totais",
  total: "Total",
  sprite: "sprite",
  expand: "Expandir",
  collapse: "Recolher",
  viewDetails: "Ver detalhes",
  stats: "stats",
  detailedStats: "stats detalhados",
  flying: "Voador",
};

// Importa os hooks mockados
import { useDetailPokemon } from "@/hooks/use-detail-pokemon";
import { useLanguage } from "@/hooks/use-language";
import { useScreenSize } from "@/hooks/use-screen-size";

const mockUseDetailPokemon = vi.mocked(useDetailPokemon);
const mockUseLanguage = vi.mocked(useLanguage);
const mockUseScreenSize = vi.mocked(useScreenSize);

describe("PokemonCard", () => {
  const mockOnHeightChange = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    // Mock padrão do useLanguage
    mockUseLanguage.mockReturnValue({
      currentLanguage: "pt-BR",
      changeLanguage: vi.fn(),
      toggleLanguage: vi.fn(),
      t: (key: string) =>
        mockTranslations[key as keyof typeof mockTranslations] || key,
    } as any);

    // Mock padrão do useScreenSize
    mockUseScreenSize.mockReturnValue({
      size: "desktop",
      isMobile: false,
      isTablet: false,
      isDesktop: true,
      width: 1024,
    });

    // Mock padrão do useDetailPokemon
    mockUseDetailPokemon.mockReturnValue({
      pokemonDetailQuery: {
        data: mockPokemonDetail,
        isLoading: false,
        isError: false,
        error: null,
      },
    } as any);
  });

  it("deve renderizar o card do Pokémon com dados corretos", () => {
    render(
      <PokemonCard pokemon={mockPokemon} onHeightChange={mockOnHeightChange} />
    );

    // Verifica se o card é renderizado
    expect(screen.getByTestId("pokemon-card")).toBeInTheDocument();

    // Verifica o nome do Pokémon
    expect(screen.getByTestId("pokemon-name")).toHaveTextContent("pikachu");

    // Verifica os tipos
    expect(screen.getByTestId("pokemon-types")).toBeInTheDocument();
    expect(screen.getByTestId("pokemon-type-electric")).toHaveTextContent(
      "Elétrico"
    );

    // Verifica o total de stats (35 + 55 + 40 = 130)
    expect(screen.getByTestId("pokemon-total-stats")).toHaveTextContent("130");

    // Verifica a imagem
    expect(screen.getByTestId("pokemon-image")).toHaveAttribute(
      "src",
      mockPokemonDetail.sprites.other.dream_world.front_default
    );
  });

  it("deve exibir skeleton quando está carregando", () => {
    mockUseDetailPokemon.mockReturnValue({
      pokemonDetailQuery: {
        data: undefined,
        isLoading: true,
        isError: false,
        error: null,
      },
    } as any);

    render(
      <PokemonCard pokemon={mockPokemon} onHeightChange={mockOnHeightChange} />
    );

    expect(screen.getByTestId("pokemon-card-skeleton")).toBeInTheDocument();
  });

  it("deve exibir mensagem de erro quando não há dados", () => {
    mockUseDetailPokemon.mockReturnValue({
      pokemonDetailQuery: {
        data: undefined,
        isLoading: false,
        isError: true,
        error: new Error("Pokémon não encontrado"),
      },
    } as any);

    render(
      <PokemonCard pokemon={mockPokemon} onHeightChange={mockOnHeightChange} />
    );

    expect(screen.getByTestId("pokemon-not-found")).toHaveTextContent(
      "Pokémon não encontrado"
    );
  });

  it("deve abrir o drawer quando clicar em 'Ver detalhes'", () => {
    render(
      <PokemonCard pokemon={mockPokemon} onHeightChange={mockOnHeightChange} />
    );

    const viewDetailsButton = screen.getByTestId("view-details-button");
    fireEvent.click(viewDetailsButton);

    const drawer = screen.getByTestId("pokemon-detail-drawer");
    expect(drawer).toHaveAttribute("data-open", "true");
  });

  it("deve expandir/recolher stats no mobile", async () => {
    mockUseScreenSize.mockReturnValue({
      size: "mobile",
      isMobile: true,
      isTablet: false,
      isDesktop: false,
      width: 375,
    });

    render(
      <PokemonCard pokemon={mockPokemon} onHeightChange={mockOnHeightChange} />
    );

    // Verifica se o botão de expandir está presente no mobile
    const expandButton = screen.getByTestId("expand-button");
    expect(expandButton).toBeInTheDocument();

    // Verifica se as stats expandidas não estão visíveis inicialmente
    expect(screen.queryByTestId("expanded-stats")).not.toBeInTheDocument();

    // Clica no botão de expandir
    fireEvent.click(expandButton);

    // Verifica se as stats expandidas aparecem
    await waitFor(() => {
      expect(screen.getByTestId("expanded-stats")).toBeInTheDocument();
    });
  });

  it("não deve mostrar botão de expandir no desktop", () => {
    render(
      <PokemonCard pokemon={mockPokemon} onHeightChange={mockOnHeightChange} />
    );

    // No desktop, o botão de expandir não deve estar presente
    expect(screen.queryByTestId("expand-button")).not.toBeInTheDocument();
  });

  it("deve chamar onHeightChange quando o componente é montado", async () => {
    render(
      <PokemonCard pokemon={mockPokemon} onHeightChange={mockOnHeightChange} />
    );

    // Aguarda o useEffect ser executado
    await waitFor(() => {
      expect(mockOnHeightChange).toHaveBeenCalled();
    });
  });

  it("deve usar imagem padrão quando dream_world não está disponível", () => {
    const mockDetailWithoutDreamWorld = {
      ...mockPokemonDetail,
      sprites: {
        ...mockPokemonDetail.sprites,
        other: {
          ...mockPokemonDetail.sprites.other,
          dream_world: {
            front_default: null,
          },
        },
      },
    };

    mockUseDetailPokemon.mockReturnValue({
      pokemonDetailQuery: {
        data: mockDetailWithoutDreamWorld,
        isLoading: false,
        isError: false,
        error: null,
      },
    } as any);

    render(
      <PokemonCard pokemon={mockPokemon} onHeightChange={mockOnHeightChange} />
    );

    expect(screen.getByTestId("pokemon-image")).toHaveAttribute(
      "src",
      mockDetailWithoutDreamWorld.sprites.front_default
    );
  });

  it("deve renderizar múltiplos tipos corretamente", () => {
    const mockDetailWithMultipleTypes = {
      ...mockPokemonDetail,
      types: [
        {
          slot: 1,
          type: {
            name: "electric",
            url: "https://pokeapi.co/api/v2/type/13/",
          },
        },
        {
          slot: 2,
          type: {
            name: "flying",
            url: "https://pokeapi.co/api/v2/type/3/",
          },
        },
      ],
    };

    mockUseDetailPokemon.mockReturnValue({
      pokemonDetailQuery: {
        data: mockDetailWithMultipleTypes,
        isLoading: false,
        isError: false,
        error: null,
      },
    } as any);

    render(
      <PokemonCard pokemon={mockPokemon} onHeightChange={mockOnHeightChange} />
    );

    expect(screen.getByTestId("pokemon-type-electric")).toHaveTextContent(
      "Elétrico"
    );
    expect(screen.getByTestId("pokemon-type-flying")).toHaveTextContent(
      "Voador"
    );
  });

  it("deve fechar o drawer quando clicar no botão de fechar", () => {
    render(
      <PokemonCard pokemon={mockPokemon} onHeightChange={mockOnHeightChange} />
    );

    // Abre o drawer
    const viewDetailsButton = screen.getByTestId("view-details-button");
    fireEvent.click(viewDetailsButton);

    // Verifica se o drawer está aberto
    let drawer = screen.getByTestId("pokemon-detail-drawer");
    expect(drawer).toHaveAttribute("data-open", "true");

    // Fecha o drawer
    const closeButton = screen.getByTestId("close-drawer");
    fireEvent.click(closeButton);

    // Verifica se o drawer foi fechado
    drawer = screen.getByTestId("pokemon-detail-drawer");
    expect(drawer).toHaveAttribute("data-open", "false");
  });
});

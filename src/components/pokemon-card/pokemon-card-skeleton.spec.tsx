import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PokemonCardSkeleton } from "./pokemon-card-skeleton";

describe("PokemonCardSkeleton", () => {
  it("deve renderizar o componente skeleton", () => {
    render(<PokemonCardSkeleton />);

    // Verifica se o card principal está presente
    const card = screen.getByTestId("pokemon-card-skeleton");
    expect(card).toBeInTheDocument();
  });

  it("deve ter a estrutura HTML correta", () => {
    render(<PokemonCardSkeleton />);

    // Verifica se o Card tem as classes corretas
    const card = screen.getByTestId("pokemon-card-skeleton");
    expect(card).toHaveClass("overflow-hidden", "transition-all", "border-0");
  });

  it("deve renderizar skeleton para o nome do Pokémon", () => {
    render(<PokemonCardSkeleton />);

    // Verifica se existe skeleton para o nome
    const nameSkeleton = screen.getByTestId("pokemon-card-skeleton-name");
    expect(nameSkeleton).toBeInTheDocument();
    expect(nameSkeleton).toHaveClass("h-6", "w-24");
  });

  it("deve renderizar skeletons para os tipos do Pokémon", () => {
    render(<PokemonCardSkeleton />);

    // Verifica se existem 2 skeletons para os tipos
    const typesContainer = screen.getByTestId("pokemon-card-skeleton-types");
    expect(typesContainer).toBeInTheDocument();

    const type1Skeleton = screen.getByTestId("pokemon-card-skeleton-type-1");
    const type2Skeleton = screen.getByTestId("pokemon-card-skeleton-type-2");

    expect(type1Skeleton).toBeInTheDocument();
    expect(type1Skeleton).toHaveClass("h-5", "w-16", "rounded-full");

    expect(type2Skeleton).toBeInTheDocument();
    expect(type2Skeleton).toHaveClass("h-5", "w-16", "rounded-full");
  });

  it("deve renderizar skeletons para as estatísticas", () => {
    render(<PokemonCardSkeleton />);

    // Verifica se existem skeletons para as stats
    const statsContainer = screen.getByTestId("pokemon-card-skeleton-stats");
    expect(statsContainer).toBeInTheDocument();

    const stat1Skeleton = screen.getByTestId("pokemon-card-skeleton-stat-1");
    const stat2Skeleton = screen.getByTestId("pokemon-card-skeleton-stat-2");

    expect(stat1Skeleton).toBeInTheDocument();
    expect(stat1Skeleton).toHaveClass("h-4", "w-8");

    expect(stat2Skeleton).toBeInTheDocument();
    expect(stat2Skeleton).toHaveClass("h-4", "w-8");
  });

  it("deve renderizar skeleton para a imagem do Pokémon", () => {
    render(<PokemonCardSkeleton />);

    // Verifica se existe skeleton para a imagem
    const imageContainer = screen.getByTestId(
      "pokemon-card-skeleton-image-container"
    );
    const imageSkeleton = screen.getByTestId("pokemon-card-skeleton-image");

    expect(imageContainer).toBeInTheDocument();
    expect(imageContainer).toHaveClass(
      "h-24",
      "w-24",
      "flex",
      "items-center",
      "justify-center",
      "rounded",
      "flex-shrink-0"
    );

    expect(imageSkeleton).toBeInTheDocument();
    expect(imageSkeleton).toHaveClass("w-full", "h-full", "rounded-md");
  });

  it("deve renderizar skeletons para os botões de ação", () => {
    render(<PokemonCardSkeleton />);

    // Verifica se existem 2 skeletons para os botões
    const actionsContainer = screen.getByTestId(
      "pokemon-card-skeleton-actions"
    );
    expect(actionsContainer).toBeInTheDocument();

    const button1Skeleton = screen.getByTestId(
      "pokemon-card-skeleton-button-1"
    );
    const button2Skeleton = screen.getByTestId(
      "pokemon-card-skeleton-button-2"
    );

    expect(button1Skeleton).toBeInTheDocument();
    expect(button1Skeleton).toHaveClass("h-8", "w-20");

    expect(button2Skeleton).toBeInTheDocument();
    expect(button2Skeleton).toHaveClass("h-8", "w-24");
  });

  it("deve ter layout flexível correto", () => {
    render(<PokemonCardSkeleton />);

    // Verifica o layout principal
    const cardContent = screen.getByTestId("pokemon-card-skeleton-content");
    expect(cardContent).toBeInTheDocument();
    expect(cardContent).toHaveClass("p-4", "flex", "flex-col");

    // Verifica o header com layout flex
    const headerSection = screen.getByTestId("pokemon-card-skeleton-header");
    expect(headerSection).toBeInTheDocument();
    expect(headerSection).toHaveClass(
      "flex",
      "gap-4",
      "mb-2",
      "justify-between",
      "px-4",
      "items-center"
    );

    // Verifica a seção de informações do Pokémon
    const pokemonInfo = screen.getByTestId("pokemon-card-skeleton-info");
    expect(pokemonInfo).toBeInTheDocument();
    expect(pokemonInfo).toHaveClass("flex", "flex-col", "gap-1", "flex-1");

    // Verifica a seção de tipos
    const typesSection = screen.getByTestId("pokemon-card-skeleton-types");
    expect(typesSection).toBeInTheDocument();
    expect(typesSection).toHaveClass("flex", "flex-wrap", "gap-2");

    // Verifica a seção de botões
    const buttonsSection = screen.getByTestId("pokemon-card-skeleton-actions");
    expect(buttonsSection).toBeInTheDocument();
    expect(buttonsSection).toHaveClass(
      "flex",
      "gap-0",
      "pt-2",
      "justify-around"
    );
  });

  it("deve ter a seção de estatísticas com layout correto", () => {
    render(<PokemonCardSkeleton />);

    // Verifica a seção de stats
    const statsSection = screen.getByTestId("pokemon-card-skeleton-stats");
    expect(statsSection).toBeInTheDocument();
    expect(statsSection).toHaveClass("flex", "flex-col", "gap-2.5", "mt-2");

    // Verifica a linha de stats
    const statsRow = screen.getByTestId("pokemon-card-skeleton-stats-row");
    expect(statsRow).toBeInTheDocument();
    expect(statsRow).toHaveClass("flex", "items-center", "gap-2");
  });

  it("deve renderizar todos os elementos principais", () => {
    render(<PokemonCardSkeleton />);

    // Verifica se todos os elementos principais estão presentes
    expect(screen.getByTestId("pokemon-card-skeleton")).toBeInTheDocument();
    expect(
      screen.getByTestId("pokemon-card-skeleton-content")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("pokemon-card-skeleton-header")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("pokemon-card-skeleton-info")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("pokemon-card-skeleton-name")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("pokemon-card-skeleton-types")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("pokemon-card-skeleton-type-1")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("pokemon-card-skeleton-type-2")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("pokemon-card-skeleton-stats")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("pokemon-card-skeleton-stats-row")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("pokemon-card-skeleton-stat-1")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("pokemon-card-skeleton-stat-2")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("pokemon-card-skeleton-image-container")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("pokemon-card-skeleton-image")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("pokemon-card-skeleton-actions")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("pokemon-card-skeleton-button-1")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("pokemon-card-skeleton-button-2")
    ).toBeInTheDocument();
  });

  it("deve manter a estrutura de layout responsivo", () => {
    render(<PokemonCardSkeleton />);

    // Verifica se a estrutura permite layout responsivo
    const headerSection = screen.getByTestId("pokemon-card-skeleton-header");
    expect(headerSection).toHaveClass(
      "flex",
      "gap-4",
      "mb-2",
      "justify-between"
    );

    // Verifica se a seção de informações é flexível
    const pokemonInfo = screen.getByTestId("pokemon-card-skeleton-info");
    expect(pokemonInfo).toHaveClass("flex-1");

    // Verifica se a imagem é flex-shrink-0 para manter tamanho
    const imageContainer = screen.getByTestId(
      "pokemon-card-skeleton-image-container"
    );
    expect(imageContainer).toHaveClass("flex-shrink-0");
  });
});

import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Footer } from "./footer";

// Mock do hook useLanguage
const mockT = vi.fn((key: string) => {
  const translations: Record<string, string> = {
    pokemons: "Pokémons",
    showing: "Mostrando",
    of: "de",
  };
  return translations[key] || key;
});

vi.mock("@/hooks/use-language", () => ({
  useLanguage: () => ({ t: mockT }),
}));

describe("Footer", () => {
  it("deve renderizar o footer sem informações de janela", () => {
    render(<Footer />);

    expect(
      screen.getByText("Pokémons - Lista virtualizada")
    ).toBeInTheDocument();
  });

  it("deve renderizar o footer com informações básicas de janela", () => {
    const windowInfo = {
      end: 20,
      total: 100,
      currentPage: 1,
      offset: 0,
      windowSize: 20,
    };

    render(<Footer windowInfo={windowInfo} data-testid="footer" />);

    expect(
      screen.getByText(/Mostrando 20 de 100 Pokémons - Página 1/)
    ).toBeInTheDocument();
  });

  it("deve renderizar informações de debug em desenvolvimento", () => {
    // Mock do import.meta.env.DEV
    Object.defineProperty(import.meta, "env", {
      value: { DEV: true },
      writable: true,
    });

    const windowInfo = {
      end: 20,
      total: 100,
      currentPage: 1,
      offset: 0,
      windowSize: 20,
    };

    render(<Footer windowInfo={windowInfo} />);

    expect(screen.getByText(/Debug: Página 1/)).toBeInTheDocument();
    expect(screen.getByText(/Offset: 0/)).toBeInTheDocument();
    expect(screen.getByText(/Carregados: 20/)).toBeInTheDocument();
    expect(screen.getByText(/Total: 100/)).toBeInTheDocument();
  });

  it("deve renderizar footer simples quando total é 0", () => {
    const windowInfo = {
      end: 0,
      total: 0,
      currentPage: 0,
      offset: 0,
      windowSize: 0,
    };

    render(<Footer windowInfo={windowInfo} />);

    expect(
      screen.getByText("Pokémons - Lista virtualizada")
    ).toBeInTheDocument();
    expect(screen.queryByText(/Mostrando/)).not.toBeInTheDocument();
  });

  it("deve renderizar valores padrão quando windowInfo está incompleto", () => {
    const windowInfo = {
      total: 50,
    };

    render(<Footer windowInfo={windowInfo} />);

    expect(
      screen.getByText(/Mostrando 0 de 50 Pokémons - Página 0/)
    ).toBeInTheDocument();
  });

  it("deve aplicar classes CSS corretas", () => {
    const { container } = render(<Footer />);

    const footer = container.querySelector("footer");
    expect(footer).toHaveClass("sticky", "bottom-0", "z-50", "w-full");
  });
});

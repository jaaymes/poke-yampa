import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

// Mock do hook useLanguage
const mockChangeLanguage = vi.fn();
const mockT = vi.fn((key: string) => {
  const translations: Record<string, string> = {
    appName: "PokéYampa",
  };
  return translations[key] || key;
});

// Mock inicial
let mockCurrentLanguage = "pt-BR";

vi.mock("@/hooks/use-language", () => ({
  useLanguage: () => ({
    currentLanguage: mockCurrentLanguage,
    changeLanguage: mockChangeLanguage,
    t: mockT,
  }),
}));

import { Header } from "./header";

describe("Header", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Reset para idioma padrão
    mockCurrentLanguage = "pt-BR";
  });

  it("deve renderizar o header com título da aplicação", () => {
    render(<Header />);

    expect(screen.getByText("PokéYampa")).toBeInTheDocument();
  });

  it("deve renderizar os botões de idioma", () => {
    render(<Header />);

    expect(screen.getByText("PT")).toBeInTheDocument();
    expect(screen.getByText("EN")).toBeInTheDocument();
  });

  it("deve destacar o idioma atual (PT)", () => {
    mockCurrentLanguage = "pt-BR";
    render(<Header />);

    const ptButton = screen.getByText("PT");
    const enButton = screen.getByText("EN");

    // O botão PT deve ter a variante "default" (ativo)
    expect(ptButton.closest("button")).toHaveClass("bg-primary");
    // O botão EN deve ter a variante "ghost" (inativo)
    expect(enButton.closest("button")).not.toHaveClass("bg-primary");
  });

  it("deve destacar o idioma atual (EN) quando idioma é inglês", () => {
    mockCurrentLanguage = "en";
    render(<Header />);

    const ptButton = screen.getByText("PT");
    const enButton = screen.getByText("EN");

    // O botão EN deve ter a variante "default" (ativo)
    expect(enButton.closest("button")).toHaveClass("bg-primary");
    // O botão PT deve ter a variante "ghost" (inativo)
    expect(ptButton.closest("button")).not.toHaveClass("bg-primary");
  });

  it("deve chamar changeLanguage ao clicar no botão PT", () => {
    render(<Header />);

    const ptButton = screen.getByText("PT");
    fireEvent.click(ptButton);

    expect(mockChangeLanguage).toHaveBeenCalledWith("pt-BR");
  });

  it("deve chamar changeLanguage ao clicar no botão EN", () => {
    render(<Header />);

    const enButton = screen.getByText("EN");
    fireEvent.click(enButton);

    expect(mockChangeLanguage).toHaveBeenCalledWith("en");
  });

  it("deve aplicar classes CSS corretas", () => {
    const { container } = render(<Header />);

    const header = container.querySelector("header");
    expect(header).toHaveClass("sticky", "top-0", "z-50", "w-full");
  });

  it("deve renderizar o link para a página inicial", () => {
    render(<Header />);

    const homeLink = screen.getByRole("link");
    expect(homeLink).toHaveAttribute("href", "/");
  });

  it("deve chamar a função de tradução com a chave correta", () => {
    render(<Header />);

    expect(mockT).toHaveBeenCalledWith("appName");
  });

  it("deve permitir múltiplas mudanças de idioma", () => {
    render(<Header />);

    const ptButton = screen.getByText("PT");
    const enButton = screen.getByText("EN");

    // Clica múltiplas vezes
    fireEvent.click(enButton);
    fireEvent.click(ptButton);
    fireEvent.click(enButton);

    expect(mockChangeLanguage).toHaveBeenCalledTimes(3);
    expect(mockChangeLanguage).toHaveBeenNthCalledWith(1, "en");
    expect(mockChangeLanguage).toHaveBeenNthCalledWith(2, "pt-BR");
    expect(mockChangeLanguage).toHaveBeenNthCalledWith(3, "en");
  });
});

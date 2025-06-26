import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { SearchInput } from "./search-input";

// Mock do hook useLanguage
vi.mock("@/hooks/use-language", () => ({
  useLanguage: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        searchPlaceholder: "Buscar Pokémon...",
        clear: "Limpar",
        search: "Buscar",
      };
      return translations[key] || key;
    },
  }),
}));

describe("SearchInput", () => {
  const defaultProps = {
    searchTerm: "",
    activeSearch: "",
    onSearchTermChange: vi.fn(),
    onSearch: vi.fn(),
    onClearSearch: vi.fn(),
    onKeyPress: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render search input with placeholder", () => {
    render(<SearchInput {...defaultProps} />);

    expect(screen.getByTestId("search-input-field")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Buscar Pokémon...")
    ).toBeInTheDocument();
  });

  it("should display search and clear buttons", () => {
    render(<SearchInput {...defaultProps} />);

    expect(screen.getByTestId("search-button")).toBeInTheDocument();
    expect(screen.getByLabelText("Buscar")).toBeInTheDocument();
  });

  it("should show clear button when searchTerm is not empty", () => {
    render(<SearchInput {...defaultProps} searchTerm="pikachu" />);

    expect(screen.getByTestId("clear-search-button")).toBeInTheDocument();
    expect(screen.getByLabelText("Limpar")).toBeInTheDocument();
  });

  it("should show clear button when activeSearch has value", () => {
    render(<SearchInput {...defaultProps} activeSearch="pikachu" />);

    expect(screen.getByTestId("clear-search-button")).toBeInTheDocument();
  });

  it("should not show clear button when searchTerm is empty and activeSearch is empty", () => {
    render(<SearchInput {...defaultProps} />);

    expect(screen.queryByTestId("clear-search-button")).not.toBeInTheDocument();
  });

  it("should call onSearchTermChange when input value changes", () => {
    render(<SearchInput {...defaultProps} />);

    const input = screen.getByTestId("search-input-field");
    fireEvent.change(input, { target: { value: "pikachu" } });

    expect(defaultProps.onSearchTermChange).toHaveBeenCalledWith("pikachu");
  });

  it("should call onSearch when search button is clicked", () => {
    render(<SearchInput {...defaultProps} />);

    const searchButton = screen.getByTestId("search-button");
    fireEvent.click(searchButton);

    expect(defaultProps.onSearch).toHaveBeenCalled();
  });

  it("should call onClearSearch when clear button is clicked", () => {
    render(<SearchInput {...defaultProps} searchTerm="pikachu" />);

    const clearButton = screen.getByTestId("clear-search-button");
    fireEvent.click(clearButton);

    expect(defaultProps.onClearSearch).toHaveBeenCalled();
  });

  it("should call onKeyPress when key is pressed in input", () => {
    render(<SearchInput {...defaultProps} />);

    const input = screen.getByTestId("search-input-field");
    fireEvent.keyDown(input, { key: "Enter" });

    expect(defaultProps.onKeyPress).toHaveBeenCalled();
  });

  it("should disable search button when isLoading is true", () => {
    render(<SearchInput {...defaultProps} isLoading={true} />);

    const searchButton = screen.getByTestId("search-button");
    expect(searchButton).toBeDisabled();
  });

  it("should not disable search button when isLoading is false", () => {
    render(<SearchInput {...defaultProps} isLoading={false} />);

    const searchButton = screen.getByTestId("search-button");
    expect(searchButton).not.toBeDisabled();
  });

  it("should display correct search term value", () => {
    render(<SearchInput {...defaultProps} searchTerm="charizard" />);

    const input = screen.getByTestId("search-input-field") as HTMLInputElement;
    expect(input.value).toBe("charizard");
  });
});

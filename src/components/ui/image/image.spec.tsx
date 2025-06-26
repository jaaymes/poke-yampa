import { render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { Image } from "./image";

// Mock do hook useLanguage
const mockT = vi.fn((key: string) => {
  const translations: Record<string, string> = {
    imageLoadError: "Erro ao carregar imagem",
    error: "Erro",
  };
  return translations[key] || key;
});

vi.mock("@/hooks/use-language", () => ({
  useLanguage: () => ({ t: mockT }),
}));

// Mock do IntersectionObserver
const mockIntersectionObserver = vi.fn();
mockIntersectionObserver.mockReturnValue({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
});
window.IntersectionObserver = mockIntersectionObserver;

// Mock class para Image
class MockImage {
  onerror: (() => void) | null = null;
  onload: (() => void) | null = null;
  src = "";

  constructor() {
    return this;
  }
}

describe("Image", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("deve renderizar a imagem com propriedades básicas", () => {
    render(
      <Image
        src="https://example.com/image.jpg"
        alt="Imagem de teste"
        data-testid="image-component"
      />
    );

    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("alt", "Imagem de teste");
  });

  it("deve aplicar classes CSS personalizadas", () => {
    render(
      <Image
        src="https://example.com/image.jpg"
        alt="Imagem de teste"
        className="custom-class"
        data-testid="image-component"
      />
    );

    const image = screen.getByRole("img");
    expect(image).toHaveClass("custom-class");
  });

  it("deve renderizar com dimensões específicas", () => {
    render(
      <div data-testid="image-wrapper">
        <Image
          src="https://example.com/image.jpg"
          alt="Imagem de teste"
          width={200}
          height={150}
        />
      </div>
    );

    const wrapper = screen.getByTestId("image-wrapper");
    const container = wrapper.querySelector(".relative.overflow-hidden");
    expect(container).toHaveStyle({ width: "200px", height: "150px" });
  });

  it("deve mostrar skeleton de carregamento por padrão", () => {
    render(
      <Image
        src="https://example.com/image.jpg"
        alt="Imagem de teste"
        showLoadingIndicator={true}
      />
    );

    // Verifica se o skeleton está presente
    const skeleton = screen.getByTestId("skeleton-image");
    expect(skeleton).toBeInTheDocument();
  });

  it("deve ocultar indicador de carregamento quando desabilitado", () => {
    render(
      <Image
        src="https://example.com/image.jpg"
        alt="Imagem de teste"
        showLoadingIndicator={false}
      />
    );

    // Verifica se o spinner não está presente
    const skeleton = screen.queryByTestId("skeleton-image");
    expect(skeleton).not.toBeInTheDocument();
  });

  it("deve renderizar estado de erro quando a imagem falha", async () => {
    // Mock para simular erro de carregamento
    const originalImage = window.Image;
    const errorMockImage = class extends MockImage {
      constructor() {
        super();
        setTimeout(() => {
          this.onerror?.();
        }, 0);
        return this;
      }
    };
    window.Image = errorMockImage as typeof HTMLImageElement;

    render(
      <Image
        src="https://example.com/broken-image.jpg"
        alt="Imagem quebrada"
        priority={true}
      />
    );

    await waitFor(() => {
      expect(screen.getByText("Erro")).toBeInTheDocument();
    });

    // Restaura o Image original
    window.Image = originalImage;
  });

  it("deve chamar callback onLoad quando a imagem carrega", async () => {
    const onLoadMock = vi.fn();

    // Mock para simular carregamento bem-sucedido
    const originalImage = window.Image;
    window.Image = class {
      constructor() {
        setTimeout(() => {
          // @ts-expect-error - Simulando carregamento bem-sucedido
          this.onload?.();
        }, 0);
        return this;
      }
    } as unknown as typeof HTMLImageElement;

    render(
      <Image
        src="https://example.com/image.jpg"
        alt="Imagem de teste"
        onLoad={onLoadMock}
        priority={true}
      />
    );

    await waitFor(() => {
      expect(onLoadMock).toHaveBeenCalled();
    });

    // Restaura o Image original
    window.Image = originalImage;
  });

  it("deve chamar callback onError quando a imagem falha", async () => {
    const onErrorMock = vi.fn();

    // Mock para simular erro de carregamento
    const originalImage = window.Image;
    window.Image = class {
      constructor() {
        setTimeout(() => {
          // @ts-expect-error - Simulando erro de carregamento
          this.onerror?.();
        }, 0);
        return this;
      }
    } as unknown as typeof HTMLImageElement;

    render(
      <Image
        src="https://example.com/broken-image.jpg"
        alt="Imagem quebrada"
        onError={onErrorMock}
        priority={true}
      />
    );

    await waitFor(() => {
      expect(onErrorMock).toHaveBeenCalled();
    });

    // Restaura o Image original
    window.Image = originalImage;
  });

  it("deve aplicar estilos inline personalizados", () => {
    const customStyle = { borderRadius: "8px", opacity: 0.8 };

    render(
      <Image
        src="https://example.com/image.jpg"
        alt="Imagem de teste"
        style={customStyle}
        data-testid="image-component"
      />
    );

    const image = screen.getByRole("img");
    expect(image).toHaveStyle(customStyle);
  });
});

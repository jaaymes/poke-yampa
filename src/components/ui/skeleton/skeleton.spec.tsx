import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Skeleton } from "./skeleton";

describe("Skeleton", () => {
  it("deve renderizar o skeleton corretamente", () => {
    render(<Skeleton data-testid="skeleton" />);

    const skeleton = screen.getByTestId("skeleton");
    expect(skeleton).toBeInTheDocument();
  });

  it("deve aplicar as classes padrão", () => {
    render(<Skeleton data-testid="skeleton" />);

    const skeleton = screen.getByTestId("skeleton");
    expect(skeleton).toHaveClass("animate-pulse");
    expect(skeleton).toHaveClass("rounded-md");
    expect(skeleton).toHaveClass("bg-muted/30");
  });

  it("deve aplicar className personalizada", () => {
    render(<Skeleton className="custom-class" data-testid="skeleton" />);

    const skeleton = screen.getByTestId("skeleton");
    expect(skeleton).toHaveClass("custom-class");
  });

  it("deve aplicar dimensões personalizadas", () => {
    render(<Skeleton className="h-4 w-20" data-testid="skeleton" />);

    const skeleton = screen.getByTestId("skeleton");
    expect(skeleton).toHaveClass("h-4");
    expect(skeleton).toHaveClass("w-20");
  });

  it("deve suportar propriedades HTML", () => {
    render(<Skeleton data-testid="skeleton" title="Carregando..." />);

    const skeleton = screen.getByTestId("skeleton");
    expect(skeleton).toHaveAttribute("title", "Carregando...");
  });

  it("deve renderizar como div por padrão", () => {
    render(<Skeleton data-testid="skeleton" />);

    const skeleton = screen.getByTestId("skeleton");
    expect(skeleton.tagName).toBe("DIV");
  });

  it("deve manter a estrutura para diferentes tamanhos", () => {
    const { rerender } = render(
      <Skeleton className="h-2 w-10" data-testid="skeleton" />
    );

    let skeleton = screen.getByTestId("skeleton");
    expect(skeleton).toHaveClass("h-2", "w-10");

    rerender(<Skeleton className="h-8 w-full" data-testid="skeleton" />);
    skeleton = screen.getByTestId("skeleton");
    expect(skeleton).toHaveClass("h-8", "w-full");
  });
});

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Badge } from "./badge";

describe("Badge", () => {
  it("deve renderizar o badge com texto", () => {
    render(<Badge data-testid="badge">Novo</Badge>);

    const badge = screen.getByTestId("badge");
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveTextContent("Novo");
  });

  it("deve aplicar a variante default por padrão", () => {
    render(<Badge data-testid="badge">Badge</Badge>);

    const badge = screen.getByTestId("badge");
    expect(badge).toHaveClass("bg-primary");
  });

  it("deve aplicar a variante secondary corretamente", () => {
    render(
      <Badge variant="secondary" data-testid="badge">
        Secundário
      </Badge>
    );

    const badge = screen.getByTestId("badge");
    expect(badge).toHaveClass("bg-secondary");
  });

  it("deve aplicar a variante destructive corretamente", () => {
    render(
      <Badge variant="destructive" data-testid="badge">
        Erro
      </Badge>
    );

    const badge = screen.getByTestId("badge");
    expect(badge).toHaveClass("bg-destructive");
  });

  it("deve aplicar a variante outline corretamente", () => {
    render(
      <Badge variant="outline" data-testid="badge">
        Contorno
      </Badge>
    );

    const badge = screen.getByTestId("badge");
    expect(badge).toHaveClass("text-foreground");
  });

  it("deve renderizar como Slot quando asChild for true", () => {
    render(
      <Badge asChild data-testid="badge">
        <a href="/test">Link Badge</a>
      </Badge>
    );

    const link = screen.getByTestId("badge");
    expect(link.tagName).toBe("A");
    expect(link).toHaveAttribute("href", "/test");
  });

  it("deve aplicar className personalizada", () => {
    render(
      <Badge className="custom-class" data-testid="badge">
        Customizado
      </Badge>
    );

    const badge = screen.getByTestId("badge");
    expect(badge).toHaveClass("custom-class");
  });
});

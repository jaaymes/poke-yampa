import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "./button";

describe("Button", () => {
  it("deve renderizar o botão com texto", () => {
    render(<Button data-testid="button">Clique aqui</Button>);

    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Clique aqui");
  });

  it("deve aplicar a variante default por padrão", () => {
    render(<Button data-testid="button">Botão</Button>);

    const button = screen.getByTestId("button");
    expect(button).toHaveClass("bg-primary");
  });

  it("deve aplicar a variante destructive corretamente", () => {
    render(
      <Button variant="destructive" data-testid="button">
        Deletar
      </Button>
    );

    const button = screen.getByTestId("button");
    expect(button).toHaveClass("bg-destructive");
  });

  it("deve aplicar o tamanho small corretamente", () => {
    render(
      <Button size="sm" data-testid="button">
        Pequeno
      </Button>
    );

    const button = screen.getByTestId("button");
    expect(button).toHaveClass("h-8");
  });

  it("deve estar desabilitado quando a prop disabled for true", () => {
    render(
      <Button disabled data-testid="button">
        Desabilitado
      </Button>
    );

    const button = screen.getByTestId("button");
    expect(button).toBeDisabled();
  });

  it("deve renderizar como Slot quando asChild for true", () => {
    render(
      <Button asChild data-testid="button">
        <a href="/test">Link Button</a>
      </Button>
    );

    const link = screen.getByTestId("button");
    expect(link.tagName).toBe("A");
    expect(link).toHaveAttribute("href", "/test");
  });

  it("deve aplicar className personalizada", () => {
    render(
      <Button className="custom-class" data-testid="button">
        Customizado
      </Button>
    );

    const button = screen.getByTestId("button");
    expect(button).toHaveClass("custom-class");
  });
});

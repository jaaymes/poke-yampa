import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Label } from "./label";

describe("Label", () => {
  it("deve renderizar o label com texto", () => {
    render(<Label data-testid="label">Nome</Label>);

    const label = screen.getByTestId("label");
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent("Nome");
  });

  it("deve aplicar as classes padrão", () => {
    render(<Label data-testid="label">Label</Label>);

    const label = screen.getByTestId("label");
    expect(label).toHaveClass("text-sm");
    expect(label).toHaveClass("font-medium");
  });

  it("deve aplicar htmlFor corretamente", () => {
    render(
      <Label htmlFor="input-id" data-testid="label">
        Campo
      </Label>
    );

    const label = screen.getByTestId("label");
    expect(label).toHaveAttribute("for", "input-id");
  });

  it("deve aplicar className personalizada", () => {
    render(
      <Label className="custom-class" data-testid="label">
        Customizado
      </Label>
    );

    const label = screen.getByTestId("label");
    expect(label).toHaveClass("custom-class");
  });

  it("deve renderizar com ícone", () => {
    render(
      <Label data-testid="label">
        <span>📧</span>
        Email
      </Label>
    );

    const label = screen.getByTestId("label");
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent("📧Email");
  });

  it("deve funcionar com input associado", () => {
    render(
      <div>
        <Label htmlFor="test-input" data-testid="label">
          Nome
        </Label>
        <input id="test-input" data-testid="input" />
      </div>
    );

    const label = screen.getByTestId("label");
    const input = screen.getByTestId("input");

    expect(label).toHaveAttribute("for", "test-input");
    expect(input).toHaveAttribute("id", "test-input");
  });

  it("deve suportar propriedades adicionais", () => {
    render(
      <Label data-testid="label" title="Tooltip do label" onClick={() => {}}>
        Label clicável
      </Label>
    );

    const label = screen.getByTestId("label");
    expect(label).toHaveAttribute("title", "Tooltip do label");
  });
});

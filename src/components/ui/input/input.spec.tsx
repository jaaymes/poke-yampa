import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Input } from "./input";

describe("Input", () => {
  it("deve renderizar o input corretamente", () => {
    render(<Input data-testid="input" placeholder="Digite aqui" />);

    const input = screen.getByTestId("input");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("placeholder", "Digite aqui");
  });

  it("deve aplicar o tipo correto", () => {
    render(<Input type="email" data-testid="input" />);

    const input = screen.getByTestId("input");
    expect(input).toHaveAttribute("type", "email");
  });

  it("deve aplicar o tipo text por padrão", () => {
    render(<Input data-testid="input" />);

    const input = screen.getByTestId("input");
    expect(input).toHaveAttribute("type", "text");
  });

  it("deve permitir digitação", () => {
    render(<Input data-testid="input" />);

    const input = screen.getByTestId("input") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Teste" } });

    expect(input.value).toBe("Teste");
  });

  it("deve estar desabilitado quando a prop disabled for true", () => {
    render(<Input disabled data-testid="input" />);

    const input = screen.getByTestId("input");
    expect(input).toBeDisabled();
  });

  it("deve aplicar className personalizada", () => {
    render(<Input className="custom-class" data-testid="input" />);

    const input = screen.getByTestId("input");
    expect(input).toHaveClass("custom-class");
  });

  it("deve aplicar as classes padrão", () => {
    render(<Input data-testid="input" />);

    const input = screen.getByTestId("input");
    expect(input).toHaveClass("border-input");
    expect(input).toHaveClass("rounded-lg");
  });

  it("deve chamar onChange quando o valor mudar", () => {
    const handleChange = vi.fn();
    render(<Input onChange={handleChange} data-testid="input" />);

    const input = screen.getByTestId("input");
    fireEvent.change(input, { target: { value: "novo valor" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("deve aceitar value controlado", () => {
    render(<Input value="valor controlado" data-testid="input" readOnly />);

    const input = screen.getByTestId("input") as HTMLInputElement;
    expect(input.value).toBe("valor controlado");
  });
});

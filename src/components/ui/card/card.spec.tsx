import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

describe("Card", () => {
  it("deve renderizar o card básico", () => {
    render(<Card data-testid="card">Conteúdo do card</Card>);

    const card = screen.getByTestId("card");
    expect(card).toBeInTheDocument();
    expect(card).toHaveTextContent("Conteúdo do card");
  });

  it("deve aplicar as classes corretas ao Card", () => {
    render(<Card data-testid="card">Card</Card>);

    const card = screen.getByTestId("card");
    expect(card).toHaveClass("bg-card");
    expect(card).toHaveClass("rounded-xl");
  });

  it("deve renderizar CardHeader corretamente", () => {
    render(<CardHeader data-testid="card-header">Header</CardHeader>);

    const header = screen.getByTestId("card-header");
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent("Header");
  });

  it("deve renderizar CardTitle corretamente", () => {
    render(<CardTitle data-testid="card-title">Título</CardTitle>);

    const title = screen.getByTestId("card-title");
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Título");
    expect(title).toHaveClass("font-semibold");
  });

  it("deve renderizar CardDescription corretamente", () => {
    render(
      <CardDescription data-testid="card-description">
        Descrição
      </CardDescription>
    );

    const description = screen.getByTestId("card-description");
    expect(description).toBeInTheDocument();
    expect(description).toHaveTextContent("Descrição");
    expect(description).toHaveClass("text-muted-foreground");
  });

  it("deve renderizar CardContent corretamente", () => {
    render(<CardContent data-testid="card-content">Conteúdo</CardContent>);

    const content = screen.getByTestId("card-content");
    expect(content).toBeInTheDocument();
    expect(content).toHaveTextContent("Conteúdo");
  });

  it("deve renderizar CardFooter corretamente", () => {
    render(<CardFooter data-testid="card-footer">Footer</CardFooter>);

    const footer = screen.getByTestId("card-footer");
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveTextContent("Footer");
  });

  it("deve renderizar CardAction corretamente", () => {
    render(<CardAction data-testid="card-action">Ação</CardAction>);

    const action = screen.getByTestId("card-action");
    expect(action).toBeInTheDocument();
    expect(action).toHaveTextContent("Ação");
  });

  it("deve renderizar card completo com todos os componentes", () => {
    render(
      <Card data-testid="complete-card">
        <CardHeader data-testid="header">
          <CardTitle data-testid="title">Título do Card</CardTitle>
          <CardDescription data-testid="description">
            Descrição do card
          </CardDescription>
          <CardAction data-testid="action">Botão</CardAction>
        </CardHeader>
        <CardContent data-testid="content">
          Conteúdo principal do card
        </CardContent>
        <CardFooter data-testid="footer">Footer do card</CardFooter>
      </Card>
    );

    expect(screen.getByTestId("complete-card")).toBeInTheDocument();
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("title")).toHaveTextContent("Título do Card");
    expect(screen.getByTestId("description")).toHaveTextContent(
      "Descrição do card"
    );
    expect(screen.getByTestId("action")).toHaveTextContent("Botão");
    expect(screen.getByTestId("content")).toHaveTextContent(
      "Conteúdo principal do card"
    );
    expect(screen.getByTestId("footer")).toHaveTextContent("Footer do card");
  });
});

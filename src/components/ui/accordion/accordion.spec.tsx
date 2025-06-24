import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

describe("Accordion", () => {
  it("deve renderizar o accordion básico", () => {
    render(
      <Accordion type="single" collapsible data-testid="accordion">
        <AccordionItem value="item-1" data-testid="accordion-item">
          <AccordionTrigger data-testid="accordion-trigger">
            Pergunta 1
          </AccordionTrigger>
          <AccordionContent data-testid="accordion-content">
            Resposta 1
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    expect(screen.getByTestId("accordion")).toBeInTheDocument();
    expect(screen.getByTestId("accordion-item")).toBeInTheDocument();
    expect(screen.getByTestId("accordion-trigger")).toBeInTheDocument();
    expect(screen.getByText("Pergunta 1")).toBeInTheDocument();
  });

  it("deve expandir e recolher o conteúdo ao clicar no trigger", async () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger data-testid="trigger">
            Clique para expandir
          </AccordionTrigger>
          <AccordionContent data-testid="content">
            Conteúdo expandido
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const trigger = screen.getByTestId("trigger");
    const contentContainer = screen.getByTestId("content");

    // Inicialmente o conteúdo deve estar fechado
    expect(contentContainer).toHaveAttribute("data-state", "closed");

    // Clica para expandir
    fireEvent.click(trigger);

    // Aguarda a animação e verifica se o conteúdo está aberto
    await screen.findByText("Conteúdo expandido");
    expect(contentContainer).toHaveAttribute("data-state", "open");
  });

  it("deve renderizar múltiplos itens", () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Pergunta 1</AccordionTrigger>
          <AccordionContent>Resposta 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Pergunta 2</AccordionTrigger>
          <AccordionContent>Resposta 2</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    expect(screen.getByText("Pergunta 1")).toBeInTheDocument();
    expect(screen.getByText("Pergunta 2")).toBeInTheDocument();
  });

  it("deve aplicar classes personalizadas", () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem
          value="item-1"
          className="custom-item"
          data-testid="accordion-item"
        >
          <AccordionTrigger className="custom-trigger" data-testid="trigger">
            Trigger customizado
          </AccordionTrigger>
          <AccordionContent className="custom-content" data-testid="content">
            Conteúdo customizado
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const item = screen.getByTestId("accordion-item");
    const trigger = screen.getByTestId("trigger");

    expect(item).toHaveClass("custom-item");
    expect(trigger).toHaveClass("custom-trigger");
  });

  it("deve ter o ícone de chevron no trigger", () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger data-testid="trigger">Com ícone</AccordionTrigger>
          <AccordionContent>Conteúdo</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const trigger = screen.getByTestId("trigger");
    const chevronIcon = trigger.querySelector("svg");

    expect(chevronIcon).toBeInTheDocument();
  });

  it("deve suportar accordion do tipo multiple", () => {
    render(
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger data-testid="trigger-1">
            Pergunta 1
          </AccordionTrigger>
          <AccordionContent>Resposta 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger data-testid="trigger-2">
            Pergunta 2
          </AccordionTrigger>
          <AccordionContent>Resposta 2</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const trigger1 = screen.getByTestId("trigger-1");
    const trigger2 = screen.getByTestId("trigger-2");

    // Expande ambos os itens
    fireEvent.click(trigger1);
    fireEvent.click(trigger2);

    // Ambos devem estar expandidos
    expect(screen.getByText("Resposta 1")).toBeVisible();
    expect(screen.getByText("Resposta 2")).toBeVisible();
  });
});

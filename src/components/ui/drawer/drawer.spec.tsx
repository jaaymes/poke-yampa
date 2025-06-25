import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./drawer";

describe("Drawer", () => {
  it("deve renderizar o componente Drawer", () => {
    render(
      <Drawer>
        <DrawerTrigger data-testid="drawer-trigger">Abrir Drawer</DrawerTrigger>
        <DrawerContent data-testid="drawer-content">
          <DrawerHeader>
            <DrawerTitle
              data-testid="drawer-title"
              aria-describedby={undefined}
            >
              Título do Drawer
            </DrawerTitle>
            <DrawerDescription
              data-testid="drawer-description"
              aria-describedby={undefined}
            >
              Descrição do drawer
            </DrawerDescription>
          </DrawerHeader>
          <div data-testid="drawer-body">Conteúdo do drawer</div>
          <DrawerFooter>
            <DrawerClose data-testid="drawer-close">Fechar</DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );

    expect(screen.getByTestId("drawer-trigger")).toBeInTheDocument();
  });

  it("deve renderizar o DrawerTrigger com texto correto", () => {
    render(
      <Drawer>
        <DrawerTrigger data-testid="drawer-trigger">Abrir Drawer</DrawerTrigger>
      </Drawer>
    );

    const trigger = screen.getByTestId("drawer-trigger");
    expect(trigger).toHaveTextContent("Abrir Drawer");
  });

  it("deve renderizar o DrawerHeader com título e descrição", () => {
    render(
      <Drawer open={true}>
        <DrawerTrigger>Abrir</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader data-testid="drawer-header">
            <DrawerTitle
              data-testid="drawer-title"
              aria-describedby={undefined}
            >
              Título do Drawer
            </DrawerTitle>
            <DrawerDescription
              data-testid="drawer-description"
              aria-describedby={undefined}
            >
              Descrição do drawer
            </DrawerDescription>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    );

    expect(screen.getByTestId("drawer-header")).toBeInTheDocument();
    expect(screen.getByTestId("drawer-title")).toHaveTextContent(
      "Título do Drawer"
    );
    expect(screen.getByTestId("drawer-description")).toHaveTextContent(
      "Descrição do drawer"
    );
  });

  it("deve renderizar o DrawerFooter com botão de fechar", () => {
    render(
      <Drawer open={true}>
        <DrawerTrigger>Abrir</DrawerTrigger>
        <DrawerContent>
          <DrawerTitle className="sr-only" />
          <DrawerFooter data-testid="drawer-footer">
            <DrawerClose data-testid="drawer-close">Fechar</DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );

    expect(screen.getByTestId("drawer-footer")).toBeInTheDocument();
    expect(screen.getByTestId("drawer-close")).toHaveTextContent("Fechar");
  });

  it("deve aplicar classes CSS personalizadas", () => {
    render(
      <Drawer open={true}>
        <DrawerTrigger>Abrir</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader data-testid="drawer-header" className="custom-class">
            <DrawerTitle data-testid="drawer-title" className="title-class">
              Título
            </DrawerTitle>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    );

    expect(screen.getByTestId("drawer-header")).toHaveClass("custom-class");
    expect(screen.getByTestId("drawer-title")).toHaveClass("title-class");
  });

  it("deve renderizar o DrawerDescription com texto correto", () => {
    render(
      <Drawer open={true}>
        <DrawerTrigger>Abrir</DrawerTrigger>
        <DrawerContent>
          <DrawerTitle className="sr-only" />
          <DrawerDescription
            data-testid="drawer-description"
            aria-describedby={undefined}
          >
            Esta é uma descrição de teste
          </DrawerDescription>
        </DrawerContent>
      </Drawer>
    );

    expect(screen.getByTestId("drawer-description")).toHaveTextContent(
      "Esta é uma descrição de teste"
    );
  });
});

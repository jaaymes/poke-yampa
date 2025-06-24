import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

describe("Tabs", () => {
  it("deve renderizar as tabs básicas", () => {
    render(
      <Tabs defaultValue="tab1" data-testid="tabs">
        <TabsList data-testid="tabs-list">
          <TabsTrigger value="tab1" data-testid="tab-trigger-1">
            Tab 1
          </TabsTrigger>
          <TabsTrigger value="tab2" data-testid="tab-trigger-2">
            Tab 2
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tab1" data-testid="tab-content-1">
          Conteúdo da Tab 1
        </TabsContent>
        <TabsContent value="tab2" data-testid="tab-content-2">
          Conteúdo da Tab 2
        </TabsContent>
      </Tabs>
    );

    expect(screen.getByTestId("tabs")).toBeInTheDocument();
    expect(screen.getByTestId("tabs-list")).toBeInTheDocument();
    expect(screen.getByTestId("tab-trigger-1")).toBeInTheDocument();
    expect(screen.getByTestId("tab-trigger-2")).toBeInTheDocument();
    expect(screen.getByTestId("tab-content-1")).toBeInTheDocument();
    expect(screen.getByTestId("tab-content-2")).toBeInTheDocument();
  });

  it("deve mostrar o conteúdo da tab ativa por padrão", () => {
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1" data-testid="content-1">
          Conteúdo da Tab 1
        </TabsContent>
        <TabsContent value="tab2" data-testid="content-2">
          Conteúdo da Tab 2
        </TabsContent>
      </Tabs>
    );

    const activeContent = screen.getByTestId("content-1");
    const inactiveContent = screen.getByTestId("content-2");

    expect(activeContent).toBeVisible();
    expect(inactiveContent).not.toBeVisible();
    expect(activeContent).toHaveAttribute("data-state", "active");
    expect(inactiveContent).toHaveAttribute("data-state", "inactive");
  });

  it("deve aplicar classes personalizadas", () => {
    render(
      <Tabs defaultValue="tab1" className="custom-tabs">
        <TabsList className="custom-list" data-testid="tabs-list">
          <TabsTrigger
            value="tab1"
            className="custom-trigger"
            data-testid="tab-trigger"
          >
            Tab 1
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="tab1"
          className="custom-content"
          data-testid="tab-content"
        >
          Conteúdo
        </TabsContent>
      </Tabs>
    );

    const tabs = screen.getByTestId("tabs");
    const tabsList = screen.getByTestId("tabs-list");
    const tabTrigger = screen.getByTestId("tab-trigger");
    const tabContent = screen.getByTestId("tab-content");

    expect(tabs).toHaveClass("custom-tabs");
    expect(tabsList).toHaveClass("custom-list");
    expect(tabTrigger).toHaveClass("custom-trigger");
    expect(tabContent).toHaveClass("custom-content");
  });

  it("deve aplicar as classes padrão corretas", () => {
    render(
      <Tabs defaultValue="tab1">
        <TabsList data-testid="tabs-list">
          <TabsTrigger value="tab1" data-testid="tab-trigger">
            Tab 1
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tab1" data-testid="tab-content">
          Conteúdo
        </TabsContent>
      </Tabs>
    );

    const tabs = screen.getByTestId("tabs");
    const tabsList = screen.getByTestId("tabs-list");
    const tabTrigger = screen.getByTestId("tab-trigger");

    expect(tabs).toHaveClass("flex", "flex-col", "gap-2");
    expect(tabsList).toHaveClass("bg-muted", "text-muted-foreground");
    expect(tabTrigger).toHaveClass("data-[state=active]:bg-primary");
  });

  it("deve renderizar múltiplas tabs", () => {
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1" data-testid="tab-1">
            Tab 1
          </TabsTrigger>
          <TabsTrigger value="tab2" data-testid="tab-2">
            Tab 2
          </TabsTrigger>
          <TabsTrigger value="tab3" data-testid="tab-3">
            Tab 3
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tab1" data-testid="content-1">
          Conteúdo 1
        </TabsContent>
        <TabsContent value="tab2" data-testid="content-2">
          Conteúdo 2
        </TabsContent>
        <TabsContent value="tab3" data-testid="content-3">
          Conteúdo 3
        </TabsContent>
      </Tabs>
    );

    expect(screen.getByTestId("tab-1")).toBeInTheDocument();
    expect(screen.getByTestId("tab-2")).toBeInTheDocument();
    expect(screen.getByTestId("tab-3")).toBeInTheDocument();

    // Verifica que inicialmente tab 1 está ativa
    expect(screen.getByTestId("content-1")).toBeVisible();
    expect(screen.getByTestId("content-2")).not.toBeVisible();
    expect(screen.getByTestId("content-3")).not.toBeVisible();

    // Verifica estados dos elementos
    expect(screen.getByTestId("content-1")).toHaveAttribute(
      "data-state",
      "active"
    );
    expect(screen.getByTestId("content-2")).toHaveAttribute(
      "data-state",
      "inactive"
    );
    expect(screen.getByTestId("content-3")).toHaveAttribute(
      "data-state",
      "inactive"
    );
  });

  it("deve definir tab ativa diferente usando defaultValue", () => {
    render(
      <Tabs defaultValue="tab2">
        <TabsList>
          <TabsTrigger value="tab1" data-testid="tab-1">
            Tab 1
          </TabsTrigger>
          <TabsTrigger value="tab2" data-testid="tab-2">
            Tab 2
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tab1" data-testid="content-1">
          Conteúdo 1
        </TabsContent>
        <TabsContent value="tab2" data-testid="content-2">
          Conteúdo 2 (ativo)
        </TabsContent>
      </Tabs>
    );

    expect(screen.getByTestId("content-2")).toBeVisible();
    expect(screen.getByTestId("content-1")).not.toBeVisible();
    expect(screen.getByTestId("content-2")).toHaveAttribute(
      "data-state",
      "active"
    );
    expect(screen.getByTestId("content-1")).toHaveAttribute(
      "data-state",
      "inactive"
    );
  });

  it("deve manter a estrutura de acessibilidade correta", () => {
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1" data-testid="tab-1">
            Tab 1
          </TabsTrigger>
          <TabsTrigger value="tab2" data-testid="tab-2">
            Tab 2
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tab1" data-testid="content-1">
          Conteúdo 1
        </TabsContent>
        <TabsContent value="tab2" data-testid="content-2">
          Conteúdo 2
        </TabsContent>
      </Tabs>
    );

    const tab1 = screen.getByTestId("tab-1");
    const tab2 = screen.getByTestId("tab-2");
    const content1 = screen.getByTestId("content-1");
    const content2 = screen.getByTestId("content-2");
    const tabsList = screen.getByRole("tablist");

    // Verifica estrutura de acessibilidade
    expect(tabsList).toBeInTheDocument();
    expect(tab1).toHaveAttribute("role", "tab");
    expect(tab2).toHaveAttribute("role", "tab");
    expect(content1).toHaveAttribute("role", "tabpanel");
    expect(content2).toHaveAttribute("role", "tabpanel");

    // Verifica aria-selected inicial
    expect(tab1).toHaveAttribute("aria-selected", "true");
    expect(tab2).toHaveAttribute("aria-selected", "false");

    // Verifica associação entre tab e painel
    expect(tab1).toHaveAttribute("aria-controls");
    expect(tab2).toHaveAttribute("aria-controls");
    expect(content1).toHaveAttribute("aria-labelledby");
    expect(content2).toHaveAttribute("aria-labelledby");
  });

  it("deve aplicar data-testid corretos em todos os componentes", () => {
    render(
      <Tabs defaultValue="tab1" data-testid="custom-tabs">
        <TabsList data-testid="custom-tabs-list">
          <TabsTrigger value="tab1" data-testid="custom-tab-trigger">
            Tab 1
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tab1" data-testid="custom-tab-content">
          Conteúdo
        </TabsContent>
      </Tabs>
    );

    expect(screen.getByTestId("custom-tabs")).toBeInTheDocument();
    expect(screen.getByTestId("custom-tabs-list")).toBeInTheDocument();
    expect(screen.getByTestId("custom-tab-trigger")).toBeInTheDocument();
    expect(screen.getByTestId("custom-tab-content")).toBeInTheDocument();
  });
});

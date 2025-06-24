import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

describe("Dialog", () => {
  it("deve renderizar o trigger do dialog", () => {
    render(
      <Dialog>
        <DialogTrigger data-testid="dialog-trigger">Abrir Dialog</DialogTrigger>
      </Dialog>
    );

    expect(screen.getByTestId("dialog-trigger")).toBeInTheDocument();
    expect(screen.getByText("Abrir Dialog")).toBeInTheDocument();
  });

  it("deve abrir o dialog ao clicar no trigger", () => {
    render(
      <Dialog>
        <DialogTrigger data-testid="dialog-trigger">Abrir</DialogTrigger>
        <DialogContent data-testid="dialog-content">
          <DialogTitle>Título do Dialog</DialogTitle>
          <DialogHeader>
            <DialogDescription>Descrição do dialog</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );

    // Inicialmente o conteúdo não deve estar visível
    expect(screen.queryByTestId("dialog-content")).not.toBeInTheDocument();

    // Clica no trigger
    fireEvent.click(screen.getByTestId("dialog-trigger"));

    // Agora o conteúdo deve estar visível
    expect(screen.getByTestId("dialog-content")).toBeInTheDocument();
    expect(screen.getByText("Título do Dialog")).toBeInTheDocument();
    expect(screen.getByText("Descrição do dialog")).toBeInTheDocument();
  });

  it("deve renderizar o botão de fechar por padrão", () => {
    render(
      <Dialog open>
        <DialogContent data-testid="dialog-content">
          <DialogTitle>Dialog</DialogTitle>
        </DialogContent>
      </Dialog>
    );

    const closeButton = screen.getByRole("button", { name: /close/i });
    expect(closeButton).toBeInTheDocument();
  });

  it("deve ocultar o botão de fechar quando showCloseButton for false", () => {
    render(
      <Dialog open>
        <DialogContent showCloseButton={false} data-testid="dialog-content">
          <DialogTitle>Dialog sem botão fechar</DialogTitle>
        </DialogContent>
      </Dialog>
    );

    const closeButton = screen.queryByRole("button", { name: /close/i });
    expect(closeButton).not.toBeInTheDocument();
  });

  it("deve aplicar className personalizada no conteúdo", () => {
    render(
      <Dialog open>
        <DialogContent className="custom-dialog" data-testid="dialog-content">
          <DialogTitle>Dialog customizado</DialogTitle>
        </DialogContent>
      </Dialog>
    );

    const content = screen.getByTestId("dialog-content");
    expect(content).toHaveClass("custom-dialog");
  });

  it("deve renderizar header e footer corretamente", () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogHeader data-testid="dialog-header">
            <DialogTitle>Título</DialogTitle>
            <DialogDescription>Descrição</DialogDescription>
          </DialogHeader>
          <div data-testid="dialog-footer">
            <button>Cancelar</button>
            <button>Confirmar</button>
          </div>
        </DialogContent>
      </Dialog>
    );

    expect(screen.getByTestId("dialog-header")).toBeInTheDocument();
    expect(screen.getByTestId("dialog-footer")).toBeInTheDocument();
    expect(screen.getByText("Título")).toBeInTheDocument();
    expect(screen.getByText("Descrição")).toBeInTheDocument();
  });
});

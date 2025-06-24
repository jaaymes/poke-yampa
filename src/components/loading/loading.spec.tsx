import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Loading, LoadingSkeleton, Spinner } from "./loading";

describe("Loading Component", () => {
  describe("Loading", () => {
    it("deve renderizar com props padrão", () => {
      render(<Loading />);

      expect(screen.getByText("Carregando...")).toBeInTheDocument();
      expect(screen.getByRole("presentation")).toBeInTheDocument();
    });

    it("deve renderizar com texto customizado", () => {
      const customText = "Buscando Pokémons...";
      render(<Loading text={customText} />);

      expect(screen.getByText(customText)).toBeInTheDocument();
      expect(screen.queryByText("Carregando...")).not.toBeInTheDocument();
    });

    it("deve renderizar com texto padrão quando text é undefined", () => {
      render(<Loading text={undefined} />);

      expect(screen.getByText("Carregando...")).toBeInTheDocument();
    });

    it("deve renderizar sem texto quando text é string vazia", () => {
      render(<Loading text="" />);

      expect(screen.queryByText("Carregando...")).not.toBeInTheDocument();
    });

    it("deve aplicar classe CSS customizada", () => {
      const customClass = "custom-loading-class";
      render(<Loading className={customClass} />);

      const container = screen.getByTestId("loading");
      expect(container).toHaveClass(customClass);
    });

    it("deve renderizar com tamanho pequeno", () => {
      render(<Loading size="sm" />);

      const spinner = screen.getByRole("presentation");
      expect(spinner).toHaveClass("w-4", "h-4");
    });

    it("deve renderizar com tamanho médio (padrão)", () => {
      render(<Loading size="md" />);

      const spinner = screen.getByRole("presentation");
      expect(spinner).toHaveClass("w-8", "h-8");
    });

    it("deve renderizar com tamanho grande", () => {
      render(<Loading size="lg" />);

      const spinner = screen.getByRole("presentation");
      expect(spinner).toHaveClass("w-12", "h-12");
    });

    it("deve ter animação de rotação", () => {
      render(<Loading />);

      const spinner = screen.getByRole("presentation");
      expect(spinner).toHaveClass("animate-spin");
    });

    it("deve ter texto com animação de pulse", () => {
      render(<Loading text="Teste" />);

      const text = screen.getByText("Teste");
      expect(text).toHaveClass("animate-pulse");
    });

    it("deve ter estrutura HTML correta", () => {
      render(<Loading />);

      const container = screen.getByTestId("loading");
      expect(container).toHaveClass(
        "flex",
        "flex-col",
        "items-center",
        "justify-center",
        "gap-3"
      );

      const spinnerContainer = screen.getByRole("presentation").parentElement;
      expect(spinnerContainer).toHaveClass("relative");

      const spinner = screen.getByRole("presentation");
      expect(spinner).toHaveClass(
        "rounded-full",
        "border-4",
        "border-primary",
        "border-t-transparent",
        "animate-spin"
      );
    });
  });

  describe("LoadingSkeleton", () => {
    it("deve renderizar 8 cards skeleton", () => {
      render(<LoadingSkeleton />);

      const skeletonCards = screen.getAllByRole("presentation");
      expect(skeletonCards).toHaveLength(8);
    });

    it("deve ter grid layout responsivo", () => {
      const { container } = render(<LoadingSkeleton />);

      const grid = container.firstChild as HTMLElement;
      expect(grid).toHaveClass(
        "grid",
        "grid-cols-1",
        "sm:grid-cols-2",
        "md:grid-cols-3",
        "lg:grid-cols-4",
        "gap-4"
      );
    });

    it("deve ter estrutura correta para cada skeleton card", () => {
      const { container } = render(<LoadingSkeleton />);

      const cards = container.querySelectorAll('[role="presentation"]');

      cards.forEach((card) => {
        expect(card).toHaveClass("bg-card", "rounded-lg", "p-4", "space-y-3");

        // Verifica se tem a imagem skeleton
        const imageSkeleton = card.querySelector(".h-32");
        expect(imageSkeleton).toHaveClass(
          "w-full",
          "h-32",
          "bg-muted",
          "animate-pulse",
          "rounded"
        );

        // Verifica se tem as linhas de texto skeleton
        const textSkeletons = card.querySelectorAll(
          ".bg-muted.animate-pulse:not(.h-32)"
        );
        expect(textSkeletons).toHaveLength(2);
      });
    });
  });

  describe("Spinner", () => {
    it("deve renderizar spinner básico", () => {
      render(<Spinner />);

      const spinner = screen.getByRole("presentation");
      expect(spinner).toBeInTheDocument();
    });

    it("deve ter classes CSS padrão", () => {
      render(<Spinner />);

      const spinner = screen.getByRole("presentation");
      expect(spinner).toHaveClass(
        "w-6",
        "h-6",
        "border-2",
        "border-primary",
        "border-t-transparent",
        "rounded-full",
        "animate-spin"
      );
    });

    it("deve aplicar classe CSS customizada", () => {
      const customClass = "custom-spinner-class";
      render(<Spinner className={customClass} />);

      const spinner = screen.getByRole("presentation");
      expect(spinner).toHaveClass(customClass);
    });

    it("deve manter classes padrão quando className é fornecido", () => {
      render(<Spinner className="custom-class" />);

      const spinner = screen.getByRole("presentation");
      expect(spinner).toHaveClass(
        "w-6",
        "h-6",
        "border-2",
        "border-primary",
        "border-t-transparent",
        "rounded-full",
        "animate-spin",
        "custom-class"
      );
    });
  });
});

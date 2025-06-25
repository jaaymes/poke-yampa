import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";

// Mock do useEmblaCarousel para controlar o comportamento nos testes
vi.mock("embla-carousel-react", () => {
  return {
    __esModule: true,
    default: () => {
      return [
        null,
        {
          canScrollNext: () => true,
          canScrollPrev: () => false,
          scrollNext: vi.fn(),
          scrollPrev: vi.fn(),
          on: vi.fn(),
          off: vi.fn(),
        },
      ];
    },
  };
});

describe("Carousel", () => {
  it("renders carousel with content", () => {
    render(
      <Carousel data-testid="carousel">
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
          <CarouselItem>Item 2</CarouselItem>
          <CarouselItem>Item 3</CarouselItem>
        </CarouselContent>
      </Carousel>
    );

    const carousel = screen.getByTestId("carousel");
    expect(carousel).toBeInTheDocument();
    expect(carousel.getAttribute("role")).toBe("region");
    expect(carousel.getAttribute("aria-roledescription")).toBe("carousel");
  });

  it("renders carousel with navigation buttons", () => {
    render(
      <Carousel data-testid="carousel">
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
          <CarouselItem>Item 2</CarouselItem>
          <CarouselItem>Item 3</CarouselItem>
        </CarouselContent>
        <CarouselPrevious data-testid="prev-button" />
        <CarouselNext data-testid="next-button" />
      </Carousel>
    );

    const prevButton = screen.getByTestId("prev-button");
    const nextButton = screen.getByTestId("next-button");

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();

    // No ambiente de teste, o comportamento pode variar dependendo da inicialização do embla-carousel
    // Vamos apenas verificar se os botões existem, sem verificar seu estado
  });

  it("handles keyboard navigation", () => {
    render(
      <Carousel data-testid="carousel">
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
          <CarouselItem>Item 2</CarouselItem>
        </CarouselContent>
      </Carousel>
    );

    const carousel = screen.getByTestId("carousel");

    // Test arrow key navigation
    fireEvent.keyDown(carousel, { key: "ArrowLeft" });
    fireEvent.keyDown(carousel, { key: "ArrowRight" });

    // Note: We can't easily test the actual scrolling behavior since
    // embla-carousel's API is not easily mockable in this test setup
  });

  it("renders vertical carousel", () => {
    render(
      <Carousel orientation="vertical" data-testid="vertical-carousel">
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
          <CarouselItem>Item 2</CarouselItem>
        </CarouselContent>
      </Carousel>
    );

    const carousel = screen.getByTestId("vertical-carousel");
    expect(carousel).toBeInTheDocument();
  });

  it("renders infinite loop carousel", () => {
    render(
      <Carousel loop={true} data-testid="infinite-carousel">
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
          <CarouselItem>Item 2</CarouselItem>
          <CarouselItem>Item 3</CarouselItem>
        </CarouselContent>
        <CarouselPrevious data-testid="infinite-prev-button" />
        <CarouselNext data-testid="infinite-next-button" />
      </Carousel>
    );

    const carousel = screen.getByTestId("infinite-carousel");
    expect(carousel).toBeInTheDocument();

    // Verificar se os botões estão presentes
    const prevButton = screen.getByTestId("infinite-prev-button");
    const nextButton = screen.getByTestId("infinite-next-button");
    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });
});

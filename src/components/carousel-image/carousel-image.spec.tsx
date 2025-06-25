import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { CarouselImage } from "./carousel-image";

// Mock do componente Carousel
vi.mock("../ui/carousel", () => ({
  Carousel: ({
    children,
    ...props
  }: React.PropsWithChildren<Record<string, unknown>>) => (
    <div data-testid="mocked-carousel" {...props}>
      {children}
    </div>
  ),
  CarouselContent: ({
    children,
    className,
  }: React.PropsWithChildren<{ className?: string }>) => (
    <div data-testid="mocked-carousel-content" className={className}>
      {children}
    </div>
  ),
  CarouselItem: ({
    children,
  }: React.PropsWithChildren<Record<string, unknown>>) => (
    <div data-testid="mocked-carousel-item">{children}</div>
  ),
  CarouselPrevious: () => (
    <button data-testid="mocked-carousel-previous">Previous</button>
  ),
  CarouselNext: () => <button data-testid="mocked-carousel-next">Next</button>,
}));

// Mock do componente Image
vi.mock("../ui/image", () => ({
  Image: ({
    src,
    alt,
    ...props
  }: {
    src: string;
    alt: string;
    [key: string]: unknown;
  }) => <img src={src} alt={alt} data-testid="mocked-image" {...props} />,
}));

describe("CarouselImage", () => {
  it("deve renderizar o carousel com imagens", () => {
    const images = ["image1.jpg", "image2.jpg", "image3.jpg"];

    render(<CarouselImage images={images} />);

    const carousel = screen.getByTestId("mocked-carousel");
    expect(carousel).toBeInTheDocument();
    expect(carousel).toHaveClass("w-full max-w-xs");

    const carouselContent = screen.getByTestId("mocked-carousel-content");
    expect(carouselContent).toBeInTheDocument();
    expect(carouselContent).toHaveClass("bg-transparent");

    const carouselItems = screen.getAllByTestId("mocked-carousel-item");
    expect(carouselItems).toHaveLength(3);

    const images_rendered = screen.getAllByTestId("mocked-image");
    expect(images_rendered).toHaveLength(3);
    expect(images_rendered[0]).toHaveAttribute("src", "image1.jpg");
    expect(images_rendered[1]).toHaveAttribute("src", "image2.jpg");
    expect(images_rendered[2]).toHaveAttribute("src", "image3.jpg");
  });

  it("deve filtrar imagens vazias", () => {
    const images = ["image1.jpg", "", null, "image2.jpg"];

    render(<CarouselImage images={images as string[]} />);

    const carouselItems = screen.getAllByTestId("mocked-carousel-item");
    expect(carouselItems).toHaveLength(2); // Deve ter apenas 2 itens, pois filtra os vazios

    const images_rendered = screen.getAllByTestId("mocked-image");
    expect(images_rendered).toHaveLength(2);
    expect(images_rendered[0]).toHaveAttribute("src", "image1.jpg");
    expect(images_rendered[1]).toHaveAttribute("src", "image2.jpg");
  });

  it("deve renderizar os botões de navegação", () => {
    const images = ["image1.jpg"];

    render(<CarouselImage images={images} />);

    const prevButton = screen.getByTestId("mocked-carousel-previous");
    const nextButton = screen.getByTestId("mocked-carousel-next");

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  it("deve aplicar a classe correta nas imagens", () => {
    const images = ["image1.jpg"];

    render(<CarouselImage images={images} />);

    const image = screen.getByTestId("mocked-image");
    expect(image).toHaveClass("w-full h-full object-contain");
  });
});

import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";

const meta: Meta<typeof Carousel> = {
  title: "UI/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-xs">
      <Carousel>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <div className="flex h-40 items-center justify-center rounded-md border border-slate-200 bg-slate-100 p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
};

export const InfiniteLoop: Story = {
  render: () => (
    <div className="w-full max-w-xs">
      <Carousel loop={true}>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <div className="flex h-40 items-center justify-center rounded-md border border-slate-200 bg-slate-100 p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <p className="mt-2 text-center text-sm text-slate-500">
        Modo infinito: navegue continuamente sem parar nos limites
      </p>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="w-full max-w-xs">
      <Carousel orientation="vertical" className="h-64">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <div className="flex h-32 items-center justify-center rounded-md border border-slate-200 bg-slate-100 p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
};

export const WithImages: Story = {
  render: () => (
    <div className="w-full max-w-sm">
      <Carousel>
        <CarouselContent>
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <div className="overflow-hidden rounded-md">
                  <img
                    src={`https://picsum.photos/seed/${index}/400/200`}
                    alt={`Random image ${index + 1}`}
                    className="h-48 w-full object-cover"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
};

export const InfiniteLoopImages: Story = {
  render: () => (
    <div className="w-full max-w-sm">
      <Carousel loop={true}>
        <CarouselContent>
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <div className="overflow-hidden rounded-md">
                  <img
                    src={`https://picsum.photos/seed/${index}/400/200`}
                    alt={`Random image ${index + 1}`}
                    className="h-48 w-full object-cover"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <p className="mt-2 text-center text-sm text-slate-500">
        Imagens em modo infinito
      </p>
    </div>
  ),
};

export const CustomButtons: Story = {
  render: () => (
    <div className="w-full max-w-xs">
      <Carousel>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <div className="flex h-40 items-center justify-center rounded-md border border-slate-200 bg-slate-100 p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          variant="secondary"
          className="left-0 translate-x-0"
        />
        <CarouselNext variant="secondary" className="right-0 translate-x-0" />
      </Carousel>
    </div>
  ),
};

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Image } from "../ui/image";

export const CarouselImage = ({ images }: { images: string[] }) => {
  return (
    <Carousel className="w-full max-w-xs" loop>
      <CarouselContent className="bg-transparent">
        {images.filter(Boolean).map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

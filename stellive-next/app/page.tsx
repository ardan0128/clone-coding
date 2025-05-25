import { Carousel, CarouselItem } from '@/components/Carousel';

export default function Home() {
  return (
    <main>
      <Carousel>
        <CarouselItem>
          <div>Item 1</div>
        </CarouselItem>
        <CarouselItem>
          <div>Item 2</div>
        </CarouselItem>
      </Carousel>
    </main>
  );
}

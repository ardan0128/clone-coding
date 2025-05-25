import { Carousel, CarouselItem } from '@/components/Carousel';

export default function Home() {
  return (
    <main>
      <Carousel backgroundImage="/images/carousel/carousel1.jpg">
        <CarouselItem imageUrl="/images/carousel/carousel1.jpg" title="Item 1" description="Item 1" link="/" />
      </Carousel>
    </main>
  );
}

import { Carousel, CarouselItem } from '@/components/Carousel';
import NewsPreview from '@/components/Home/NewsPreview';
import { NewsCardProps, NewsItem } from '@/components/Home/types';

export default function Home() {
  const news: NewsItem[] = [
    {
      id: 1,
      title: 'News 1',
      content: 'News 1',
      createdAt: '2021-01-01',
    },
    {
      id: 2,
      title: 'News 2',
      content: 'News 2',
      createdAt: '2021-01-01',
    },
    {
      id: 3,
      title: 'News 3',
      content: 'News 3',
      createdAt: '2021-01-01',
    },
  ];
  return (
    <main>
      <Carousel backgroundImage="/images/carousel/carousel1.jpg">
        <CarouselItem imageUrl="/images/carousel/carousel1.jpg" title="Item 1" description="Item 1" link="/" />
      </Carousel>
      <NewsPreview news={news} />
    </main>
  );
}

export interface NewsItem {
  id: number;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  category?: string;
  link: string;
}

export interface NewsCardProps {
  news: NewsItem[];
}

interface NewsPreviewProps {
  news: NewsItem[];
}

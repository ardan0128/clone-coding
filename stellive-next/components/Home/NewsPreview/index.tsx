import styles from './NewsPreview.module.css';
import { NewsCardProps } from '../types';
import Image from 'next/image';

function NewsPreview({ news }: NewsCardProps) {
  return (
    <div className={styles.newsPreview}>
      <div className={styles.newsPreview__title}>
        <Image src="/images/home/main_star1.png" alt="News Preview" width={63} height={42} />
        <Image src="/images/home/main_news.png" alt="News Preview" width={208} height={43} />
        <Image src="/images/home/main_news2.png" alt="News Preview" width={136} height={9} />
      </div>
      <div className={styles.newsPreview__content}>
        {news.map(item => (
          <div key={item.id}>{item.title}</div>
        ))}
      </div>
    </div>
  );
}

export default NewsPreview;

import React from 'react';
import styles from './Carousel.module.css';

interface CarouselProps {
  children: React.ReactNode;
  backgroundImage?: string;
}

function Carousel({ children, backgroundImage }: CarouselProps) {
  return (
    <div className={styles.carousel} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.carouselInner}>{children}</div>
    </div>
  );
}

export default Carousel;

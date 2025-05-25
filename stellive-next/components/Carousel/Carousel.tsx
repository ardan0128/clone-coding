import React from 'react';
import styles from './Carousel.module.css';

interface CarouselProps {
  children: React.ReactNode;
}

function Carousel({ children }: CarouselProps) {
  return (
    <div className={styles.carousel}>
      <div className={styles.carouselInner}>{children}</div>
    </div>
  );
}

export default Carousel;

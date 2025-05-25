import React from 'react';
import styles from './Carousel.module.css';

interface CarouselItemProps {
  children: React.ReactNode;
}

function CarouselItem({ children }: CarouselItemProps) {
  return <div className={styles.carouselItem}>{children}</div>;
}

export default CarouselItem;

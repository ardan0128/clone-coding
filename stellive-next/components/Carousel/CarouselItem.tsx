import React from 'react';
import Image from 'next/image';
import styles from './Carousel.module.css';

interface CarouselItemProps {
  imageUrl: string;
  title?: string;
  description?: string;
  link?: string;
}

function CarouselItem({ imageUrl, title, description, link }: CarouselItemProps) {
  return (
    <div className={styles.carouselItem}>
      <Image src={imageUrl} alt={title || 'Carousel image'} fill className={styles.image} priority />
    </div>
  );
}

export default CarouselItem;

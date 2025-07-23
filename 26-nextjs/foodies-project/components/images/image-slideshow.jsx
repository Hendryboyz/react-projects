"use client"

import {useEffect, useState} from "react";
import classes from "./image-slideshow.module.css";
import Image from "next/image";

import burgerImg from '@/assets/burger.jpg';
import curryImg from '@/assets/curry.jpg';
import dumplingsImg from '@/assets/dumplings.jpg';
import macncheeseImg from '@/assets/macncheese.jpg';
import pizzaImg from '@/assets/pizza.jpg';
import schnitzelImg from '@/assets/schnitzel.jpg';
import tomatoSaladImg from '@/assets/tomato-salad.jpg';

const images = [
  { instance: burgerImg, alt: 'A delicious, juicy burger' },
  { instance: curryImg, alt: 'A delicious, spicy curry' },
  { instance: dumplingsImg, alt: 'Steamed dumplings' },
  { instance: macncheeseImg, alt: 'Mac and cheese' },
  { instance: pizzaImg, alt: 'A delicious pizza' },
  { instance: schnitzelImg, alt: 'A delicious schnitzel' },
  { instance: tomatoSaladImg, alt: 'A delicious tomato salad' },
];

const transitionIntervalMilliseconds = 5000;
export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentImageIndex((prevImageIndex) => (prevImageIndex + 1) % (images.length - 1));
    }, transitionIntervalMilliseconds);

    return () => {
      clearInterval(slideInterval);
    };
  }, []);
  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.instance}
          className={index === currentImageIndex ? classes.active : ''}
          alt={image.alt}
          priority
        />
      ))}
    </div>
  );
}
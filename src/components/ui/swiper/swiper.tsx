'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions, Swiper as SwiperType } from 'swiper/types';

import LeftArrow from '@/assets/img/icons/left-arrow.svg';
import RightArrow from '@/assets/img/icons/right-arrow.svg';

import 'swiper/css';
import swiperStyle from './swiper.module.scss';
import { useState } from 'react';

type CarouselProps = {
  slides: React.ReactNode[];
  additionalClassName?: string;
};

const swiperParams: SwiperOptions = {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
};

export default function Carousel(props: CarouselProps) {
  const { slides, additionalClassName } = props;
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  return (
    <Swiper
      className={`swiper ${swiperStyle.swiper} ${additionalClassName ? additionalClassName : ''}`}
      onSwiper={setSwiper}
      {...swiperParams}
    >
      {slides.map((item, index) => (
        <SwiperSlide key={index}>{item}</SwiperSlide>
      ))}
      <button
        className={`btn ${swiperStyle.btnNav} ${swiperStyle.btnNavPrev}`}
        onClick={() => swiper?.slidePrev()}
      >
        <LeftArrow />
      </button>
      <button
        className={`btn ${swiperStyle.btnNav} ${swiperStyle.btnNavNext}`}
        onClick={() => swiper?.slideNext()}
      >
        <RightArrow />
      </button>
    </Swiper>
  );
}

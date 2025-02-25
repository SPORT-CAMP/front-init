'use client';

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/navigation';
import { ReactHTMLElement, useEffect } from 'react';

import swiperStyle from './swiper.module.scss';

type CarouselProps = {
  slides: any[];
  additionalClassName?: string;
};

const swiperParams: SwiperOptions = {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  modules: [Navigation],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
};

export default function Carousel(props: CarouselProps) {
  const { slides, additionalClassName } = props;
  useEffect(() => {
    const swiper = new Swiper('.swiper', swiperParams);
  }, []);
  return (
    <div className="swiper">
      <div className={`swiper-wrapper ${additionalClassName}`}>
        {slides.map((item, index) => (
          <div className="swiper-slide" key={index}>
            {item}
          </div>
        ))}
      </div>
      <div className={`swiper-button-prev ${swiperStyle.navigationBtn}`}></div>
      <div className={`swiper-button-next ${swiperStyle.navigationBtn}`}></div>
    </div>
  );
}

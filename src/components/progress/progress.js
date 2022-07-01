import Swiper, { Navigation } from "swiper";
Swiper.use([Navigation]);

const progress = '.swiper__progress-js';

if(document.querySelector(progress)) {
    const progressSlider = new Swiper(progress, {
        slidesPerView: 'auto',
        spaceBetween: 42,
        navigation: {
            nextEl: '.slider__button-right-js',
            prevEl: '.slider__button-left-js',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 22,
              },
            992: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
            1200: {
              spaceBetween: 42,
              slidesPerView: 4,
            }
          }
    })
}
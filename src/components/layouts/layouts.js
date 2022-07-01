import Swiper, { Navigation } from "swiper";
Swiper.use([Navigation]);

const layouts = '.swiper__layouts-js';

if(document.querySelector(layouts)) {
    const layoutsSlider = new Swiper(layouts, {
        slidesPerView: 'auto',
        spaceBetween: 40,
        navigation: {
            nextEl: '.slider__button-right-js',
            prevEl: '.slider__button-left-js',
        },
        breakpoints: {
            992: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            }
          }
    })
}
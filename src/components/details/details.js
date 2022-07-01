import Swiper, { Navigation } from "swiper";
Swiper.use([Navigation]);

const details = '.details__slider-js';

if(document.querySelector(details)) {
    const detailsSlider = new Swiper(details, {
        slidesPerView: 1,
        spaceBetween: 42,
        navigation: {
            nextEl: '.details__button-next-js',
            prevEl: '.details__button-prev-js',
        },
    })
}
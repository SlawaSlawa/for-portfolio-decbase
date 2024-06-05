'use strict'

const swiperService = new Swiper('.service__slider', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 20,
    slideActiveClass: 'service__item--active',
    slidesPerView: 3,

    navigation: {
        nextEl: '.slider-btn--service-next',
        prevEl: '.slider-btn--service-prev',
    },

});

const swiperClient = new Swiper('.reviews__slider', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 24,
    slidesPerView: 2,

    navigation: {
        nextEl: '.slider-btn--reviews-next',
        prevEl: '.slider-btn--reviews-prev',
    },

});


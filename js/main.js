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

    breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
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

    breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 12,
        },
        922: {
            slidesPerView: 2,
            spaceBetween: 12,
        },
        1212: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
    },
});


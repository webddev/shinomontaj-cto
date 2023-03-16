import Swiper, {Navigation, Pagination} from 'swiper';

const modelsSwiper = new Swiper(".modelsSwiper", {
    modules: [Navigation, Pagination],
    spaceBetween: 15,
    slidesPerGroup: 1,
    pagination: {
        el: ".swiper-pagination",
        type: 'bullets',
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        991: {
            slidesPerView: 3,
        },
        767: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        }
    }
});

const premiumSwiper = new Swiper(".premiumSwiper", {
    modules: [Navigation, Pagination],
    spaceBetween: 15,
    slidesPerGroup: 1,
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        type: 'progressbar',
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const tariffSwiper = new Swiper(".tariffSwiper", {
    modules: [Pagination],
    spaceBetween: 20,
    slidesPerGroup: 1,
    slidesPerView: 3,
    pagination: {
        el: ".swiper-pagination",
        type: 'bullets',
    },
    breakpoints: {
        992: {
            slidesPerView: 3,
        },
        767: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        }
    }
});

const deliverySwiper = new Swiper(".deliverySwiper", {
    modules: [Navigation, Pagination],
    spaceBetween: 15,
    slidesPerGroup: 1,
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        type: 'bullets',
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

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
            slidesPerView: 'auto',
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
        1099: {
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
    preloadImages: false,
    pagination: {
        el: ".swiper-pagination",
        type: 'bullets',
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// const thumbsSlider = new Swiper('.thumbsSlider', {
//   slidesPerView: 6,
//   slidesPerGroup: 1,
//   spaceBetween: 5,
//   watchSlidesVisibility: true,
//   watchSlidesProgress: true,
//   breakpoints: {
//     575: {
//       slidesPerView: 6,
//     },
//     0: {
//       slidesPerView: 3,
//     },
//   },
// });
// const innerSlider = new Swiper('.innerSlider', {
//   slidesPerView: 1,
//   slidesPerGroup: 1,
//   modules: [Navigation, Thumbs],
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   thumbs: {
//     swiper: thumbsSlider,
//   },
// });


// const swiper = new Swiper(".mySwiper", {
//   pagination: {
//     el: ".swiper-pagination",
//     type: "progressbar",
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

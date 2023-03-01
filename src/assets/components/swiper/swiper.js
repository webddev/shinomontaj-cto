import Swiper, {Navigation, Pagination} from 'swiper';

const modelsSwiper = new Swiper(".modelsSwiper", {
    slidesPerView: 4,
    slidesPerGroup: 1,
    modules: [Navigation, Pagination],
    spaceBetween: 15,
    pagination: {
        el: ".swiper-pagination",
        type: 'bullets',
        clickable: true,
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

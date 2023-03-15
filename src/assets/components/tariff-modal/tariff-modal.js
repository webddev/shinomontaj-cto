import Swiper, {Navigation} from "swiper";
import {Fancybox} from "@fancyapps/ui";

const modalButtons = document.querySelectorAll('[data-modal=tariff]');
const modalWindowTariff = document.querySelector('.tariff-modal');

modalButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        openModal(event.currentTarget);
        event.stopPropagation();
    });
})

function openModal(button) {
    if (button.dataset.title && button.dataset.tariff) {
        modalWindowTariff.querySelector('.tariff-model').textContent = button.dataset.title;
        modalWindowTariff.querySelector('.tariff-model').insertAdjacentHTML('beforeend', `<span class="undelined">${button.dataset.tariff}</span>`)
        modalWindowTariff.querySelector('input[name=comment]').value = `Заявка на ${button.dataset.title}`;
    }

    if (button.dataset.img) {
        const masImg = button.dataset.img.split('&');
        if (masImg.length > 0) {
            const swiperWrapper = modalWindowTariff.querySelector('.swiper-wrapper');
            const oldSlides = swiperWrapper.children;
            Array.from(oldSlides).forEach((el) => el.remove());

            masImg.forEach((value) => {
                swiperWrapper.insertAdjacentHTML(
                    'beforeend',
                    `<div class="swiper-slide"><img class="modal-slides__img" src="${value}" alt=""></div>`,
                );
            });
        }
    }

    tariffModalSwiper.slideTo(0);
    tariffModalSwiper.update();

    if (button.dataset.modal) {
        Fancybox.show([{
            src: modalWindowTariff,
            type: 'html',
            autoFocus: false,
            dragToClose: false,
        }]);
    }
}

const tariffModalSwiper = new Swiper(".tariffModalSwiper", {
    modules: [Navigation],
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

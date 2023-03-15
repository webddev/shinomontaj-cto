import {Fancybox} from "@fancyapps/ui";
import Swiper, { Navigation } from "swiper";

const modalButtonModel = document.querySelectorAll('[data-modal=model]');
const modalWindowModel = document.querySelector('.good-modal');

modalButtonModel.forEach((modelButton) => {
    modelButton.addEventListener('click', (event) => {
        openModal(event.currentTarget);
        event.stopPropagation();
    });
})

function openModal(modelButton) {
    if (modelButton.dataset.title) {
        modalWindowModel.querySelector('.good-model').textContent = modelButton.dataset.title;
        modalWindowModel.querySelector('input[name=comment]').value = `Заявка на ${modelButton.dataset.title}`;
    }

    if (modelButton.dataset.title && modelButton.dataset.tariff) {
        modalWindowModel.querySelector('.good-model').textContent = modelButton.dataset.title;
        modalWindowModel.querySelector('.good-model').insertAdjacentHTML('beforeend', `<span>${modelButton.dataset.tariff}</span>`)
        modalWindowModel.querySelector('input[name=comment]').value = `Заявка на ${modelButton.dataset.title}${modelButton.dataset.tariff}`;
        console.log('kk')
    }

    deliverySwiper.slideTo(0);
    deliverySwiper.update();

    if (modelButton.dataset.modal) {
        Fancybox.show([{
            src: modalWindowModel,
            type: 'html',
            autoFocus: false,
            dragToClose: false,
        }]);
    }
    if (modelButton.dataset.img) {
        const masImg = modelButton.dataset.img.split('&');
        if (masImg.length > 0) {
            const swiperWrapper = modalWindowModel.querySelector('.swiper-wrapper');
            const oldSlides = swiperWrapper.children;
            Array.from(oldSlides).forEach((el) => el.remove());

            masImg.forEach((value) => {
                swiperWrapper.insertAdjacentHTML(
                    'beforeend',
                    `<div class="swiper-slide"><img class="modal-slides__img" src="${value}" loading="lazy" alt=""></div>`,
                );
            });
        }
    }
}

const deliverySwiper = new Swiper(".modalSwiper", {
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

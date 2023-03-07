import {Fancybox} from "@fancyapps/ui";

const modalCallback = document.querySelectorAll('[data-modal=true]');
const modalElement = document.querySelector('.callback-modal');
modalCallback.forEach((modal) => {
    modal.addEventListener('click', () => {
        openModal(modal);
    });
})

function openModal(modal) {
    if (modal.dataset.modal) {
        Fancybox.show([{
            src: modalElement,
            type: 'html',
            autoFocus: false,
            dragToClose: false,
        }]);
    }
}

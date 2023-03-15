import {Fancybox} from "@fancyapps/ui";

const modalButtonModel = document.querySelectorAll('[data-modal=premium-model]');
const modalWindowModel = document.querySelector('.premium-good-modal');

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

    if (modelButton.dataset.img) {
        const photoBlock = modalWindowModel.querySelector('.good-modal__photo');
        photoBlock.innerHTML = '';
        photoBlock.insertAdjacentHTML('beforeend', `<img src="${modelButton.dataset.img}" alt="${modelButton.dataset.title}">`);

    }

    if (modelButton.dataset.modal) {
        Fancybox.show([{
            src: modalWindowModel,
            type: 'html',
            autoFocus: false,
            dragToClose: false,
        }]);
    }
}

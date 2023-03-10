const offerItems = document.querySelectorAll('.offer-item');

document.addEventListener('click', (e) => {
    const target = e.target;
    if (!target.closest('.offer-item')) {
        changeOpacity();
    }
})
offerItems?.forEach((item) => {
    const offerInputs = item.querySelectorAll('.form__input');
    offerInputs.forEach((input) => {
        input.addEventListener('click', (event) => {
            changeOpacity(event.target);
        })
    })
})
function changeOpacity(focused) {
    if (focused) {
        offerItems.forEach((item) => {
            item.style.opacity = 0.6;
        })
        focused.closest('.offer-item').style.opacity = 1;
    }
    else {
        offerItems.forEach((item) => {
            item.style.opacity = 1;
        })
    }
}


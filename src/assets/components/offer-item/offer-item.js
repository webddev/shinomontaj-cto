const offerItems = document.querySelectorAll('.offer-item');
offerItems.forEach((item) => {
    const offerInputs = item.querySelectorAll('.form__input');
    offerInputs.forEach((input) => {
        input.addEventListener('click', (event) => {
            changeOpacity(event.target);
        })
    })
})
function changeOpacity(focused) {
    offerItems.forEach((item) => {
        item.style.opacity = 0.6;
    })
    focused.closest('.offer-item').style.opacity = 1;
}

let prevScrollpos = window.scrollY;
const header = document.querySelector(".header");
const mobileWidth = window.matchMedia('(max-width: 420.98px)');

function throttle(func, ms) {

    let isThrottled = false,
        savedArgs,
        savedThis;

    function wrapper() {

        if (isThrottled) { // (2)
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        func.apply(this, arguments); // (1)

        isThrottled = true;

        const timer = setTimeout(function() {
            isThrottled = false; // (3)
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
            clearTimeout(timer);
        }, ms);
    }

    return wrapper;
}


const headerHideHandler = throttle(function() {
    const currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
        header.style.transform = 'translateY(0)';
    } else {
        header.style.transform = `translateY(${-header.clientHeight}px)`;
    }
    prevScrollpos = currentScrollPos;
}, 400)

function changeContent(media) {
    if (media.matches) {
        const headerButton = header.querySelector('.header__button');
        headerButton.innerHTML = '<img src="assets/img/icons/phone.svg" alt="Кнопка заказать звонок" width="30" height="30">'
    }
}

changeContent(mobileWidth);

window.addEventListener('scroll', headerHideHandler);

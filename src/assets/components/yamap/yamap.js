const element = document.querySelector('.questions');
let loadMap = 0;
function addMap() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?sid=KT5Sw3h8-UvqmBxA1pQ-B3Bo0Vy47Ooc&amp;width=100%25&amp;height=600&amp;lang=ru_RU&amp;sourceType=constructor&amp;scroll=false';
    script.async = true;
    document.querySelector("#map")?.appendChild(script);
    loadMap = 1;
}

function addMapHandler() {
    const timeout = setTimeout(() => {
        addMap();
        clearTimeout(timeout);
    }, 6000);
}
window.addEventListener('load', addMapHandler);

const url = 'https://centr-to.ru/api/good/prices';

function replacePrices(data) {
    data.forEach((item) => {
        const formatedPrice = format(item.price);
        document.querySelector(`[data-id="${item.id}"] .model-card__price`).textContent = `${formatedPrice} ₽`
    })
}

function format(str) {
    str = String(str);
    const s = str.length;
    const chars = str.split('');
    const strWithSpaces = chars.reduceRight((acc, char, i) => {
        const spaceOrNothing = ((((s - i) % 3) === 0) ? ' ' : '');
        return (spaceOrNothing + char + acc);
    }, '');

    return ((strWithSpaces[0] === ' ') ? strWithSpaces.slice(1) : strWithSpaces);
}

function getIds() {
    const idArray = []
    const goods = document.querySelectorAll('[data-id]');
    goods.forEach((good) => {
        idArray.push(good.dataset.id)
    })

    return idArray
}

function fetchPrices() {
    const idArray = getIds();
    const queryParams = new URLSearchParams();
    idArray.forEach((id) => {
        queryParams.append('id[]', id.toString());
    })
    fetch(`${url}?${queryParams}`, {
        method: 'GET',
        mode: 'cors',
    })
        .then((response) => response.json())
        .then((data) => {
            replacePrices(data);
        })
        .catch((err) => {
            throw new Error(err.message)
        })
}

window.addEventListener('DOMContentLoaded', () => {
    fetchPrices();
});

// const mobileWidth = window.matchMedia('(max-width: 991.98px)');
//
// function deleteHover(media) {
//     if (media.matches) {
//         const hoveredCards = document.querySelectorAll('.model-card.hovered');
//         hoveredCards.forEach((card) => {
//             card.classList.remove('hovered');
//             card.addEventListener('click', () => {
//                 card.classList.toggle('hovered');
//             })
//         })
//     }
// }
//
// deleteHover(mobileWidth);

const cards = document.querySelectorAll('.model-card');
cards.forEach((card) => {
    card.addEventListener('click', () => {
        card.classList.toggle('flip');
    })
})

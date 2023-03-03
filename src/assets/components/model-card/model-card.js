const hoveredCards = document.querySelectorAll('.model-card.hovered');

if (window.matchMedia('(max-width: 991.98px)')) {
    hoveredCards.forEach((card) => {
        card.classList.remove('hovered');
        card.addEventListener('click', () => {
            card.classList.toggle('hovered');
        })
    })
}

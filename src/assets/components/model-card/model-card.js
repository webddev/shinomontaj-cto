const cards = document.querySelectorAll('.model-card');
cards.forEach((card) => {
    card.addEventListener('click', () => {
        card.classList.toggle('flip');
    })
})

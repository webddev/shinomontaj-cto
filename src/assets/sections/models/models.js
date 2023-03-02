const sortBtnBrunches = document.querySelectorAll('[data-brunch]');

sortBtnBrunches.forEach((button) => {
    button.addEventListener('click', (event) => {
        if (event.currentTarget.dataset.brunch) {
            showDesiredModels(event.currentTarget.dataset.brunch, event.currentTarget.dataset.block);
        }
        if (event.currentTarget.classList.contains('switch')) {
            doSwitchActive(event.currentTarget);
        }
    });
})
function showDesiredModels(brunch, block) {
    const desiredBrunch = document.getElementById(`${brunch}`);
    const allBlocks = desiredBrunch.querySelectorAll('.models__model-row');
    allBlocks.forEach((block) => {
        block.style.display = 'none';
    });
    desiredBrunch.querySelector(`.${block}`).style.display = 'flex';
}
function doSwitchActive(clicked) {
    const switches = document.querySelectorAll('.switch');
    switches.forEach((switchh) => {
        switchh.classList.remove('switch_active');
    });
    clicked.classList.add('switch_active');
}

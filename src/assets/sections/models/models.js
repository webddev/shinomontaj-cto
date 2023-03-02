const sortBtnBrunches = document.querySelectorAll('[data-brunch]');

sortBtnBrunches.forEach((button) => {
    button.addEventListener('click', (event) => {
        if (event.currentTarget.dataset.brunch) {
            showDesiredModels(event.currentTarget.dataset.brunch, event.currentTarget.dataset.block);
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
    const switches = document.querySelectorAll('.switch[data-brunch]');
    switches.forEach((switchh) => {
        if (clicked.dataset.brunch !== switchh.dataset.brunch) {
            return
        }
        switchh.classList.remove('switch_active');
        if (clicked.dataset.brunch === switchh.dataset.brunch && clicked.dataset.block === switchh.dataset.block) {
            switchh.classList.add('switch_active');
        }
    });
}

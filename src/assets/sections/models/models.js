const sortBtnBranches = document.querySelectorAll('[data-branch]');
const navItems = document.querySelectorAll('.nav__item');

navItems.forEach((item) => {
    item.addEventListener('click', (event) => {
        if (event.currentTarget.dataset.branch) {
            scrollToBlock(event.currentTarget.dataset.branch);
        }
    })
})

sortBtnBranches.forEach((button) => {
    button.addEventListener('click', (event) => {
        if (event.currentTarget.dataset.branch && event.currentTarget.dataset.block) {
            showDesiredModels(event.currentTarget.dataset.branch, event.currentTarget.dataset.block);
            doSwitchActive(event.currentTarget);
        }
    });
})

function showDesiredModels(branch, block) {
    const desiredBranch = document.getElementById(`${branch}`);
    const allBlocks = desiredBranch.querySelectorAll('[data-filter=true]');
    allBlocks.forEach((block) => {
        block.classList.add('hidden');

        const cards = block.querySelectorAll('.model-card');
        cards.forEach((card) => {
            card.classList.remove('flip');
        })
    });
    desiredBranch.querySelector(`.${block}`).classList.remove('hidden');
}

function doSwitchActive(clicked) {
    const switches = document.querySelectorAll('.switch[data-branch]');
    switches.forEach((switcher) => {
        if (clicked.dataset.branch !== switcher.dataset.branch) return

        switcher.classList.remove('switch_active');
        if (clicked.dataset.branch === switcher.dataset.branch && clicked.dataset.block === switcher.dataset.block) {
            switcher.classList.add('switch_active');
        }
    });
}
function scrollToBlock(block) {
    const modelBlock = document.querySelector(`#${block}`)
    modelBlock.scrollIntoView({block: 'end'});
}

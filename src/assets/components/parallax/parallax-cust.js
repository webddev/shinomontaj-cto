const scene = document.getElementById('scene');
const elem = document.querySelector('.premium-hero');


document.addEventListener('scroll', function () {
    const posTop = elem.getBoundingClientRect().top;
    if (posTop < window.innerHeight) {
        const parallaxInstance = new Parallax(scene, {
            relativeInput: true,
        });
    }
});

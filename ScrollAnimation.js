const scrollAnimations = document.querySelectorAll('.scroll-animation');

window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    const triggerPosition = windowHeight / 2;

    scrollAnimations.forEach((element) => {
        const elementPosition = element.getBoundingClientRect();
        if (elementPosition.top - triggerPosition < 0) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    })

})
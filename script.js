
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let aboutHeading = document.querySelector('.about h2');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "imagens/icons/branco24.png";
        aboutHeading.style.zIndex = '';
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "imagens/icons/icons8-x-24.png";
        aboutHeading.style.zIndex = '-1';

    }    
}

document.addEventListener('click', function(event) {
    const aboutSection = document.querySelector('.about');
    const aboutHeading = document.querySelector('.about h2');

    if (aboutHeading.contains(event.target)) {
        // Alterna a altura ao clicar no h2
        if (aboutSection.style.height === '100vh') {
            aboutSection.style.height = '';
        } else {
            aboutSection.style.height = '100vh';
        }
    } else if (!aboutSection.contains(event.target)) {
        // Restaura a altura ao clicar fora do .about
        aboutSection.style.height = '';
    }
});




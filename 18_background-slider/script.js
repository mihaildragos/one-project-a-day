const body = document.body;
const slides = document.querySelectorAll('.slide');
const left = document.querySelector('#left');
const right = document.querySelector('#right');

let activeSlide = 0;

setBgToBody();

function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[activeSlide].classList.add('active');
}

left.addEventListener('click', () => {
    activeSlide--;

    if (activeSlide < 0) {
        activeSlide = slides.length - 1;
    }

    setBgToBody();
    setActiveSlide();
})

right.addEventListener('click', () => {
    activeSlide++;

    if (activeSlide > slides.length -1) {
        activeSlide = 0;
    }

    setBgToBody();
    setActiveSlide();
})
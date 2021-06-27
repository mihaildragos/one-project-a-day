const slideLeft = document.querySelector('.slide-left');
const slideRight = document.querySelector('.slide-right');
const btns = document.querySelectorAll('button');
const slidesLength = slideLeft.querySelectorAll('.left-item').length;

var selectedSlide = 0;

btns.forEach(btn => {
    btn.addEventListener('click', ev => {
        if (btn.id === 'up' && selectedSlide < (slidesLength - 1)) {
            selectedSlide++;
        } else if (btn.id === 'down' && selectedSlide > 0) {
            selectedSlide--;
        } else if (btn.id === 'up' && selectedSlide === (slidesLength - 1)) {
            selectedSlide = 0;
        } else if (btn.id === 'down' && selectedSlide === 0) {
            selectedSlide = slidesLength - 1;
        }

        slideLeft.style.top = `-${selectedSlide * 100}vh`
        slideRight.style.top = `-${((slidesLength - 1) - selectedSlide) * 100}vh`
    })
})

slideLeft.style.top = `-${selectedSlide * 100}vh`
slideRight.style.top = `-${((slidesLength - 1) - selectedSlide) * 100}vh`


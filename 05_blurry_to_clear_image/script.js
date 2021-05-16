const container = document.querySelector('.container');
const image = document.querySelector('img.image');
const counter = document.querySelector('h2.counter');


// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers/23202637#23202637
function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

const unblur = () => {
    number = 0;

    let interval = setInterval(() => {
        counter.innerText = number + "%";
        image.style.opacity = scale(number, 0, 100, 0, 1)
        image.style.filter = `blur(${scale(number, 0, 100, 30, 0)}px)`

        if (number >= 100) {
            window.clearInterval(interval);
            container.style.backgroundColor = 'transparent';
            counter.style.display = 'none';
        }
        number++;
    }, 1);

    container.classList.remove('blurred');
}
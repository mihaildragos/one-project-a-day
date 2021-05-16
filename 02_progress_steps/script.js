const prev = document.getElementById('btn-previous');
const next = document.getElementById('btn-next');
var dots = document.getElementsByClassName('dot');
var dotBars = document.getElementsByClassName('dot-bar');

prev.addEventListener('click', () => {
    var activeDots = checkStep(dots);
    var activeBars = checkStep(dotBars);

    if (activeDots > 1 && activeDots <= dots.length) {
        dots[activeDots - 1].classList.remove('active');
        dotBars[activeBars - 1].classList.remove('bar-active');
    }
    disableButton();
});

next.addEventListener('click', () => {
    var activeDots = checkStep(dots);
    var activeBars = checkStep(dotBars);

    if (activeDots >= 1 && activeDots < dots.length) {
        dots[activeDots].classList.add('active');
        dotBars[activeBars].classList.add('bar-active');
    }
    disableButton();
});

function checkStep(nodesArray) {
    var activeNodes = 0;
    for (var i = 0; i < nodesArray.length; i++) {
        if (nodesArray[i].classList.contains('active') || nodesArray[i].classList.contains('bar-active')) {
            activeNodes++;
        }
    }

    return activeNodes;
}

function disableButton() {
    if (checkStep(dots) == 1) {
        prev.setAttribute('disabled', 'true')
    } else {
        prev.disabled = false
    }
}



// =====================================
//      OTHER WAY
// =====================================
const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');
const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

btnNext.addEventListener('click', () => {
    currentActive++;

    if (currentActive >= circles.length) {
        currentActive = circles.length;
    }

    update();
})

btnPrev.addEventListener('click', () => {
    currentActive--;

    if (currentActive <= 1) {
        currentActive = 1;
    }

    update();
})


let update = () => {
    circles.forEach((circle, i) => {
        if (i < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })

    const actives = document.querySelectorAll('.circle.active');

    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

    if (currentActive == 1) {
        btnPrev.disabled = true;
    } else if (currentActive >= circles.length) {
        btnNext.disabled = true;
    } else {
        btnPrev.disabled = false;
        btnNext.disabled = false;
    }
}
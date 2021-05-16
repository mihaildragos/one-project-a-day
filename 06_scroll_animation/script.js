const boxes = document.querySelectorAll('.box');

const checkboxes = () => {
    // get the bottom position for the viewport and take 20% off to see animations 
    const triggerBottom = window.innerHeight / 5 * 4;

    // check each box if it is in the view and if it is in the view add the show className to slide it in view
    boxes.forEach(item => {
        // get the Y coordinates of the top of the element
        let itemTop = item.getBoundingClientRect().top

        if (itemTop < triggerBottom) {
            item.classList.add('show')
        } else {
            item.classList.remove('show')
        }
    });
}

window.addEventListener('scroll', checkboxes);
var cardsArray = document.getElementsByClassName('expanding-card');

var removeActive = () => {
    for (var i = 0; i < cardsArray.length; i++) {
        if (cardsArray[i].classList.length > 1) {
            cardsArray[i].classList.remove("active");
        }
    };
}

document.addEventListener('mouseover', function(event) {

    // If the clicked element doesn't have the right selector, bail
    if (!event.target.matches('.expanding-card')) return;

    // if object clicked already has active class return
    if (event.target.classList.length > 1) return;

    // Don't follow the link
    event.preventDefault();

    // remove active class from the expanded panel and add the class to the selected panel
    removeActive();
    event.target.classList.add('active')

}, false);
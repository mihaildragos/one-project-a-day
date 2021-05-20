const API_URL = 'https://api.themoviedb.org/4/discover/movie?sort_by=popularity.desc&api_key=1e2104e70511b854914f57617379799c';
const IMG_URL_BASE = 'https://image.tmdb.org/t/p/w500';

const modelCard = document.querySelector('.card.model');
const moviesList = document.querySelector('.movies-list');


fetch(API_URL)
    .then(res => res.json())
    .then(data => {
        data.results.forEach(movie => {

            console.log(movie);

            let card = modelCard.cloneNode(true);
            card.classList.remove('model');
            let cardOverviewDesc = card.children[0].children[1];
            let cardImage = card.children[1];
            let cardRating = card.children[2].children[0];
            let cardTitle = card.children[3].children[0];

            cardImage.src = IMG_URL_BASE + movie.backdrop_path;
            cardTitle.innerText = movie.original_title;
            cardRating.innerText = movie.vote_average;
            // console.log(cardRating.style.color);
            cardRating.style.color = getColour('#ff3300', '#55ff55', 1, 10, movie.vote_average);
            cardOverviewDesc.innerText = movie.overview;

            // console.log(movie);

            moviesList.appendChild(card);
        });
    });



function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function map(value, fromSource, toSource, fromTarget, toTarget) {
    return (value - fromSource) / (toSource - fromSource) * (toTarget - fromTarget) + fromTarget;
}

function getColour(startColour, endColour, min, max, value) {
    var startRGB = hexToRgb(startColour);
    var endRGB = hexToRgb(endColour);
    var percentFade = map(value, min, max, 0, 1);

    var diffRed = endRGB.r - startRGB.r;
    var diffGreen = endRGB.g - startRGB.g;
    var diffBlue = endRGB.b - startRGB.b;

    diffRed = (diffRed * percentFade) + startRGB.r;
    diffGreen = (diffGreen * percentFade) + startRGB.g;
    diffBlue = (diffBlue * percentFade) + startRGB.b;

    var result = "rgb(" + Math.round(diffRed) + ", " + Math.round(diffGreen) + ", " + Math.round(diffBlue) + ")";
    return result;
}
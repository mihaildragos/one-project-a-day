const API_URL = 'https://api.themoviedb.org/4/discover/movie?sort_by=popularity.desc&api_key=1e2104e70511b854914f57617379799c';
const IMG_URL_BASE = 'https://image.tmdb.org/t/p/w500/';

const modelCard = document.querySelector('.card.model');
const moviesList = document.querySelector('.movies-list');


fetch(API_URL)
    .then(res => res.json())
    .then(data => {
        data.results.forEach(movie => {
            let card = modelCard.cloneNode(true);
            card.classList.remove('model');
            let cardOverviewDesc = card.children[0].children[1];
            let cardImage = card.children[1];
            let cardRating = card.children[2].children[0];
            let cardTitle = card.children[3].children[0];
            
            cardImage.src = IMG_URL_BASE + movie.backdrop_path;
            cardTitle.innerText = movie.original_title;
            cardRating.innerText = movie.vote_average;
            cardOverviewDesc.innerText = movie.overview;

            // console.log(movie);

            moviesList.appendChild(card);
        });
    });



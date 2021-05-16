const searchBox = document.querySelector('.search-box');
const searchInput = document.querySelector('#search');
const searchBtn = document.querySelector('#search-btn');


searchBtn.addEventListener('click', event => {
    if (searchBox.classList.contains('active')) {

        // check for input if present and search
        if (searchInput.value != "" && searchInput.value != null) {
            alert(`Searching for: ${searchInput.value}`);
            searchInput.value = "";

            // if no input present close the box
        } else if (searchInput.value == "" || searchInput.value == null) {
            searchBox.classList.remove('active')
        }


    } else if (!searchBox.classList.contains('active')) { // if the box is closed open it
        searchBox.classList.add('active');
    }
})


// second version

const search = document.querySelector('.search');
const input = document.querySelector('#search-input');
const btn = document.querySelector('#search-button');

btn.addEventListener('click', () => {
    search.classList.toggle('active');
    input.focus();
})
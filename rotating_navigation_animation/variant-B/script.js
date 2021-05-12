// const menu = document.querySelector("#menu");
const page = document.querySelector(".container");

menu.addEventListener('click', event => {
    if (page.classList.contains('show-nav')) {
        page.classList.remove('show-nav')
    } else {
        page.classList.add('show-nav')
    }
})
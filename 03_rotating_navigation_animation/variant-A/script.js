const menu = document.querySelector("#menu");
const page = document.querySelector(".page");

menu.addEventListener('click', event => {
    if (page.classList.contains('rotated')) {
        page.classList.remove('rotated')
    } else {
        page.classList.add('rotated')
    }
})
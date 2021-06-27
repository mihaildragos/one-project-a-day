const header = document.querySelector('header');
const footer = document.querySelector('footer');
const links = document.querySelectorAll('a.menu-link');


// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.style.height = "45px";
        header.style.fontSize = "1em";
        header.style.backgroundColor = "#fff";
        
        links.forEach(link => {
            link.style.color = "#000";
        })
        
    } else {
        header.style.height = "90px";
        header.style.fontSize = "1.3em";
        header.style.backgroundColor = "#999";
        
        links.forEach(link => {
            link.style.color = "#fff";
        })
    }
}
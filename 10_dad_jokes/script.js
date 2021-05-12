const para = document.querySelector('p.text');
const btn = document.querySelector('button.btn');
const APIurl = 'https://icanhazdadjoke.com';

btn.addEventListener('click', () => {
    newJoke();
});

function newJoke() {
    let req = new XMLHttpRequest();
    req.open("GET", APIurl, false);
    req.setRequestHeader("Accept", "application/json");
    req.send(null);

    let res = JSON.parse(req.responseText);

    para.textContent = res.joke;
}

newJoke();
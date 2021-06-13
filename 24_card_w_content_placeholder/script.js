const header = document.querySelector('#header');
const title = document.querySelector('#title');
const excerpt = document.querySelector('#excerpt');
const profileImg = document.querySelector('#profile-img');
const userName = document.querySelector('#name');
const date = document.querySelector('#date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');


setTimeout(getData, 1500);

function getData() {
    let imgUrl = fetch('https://randomuser.me/api/portraits/men/45.jpg').catch(console.error()).then(data => console.log(data))
    header.innerHTML = `<img src="https://images.unsplash.com/photo-1623524142806-d08a59e73698?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80" alt="">`;
    title.innerHTML = `Lorem ipsum dolor sit amet`;
    excerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero accusamus natus laboriosam.`;
    profileImg.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">`;
    userName.innerHTML = `John Doe`;
    date.innerHTML = `Jun 08, 2021`;

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'));
}
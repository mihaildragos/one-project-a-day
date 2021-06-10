
const modeBtn = document.querySelector('.btn-mode');
// ANALOG CLOCK TIME HANDS
const hourHand = document.querySelector('.a-hour');
const minuteHand = document.querySelector('.a-minute');
const secondHand = document.querySelector('.a-second');
// DIGITAL TIME
const digitalTime = document.querySelector('.digital-time');
const hourSpan = document.querySelector('.d-hour');
const minuteSpan = document.querySelector('.d-minute');
const secondSpan = document.querySelector('.d-second');
// DATE
const dayOfWeek = document.querySelector('.day-of-week');
const dateDay = document.querySelector('.day');
const dateMonth = document.querySelector('.month');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

modeBtn.addEventListener('click', () => {
    document.querySelector('html').classList.toggle('dark');
});

toCurrentTime();

function updateTime() {

    // UPDATE ANALOG HANDS
    if (
        (new Date().getHours() == 0 && new Date().getMinutes() == 0 && new Date().getSeconds()) ||
        (getDeg(hourHand) == 0 && getDeg(minuteHand) == 0 && getDeg(secondHand) == 0)
    ) {
        toCurrentTime();
    } else {
        hourHand.style.transform = `rotate(${getDeg(hourHand) + 0.0083333333333333}deg)`;
        minuteHand.style.transform = `rotate(${getDeg(minuteHand) + 0.1}deg)`;
        secondHand.style.transform = `rotate(${getDeg(secondHand) + 6}deg)`;
    }



    // UPDATE DIGITAL TIME
    digitalTime.innerHTML = formatAMPM(new Date());
    // hourSpan.innerHTML = new Date().getHours();
    // minuteSpan.innerHTML = new Date().getMinutes();
    // secondSpan.innerHTML = new Date().getSeconds();

    // UPDATE DATE
    dayOfWeek.innerHTML = days[new Date().getDay()]
    dateDay.innerHTML = new Date().getDay();
    dateMonth.innerHTML = months[new Date().getMonth()]
}

function getDeg(el) {
    // return +el.style.transform.toString().split("(")[1].split('deg)')[0];
    return +el.style.transform.toString().split("(")[1].split('deg)')[0];
}

function toCurrentTime() {
    hourHand.style.transform = `rotate(${(new Date().getHours() * 30) + (new Date().getMinutes() * 0.5)}deg)`;
    minuteHand.style.transform = `rotate(${(new Date().getMinutes() * 6) + (new Date().getSeconds() * 0.1)}deg)`;
    secondHand.style.transform = `rotate(${new Date().getSeconds() * 6}deg)`;
}


let update = setInterval(() => {
    updateTime();
}, 1000);








const modeBtn = document.querySelector('.btn-mode');
// ANALOG CLOCK TIME HANDS
const hourHand = document.querySelector('.a-hour');
const minuteHand = document.querySelector('.a-minute');
const secondHand = document.querySelector('.a-second');
// DIGITAL TIME
const hourSpan = document.querySelector('.d-hour');
const minuteSpan = document.querySelector('.d-minute');
const secondSpan = document.querySelector('.d-second');
// DATE
const dayOfWeek = document.querySelector('.day-of-week');
const dateDay = document.querySelector('.day');
const dateMonth = document.querySelector('.month');

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];


modeBtn.addEventListener('click', () => {
    document.querySelector('html').classList.toggle('dark');
});



function updateTime() {
    
    // UPDATE ANALOG HANDS
    hourHand.style.transform    = `rotate(${(new Date().getHours()   * 30) + (new Date().getMinutes() * 0.5)}deg)`;
    minuteHand.style.transform  = `rotate(${(new Date().getMinutes() * 6) +  (new Date().getSeconds() * 0.1)}deg)`;
    secondHand.style.transform  = `rotate(${ new Date().getSeconds() * 6                                    }deg)`;

    // UPDATE DIGITAL TIME
    hourSpan.innerHTML      = new Date().getHours();
    minuteSpan.innerHTML    = new Date().getMinutes();
    secondSpan.innerHTML    = new Date().getSeconds();

    // UPDATE DATE
    dayOfWeek.innerHTML     = days[ new Date().getDay() ]
    dateDay.innerHTML       = new Date().getDay()
    dateMonth.innerHTML     = months[ new Date().getMonth() ]

}

function getDeg(el) {
    return +el.style.transform.toString().split("(")[1].split('deg)')[0];
}


let update = setInterval(() => {
    updateTime();
}, 1000);







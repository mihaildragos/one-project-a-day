const inputBox = document.querySelector('#choices-input');
const choicesList = document.querySelector('.choices-list');

// variable which will keep the HTML contents
choicesList.innerHTML = ``;

// List of individual text choices
var choices = [];

// focus the textarea when page is loaded
inputBox.focus();


inputBox.addEventListener('keyup', (e) => {
  choices = inputBox.value.split(',')
                          .filter(ch => ch.trim() !== '')
                          .map(ch => ch.trim());

  let htmlContent = ``;
  choices.forEach(choice => {
    if (choice.trim() !== '') {
      htmlContent += `<div class="choice">${choice}</div>`
    }
  });

  choicesList.innerHTML = htmlContent;
});


inputBox.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    e.preventDefault();

    setTimeout(() => {
      e.target.value = '';
    }, 200);

    selectRandom();

  }
});


function selectRandom() {
  const times = 30;

  const interval = setInterval(() => {
    const randomChoice = pickRandomChoice();

    highilghtChoice(randomChoice);
    
    setTimeout(() => {
      unHighilghtChoice(randomChoice);
    }, 67);
  }, 67);

  setTimeout(() => {
    clearInterval(interval);
    highilghtChoice(pickRandomChoice());
  }, 2000);
  
}

function pickRandomChoice() {
  let randomChoices = document.querySelectorAll('.choice');
  return randomChoices[Math.floor(Math.random() * (choices.length - 1))];
}

function highilghtChoice(choice) {
  choice.classList.add('chosen');
}

function unHighilghtChoice(choice) {
  choice.classList.remove('chosen');
}
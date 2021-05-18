const goalCup = document.querySelector('.goal-cup');
const drankCups = document.querySelectorAll('.cup-drank');
const goalAccomplished = document.querySelector('.goal-accomplished');
const goalRemaining = document.querySelector('.goal-remaining');
const reset = document.querySelector('.reset');
const cupsDrankNumber = document.querySelectorAll('.cup-number');


const goalLiters = 2;
var smallCups = 0;
var mediumCups = 0;
var percentage = 0;

const updateCounter = (node) => {
    const drankFromGoal = (smallCups * 0.2) + (mediumCups * 0.25);
    percentage = 100 * drankFromGoal / goalLiters;

    // update visible values
    // ==============================================

    // if 'hide' class is present and some water was drank remove it
    if (goalAccomplished.classList.contains('hide') && drankFromGoal > 0) {
        goalAccomplished.classList.remove('hide');
    }

    if (node.children[1].classList.contains('hide')) {
        node.children[1].classList.remove('hide');
    }

    if (node.id === 'ml250') {
        node.children[1].textContent = `x${mediumCups}`;
    } else if (node.id === 'ml200') {
        node.children[1].textContent = `x${smallCups}`;
    }

    if ( percentage < 100 ) {
        goalRemaining.textContent = (goalLiters - drankFromGoal).toFixed(2)
    } else if ( percentage > 100 ) {
        goalRemaining.textContent = "You have drank more than 2";
        goalCup.children[0].children[1].classList.add('hide');
    } else if ( percentage === 100 ) {
        goalRemaining.textContent = "You have now drank 2";
        goalCup.children[0].children[1].classList.add('hide');
    }



    goalAccomplished.style.height = `${Math.floor(percentage)}%`;
    console.log(goalAccomplished.children[0].textContent);
    goalAccomplished.children[0].textContent = `${Math.floor(percentage)}%`;
}

reset.addEventListener('click', () => {
    smallCups = 0;
    mediumCups = 0;
    percentage = 0;

    goalAccomplished.style.height = 0;
    goalAccomplished.classList.add('hide');
    goalCup.children[0].children[1].classList.remove('hide');
    goalRemaining.textContent = goalLiters;
    cupsDrankNumber.forEach(cup => {
        cup.classList.add('hide');
    });
});

drankCups.forEach(cup => {
    cup.addEventListener('click', event => {
        event.preventDefault();
        
    if (percentage < 100) {
        if (event.target.id === 'ml200') {
            smallCups++;
        } else if (event.target.id === 'ml250') {
            mediumCups++;
        }
    }

        updateCounter(event.target);
    })
})

const button = document.querySelector('button');
const toastsContainer = document.querySelector('.toasts-container');
const messages = [
    {
        message: "This is some error message",
        color: '#912828',
        type: 'error',
    },
    {
        message: "This is an informational message",
        color: '#818181',
        type: 'info',
    },
    {
        message: "This is a success message",
        color: '#2f9c2b',
        type: 'success',
    },
    {
        message: "This is a validation error message",
        color: '#a5a20d',
        type: 'validation error',
    },
];

button.addEventListener('click', ev => {
    const randomNumber = Math.floor(Math.random() * 3)

    const toast = document.createElement('div');
    toast.classList.add('toast-box');
    toast.innerText = messages[randomNumber].message;
    toast.style.backgroundColor = messages[randomNumber].color;
    toastsContainer.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = 0;
    }, 3500);
    
    setTimeout(() => toast.remove(), 4000);
});

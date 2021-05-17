const inputs = document.querySelectorAll('input');
const labels = document.querySelectorAll('label');

// apply a function for each input element
inputs.forEach(input => {
    input.addEventListener('focusout', (ev) => {
        // if the input has characters inside and the parent .form-control does not contain .has-value then we add it
        if (input.value != "" && !ev.target.parentNode.classList.contains('has-value')) {
            ev.target.parentNode.classList.add('has-value');

            // else if the input is empty we remove the .has-value
        } else if (input.value.length <= 0) {
            ev.target.parentNode.classList.remove('has-value');
        }
    })
})

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay: ${idx * 50}ms;">${letter}</span>`)
        .join('')
});
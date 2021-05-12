const key = document.querySelector('#key');
const keyCode = document.querySelector('#keycode');
const code = document.querySelector('#code');

window.addEventListener('keydown', event => {
  key.innerHTML = event.key;
  keyCode.innerHTML = event.keyCode;
  code.innerHTML = event.code;
  console.log(event);
  console.log(event.keyCode);
})
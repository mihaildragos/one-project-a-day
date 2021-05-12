const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
	console.log(box.children);
	box.children[2].addEventListener('click', () => {
		box.classList.toggle('active');
	})
});

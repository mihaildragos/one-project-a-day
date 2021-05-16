const counters = document.querySelectorAll('.counter');
const values = [50000, 15000, 100000];


window.addEventListener('load', (event) => {

	// =======================================================
	// METHOD B
	// =======================================================
	counters.forEach(counter => {
		const updateCounter = () => {
			const target = +counter.getAttribute('data-target');
			const c = +counter.innerText;

			// how much to increment by
			const increment = target / 100;

			// if the text value is smaller than the target value but less than one increment away
			if (c < (target - increment)) {
				counter.innerText = `${Math.ceil(c + increment)}`;
				// using a timeout so we see it as an animation
				setTimeout(updateCounter, 1);

			// if the text value is less than one increment away but smaller than a 50th part of an increment then increment 
			} else if (c > (target - increment) && c < target && c < (target - Math.floor(increment / 50))) {
				counter.innerText = `${c + Math.floor(increment / 50)}`;
				setTimeout(updateCounter, 1);
			
			// if the text value is less than 1/50 away increment one by one
			} else if (c > (target - increment) && c < target) {
				counter.innerText = `${Math.floor(c + 1)}`;
				setTimeout(updateCounter, 1);
			}
		}
		updateCounter();
	})


	// =======================================================
	// METHOD A
	// =======================================================

	// counters.forEach((counter, idx) => {
	//   let count = 0;
	//   let interval = setInterval(() => {

	//     counter.textContent = count;
	//     count++;
	//     if (count > values[idx]) {
	//       clearInterval(interval)
	//     }
	//   }, 0);
	// })
});
const ripple = document.querySelectorAll('.ripple');


ripple.forEach(btn => {
    btn.addEventListener('click', ev => {
        const x = ev.layerX;
        const y = ev.layerY;

        const circle = ev.target.children[0];
        
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
        
        circle.classList.toggle('active');
        setTimeout(() => {
            circle.classList.toggle('active');
        }, 300);

    })
})
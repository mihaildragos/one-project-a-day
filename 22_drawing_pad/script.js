const canvas = document.querySelector('canvas');
const btnDecr = document.querySelector('#decrease');
const btnIncr = document.querySelector('#increase');
const displaySize = document.querySelector('#size');
const btnColor = document.querySelector('#color');
const btnClear = document.querySelector('#clear');
const ctx = canvas.getContext('2d');


let x, y, color, size, isPressed;

function reset() {
    color = '#000000';
    size = 10;
    isPressed = false;

    displaySize.innerHTML = size;
    btnColor.value = color;
}

function clearCanvas(){
    ctx.clearRect( 0, 0, canvas.width, canvas.height )
}

reset();

btnDecr.addEventListener('click', () => {
    size = +displaySize.innerHTML --;
})

btnIncr.addEventListener('click', () => {
    size = +displaySize.innerHTML ++;
})

btnColor.addEventListener('change', () => {
    color = btnColor.value;

})

btnClear.addEventListener('click', clearCanvas);


canvas.addEventListener('mousedown', e => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
});


canvas.addEventListener('mouseup', e => {
    isPressed = false;
    
    x = undefined;
    y = undefined;
});

canvas.addEventListener('mousemove', e => {
    if ( isPressed ) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawLine( x, y, x2, y2 );
        drawCircle( x, y );

        x = x2;
        y = y2;
    }
});


function drawLine( x1, y1, x2, y2 ) {
    ctx.beginPath();
    ctx.moveTo( x1, y1 );
    ctx.lineTo( x2, y2 );
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc( x, y, size, 0, Math.PI * 2 );
    ctx.fillStyle = color;
    ctx.fill();

}

let canvas = document.getElementById('myCanvas');
let context = canvas.getContext('2d');
let centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 30;


function updateCirclePosition(mousePositionX, mousePositionY, radius) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(mousePositionX, mousePositionY, radius, 0, 2 * Math.PI, false);
    context.lineWidth = 1;
    context.stroke();
}

canvas.addEventListener('mousemove',(e) => {
    let mousePositionX = e.clientX;
    let mousePositionY = e.clientY;

    updateCirclePosition(mousePositionX, mousePositionY, radius)
})
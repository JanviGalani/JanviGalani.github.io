const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 30;


function updateCirclePosition(firstCircleMousePositionX, firstCircleMousePositionY, secondCircleMousePositionX, thirdCircleMousePositionY, radius) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    createLine()
    context.beginPath();
    context.arc(firstCircleMousePositionX, firstCircleMousePositionY, radius, 0, 2 * Math.PI, false);

    context.moveTo(secondCircleMousePositionX+radius, firstCircleMousePositionY);
    context.arc(secondCircleMousePositionX, firstCircleMousePositionY, radius, 0, 2 * Math.PI, false);
    
    context.moveTo(firstCircleMousePositionX+radius, thirdCircleMousePositionY);
    context.arc(firstCircleMousePositionX, thirdCircleMousePositionY, radius, 0, 2 * Math.PI, false);
    
    context.moveTo(secondCircleMousePositionX+radius, thirdCircleMousePositionY);
    context.arc(secondCircleMousePositionX, thirdCircleMousePositionY, radius, 0, 2 * Math.PI, false);
    
    context.lineWidth = 1;
    context.stroke();
}

function createLine() {
    context.beginPath();
    context.moveTo(centerX, 0);
    context.lineTo(centerX, canvas.height);
    context.moveTo(0, centerY)
    context.lineTo(canvas.width, centerY);
    context.stroke();
}

createLine();

canvas.addEventListener('mousemove',(e) => {
    let firstCircleMousePositionX = e.clientX;
    let firstCircleMousePositionY = e.clientY;

    let secondCircleMousePositionX = canvas.width - e.clientX;

    let thirdCircleMousePositionY =  canvas.height - e.clientY;

    console.log(secondCircleMousePositionX);

    updateCirclePosition(firstCircleMousePositionX, firstCircleMousePositionY, secondCircleMousePositionX, thirdCircleMousePositionY, radius)
})
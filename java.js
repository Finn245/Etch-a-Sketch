const flexContainer = document.querySelector(".flex-container");
const size = document.getElementById('size');
const sizeValue = document.getElementById('sizevalue');
const colorButton = document.querySelector('.colorMode');
let isDrawing = false;
let selectedColor = 'black';

size.addEventListener('input', () => {
    sizeValue.innerHTML = `${size.value}*${size.value}`;
    flexContainer.innerHTML = '';
    flexContainer.style.backgroundColor = 'white';

    for (let i = 0; i < size.value; i++) {
        const row = document.createElement('div');
        row.classList.add("row");

        for (let j = 0; j < size.value; j++) {
            const box = document.createElement('div');
            box.classList.add('box');
            row.append(box);
        }

        flexContainer.append(row);
    }

    // Add event listener for the entire grid
    flexContainer.addEventListener('mousedown', handleBoxMouseDown);
    flexContainer.addEventListener('mousemove', handleBoxMouseMove);
    flexContainer.addEventListener('mouseup', handleBoxMouseUp);
    flexContainer.addEventListener('mouseleave', handleBoxMouseLeave);
});

function handleBoxMouseDown(event) {
    const box = event.target;

    if (box.classList.contains('box')) {
        isDrawing = true;
        box.style.backgroundColor = selectedColor;
    }
}

function handleBoxMouseMove(event) {
    const box = event.target;

    if (isDrawing && box.classList.contains('box')) {
        box.style.backgroundColor = selectedColor;
    }
}

function handleBoxMouseUp() {
    isDrawing = false;
}

function handleBoxMouseLeave() {
    isDrawing = false;
}

const colorInput = document.querySelector(".colorPanel");
colorInput.addEventListener('input', (event) => {
    selectedColor = event.target.value;
});

function clear() {
    flexContainer.querySelectorAll('.box').forEach(box => {
        box.style.backgroundColor = 'white';
    });
}

function rainbowColor() {
    const rainbowColors = ['red', 'yellow', 'blue', 'green', 'black', 'purple'];
    const randomColor = Math.floor(Math.random() * rainbowColors.length);
    return rainbowColors[randomColor];
}

function rainbowDraw() {
    flexContainer.addEventListener('mousedown', (event) => {
        const box = event.target;

        if (box.classList.contains('box')) {
            isDrawing = true;
            box.style.backgroundColor = rainbowColor();
        }
    });

    flexContainer.addEventListener('mousemove', (event) => {
        const box = event.target;

        if (isDrawing && box.classList.contains('box')) {
            box.style.backgroundColor = rainbowColor();
        }
    });

    flexContainer.addEventListener('mouseup', () => {
        isDrawing = false;
    });

    flexContainer.addEventListener('mouseleave', () => {
        isDrawing = false;
    });
}

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clear);

const rainbowButton = document.querySelector(".rainbow");
rainbowButton.addEventListener('click', rainbowDraw);
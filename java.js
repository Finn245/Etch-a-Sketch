const flexContainer = document.querySelector(".flex-container");
let isDrawing = false;

const size = document.getElementById('size');
const sizeValue = document.getElementById('sizevalue');

size.addEventListener('input', () => {
    sizeValue.textContent = `${size.value}*${size.value}`;
    
    // Clear the existing grid
    flexContainer.innerHTML = '';

    // Create the new grid based on the updated size
    for (let i = 0; i < size.value * size.value; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item'); // Add a class for styling

        div.addEventListener('mousedown', () => {
            isDrawing = true;
            div.style.backgroundColor = "blue";
        });

        div.addEventListener('mousemove', (event) => {
            if (isDrawing) {
                event.target.style.backgroundColor = "blue";
            }
        });

        div.addEventListener('mouseup', () => {
            isDrawing = false;
        });

        // Reset drawing on mouse leaving the individual div
        flexContainer.addEventListener('mouseleave', () => {
            isDrawing = false;
        });

        flexContainer.append(div);
    }
});

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
            Drawing(box);

            colorButton.addEventListener('click',()=>{
                Drawing(box);
            })

            clear(box);
            rainbowDraw(box);
        }
        flexContainer.append(row);
    }
});

function Drawing(box) {
    
    

        box.addEventListener('mousedown', () => {
        
            isDrawing = true;
            box.style.backgroundColor = selectedColor;
       
    });

    box.addEventListener('mousemove', () => {
        if (isDrawing) {
            box.style.backgroundColor = selectedColor;
        }
    });

    box.addEventListener('mouseup', () => {
        isDrawing = false;
    });

    flexContainer.addEventListener('mouseleave', () => {
        isDrawing = false;
        
    });

    
   
}

const colorInput = document.querySelector(".colorPanel");
colorInput.addEventListener('input', (event) => {
    selectedColor = event.target.value;
});


function clear(box){
    const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    box.style.backgroundColor = 'white';
});

}
function rainbowColor(){
    const rainbowColors=['red','yellow','blue','green','black','purple'];
    const randomColor = Math.floor(Math.random() * rainbowColors.length);
    return rainbowColors[randomColor];
}

function rainbowDraw(box){
    rainbowButton=document.querySelector(".rainbow");
    rainbowButton.addEventListener('click',()=>{
        
        box.addEventListener('mousedown',()=>{
            isDrawing=true;
            box.style.backgroundColor=rainbowColor();
        })
        box.addEventListener('mousemove', () => {
            if (isDrawing) {
                box.style.backgroundColor = rainbowColor();
            }
        });
        box.addEventListener('mouseup',()=>{
            isDrawing=false;
        })
        flexContainer.addEventListener('mouseleave',()=>{
            isDrawing=false;
        })
    })
}

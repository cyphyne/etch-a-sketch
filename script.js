const container = document.querySelector(".container");
const pencilBtn = document.getElementById("pencil");
const eraserBtn = document.getElementById("eraser");
const fillBtn = document.getElementById("fill");
const undoBtn = document.getElementById("undo");
const redoBtn = document.getElementById("redo");
const clearBtn = document.getElementById("clear");
const gridDisplayBtn = document.getElementById("grid-display");
const colorPicker = document.getElementById("color-picker");
const gridSlider = document.getElementById("grid-slider");
const sliderOutput = document.getElementById("size-value");
const opacitySlider = document.getElementById("opacity-slider");
const opacityOutput = document.getElementById("opacity-text");
 
let currentColor = "black";
 
 
// Slider and Opacity Value
sliderOutput.innerHTML = `${gridSlider.value} x ${gridSlider.value}`;
 
gridSlider.oninput = function() {
    sliderOutput.innerHTML = `${this.value} x ${this.value}`;
};
 
opacityOutput.innerHTML = `Grid Opacity: ${opacitySlider.value}`;
 
opacitySlider.oninput = function() {
    opacityOutput.innerHTML = `Grid Opacity: ${this.value}`;
}
 
 
// Grid Setup
const createGrid = (size) => {
    let gridTotal = size ** 2;
     container.style.gridTemplateColumns =  `repeat(${size}, 1fr)`;
     container.style.gridTemplateRows =  `repeat(${size}, 1fr)`;
     
    for (let i = 0; i < gridTotal; i++) {
        let square = document.createElement("div");
        square.addEventListener("mouseover", drawGrid);
        square.style.backgroundColor = "white";
        container.insertAdjacentElement("beforeend", square);
     };
};
 
createGrid(16);
 
const changeGrid = (input) => {
     createGrid(input);
};
 
 
// Draw Function
 
const pickColor = (value) => {
    currentColor = value;
};
 
pickColor(value);
 
function drawGrid() {
    this.style.backgroundColor = currentColor;
};


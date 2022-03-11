const container = document.querySelector(".container");
const pencilBtn = document.getElementById("pencil");
const eraserBtn = document.getElementById("eraser");
const fillBtn = document.getElementById("fill");
const eye_dropBtn = document.getElementById("eye-drop");
const undoBtn = document.getElementById("undo");
const redoBtn = document.getElementById("redo");
const clearBtn = document.getElementById("clear");
const gridDisplayBtn = document.getElementById("grid-display");
 

const createGrid = (size) => {
    let gridTotal = size ** 2;
    
    container.style.gridTemplateColumns =  `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows =  `repeat(${size}, 1fr)`;
    
    
    for (let i = 0; i < gridTotal; i++) {
         let square = document.createElement("div");
         square.style.backgroundColor = "white";
         container.insertAdjacentElement("beforeend", square);
        };
   };

createGrid(16);


const DEFAULT_SIZE = 16;
let colorMode = "default";

// function to build grid
const container = document.getElementById("canvas");

function makeGrid(x) {
    container.style.setProperty('--grid-rows', x);
    container.style.setProperty('--grid-cols', x);
    for (c = 0; c < (x * x); c++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "grid-item";
      cell.addEventListener("mouseover", changeColor);
    };
  };

// display value and grid based of the user input
const value = document.querySelector("#value");
const input = document.querySelector("#pi_input");
const rangeInput = input.value;

value.textContent = rangeInput;

input.addEventListener("input", (event) => {
  value.textContent = `${event.target.value} x ${event.target.value}`;

  while (container.firstChild) {
    container.removeChild(container.lastChild)
  };

  makeGrid(input.value);

});


// setting up color mode
const randomColorBtn = document.querySelector(".color");
const eraserBtn = document.querySelector(".eraser");
const defaultColorBtn = document.querySelector(".default");
const resetBtn = document.querySelector(".reset");

randomColorBtn.addEventListener("click", () => {
    colorMode = "color";
    console.log("color button was clicked");
});

eraserBtn.addEventListener("click", () => {
    colorMode = "eraser";
    console.log("erase button was clicked");
});

defaultColorBtn.addEventListener("click", () => {
    colorMode = "default";
    console.log("default color button was clicked");
});

resetBtn.addEventListener("click", () => {
    container.innerHTML = "";
    makeGrid(input.value);
    console.log("reset button was clicked");
});

// setting up hovering 
function changeColor(e) {
    if (colorMode === "color") {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }

    if (colorMode === "default") {
        e.target.style.backgroundColor = "#252323";
    }

    if (colorMode === "eraser") {
        e.target.style.backgroundColor = "#f5f1ed";
    }
};


window.onload = () => {
    makeGrid(DEFAULT_SIZE);
};





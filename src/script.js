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

makeGrid(16);

// display value and grid based of the user input
const value = document.querySelector("#value");
const input = document.querySelector("#pi_input");
const rangeInput = input.value;

value.textContent = rangeInput;

input.addEventListener("input", (event) => {
  value.textContent = `${event.target.value} x ${event.target.value}`;

  while (container.firstChild) {
    container.removeChild(container.lastChild);
};

  makeGrid(input.value);

});

// setting up hovering 

function changeColor(e) {
    e.target.style.backgroundColor = "black";
}




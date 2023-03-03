// function to build grid

const container = document.getElementById("canvas");

function makeGrid(x) {
    container.style.setProperty('--grid-rows', x);
    container.style.setProperty('--grid-cols', x);
    for (c = 0; c < (x * x); c++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "grid-item";
    };
  };

makeGrid(16);

const value = document.querySelector("#value")
const input = document.querySelector("#pi_input")
value.textContent = input.value
input.addEventListener("input", (event) => {
  value.textContent = event.target.value
});

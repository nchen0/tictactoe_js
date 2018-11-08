let count = 0;
let arr = ["", "", "", "", "", "", "", "", ""];
let cells = document.querySelectorAll(".grid");
cells.forEach(cell => {
  cell.addEventListener("click", () => {
    if (count % 2 === 0) {
      //arr[Number(cell.getAttribute("dataset"))] = "x";
      //console.log(arr[Number(cell.getAttribute("dataset"))]);
      if (arr[Number(cell.textContent)] === "") {
        cell.textContent = "x";
      }
    } else {
      if (arr[Number(cell.textContent)] === "") {
        cell.textContent = "o";
      }
    }
    count++;
    determineWinner();
  });
});
function determineWinner() {
  console.log("determineWinner called!");
  let winningCombination = [
    ["0", "1", "2"],
    ["3", "4", "5"],
    ["6", "7", "8"],
    ["0", "3", "6"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["0", "4", "8"],
    ["3", "4", "7"]
  ];
  winningCombination.forEach(combination => {
    console.log("cell[0] is: ", cells[0].textContent);
    if (
      cells[Number(combination[0])].textContent === "x" &&
      cells[Number(combination[1])].textContent === "x" &&
      cells[Number(combination[2])].textContent === "x"
    ) {
      alert("You won!");
    }
  });
}

console.log("arr is: ", arr);

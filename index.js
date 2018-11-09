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
    setTimeout(() => {
      determineWinner();
    }, 300);
  });
});

function determineWinner() {
  console.log("arr is: ", arr);
  let displayWinner = document.querySelector(".win-message");
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
  function checkTie(element) {
    return element === "o" || element === "x";
  }
  console.log("every array is checked: ", arr.every(checkTie));
  if (arr.every(checkTie)) {
    alert("done!");
  }
  winningCombination.forEach(combination => {
    if (
      cells[Number(combination[0])].textContent === "x" &&
      cells[Number(combination[1])].textContent === "x" &&
      cells[Number(combination[2])].textContent === "x"
    ) {
      displayWinner.style.display = "block";
      displayWinner.style.color = "blue";
    } else if (
      cells[Number(combination[0])].textContent === "o" &&
      cells[Number(combination[1])].textContent === "o" &&
      cells[Number(combination[2])].textContent === "o"
    ) {
      displayWinner.style.display = "block";
      displayWinner.style.color = "red";
      displayWinner.textContent = "Player 2 Wins!";
    }
  });
}

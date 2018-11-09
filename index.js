let arr = ["", "", "", "", "", "", "", "", ""];
let cells = document.querySelectorAll(".grid");
let board = document.querySelector(".board");
let displayWinner = document.querySelector(".win-message");
board.addEventListener("click", playGame());

function playGame() {
  let newGameButton = document.querySelector(".newButton");
  let count = 0;
  cells.forEach(cell => {
    cell.addEventListener("click", () => {
      if (
        displayWinner.textContent !== "Player 1 Wins!" &&
        displayWinner.textContent !== "Player 2 Wins!"
      ) {
        if (count % 2 === 0) {
          //arr[Number(cell.getAttribute("dataset"))] = "x";
          //console.log(arr[Number(cell.getAttribute("dataset"))]);
          if (arr[Number(cell.getAttribute("dataset"))] === "") {
            arr[Number(cell.getAttribute("dataset"))] = "x";
            cell.textContent = "x";
          }
        } else {
          if (arr[Number(cell.getAttribute("dataset"))] === "") {
            arr[Number(cell.getAttribute("dataset"))] = "o";
            cell.textContent = "o";
          }
        }
        count++;
        setTimeout(() => {
          determineWinner();
        }, 150);
      }
    });
  });
  newGameButton.addEventListener("click", () => {
    cells.forEach(cell => {
      cell.textContent = "";
    });
    displayWinner.textContent = "nothing";
    displayWinner.style.visibility = "hidden";
    arr = ["", "", "", "", "", "", "", "", ""];
    count = 0;
  });
}

function determineWinner() {
  let winningCombination = [
    ["0", "1", "2"],
    ["3", "4", "5"],
    ["6", "7", "8"],
    ["0", "3", "6"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["0", "4", "8"],
    ["2", "4", "6"]
  ];

  winningCombination.forEach(combination => {
    if (
      cells[Number(combination[0])].textContent === "x" &&
      cells[Number(combination[1])].textContent === "x" &&
      cells[Number(combination[2])].textContent === "x"
    ) {
      displayWinner.style.visibility = "visible";
      displayWinner.style.color = "blue";
      displayWinner.textContent = "Player 1 Wins!";
    } else if (
      cells[Number(combination[0])].textContent === "o" &&
      cells[Number(combination[1])].textContent === "o" &&
      cells[Number(combination[2])].textContent === "o"
    ) {
      displayWinner.style.visibility = "visible";
      displayWinner.style.color = "red";
      displayWinner.textContent = "Player 2 Wins!";
    }
  });
  if (
    displayWinner.textContent !== "Player 1 Wins!" &&
    displayWinner.textContent !== "Player 2 Wins!"
  ) {
    if (arr.every(checkTie)) {
      displayWinner.style.visibility = "visible";
      displayWinner.style.color = "green";
      displayWinner.textContent = "Tie! Play again?";
    }
  }
}

function checkTie(element) {
  return element === "o" || element === "x";
}

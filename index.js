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
  });
});

console.log("arr is: ", arr);

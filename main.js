const dashboard = document.querySelector(".dashboard");
const allBox = document.querySelectorAll(".boxs div");
let turn = "X";
allBox.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn == "X" && box.innerHTML == "") {
      dashboard.innerHTML = "O";
      box.innerHTML = "X";
      turn = "O";
    } else if (turn == "O" && box.innerHTML == "") {
      dashboard.innerHTML = "X";
      box.innerHTML = "O";
      turn = "X";
    }
    checkX();
    checkO();
  });
});
function checkX() {
  if (
    allBox[0].innerHTML == "X" &&
    allBox[1].innerHTML == "X" &&
    allBox[2].innerHTML == "X"
  ) {
    winnerX(0, 1, 2);
  } else if (
    allBox[2].innerHTML == "X" &&
    allBox[5].innerHTML == "X" &&
    allBox[8].innerHTML == "X"
  ) {
    winnerX(2, 5, 8);
  } else if (
    allBox[8].innerHTML == "X" &&
    allBox[7].innerHTML == "X" &&
    allBox[6].innerHTML == "X"
  ) {
    winnerX(8, 7, 6);
  } else if (
    allBox[6].innerHTML == "X" &&
    allBox[3].innerHTML == "X" &&
    allBox[0].innerHTML == "X"
  ) {
    winnerX(6, 3, 0);
  } else if (
    allBox[2].innerHTML == "X" &&
    allBox[4].innerHTML == "X" &&
    allBox[6].innerHTML == "X"
  ) {
    winnerX(2, 4, 6);
  } else if (
    allBox[0].innerHTML == "X" &&
    allBox[4].innerHTML == "X" &&
    allBox[8].innerHTML == "X"
  ) {
    winnerX(0, 4, 8);
  } else if (
    allBox[3].innerHTML == "X" &&
    allBox[4].innerHTML == "X" &&
    allBox[5].innerHTML == "X"
  ) {
    winnerX(3, 4, 5);
  } else if (
    allBox[6].innerHTML == "X" &&
    allBox[7].innerHTML == "X" &&
    allBox[8].innerHTML == "X"
  ) {
    winnerX(6, 7, 8);
  } else if (
    allBox[1].innerHTML == "X" &&
    allBox[4].innerHTML == "X" &&
    allBox[7].innerHTML == "X"
  ) {
    winnerX(1, 4, 7);
  }
}
function checkO() {
  if (
    allBox[0].innerHTML == "O" &&
    allBox[1].innerHTML == "O" &&
    allBox[2].innerHTML == "O"
  ) {
    winnerO(0, 1, 2);
  } else if (
    allBox[2].innerHTML == "O" &&
    allBox[5].innerHTML == "O" &&
    allBox[8].innerHTML == "O"
  ) {
    winnerO(2, 5, 8);
  } else if (
    allBox[8].innerHTML == "O" &&
    allBox[7].innerHTML == "O" &&
    allBox[6].innerHTML == "O"
  ) {
    winnerO(8, 7, 6);
  } else if (
    allBox[6].innerHTML == "O" &&
    allBox[3].innerHTML == "O" &&
    allBox[0].innerHTML == "O"
  ) {
    winnerO(6, 3, 0);
  } else if (
    allBox[2].innerHTML == "O" &&
    allBox[4].innerHTML == "O" &&
    allBox[6].innerHTML == "O"
  ) {
    winnerO(2, 4, 6);
  } else if (
    allBox[0].innerHTML == "O" &&
    allBox[4].innerHTML == "O" &&
    allBox[8].innerHTML == "O"
  ) {
    winnerO(0, 4, 8);
  } else if (
    allBox[3].innerHTML == "O" &&
    allBox[4].innerHTML == "O" &&
    allBox[5].innerHTML == "O"
  ) {
    winnerO(3, 4, 5);
  } else if (
    allBox[6].innerHTML == "O" &&
    allBox[7].innerHTML == "O" &&
    allBox[8].innerHTML == "O"
  ) {
    winnerO(6, 7, 8);
  } else if (
    allBox[1].innerHTML == "O" &&
    allBox[4].innerHTML == "O" &&
    allBox[7].innerHTML == "O"
  ) {
    winnerO(1, 4, 7);
  }
}

function winnerX(num1, num2, num3) {
  allBox[num1].style.backgroundColor = "black";
  allBox[num2].style.backgroundColor = "black";
  allBox[num3].style.backgroundColor = "black";
  dashboard.innerHTML = "X Is Winner";
  let dot = setInterval(function () {
    dashboard.innerHTML += ".";
  }, 500);
  setTimeout(() => {
    clearInterval(dot);
    dashboard.innerHTML = `<span>X O</span> GAME`;
    allBox.forEach((box) => {
      box.innerHTML = "";
      turn = "X";
    });
    allBox[num1].style.backgroundColor = "rgb(229, 18, 88)";
    allBox[num2].style.backgroundColor = "rgb(229, 18, 88)";
    allBox[num3].style.backgroundColor = "rgb(229, 18, 88)";
  }, 2000);
}
function winnerO(num1, num2, num3) {
  allBox[num1].style.backgroundColor = "black";
  allBox[num2].style.backgroundColor = "black";
  allBox[num3].style.backgroundColor = "black";
  dashboard.innerHTML = "O Is Winner";
  let dot = setInterval(function () {
    dashboard.innerHTML += ".";
  }, 500);
  setTimeout(() => {
    clearInterval(dot);
    dashboard.innerHTML = `<span>X O</span> GAME`;
    allBox.forEach((box) => {
      box.innerHTML = "";
      turn = "X";
    });
    allBox[num1].style.backgroundColor = "rgb(229, 18, 88)";
    allBox[num2].style.backgroundColor = "rgb(229, 18, 88)";
    allBox[num3].style.backgroundColor = "rgb(229, 18, 88)";
  }, 2000);
}

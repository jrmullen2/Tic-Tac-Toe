const players = (name, mark) => {
  this.name = name;
  this.mark = mark;
  return { name, mark };
};
const facilitator = (() => {
  let input1 = "";
  let input2 = "";
  let turn = 0;
  let displayIndex = 0;
  const boardArray = [];
  const startButton = document.getElementById("start");
  const boardSpots = document.querySelectorAll(".board");
  //Get user names
  startButton.addEventListener("click", () => {
    while (input1 === "" || input2 === "") {
      input1 = prompt("What is the name of player 1?");
      input2 = prompt("What is the name of player 2?");
    }
  });
  //sets id for each div
  boardSpots.forEach((div) => {
    div.setAttribute("id", displayIndex.toString());
    displayIndex += 1;
  });
  const player1 = players(input1, "X");
  const player2 = players(input2, "O");
  //Determines which players turn it is
  startButton.addEventListener("click", () => {
    turn = 1;
    startButton.disabled = true;
  });
  boardSpots.forEach((div) => {
    div.addEventListener("click", () => {
      if (!div.textContent) {
        if (turn === 1) {
          turn = 2;
        } else if (turn === 2) {
          turn = 1;
        }
      }
    });
  });
  //Adds players mark depending on whose turn it is
  boardSpots.forEach((div) => {
    div.addEventListener("click", () => {
      if (turn === 0) {
        alert("Please click the start button to begin the game.");
      } else if (turn === 1 && !div.textContent) {
        div.textContent = player1.mark;
        boardArray[parseInt(div.getAttribute("id"))] = player1.mark;
      } else if (turn === 2 && !div.textContent) {
        div.textContent = player2.mark;
        boardArray[parseInt(div.getAttribute("id"))] = player2.mark;
      }
    });
  });
  //Determines winner of game
  boardSpots.forEach((div) => {
    div.addEventListener("click", () => {
      if (startButton.disabled === true) {
        if (
          boardArray[0] === boardArray[1] &&
          boardArray[0] === boardArray[2]
        ) {
          if (boardArray[0] === "X" && div.textContent) {
            alert(`Congratulations! ${player1.name} has won!`);
          } else {
            alert(`Congratulations! ${player2.name} has won!`);
          }
        } else if (
          boardArray[0] === boardArray[3] &&
          boardArray[0] === boardArray[6]
        ) {
          if (boardArray[0] === "X") {
            alert(`Congratulations! ${player1.name} has won!`);
          } else {
            alert(`Congratulations! ${player2.name} has won!`);
          }
        } else if (
          boardArray[0] === boardArray[4] &&
          boardArray[0] === boardArray[8]
        ) {
          if (boardArray[0] === "X") {
            alert(`Congratulations! ${player1.name} has won!`);
          } else {
            alert(`Congratulations! ${player2.name} has won!`);
          }
        } else if (
          boardArray[0] === boardArray[4] &&
          boardArray[0] === boardArray[8]
        ) {
          if (boardArray[0] === "X") {
            alert(`Congratulations! ${player1.name} has won!`);
          } else {
            alert(`Congratulations! ${player2.name} has won!`);
          }
        } else if (
          boardArray[2] === boardArray[4] &&
          boardArray[2] === boardArray[6]
        ) {
          if (boardArray[2] === "X") {
            alert(`Congratulations! ${player1.name} has won!`);
          } else {
            alert(`Congratulations! ${player2.name} has won!`);
          }
        } else if (
          boardArray[2] === boardArray[5] &&
          boardArray[2] === boardArray[8]
        ) {
          if (boardArray[2] === "X") {
            alert(`Congratulations! ${player1.name} has won!`);
          } else {
            alert(`Congratulations! ${player2.name} has won!`);
          }
        } else if (
          boardArray[1] === boardArray[4] &&
          boardArray[2] === boardArray[7]
        ) {
          if (boardArray[1] === "X") {
            alert(`Congratulations! ${player1.name} has won!`);
          } else {
            alert(`Congratulations! ${player2.name} has won!`);
          }
        }
      }
    });
  });
})();

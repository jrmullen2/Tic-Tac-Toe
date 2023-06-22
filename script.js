const gameBoard = (() => {
  const startButton = document.getElementById("start");
  const boardSpots = document.querySelectorAll(".board");
  const boardArray = [];
  const displayBoard = () => {
    let displayIndex = 0;
    boardSpots.forEach((div) => {
      div.textContent = boardArray[index];
      displayIndex += 1;
    });
  };

  displayBoard();
  return;
})();
const displayController = (() => {
  let input1 = "";
  let input2 = "";
  const startButton = document / getElementById("start");
  startButton.addEventListener("click", () => {
    while (input1 === "" || input2 === "") {
      input1 = prompt("What is the name of player 1?");
      input2 = prompt("What is the name of player 2?");
    }
  });
  const player1 = players(input1, "X");
  const player2 = players(input2, "O");
  const playerTurn = () => {
    //When someone has clicked on a div and it has nothing in it turn changes
    let turn = 0;
    startButton.addEventListener("click", () => {
      turn = 1;
      startButton.disabled = true;
    });
    const boardSpots = document.querySelectorAll(".board");
    boardSpots.forEach((div) => {
      div.addEventListener("click", () => {
        if (div.textContent === undefined) {
          if (turn === 1) {
            turn = 2;
          } else if (turn === 2) {
            turn = 1;
          }
        }
      });
    });
    return turn;
  };
  const addMark = () => {
    let currentTurn = playerTurn();
    const boardSpots = document.querySelectorAll(".board");
    boardSpots.forEach((div) => {
      div.addEventListener("click", () => {
        if (currentTurn === 0) {
          alert("Please click the start button to begin the game.");
        } else if (currentTurn === 1 && div.textContent === undefined) {
          div.textContent = player1.mark;
        } else if (currentTurn === 2 && div.textContent === undefined) {
          div.textContent = player2.mark;
        }
      });
    });
  };
})();
const players = (name, mark) => {
  this.name = name;
  this.mark = mark;
  return { name, mark };
};
const ticTacToe = gameBoard();

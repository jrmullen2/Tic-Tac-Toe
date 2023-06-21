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
  const playerTurn = () => {
    //Wehn someone has clicked on a div and it has nothing in it turn changes
    let turn = 0;
    let currentMark = "";
    startButton.addEventListener("click", () => {
      turn = 1;
    });
    //Toggles players mark
    const playerMark = () => {
      if (turn === 1) {
        currentMark = player1.mark;
      } else if (turn === 2) {
        currentMark = player2.mark;
      }
    };
  };
  const addMark = () => {
    boardSpots.forEach((div) => {
      div.addEventListener("click", () => {
        if (div.textContent === undefined) boardArray.push(player.mark);
      });
    });
  };
  displayBoard();
  return;
})();
const displayController = (() => {})();
const players = (name, mark) => {
  this.name = name;
  this.mark = mark;
  return { name, mark };
};
const ticTacToe = gameBoard();

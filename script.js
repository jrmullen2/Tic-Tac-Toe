const players = (name, mark) => {
  this.name = name;
  this.mark = mark;
  return { name, mark };
};
const facilitator = (() => {
  let input1 = "";
  let input2 = "";
  let turn = 0;
  let divNumber = 0;
  let player1;
  let player2;
  const boardArray = [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ];
  const startButton = document.getElementById("start");
  const boardSpots = document.querySelectorAll(".board");
  const restartButton = document.getElementById("restart");
  const nameDisplay1 = document.getElementById("player1Name");
  const nameDisplay2 = document.getElementById("player2Name");
  const player1Winner = document.getElementById("player1Winner");
  const player2Winner = document.getElementById("player2Winner");
  restartButton.disabled = true;
  restartButton.addEventListener("click", () => {
    if (startButton.disabled === true) {
      boardSpots.forEach((div) => {
        div.textContent = undefined;
      });
      for (let i = 0; i < boardArray.length; i++) {
        boardArray[i] = undefined;
      }
      nameDisplay1.textContent = "P1:";
      nameDisplay2.textContent = "P2:";
      player1Winner.textContent = "";
      player2Winner.textContent = "";
      startButton.disabled = false;
      restartButton.disabled = true;
    }
  });
  startButton.addEventListener("click", () => {
    //Get user names
    while (input1 === "" || input2 === "") {
      input1 = prompt("What is the name of player 1?");
      player1 = players(input1, "X");
      input2 = prompt("What is the name of player 2?");
      player2 = players(input2, "O");
    }
    //fix here
    nameDisplay1.textContent = `P1: ${player1.name}`;
    nameDisplay2.textContent = `P2: ${player2.name}`;
    turn = 1;
    //button can only be clicked once
    startButton.disabled = true;
    restartButton.disabled = false;
  });
  boardSpots.forEach((div) => {
    let currentDiv = document.getElementById(divNumber.toString());
    let divId = currentDiv.id;
    divNumber += 1;
    div.addEventListener("click", () => {
      whichTurn(div);
      addMark(div, divId);
      let gameOver = isFinished();
      let tie = isTie();
      if (gameOver === true) {
        let victor = gameWinner(div);
        setTimeout(function () {
          alertWinner(victor);
        }, 200);
        player1Winner.textContent = `${victor} won the game!!!`;
        player2Winner.textContent = `${victor} won the game!!!`;
      } else if (tie === true) {
        setTimeout(function () {
          alertTie();
        }, 200);
        player1Winner.textContent = "It's a tie!!!";
        player2Winner.textContent = "It's a tie!!!";
      }
    });
  });
  function whichTurn(div) {
    if (!div.textContent) {
      if (turn === 1) {
        turn = 2;
      } else if (turn === 2) {
        turn = 1;
      }
    }
  }
  function addMark(div, divId) {
    if (isFinished() === false) {
      if (turn === 0) {
        alert("Please click the start button to begin the game.");
      } else if (turn === 1 && !div.textContent) {
        div.textContent = player1.mark;
        boardArray[divId] = div.textContent;
      } else if (turn === 2 && !div.textContent) {
        div.textContent = player2.mark;
        boardArray[divId] = div.textContent;
      }
    }
    return;
  }
  function isFinished() {
    //checking if current situation is a winning situation
    let gameWon = false;
    if (startButton.disabled === true) {
      if (
        boardArray[0] === boardArray[1] &&
        boardArray[0] === boardArray[2] &&
        boardArray[0] !== undefined
      ) {
        gameWon = true;
      } else if (
        boardArray[0] === boardArray[3] &&
        boardArray[0] === boardArray[6] &&
        boardArray[0] !== undefined
      ) {
        gameWon = true;
      } else if (
        boardArray[0] === boardArray[4] &&
        boardArray[0] === boardArray[8] &&
        boardArray[0] !== undefined
      ) {
        gameWon = true;
      } else if (
        boardArray[1] === boardArray[4] &&
        boardArray[1] === boardArray[7] &&
        boardArray[1] !== undefined
      ) {
        gameWon = true;
      } else if (
        boardArray[2] === boardArray[4] &&
        boardArray[2] === boardArray[6] &&
        boardArray[2] != undefined
      ) {
        gameWon = true;
      } else if (
        boardArray[2] === boardArray[5] &&
        boardArray[2] === boardArray[8] &&
        boardArray[2] !== undefined
      ) {
        gameWon = true;
      } else if (
        boardArray[6] === boardArray[7] &&
        boardArray[6] === boardArray[8] &&
        boardArray[6] !== undefined
      ) {
        gameWon = true;
      } else if (
        boardArray[3] === boardArray[4] &&
        boardArray[3] === boardArray[5] &&
        boardArray[3] !== undefined
      ) {
        gameWon = true;
      }
    }
    console.log(boardArray);
    return gameWon;
  }
  function isTie() {
    let tied = false;
    if (isFinished() === false) {
      for (let j = 0; j < boardArray.length; j++) {
        if (boardArray[j] === undefined) {
          return tied;
        }
      }
      tied = true;
    }
    return tied;
  }
  function gameWinner(div) {
    let winner = "";
    if (
      startButton.disabled === true &&
      div.textContent != undefined &&
      isFinished() === true
    ) {
      if (div.textContent === "X") {
        winner = player1.name;
      } else if ((boardArray[0] = "O")) {
        winner = player2.name;
      }
      return winner;
    }
  }
  function alertWinner(winner) {
    alert(
      `Congratulations! ${winner} has won! Please click the restart button to start another game.`
    );
  }
  function alertTie() {
    alert("It's a tie! Click the restart button to play again.");
  }
})();

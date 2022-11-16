var ticTacToe = new Game();
// -------> query selectors <-------
var players1Scores = document.querySelector(".player1score");
var players2Scores = document.querySelector(".player2score");
var playerBanner = document.querySelector(".player-banner");
var announceBanner = document.querySelector(".its-your-turn");
var gridContainer = document.querySelector(".grid-container");
var boxes = document.querySelectorAll(".box");
boxes = Array.from(boxes);
// -------> event listeners <-------
window.addEventListener("load", renderPage);
gridContainer.addEventListener("click", function (event) {
  renderTurn(event);
  disableBox(event);
});

boxes.forEach(function (box) {
  box.addEventListener("click", function () {
    for (var i = 0; i < boxes.length; i++) {
      if (box.innerText === "") {
        box.innerText = `${ticTacToe.currentTurn}`;
        ticTacToe.turns += 1;
      }
      if (box.innerText === "X" || box.innerText === "O") {
        ticTacToe.turns += 0;
      }
    }
  });
});

// -------> functions <-------

function renderPage() {
  playerBanner.innerHTML = `PLAYER ${ticTacToe.currentTurn}`;
  announceBanner.innerHTML = "YOUR TURN!";
  players2Scores.innerHTML = ticTacToe.player2.wins;
  players1Scores.innerHTML = ticTacToe.player1.wins;
}

function renderTurn(event) {
  if (!ticTacToe.isGameLive) {
    return;
  }
  console.log(ticTacToe.player1.wins);
  console.log(ticTacToe.player2.wins);
  ticTacToe.updateBoard(parseInt(event.target.dataset.section));
  if (ticTacToe.currentTurn === "X") {
    playerBanner.innerHTML = `PLAYER ${ticTacToe.currentTurn}`;
    announceBanner.innerHTML = "YOUR TURN!";
    ticTacToe.gameBoardSpaces[parseInt(event.target.dataset.section)] = 2;
    ticTacToe.player1.boardPosition.push(
      parseInt(event.target.dataset.section)
    );
    ticTacToe.checkForWinner();
    console.log(ticTacToe.player1.wins);
    console.log(ticTacToe.player2.wins);
  } else if (ticTacToe.currentTurn === "O") {
    playerBanner.innerHTML = `PLAYER ${ticTacToe.currentTurn}`;
    announceBanner.innerHTML = "YOUR TURN!";
    ticTacToe.gameBoardSpaces[parseInt(event.target.dataset.section)] = 1;
    ticTacToe.player2.boardPosition.push(
      parseInt(event.target.dataset.section)
    );
    ticTacToe.checkForWinner();
    console.log(ticTacToe.player1.wins);
    console.log(ticTacToe.player2.wins);
  }
  if (ticTacToe.winnerFound) {
    announceWinner();
    setTimeout(renderNewGame, 3000);
    ticTacToe.changeTurns();
    return;
  }
  ticTacToe.checkForDraw();
  if (ticTacToe.draw) {
    announceDraw();
    setTimeout(renderNewGame, 3000);
    ticTacToe.changeTurns();
    return;
  }
  ticTacToe.changeTurns();
}

function announceWinner() {
  if (ticTacToe.winnerFound === true) {
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].classList.add("disabled");
    }
    playerBanner.innerHTML = `PLAYER ${ticTacToe.currentTurn}`;
    announceBanner.innerHTML = "YOU WIN!";
    players2Scores.innerHTML = ticTacToe.player2.wins;
    players1Scores.innerHTML = ticTacToe.player1.wins;
  }
}

function announceDraw() {
  if (ticTacToe.turns === 9 && ticTacToe.winnerFound === false) {
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].classList.add("disabled");
    }
    playerBanner.innerHTML = "Sorry, Looks Like a DRAW";
    announceBanner.innerHTML = "Try Again";
  }
}

function disableBox(event) {
  if (!event.target.classList.contains("disabled")) {
    event.target.classList.add("disabled");
  }
}

function renderNewGame() {
  ticTacToe.resetBoard();
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].classList.remove("disabled");
    boxes[i].innerText = "";
  }
  playerBanner.innerHTML = `PLAYER ${ticTacToe.currentTurn}`;
  announceBanner.innerHTML = "YOUR TURN!";
}

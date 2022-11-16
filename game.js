class Game {
  constructor() {
    this.player1 = new Player(1, "X");
    this.player2 = new Player(2, "O");
    this.isGameLive = true;
    this.turns = 0;
    this.firstPlayer = "X";
    this.currentTurn = "X";
    this.winnerFound = false;
    this.gameBoardSpaces = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.draw = false;
  }

  changeTurns() {
    console.log("change turns");
    if (this.currentTurn === "X") {
      this.currentTurn = "O";
      console.log("change turns if");
    } else {
      this.currentTurn = "X";
      console.log("change turns else");
    }
  }

  checkForWinner() {
    var winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (var i = 0; i < winningCombos.length; i++) {
      if (
        this.player1.boardPosition.includes(winningCombos[i][0]) &&
        this.player1.boardPosition.includes(winningCombos[i][1]) &&
        this.player1.boardPosition.includes(winningCombos[i][2])
      ) {
        this.winnerFound = true;
        this.player1.wins += 1;
        this.isGameLive = false;
      } else if (
        this.player2.boardPosition.includes(winningCombos[i][0]) &&
        this.player2.boardPosition.includes(winningCombos[i][1]) &&
        this.player2.boardPosition.includes(winningCombos[i][2])
      ) {
        this.winnerFound = true;
        this.player2.wins += 1;
        this.isGameLive = false;
        console.log(this.player1.wins);
        console.log(this.player2.wins);
      }
    }
  }

  checkForDraw() {
    if (this.turns === 9 && this.winnerFound === false) {
      this.draw = true;
      this.isGameLive = false;
      console.log("DRAW");
    }
  }

  updateBoard(id) {
    this.gameBoardSpaces[id] = this.currentTurn;
  }

  resetBoard() {
    this.gameBoardSpaces = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.isGameLive = true;
    this.winnerFound = false;
    this.draw = false;
    this.player1.boardPosition = [];
    this.player2.boardPosition = [];
    this.turns = 0;
    if (this.firstPlayer === "X") {
      this.firstPlayer = "O";
      this.currentTurn = "O";
    } else {
      this.firstPlayer = "X";
      this.currentTurn = "X";
    }
  }
}

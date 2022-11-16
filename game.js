class Game {
    constructor() {
    this.player1 = new Player(1, "X")
    this.player2 = new Player(2, "O")
    this.isGameLive = true
    this.turns = 0
    this.currentTurn = 'X'
    this.winnerFound = false
    this.gameBoardSpaces = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    this.draw = false
    }

    changeTurns() {
    if (this.currentTurn === "X") {
        this.currentTurn = "O"
    } else {
        this.currentTurn = "X"
        }
    }

    checkForWinner(player) {
    var winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
        ]
        for (var i = 0; i < winningCombos.length; i++) {
        if (player.boardPosition.includes(winningCombos[i][0]) && player.boardPosition.includes(winningCombos[i][1]) && player.boardPosition.includes(winningCombos[i][2])) {
            player.wins += 1
            this.winnerFound = true
            this.isGameLive = false
            }
        }
    }

    checkForDraw() {
        if (this.turns === 9 && this.winnerFound === false) {
            this.draw = true
            this.isGameLive = false
            console.log('DRAW') 
        }
    }

    updateBoard(id) {
        this.gameBoardSpaces[id] = this.currentTurn
    }

    resetBoard() {
        this.gameBoardSpaces = [0, 0, 0, 0, 0, 0, 0, 0, 0]
        this.isGameLive = false
       }
}

    // timeOut() {
    //     setTimeout(clearBoard, 3000)
    //     // alert(`Player ${currentTurn}, You're The Winner!`)
    //     }

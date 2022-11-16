var ticTacToe = new Game()
// -------> query selectors <-------
var playersScores = document.querySelector('.player-score')
var playerBanner = document.querySelector('.player-banner')
var announceBanner = document.querySelector('.its-your-turn')
var resetButton = document.querySelector('.resetButton')
var gridContainer = document.querySelector('.grid-container')
var boxes = document.querySelectorAll('.box')
boxes = Array.from(boxes)
// -------> event listeners <-------
gridContainer.addEventListener('click', renderTurn)  

boxes.forEach(function(box){
    box.addEventListener('click', function() {
        for (var i = 0; i < boxes.length; i++) {
        if (box.innerText === "") {
            box.innerText = `${ticTacToe.currentTurn}`
            ticTacToe.turns += 1
        }
        if (box.innerText === "X" || box.innerText === "O") {
            boxes[i].classList.add('disabled')
            ticTacToe.turns += 0
        }
    }
    })
})

// -------> functions <-------

    function clearBoard() {
        ticTacToe.resetBoard()
        boxes.innertext = ""
        playerBanner.innerHTML = `PLAYER ${ticTacToe.currentTurn}`
        announceBanner.innerHTML = "YOUR TURN!"
    }

    function renderTurn(event) {
        ticTacToe.updateBoard(parseInt(event.target.dataset.section))
        ticTacToe.checkForWinner(ticTacToe.player1)
        ticTacToe.checkForWinner(ticTacToe.player2)
        if (ticTacToe.winnerFound) {
            announceWinner()
            timeOut()
            clearBoard()
            return
        }
        ticTacToe.checkForDraw()
        if (ticTacToe.draw) {
            announceDraw()
            timeOut()
            clearBoard()
            return
        }
        ticTacToe.changeTurns()
        if (ticTacToe.currentTurn === "X") {
        playerBanner.innerHTML = `PLAYER ${ticTacToe.currentTurn}`
        announceBanner.innerHTML = "YOUR TURN!"
        ticTacToe.gameBoardSpaces[parseInt(event.target.dataset.section)] = 1
        ticTacToe.player1.boardPosition.push(parseInt(event.target.dataset.section))
        return
        }
        if (ticTacToe.currentTurn === "O") {
        playerBanner.innerHTML = `PLAYER ${ticTacToe.currentTurn}`
        announceBanner.innerHTML = "YOUR TURN!"
        ticTacToe.gameBoardSpaces[parseInt(event.target.dataset.section)] = 2
        ticTacToe.player2.boardPosition.push(parseInt(event.target.dataset.section))
        return
        }
    }

    function announceWinner() {
        playerBanner.innerHTML = `PLAYER ${ticTacToe.currentTurn}`
        announceBanner.innerHTML = "YOU WIN!"
        for (var i = 0; i < boxes.length; i++) {
            boxes[i].classList.add('disabled')
            }
        }

   function announceDraw() {
        if (ticTacToe.turns === 9 && ticTacToe.winnerFound === false) {
        playerBanner.innerHTML = "Sorry, Looks Like a DRAW"
        announceBanner.innerHTML = "Try Again"   
        for (var i = 0; i < boxes.length; i++) {
            boxes[i].classList.add('disabled')
        }
    }
   }
function timeOut() {
    setTimeout(clearBoard, 3000)
    alert("newGame")
}

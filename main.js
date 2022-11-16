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
// window.addEventListener('load', newGame);
resetButton.addEventListener('click', clearBoard);

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
        playerBanner.innerHTML = `PLAYER ${ticTacToe.currentTurn}`
        announceBanner.innerHTML = "YOUR TURN!"
        boxes.innerText = ""
    }

    // function renderBoard()
    // function displayMoves() {
    //     for (var i = 0; i < ticTacToe.gameBoardSpaces.length; i++) {
    //     if (ticTacToe.gameBoardSpaces[i] === 0) {
    //         boxes[i].innerText = ""
    //     } 
    //     if (boxes[i].innerHTML === "X" || boxes[i].innerHTML === "O") {
    //         boxes[i].classList.add('disabled')
    //         }
    //     }
    // }
    // function newGame(player) {
    // ticTacToe.currentTurn === "X"
    // ticTacToe.clearBoard()
    // ticTacToe.player.gameBoardSpaces = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    // playerBanner.innerHTML = `PLAYER ${ticTacToe.currentTurn}`
    // announceBanner.innerHTML = "YOUR TURN!"


    function renderTurn(event) {
        ticTacToe.updateBoard(parseInt(event.target.dataset.section))
        ticTacToe.checkForWinner(ticTacToe.player1)
        ticTacToe.checkForWinner(ticTacToe.player2)
        if (ticTacToe.winnerFound) {
            announceWinner()
            console.log('winner')
            return
        }
        ticTacToe.checkForDraw()
        if (ticTacToe.draw) {
            announceDraw()
            return
        }
        ticTacToe.changeTurns()
        if (ticTacToe.currentTurn === "X") {
        playerBanner.innerHTML = `PLAYER ${ticTacToe.currentTurn}`
        announceBanner.innerHTML = "YOUR TURN!"
        ticTacToe.gameBoardSpaces[parseInt(event.target.dataset.section)] = 1
        ticTacToe.player1.boardPosition.push(parseInt(event.target.dataset.section))
        console.log(event.target.dataset.section)
        // ticTacToe.changeTurns()
        return
        }
        if (ticTacToe.currentTurn === "O") {
        playerBanner.innerHTML = `PLAYER ${ticTacToe.currentTurn}`
        announceBanner.innerHTML = "YOUR TURN!"
        ticTacToe.gameBoardSpaces[parseInt(event.target.dataset.section)] = 2
        ticTacToe.player2.boardPosition.push(parseInt(event.target.dataset.section))
        console.log(ticTacToe.currentTurn)
        // ticTacToe.checkForWinner(ticTacToe.player2)
        // ticTacToe.changeTurns()
        return
        }
        // if (ticTacToe.winnerFound === true) {
        //     announceWinner()
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
// function timeOut() {
//     setTimeout(clearBoard, 3000)
//     // alert(`Player ${currentTurn}, You're The Winner!`)
// }

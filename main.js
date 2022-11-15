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
window.addEventListener('load', newGame);
// resetButton.addEventListener('click', clearBoard);

gridContainer.addEventListener('click', renderTurn)  


// boxes.forEach(function(box){
//     box.addEventListener('click', function() {
        

//     renderTurn();
//     console.log('turns', turns)
//     checkForWinner();
//     winnerFound === true ? announceWinner() : checkForDraw()
//     timeOut()
//     console.log('hello')
//     })
//  })

// -------> functions <-------

// function clearBoard() {
//     currentTurn = "X"
//     gameBoardSpaces = ["", "", "", "", "", "", "", "", ""]
//     playerBanner.innerHTML = `PLAYER ${currentTurn}`
//     announceBanner.innerHTML = "YOUR TURN!"
//     document.querySelectorAll('.boxes')
//                 .forEach(box => box.innerHTML = "")
// }
    function newGame() {
    ticTacToe.currentTurn === "X"
    playerBanner.innerHTML = `PLAYER ${ticTacToe.currentTurn}`
    announceBanner.innerHTML = "YOUR TURN!"
    }

    function renderTurn(event) {
        if(ticTacToe.currentTurn === "X") {
        playerBanner.innerHTML = `PLAYER ${ticTacToe.currentTurn}`
        announceBanner.innerHTML = "YOUR TURN!"
        ticTacToe.gameBoardSpaces[parseInt(event.target.dataset.section)] = 1
        ticTacToe.player1.boardPosition.push(parseInt(event.target.dataset.section))
        console.log(ticTacToe.currentTurn)
        ticTacToe.checkForWinner(ticTacToe.player1)
        ticTacToe.changeTurns()
        return
        }

        if(ticTacToe.currentTurn === "O") {
        playerBanner.innerHTML = `PLAYER ${ticTacToe.currentTurn}`
        announceBanner.innerHTML = "YOUR TURN!"
        ticTacToe.gameBoardSpaces[parseInt(event.target.dataset.section)] = 2
        ticTacToe.player2.boardPosition.push(parseInt(event.target.dataset.section))
        console.log(ticTacToe.currentTurn)
        ticTacToe.checkForWinner(ticTacToe.player2)
        ticTacToe.changeTurns()
        return
        }
    }

    function announceWinner() {
        if (ticTacToe.winnerFound === true) {
        playerBanner.innerHTML = `PLAYER ${ticTacToe.currentTurn}`
        announceBanner.innerHTML = "YOU WIN!"

        }
    }

   function announceDraw() {
        if (ticTacToe.turns === 9 && ticTacToe.winnerFound === false) {
        console.log('DRAW')
        playerBanner.innerHTML = "Sorry, Looks Like a DRAW"
        announceBanner.innerHTML = "Try Again"    
        }
    }

// function timeOut() {
//     setTimeout(clearBoard, 3000)
//     // alert(`Player ${currentTurn}, You're The Winner!`)
// }

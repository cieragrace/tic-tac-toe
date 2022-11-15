// -------> query selectors <-------
var playersScores = document.querySelector('.player-score')
var playerBanner = document.querySelector('.player-banner')
var announceBanner = document.querySelector('.its-your-turn')
var resetButton = document.querySelector('.resetButton')

var boxes = document.querySelectorAll('.box')
boxes = Array.from(boxes)
console.log(boxes)

// -------> event listeners <-------
window.addEventListener('load', clearBoard);
resetButton.addEventListener('click', clearBoard);

boxes.forEach(function(box){
    box.addEventListener('click', function() {
        if (box.innerText === "")
            box.innerText = currentTurn
            currentTurn = currentTurn === "X" ? "O" : "X"
            console.log(currentTurn)


    renderTurn();
    console.log('turns', turns)
    announceDraw();
    checkForWinner();
    winnerFound === true ? announceWinner() : changePlayer();
    checkForWinner()
    console.log('hello')
    })
 })

// ------> global variables <------
var turns = 0
var currentTurn = 'X'
var winnerFound = false
var gameBoardSpaces = ["", "", "", "", "", "", "", "", "",]
var winningCombos =
[
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6],
]
// -------> functions <-------

function clearBoard() {
    gameBoardSpaces = ["", "", "", "", "", "", "", "", ""]
    playerBanner.innerHTML = `PLAYER ${currentTurn}`
    announceBanner.innerHTML = "YOUR TURN!"
}

function renderTurn() {
    turns += 1;
    playerBanner.innerHTML = `PLAYER ${currentTurn}`
    announceBanner.innerHTML = "YOUR TURN!"
}

function checkForWinner() {
    for (var i = 0; i < winningCombos.length; i++) {
        var winner = winningCombos[i]
        var firstBox = gameBoardSpaces[winningCombos[0]]
        var secondBox = gameBoardSpaces[winningCombos[1]]
        var thirdBox = gameBoardSpaces[winningCombos[2]]
    }
    if (firstBox === secondBox && secondBox === thirdBox) {
        winnerFound = true
    }
    if (firstBox === "" || secondBox === "" || thirdBox === "") {
    changePlayer()    
    }
}

function announceWinner() {
    if (winnerFound === true) {
        playerBanner.innerHTML = `PLAYER ${currentTurn}`
        announceBanner.innerHTML = "YOU WIN!"
        // increaseWins()
    }
    timeOut()
}

function announceDraw() {
    if (turns === 9) {
        playerBanner.innerHTML = "Sorry, Looks Like a DRAW"
        announceBanner.innerHTML = "Try Again"    
        console.log('Draw')
}
    timeOut()
}

function timeOut() {
    setTimeout(clearBoard, 3000)
    // alert(`Player ${currentTurn}, You're The Winner!`)
}

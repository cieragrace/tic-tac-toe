// -------> query selectors <-------
// var playerContainer = document.querySelector('.player-container')
// var players = document.querySelector('.player')
// var playersScores = document.querySelector('.player-score')
// var headContainer = document.querySelector('.head-container')
// var playerBanner = document.querySelector('.player-banner')
// var announceBanner = document.querySelector('.its-your-turn')
// var box1 = document.querySelector('#box1')
// var box2 = document.querySelector('#box2')
// var box3 = document.querySelector('#box3')
// var box4 = document.querySelector('#box4')
// var box5 = document.querySelector('#box5')
// var box6 = document.querySelector('#box6')
// var box7 = document.querySelector('#box7')
// var box8 = document.querySelector('#box8')
// var box9 = document.querySelector('#box9')
var boxes = document.querySelectorAll('.box')
boxes = Array.from(boxes)
console.log(boxes)
var resetButton = document.querySelector('.resetButton')

// -------> event listeners <-------
window.addEventListener('load', startGame);
resetButton.addEventListener('click', startGame);
boxes.forEach(function(box){
    box.addEventListener('click', function(){
        box.innerText = currentTurn
    })
})
// boxes.forEach((box,index) => {
//     box.addEventListener('click', () => executeTurn(box, index))
// })
// boxes.addEventListener('click', executeTurn);

// ------> global variables <------
//board layout below
    // [0][1][2]
    // [3][4][5]
    // [6][7][8]
//X goes first
var currentTurn = 'X'
var count = 0
var gameBoardSpaces = ["", "", "", "", "", "", "", "", "",]
var gameOn = false
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

// function createGameGrid() {
//     boxes.forEach(function(box){
//         box.addEventListener('click', executeTurn)
//     }
// }
// function displayOnClick() {
//     boxes.forEach((box => box.addEventListener('click', () => {
//     if (whosTurn === X) {
//         whosTurn = "O"
//         box.innerText = "X"
//         box.disbaled = true
//     } else {
//         whosTurn = "0"
//         box.InnerText = 'O'
//         box.disbaled = true
//     }
//     })
// }

// startGame() 

function startGame() {
    gameOn = true
    boxes.forEach(box => box.addEventListener('click', executeTurn))
    console.log('hi')
}
// // use with reset button as well

function executeTurn() {
    var boxID = event.target.id
    if (isBoxOpen === true && gameOn === true) {
        box.innerHTML = "X"
    }
}
function isBoxOpen() {
    if (boxes.innerText === 'X' || boxes.innerText === 'O') {
        return false;
    }
    return true;
}

// function changePlayer() { // render?
    // var currentPlayer = new Player(id, symbol, wins)
    //  currentPlayer = 'X' ? 'O' : 'X';

// }
    //if the tile is clicked on and is not already marked 
    // should change inner text of current player
    // add symbol for player. Check for winner, if no winner
    // change player if there is a winner/draw execute banner 
    // timeout and reset

// start with X, first tile is X
// 0 is second
// event listeners on all tiles?
// input on tiles?

// if winning three positions are marked 'true' x or o wins
// function checkForWinner() {

// }
//ALSO IN GAME CLASS
// when there is a winner we want the score to go up 1 on winner side
// increaseWins(player) {
//     player.wins += 1
// }
//IN PLAYER CLASS
// we also will need banner to pop up to say who wins
// change "It's your turn" to WINS
// have pop up that announces winner 
// function winningBanner() {

// timeOut()
// }
//Player 1, YOU WIN
//PLAYER 2, YOU WIN
// function announceWinner() {

// }
//DRAW
//DRAW scores do not change
// function announceDraw() {
//     count += 1;
// (if count === 9) {

// }

// }

// function drawBanner() {

// timeOut()
// }
// No Winner! Try Again
// function timeOut() {
//     setTimeout(startGame, 3000)
// }
//time out to reset page 


class Player {
    constructor(id, symbol) {
        this.id = id
        this.boardPosition = []
        this.symbol = symbol 
        this.wins = 0
    }
    increaseWins() {
        this.wins += 1
    }
}

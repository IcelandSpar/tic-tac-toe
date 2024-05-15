const Gameboard = (function(){
    let space = " * "
    let board = [];
    let player1 = "X";
    let player2 = "O";
    let row = 3;
    let column = 3;
    


    makeBoard = function() {
        
            for(i = 0; i < this.row; i++) {
                this.board.push(space)

            }
            
  
    };
    
    makeRow = function() {
        space = space.repeat(column)
    };

    boardToString = function() {
        
        let newBoard = this.board.join("\n")
        return newBoard
    };




    return {makeBoard, board, row, boardToString, makeRow}

})();
Gameboard.makeRow()
Gameboard.makeBoard()
Gameboard.boardToString()
console.log(Gameboard.boardToString())

const GameFlow = function() {




}
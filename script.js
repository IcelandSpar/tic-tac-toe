


const Gameboard = (function(){
    let space = [0];
    let board = [];

    let row = 3;
    
    
    makeBoard = function() {
        
            for(i = 0; i < row; i++) {
                this.board.push(space)

            }
            
  
    };
    
    makeColumn = function() {
        for(i = 1; i < board.length; i++) {
          this.board[i].push(0)
        }
    };


    return {makeBoard, board, makeColumn}

})();


Gameboard.makeBoard();
Gameboard.makeColumn();

console.log(Gameboard.board)











const GameFlow = (function() {

    let player1 = "X";
    let player2 = "O";
    let rowChoice = 0;
    let columnChoice = 0;

    startGame = function() {
        alert("Starting Game, player 1 turn")


    }

    playerChoice = function() {
        rowChoice = prompt("row coordinate");
        columnChoice = prompt("column coordinate");


    }

    printChoice = function() {
        

    }



    return {startGame, playerChoice, rowChoice, columnChoice}
})()






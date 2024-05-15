


const Gameboard = (function(){
    let space = 0;
    let board = [];

    let row = 3;
    
    let rowChoice = 0;
    let columnChoice = 0;
    let player1 = 1;
    let player2 = 2

    makeBoard = function() {
        
            for(i = 0; i < row; i++) {
                this.board.push([space, space, space])

            }
            
  
    };
    
    makeColumn = function() {
        for(i = 1; i < 3; i++) {
          this.board[i].push(0)
        }
    };

    playerChoice = function(player) {
        rowChoice = prompt("row coordinate " + player);
        columnChoice = prompt("column coordinate " + player);


    }

    printChoice = function(player) {

       board[rowChoice].splice(columnChoice,1)
      board[rowChoice].splice(columnChoice, 0, player)
    }


    return {makeBoard, board, makeColumn, playerChoice, printChoice, player1, player2}

})();


Gameboard.makeBoard();

// Gameboard.playerChoice(Gameboard.player1);
// Gameboard.printChoice(Gameboard.player1);

// Gameboard.playerChoice(Gameboard.player2);
// Gameboard.printChoice(Gameboard.player2);

// Gameboard.playerChoice(Gameboard.player1);
// Gameboard.printChoice(Gameboard.player1);

// Gameboard.playerChoice(Gameboard.player2);
// Gameboard.printChoice(Gameboard.player2);



console.log(Gameboard.board)







// const GameFlow = (function() {

//     let player1 = "X";
//     let player2 = "O";


//     startGame = function() {
//         alert("Starting Game, player 1 turn")


//     }

//     playerChoice = function() {
//         rowChoice = prompt("row coordinate");
//         columnChoice = prompt("column coordinate");


//     }

//     printChoice = function() {

        
//     }



//     return {startGame, playerChoice, rowChoice, columnChoice, printChoice}
// })()

// GameFlow.printChoice();





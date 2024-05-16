


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
        if (board[rowChoice][columnChoice] == 0) {
       board[rowChoice].splice(columnChoice,1)
      board[rowChoice].splice(columnChoice, 0, player)
    } else {
        alert("Thats Cheating! Player " + player + " is disqualified");
        
    }
    }

    checkIfRoundWon = function(player) {
        if (board[0][0] == player && board[0][1] == player && board[0][2] == player) {
            //check if top row
            console.log('player ' + player + ' won!');
        } else if (board[0][0] == player && board[1][1] == player &&  board[2][2] == player) {
            //check if diagonal row (top left to bottom right)
            console.log('player ' + player + ' won!');
        } else if (board[1][0] == player &&  board[1][1] == player && board[1][2] == player) {
            //check if middle row
            console.log('player ' + player + ' won!');
        } else if (board[2][0] == player && board[2][1] == player && board[2][2] == player) {
            //check if last row
            console.log('player ' + player + ' won!');
        } else if (board[0][2] == player && board[1][1] == player && board[2][0] == player) {
            //check diagonal top right to bottom left
            console.log('player ' + player + ' won!')
        } else if (board[0][0] == player && board[1][0] == player && board[2][0] == player) {
            //check left column
            console.log('player ' + player + ' won!')

        } else if (board[0][1] == player && board[1][1] == player && board[2][1] == player) {
            console.log('player ' + player + ' won!')
        } else if (board[0][2] == player && board[1][2] == player && board[2][2] == player) {
            console.log('player ' + player + ' won!')
        } else {
            
        }
    }

    return {makeBoard, board, makeColumn, playerChoice, printChoice, player1, player2, checkIfRoundWon}

})();


Gameboard.makeBoard();

console.log(Gameboard.board)

Gameboard.playerChoice(Gameboard.player1);
Gameboard.printChoice(Gameboard.player1);

console.log(Gameboard.board)

Gameboard.playerChoice(Gameboard.player2);
Gameboard.printChoice(Gameboard.player2);

console.log(Gameboard.board)

Gameboard.checkIfRoundWon(Gameboard.player2);
Gameboard.checkIfRoundWon(Gameboard.player1);

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






function createGameboard({space, board, createBoard}) {

    return {
      space: 0,
      player1: 1,
      player2: 2,
      
      rowChoice: 0,
      columnChoice: 0,
      
      player1Score: 0,
      player2Score: 0,
      
      board: [
          [space, space, space],
          [space, space, space],
          [space, space, space]
      ],
      


      createBoard: function(space = 0) {
        alert("Starting New Game!")
        this.board = [
          [space, space, space],
          [space, space, space],
          [space, space, space]

        ]
        alert(`${this.board[0]}\n${this.board[1]}\n${this.board[2]}`)
        
      },
      
      
      getPlayerChoice: function(player) {
          
          

          this.rowChoice = parseInt(prompt("row coordinate " + player));
          this.columnChoice = parseInt(prompt("column coordinate " + player));

      },
      
      userChangeBoard: function(board, player, row, column) {
        
          board[row].splice(column,1)
  board[row].splice(column, 0, player)
        alert(`${this.board[0]}\n${this.board[1]}\n${this.board[2]}`)
},
      
    checkIfGameWasWon: function(player, board)  {
      
          if (board[0][0] == player && board[0][1] == player && board[0][2] == player) {
            //check if top row

            
            
            if(player == 1) {
              this.player1Score += 1;
              alert(`Player ${player} won\nPlayer 1 total score: ${this.player1Score}\n\nPlayer 2 total Score: ${this.player2Score}\n${board[0]}\n${board[1]}\n${board[2]}`);
              return true
            } else if (player == 2) {
              this.player2Score += 1;
              alert(`Player ${player} won\nPlayer 1 total score: ${this.player1Score}\n\nPlayer 2 total Score: ${this.player2Score}\n${board[0]}\n${board[1]}\n${board[2]}`);
              return true
            }
            
        } else if (board[0][0] == player && board[1][1] == player &&  board[2][2] == player) {
            //check if diagonal row (top left to bottom right)
            
            
            if(player == 1) {
              this.player1Score += 1;
              alert(`Player ${player} won\nPlayer 1 total score: ${this.player1Score}\n\nPlayer 2 total Score: ${this.player2Score}\n${board[0]}\n${board[1]}\n${board[2]}`);
              return true
            } else if (player == 2) {
              this.player2Score += 1;
              alert(`Player ${player} won\nPlayer 1 total score: ${this.player1Score}\n\nPlayer 2 total Score: ${this.player2Score}\n${board[0]}\n${board[1]}\n${board[2]}`);

              return true
            }
        } else if (board[1][0] == player &&  board[1][1] == player && board[1][2] == player) {
            //check if middle row
            
            
                      if(player == 1) {
              this.player1Score += 1;
              alert(`Player ${player} won\nPlayer 1 total score: ${this.player1Score}\n\nPlayer 2 total Score: ${this.player2Score}\n${board[0]}\n${board[1]}\n${board[2]}`);
      
              return true
            } else if (player == 2) {
              this.player2Score += 1;
              alert(`Player ${player} won\nPlayer 1 total score: ${this.player1Score}\n\nPlayer 2 total Score: ${this.player2Score}\n${board[0]}\n${board[1]}\n${board[2]}`);
    
              return true
            }
        } else if (board[2][0] == player && board[2][1] == player && board[2][2] == player) {
            //check if last row
            
            
                      if(player == 1) {
              this.player1Score += 1;
              alert(`Player ${player} won\nPlayer 1 total score: ${this.player1Score}\n\nPlayer 2 total Score: ${this.player2Score}\n${board[0]}\n${board[1]}\n${board[2]}`);
              return true
            } else if (player == 2) {
              this.player2Score += 1;
              alert(`Player ${player} won\nPlayer 1 total score: ${this.player1Score}\n\nPlayer 2 total Score: ${this.player2Score}\n${board[0]}\n${board[1]}\n${board[2]}`);
              return true
            }
        } else if (board[0][2] == player && board[1][1] == player && board[2][0] == player) {
            //check diagonal top right to bottom left
            
            
                      if(player == 1) {
              this.player1Score += 1;
              alert(`Player ${player} won\nPlayer 1 total score: ${this.player1Score}\n\nPlayer 2 total Score: ${this.player2Score}\n${board[0]}\n${board[1]}\n${board[2]}`);
              return true
            } else if (player == 2) {
              this.player2Score += 1;
              alert(`Player ${player} won\nPlayer 1 total score: ${this.player1Score}\n\nPlayer 2 total Score: ${this.player2Score}\n${board[0]}\n${board[1]}\n${board[2]}`);
              return true
            }
        } else if (board[0][0] == player && board[1][0] == player && board[2][0] == player) {
            //check left column
            
            
            if(player == 1) {
              this.player1Score += 1;
              alert(`Player ${player} won\nPlayer 1 total score: ${this.player1Score}\n\nPlayer 2 total Score: ${this.player2Score}\n${board[0]}\n${board[1]}\n${board[2]}`);
              return true
            } else if (player == 2) {
              this.player2Score += 1;
              alert(`Player ${player} won\nPlayer 1 total score: ${this.player1Score}\n\nPlayer 2 total Score: ${this.player2Score}\n${board[0]}\n${board[1]}\n${board[2]}`);
            return true
            }
        } else if (board[0][1] == player && board[1][1] == player && board[2][1] == player) {
            
            
            if(player == 1) {
              this.player1Score += 1;
              alert(`Player ${player} won\nPlayer 1 total score: ${this.player1Score}\n\nPlayer 2 total Score: ${this.player2Score}\n${board[0]}\n${board[1]}\n${board[2]}`);
              return true
            } else if (player == 2) {
              this.player2Score += 1;
              alert(`Player ${player} won\nPlayer 1 total score: ${this.player1Score}\n\nPlayer 2 total Score: ${this.player2Score}\n${board[0]}\n${board[1]}\n${board[2]}`);
              return true
            }
        } else if (board[0][2] == player && board[1][2] == player && board[2][2] == player) {
           
            
                      if(player == 1) {
              this.player1Score += 1;
              alert(`Player ${player} won\nPlayer 1 total score: ${this.player1Score}\n\nPlayer 2 total Score: ${this.player2Score}\n${board[0]}\n${board[1]}\n${board[2]}`);
              return true
            } else if (player == 2) {
              this.player2Score += 1;
              alert(`Player ${player} won\nPlayer 1 total score: ${this.player1Score}\n\nPlayer 2 total Score: ${this.player2Score}\n${board[0]}\n${board[1]}\n${board[2]}`);
              return true
            
     } else {

       return false
     } }
      
    },
      
      printUser1Choice: function() {
          this.getPlayerChoice(this.player1)
    while(this.board[this.rowChoice][this.columnChoice] != 0 ) {
      alert("try again")
      this.getPlayerChoice(this.player1)
    }

this.userChangeBoard(this.board, this.player1, this.rowChoice, this.columnChoice)

      },
      
      printUser2Choice: function() {
          this.getPlayerChoice(this.player2)
      while(this.board[this.rowChoice][this.columnChoice] != 0 ) {
        console.log(this.rowChoice, this.columnChoice)
      alert("try again")
      this.getPlayerChoice(this.player2)
    }
this.userChangeBoard(this.board, this.player2, this.rowChoice, this.columnChoice)
      },
      
      checkBothPlayers: function() {
          if (this.checkIfGameWasWon(this.player1, this.board) || this.checkIfGameWasWon(this.player2, this.board)) {
    return true
  } else {
    return false
  }
      },
      
      gameRound: function() {
         while(!this.checkBothPlayers()) {
  if ( !this.board[0].includes(0) && !this.board[1].includes(0) && !this.board[2].includes(0)) {
    alert('its a tie')
    break;
  } else {
 
      
  
    this.printUser1Choice();

    if(!this.checkBothPlayers()) {
      
    if (!this.board[0].includes(0) && !this.board[1].includes(0) && !this.board[2].includes(0)) {
        alert("its a tie, board is full!")
        break;
        } else {
      
  
this.printUser2Choice();
        
        }
    } else {
      break;
    }
    if(this.checkBothPlayers()){

      break;
    }
    
}
  }
      
      },
      
      bestOf3: function() {
          while(this.player1Score < 3 && this.player2Score < 3) {
      this.gameRound()
  
    if(this.player1Score == 3 || this.player2Score == 3) {
          if(this.player1Score == 3) {
            alert(`player 1 won!\nPlayer 1 total score: ${this.player1Score}\n\nPlayer 2 total Score: ${this.player2Score}`);
            
          } else if (this.player2Score == 3) {
            alert(`player 2 won\nPlayer 1 total score: ${this.player1Score}\n\nPlayer 2 total Score: ${this.player2Score}`);

          } else {
    

  }
        
  break;
    } else {
    this.createBoard(0)
  }}
      },

    }
    
}



// const newGame = createGameboard({})

// newGame.createBoard(0)

// newGame.bestOf3()








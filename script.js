
function createGameboard({space}) {

    return {
      space: 0,
      player1: 1,
      player2: 2,
      currentPlayer: 1,
      
      rowChoice: 0,
      columnChoice: 0,
      
      player1Score: 0,
      player2Score: 0,

      domAreas: {

        box1: document.querySelector(".box1"),
        box2: document.querySelector(".box2"),
        box3: document.querySelector(".box3"),
    
        box4: document.querySelector(".box4"),
        box5: document.querySelector(".box5"),
        box6: document.querySelector(".box6"),
    
        box7: document.querySelector(".box7"),
        box8: document.querySelector(".box8"),
        box9: document.querySelector(".box9"),
    
    },
      
      board: [
          [space, space, space],
          [space, space, space],
          [space, space, space]
      ],
      
      

      createBoard: function(space = 0) {
        
        this.board = [
          [space, space, space],
          [space, space, space],
          [space, space, space]

        ]
       console.log(this.board)
        
      },
      
      clearBoard: function() {
        this.board = [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0]
        ]
      },

      translateToLetter: function(boardLocationValue) {
        if(boardLocationValue == 0) {
            return ""
        } else if (boardLocationValue == 1) {
            return "X"
        } else if (boardLocationValue == 1) {
            return "O"
        }
      },
      
      translateToNumber: function(domContent) {
        if(domContent == "") {
          return 0
        } else if (domContent == "X") {
          return 1
        } else if (domContent == "O") {
          return 2
        }
      },



      displayBoard: function() {
        this.domAreas.box1.textContent = this.translateToLetter(this.board[0][0]);
        this.domAreas.box2.textContent = this.translateToLetter(this.board[0][1]);
        this.domAreas.box3.textContent = this.translateToLetter(this.board[0][2]);

        this.domAreas.box4.textContent = this.translateToLetter(this.board[1][0]);
        this.domAreas.box5.textContent = this.translateToLetter(this.board[1][1]);
        this.domAreas.box6.textContent = this.translateToLetter(this.board[1][2]);

        this.domAreas.box7.textContent = this.translateToLetter(this.board[2][0]);
        this.domAreas.box8.textContent = this.translateToLetter(this.board[2][1]);
        this.domAreas.box9.textContent = this.translateToLetter(this.board[2][2]);
      },
      

    updateBoard: function() {
     this.board[0] = [this.translateToNumber(this.domAreas.box1.textContent), this.translateToNumber(this.domAreas.box2.textContent), this.translateToNumber(this.domAreas.box3.textContent)]
     this.board[1] = [this.translateToNumber(this.domAreas.box4.textContent), this.translateToNumber(this.domAreas.box5.textContent), this.translateToNumber(this.domAreas.box6.textContent)]
     this.board[2] = [this.translateToNumber(this.domAreas.box7.textContent), this.translateToNumber(this.domAreas.box8.textContent), this.translateToNumber(this.domAreas.box9.textContent)]
    },


  
    buttons: function(player, board, currentPlayer) {
      
      

      
      let box1 = document.querySelector(".box1")
      box1.addEventListener('click', function() {
        
          
        
       
        if(currentPlayer == 1  && board[0][0] == 0) {
          box1.textContent = "X"
          board[0][0] = 1
          newGame.checkIfGameWasWon(currentPlayer, board)
          currentPlayer = 2
        } else if (currentPlayer == 2 && board[0][0] == 0) {
          box1.textContent = "O"
          board[0][0] = 2
          newGame.checkIfGameWasWon(currentPlayer, board)
          currentPlayer = 1
        }
        
      });
      
      let box2 = document.querySelector(".box2")
      
      box2.addEventListener('click', function() {
               if(currentPlayer == 1 && board[0][1] == 0) {
          box2.textContent = "X"
          board[0][1] = 1
          newGame.checkIfGameWasWon(currentPlayer, board)
          currentPlayer = 2
        } else if (currentPlayer == 2 && board[0][1] == 0) {
          box2.textContent = "O"
          board[0][1] = 2
          newGame.checkIfGameWasWon(currentPlayer, board)
          currentPlayer = 1
        }
        
      });
      
      let box3 = document.querySelector(".box3")
      
      box3.addEventListener('click', function() {
        if(currentPlayer == 1 && board[0][2] == 0) {
          box3.textContent = "X"
          board[0][2] = 1
          newGame.checkIfGameWasWon(currentPlayer, board)
          currentPlayer = 2
        } else if (currentPlayer == 2 && board[0][2] == 0) {
          box3.textContent = "O"
          board[0][2] = 2
          newGame.checkIfGameWasWon(currentPlayer, board)
          currentPlayer = 1
        }
       
      })
        
      let box4 = document.querySelector(".box4")
      
      box4.addEventListener('click', function() {
        if(currentPlayer == 1 && board[1][0] == 0) {
          box4.textContent = "X"
          board[1][0] = 1
          newGame.checkIfGameWasWon(currentPlayer, board)
          currentPlayer = 2
        } else if (currentPlayer == 2 && board[1][0] == 0) {
          box4.textContent = "O"
          board[1][0] = 2
          newGame.checkIfGameWasWon(currentPlayer, board)
          currentPlayer = 1
        }
      
      })
      
      let box5 = document.querySelector(".box5")
      
      box5.addEventListener('click', function() {
        if(currentPlayer == 1 && board[1][1] == 0) {
          box5.textContent = "X"
          board[1][1] = 1
          newGame.checkIfGameWasWon(currentPlayer, board)
          currentPlayer = 2
        } else if (currentPlayer == 2 && board[1][1] == 0) {
          box5.textContent = "O"
          board[1][1] = 2
          newGame.checkIfGameWasWon(currentPlayer, board)
          currentPlayer = 1
        }  
        
      })
      
      
            let box6 = document.querySelector(".box6")
      
      box6.addEventListener('click', function() {
        if(currentPlayer == 1 && board[1][2] == 0) {
          box6.textContent = "X"
          board[1][2] = 1
          newGame.checkIfGameWasWon(currentPlayer, board)
          currentPlayer = 2
        } else if (currentPlayer == 2 && board[1][2] == 0) {
          box6.textContent = "O"
          board[1][2] = 2
          newGame.checkIfGameWasWon(currentPlayer, board)
          currentPlayer = 1
        }
        
      })
        
            let box7 = document.querySelector(".box7")
      
      box7.addEventListener('click', function() {
        if(currentPlayer == 1 && board[2][0] == 0) {
          box7.textContent = "X"
          board[2][0] = 1
          newGame.checkIfGameWasWon(currentPlayer, board)
          currentPlayer = 2
        } else if (currentPlayer == 2 && board[2][0] == 0) {
          box7.textContent = "O"
          board[2][0] = 2
          newGame.checkIfGameWasWon(currentPlayer, board)
          currentPlayer = 1
        }
        
      })
      
      let box8 = document.querySelector(".box8")
      
      box8.addEventListener('click', function() {
        if(currentPlayer == 1 && board[2][1] == 0) {
          box8.textContent = "X"
          board[2][1] = 1
          newGame.checkIfGameWasWon(currentPlayer, board)
          currentPlayer = 2
        } else if (currentPlayer == 2 && board[2][1] == 0) {
          box8.textContent = "O"
          board[2][1] = 2
          newGame.checkIfGameWasWon(currentPlayer, board)
          currentPlayer = 1
        }
        
      })

      let box9 = document.querySelector(".box9")
      
      box9.addEventListener('click', function() {
        if(currentPlayer == 1 && board[2][2] == 0) {
          box9.textContent = "X"
          board[2][2] = 1
          newGame.checkIfGameWasWon(currentPlayer, board)
          currentPlayer = 2
        } else if (currentPlayer == 2 && board[2][2] == 0) {
          box9.textContent = "O"
          board[2][2] = 2
          newGame.checkIfGameWasWon(currentPlayer, board)
          currentPlayer = 1
        }
        
      })

    },






      
    checkIfGameWasWon: function(player, board)  {
      if(!board[0].includes(0) && !board[1].includes(0) && !board[2].includes(0)) {
        alert("tie!") } else {

        

      
          if (board[0][0] == player && board[0][1] == player && board[0][2] == player) {
            //check if top row

            
            
            if(player == 1) {
              this.player1Score += 1;
              let scoreBoard = document.querySelector()
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
    }
    },
      
      printUser1Choice: function() {
        this.buttons(1)

      },
      
      printUser2Choice: function() {
        this.buttons(2)
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
    this.displayBoard();
    if(!this.checkBothPlayers()) {
      
    if (!this.board[0].includes(0) && !this.board[1].includes(0) && !this.board[2].includes(0)) {
        alert("its a tie, board is full!")
        break;
        } else {
      
  
    this.printUser2Choice();
    this.displayBoard();
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














const newGame = createGameboard({})



newGame.createBoard(0)

newGame.buttons(1, newGame.board, newGame.currentPlayer, newGame.checkIfGameWasWon(newGame.currentPlayer, newGame.board))

// alternate()





// newGame.buttons(1)
// newGame.updateBoard()










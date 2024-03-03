export function winningCondition(board) {
    if (board[0] === "X" && board[1] === "X" && board[2] === "X") {
      return board[0];
    }
  
    if (board[0] === "O" && board[1] === "O" && board[2] === "O") {
      return board[0];
    }
  
    if (board[3] === "X" && board[4] === "X" && board[5] === "X") {
      return board[3];
    }
  
    if (board[3] === "O" && board[4] === "O" && board[5] === "O") {
      return board[3];
    }
  
    if (board[6] === "X" && board[7] === "X" && board[8] === "X") {
      return board[6];
    }
  
    if (board[6] === "O" && board[7] === "O" && board[8] === "O") {
      return board[6];
    }
  
    if (board[0] === "X" && board[3] === "X" && board[6] === "X") {
      return board[0];
    }
  
    if (board[0] === "O" && board[3] === "O" && board[6] === "O") {
      return board[0];
    }
  
    if (board[1] === "X" && board[4] === "X" && board[7] === "X") {
      return board[1];
    }
  
    if (board[1] === "O" && board[4] === "O" && board[7] === "O") {
      return board[1];
    }
  
    if (board[2] === "X" && board[5] === "X" && board[8] === "X") {
      return board[2];
    }
  
    if (board[2] === "O" && board[5] === "O" && board[8] === "O") {
      return board[2];
    }
  
    if (board[0] === "X" && board[4] === "X" && board[8] === "X") {
      return board[0];
    }
  
    if (board[0] === "O" && board[4] === "O" && board[8] === "O") {
      return board[0];
    }
  
    if (board[2] === "X" && board[4] === "X" && board[6] === "X") {
      return board[2];
    }
  
    if (board[2] === "O" && board[4] === "O" && board[6] === "O") {
      return board[2];
    }
  
    let isTie = true;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === ".") {
        isTie = false;
        break;
      }
    }
  
    if (isTie) {
      return "Tie";
    }
  
    return "None";
  }
  
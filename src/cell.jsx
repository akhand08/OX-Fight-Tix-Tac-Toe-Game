import "./app.css";

import React, { useState, useContext } from "react";
import { boardContext } from "./App";
import { winningCondition } from "./winningCondition.jsx";

function Cell({ index }) {
  const {
    boardState,
    setBoardState,
    playerName,
    setPlayerName,
    gameOver,
    setGameOver,
  } = useContext(boardContext);


  const [click, setClick] = useState(true);
  const [color, setColor] = useState(" ");
  

  

  const handleCellClick = (index) => {
    
    if(gameOver === "Yes") {
      setClick(false);
      return;
    }

    let updatedBoard = [...boardState];
    updatedBoard[index] = playerName;
    setBoardState(updatedBoard);
    setClick(false);

    setColor(playerName === "X" ? "O" : "X");

    let anyWinner = winningCondition(updatedBoard);
    

    if (anyWinner === "X" || anyWinner === "O") {
      setGameOver("Yes");
      return;
    }
    if (anyWinner === "Tie") {
      setGameOver("Tie");
      return;
    }

    setPlayerName(playerName === "X" ? "O" : "X");
  };

  return (
    <div className="cell">
      {click && (
        <h1 style={{ color: "navy" }} onClick={() => handleCellClick(index)}>
          {" "}
          {boardState[index]}
        </h1>
      )}
      {color === "X" && (
        <h1 style={{ color: "navy" , backgroundColor: "darkgreen"}}> {boardState[index]}</h1>
      )}

      {color === "O" && (
        <h1 style={{ color: "navy" , backgroundColor: "crimson"}}> {boardState[index]} </h1>
      )}

      {color === " " && !click &&  (
        <h1 style={{ color: "navy" }} >    </h1>
      )
    }

    

      
    </div>
  );
}

export default Cell;

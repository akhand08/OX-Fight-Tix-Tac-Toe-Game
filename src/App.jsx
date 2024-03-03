import React, { useState, useContext, createContext } from "react";
import boardArray from "./boardArray";
import Cell from "./cell.jsx";

import "./app.css";

export const boardContext = createContext({
  boardState: [],
  setBoardState: () => {},
  playerMark: "",
  setPlayerMark: () => {},
  gameOver: "No",
  setGameOver: () => {},
});

function Board({ children }) {
  const [boardState, setBoardState] = React.useState(boardArray);
  const [playerName, setPlayerName] = React.useState("X");
  const [gameOver, setGameOver] = React.useState("No");

  return (
    <boardContext.Provider
      value={{
        boardState,
        setBoardState,
        playerName,
        setPlayerName,
        gameOver,
        setGameOver,
      }}
    >
      <div className="main">
        <div className="title-bar">
          <h1> OX Fight Tic Tac Toe </h1>
        </div>

        <div className="board">
          {boardState.map((_, index) => {
            return (
                <Cell key={index} index={index} />
            )
          })}
        </div>

        <div className="player-name">
          {gameOver === "No" ? (
            <h1 style={{ color: "cyan" }}>It is {playerName}'s turn </h1>
          ) : gameOver === "Yes" ? (
            <h1 style={{ color: "green" }}>
              Congrats " {playerName} "! You Won...{" "}
            </h1>
          ) :  
            <h1 style={{ color: "black" }}> The match is Tie </h1>
          }
        </div>
      </div>
    </boardContext.Provider>
  );
}

export default Board;

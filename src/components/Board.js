import React from 'react'
import renderSquare from "./renderSquare";

function Board({ knightPosition }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      {renderSquare(0, 0, knightPosition)}
      {renderSquare(1, 0, knightPosition)}
      {renderSquare(2, 0, knightPosition)}
    </div>
  );
}

export default Board;

import React from "react";
import Knight from "./Knight";
import Square from "./Square";
import Empty from "./Empty";
import { moveKnight, canMoveKnight } from "./Game";

function renderSquare(i, [knightX, knightY]) {
  const x = i % 8;
  const y = Math.floor(i / 8);
  const isKnightHere = x === knightX && y === knightY;
  const black = (x + y) % 2 === 1;
  const piece = isKnightHere ? <Knight /> : <Empty />;
  return (
    <div
      key={i}
      style={{ width: "12.5%", height: "12.5%" }}
      onClick={() => handleSquareClick(x, y)}
    >
      <Square black={black}>{piece}</Square>
    </div>
  );
}

function handleSquareClick(toX, toY) {
  if (canMoveKnight(toX, toY)) {
    moveKnight(toX, toY);
  }
}

function Board({ knightPosition }) {
  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition));
  }
  console.log(squares);

  return (
    <div
      style={{
        width: "320px",
        height: "320px",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {squares}
    </div>
  );
}

export default Board;

import React from 'react'
import Knight from "./Knight";
import Square from "./Square";

function renderSquare(x, y, [knightX, knightY]) {
  const black = (x + y) % 2 === 1;
  const isKnightHere = knightX === x && knightY === y;
  const piece = isKnightHere ? <Knight /> : null;

  return <Square black={black}>{piece}</Square>;
}

export default renderSquare;

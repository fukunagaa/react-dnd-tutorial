import React from "react";
import { ItemTypes } from "../dnd/constants";
import { useDrag, DragPreviewImage } from "react-dnd";

function Knight() {
  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: ItemTypes.KNIGHT },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  const knightImage = "uma.png";
  return (
    <>
      <DragPreviewImage connect={preview} src={knightImage} />
      <div
        ref={drag}
        style={{
          opacity: isDragging ? 0.5 : 1,
          fontSize: 25,
          fontWeight: "bold",
          cursor: "move",
        }}
      >
        ♘
      </div>
    </>
  );
}

export default Knight;

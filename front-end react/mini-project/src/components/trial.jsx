import React from "react";
import { DragDropContext, Draggable } from "react-beautiful-dnd";

const Trial = () => {
  const handleDragEnd = (result) => {
    // Check if the item was dropped in a valid destination
    if (!result.destination) return;

    // Rearrange the items based on the drag and drop result
    // Update your logic here to handle the new position of the div
    const divPosition = {
      x: result.destination.x,
      y: result.destination.y,
    };
    console.log(divPosition);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Draggable draggableId="div" index={0}>
        {(provided) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className="drag-item"
          >
            Drag me!
          </div>
        )}
      </Draggable>
    </DragDropContext>
  );
};

export default Trial;

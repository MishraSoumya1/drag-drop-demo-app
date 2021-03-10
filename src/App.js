import React, { useState } from "react";
import Column from "./Components/Column";
import { DragDropContext } from "react-beautiful-dnd";
import { initial_data } from "./data/initial-data";

const App = () => {
  const [initialData, setInitialData] = useState(initial_data);

  const swap = (arr, srcIndex, destIndex, draggableId) => {
    console.log(draggableId);
    arr.splice(srcIndex, 1);
    arr.splice(destIndex, 0, draggableId);
    return arr;
  };

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;
    if (destination === null) {
      return;
    } else if (
      source.index === destination.index &&
      source.draggableId === destination.draggableId
    ) {
      return;
    }

    const column = initialData.columns[source.droppableId];
    let finalSwap = swap(
      column.taskIds,
      source.index,
      destination.index,
      draggableId
    );
    initialData.columns[source.droppableId].taskIds = finalSwap;
    setInitialData({ ...initialData });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {initialData.columnOrder.map((columnId) => {
        const column = initialData.columns[columnId];
        const tasks = column.taskIds.map((taskId) => initialData.tasks[taskId]);
        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </DragDropContext>
  );
};

export default App;

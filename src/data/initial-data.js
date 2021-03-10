export const initial_data = {
  tasks: {
    "task-1": { id: "task-1", content: "takeout the car" },
    "task-2": { id: "task-2", content: "Refuel the car" },
    "task-3": { id: "task-3", content: "Cook dinner" },
    "task-4": { id: "task-4", content: "Code JS" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
  },
  // facilitate reordering of the column
  columnOrder: ["column-1"],
};

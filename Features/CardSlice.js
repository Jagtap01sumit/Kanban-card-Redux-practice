import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: "1",
      title: "title of the task",
      description: "description of the task",
      status: "pending",
      assignedTo: "sumit",
    },
  ],
};
export const taskSlice = createSlice({
  name: "cardData",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const task = {
        id: nanoid(),
        title: action.payload.title,
        description: action.payload.description,
        status: action.payload.status,
        assignedTo: action.payload.assignedTo,
      };

      state.tasks.push(task);
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id == !action.payload.id);
    },
  },
});

export const { addTask, removeTask } = taskSlice.actions;

export default taskSlice.reducer;

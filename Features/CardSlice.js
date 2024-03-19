import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: "1",
      title: "Task 1",
      description:
        "This is a detailed description of Task 1. It includes all the information necessary to understand the task and its requirements. ",
      status: "Pending",
      assignedTo: "Sumit",
    },
    {
      id: "2",
      title: "Task 2",
      description:
        "This is a detailed description of Task 2. It includes all the information necessary to understand the task and its requirements.",
      status: "Pending",
      assignedTo: "John",
    },
    {
      id: "3",
      title: "Task 3",
      description:
        "This is a detailed description of Task 3. It includes all the information necessary to understand the task and its requirements. ",
      status: "Working",
      assignedTo: "Amit",
    },
    {
      id: "4",
      title: "Task 4",
      description:
        "This is a detailed description of Task 4. It includes all the information necessary to understand the task and its requirements. ",
      status: "Complete",
      assignedTo: "Sumit",
    },
    {
      id: "5",
      title: "Task 5",
      description:
        "This is a detailed description of Task 5. It includes all the information necessary to understand the task and its requirements.",
      status: "Pending",
      assignedTo: "John",
    },
    {
      id: "6",
      title: "Task 6",
      description:
        "This is a detailed description of Task 6. It includes all the information necessary to understand the task and its requirements.",
      status: "Working",
      assignedTo: "Amit",
    },
    {
      id: "7",
      title: "Task 7",
      description:
        "This is a detailed description of Task 7. It includes all the information necessary to understand the task and its requirements.",
      status: "Complete",
      assignedTo: "Sumit",
    },
    {
      id: "8",
      title: "Task 8",
      description:
        "This is a detailed description of Task 8. It includes all the information necessary to understand the task and its requirements.",
      status: "Pending",
      assignedTo: "John",
    },
    {
      id: "9",
      title: "Task 9",
      description:
        "This is a detailed description of Task 9. It includes all the information necessary to understand the task and its requirements.",
      status: "Complete",
      assignedTo: "Amit",
    },
    {
      id: "10",
      title: "Task 10",
      description:
        "This is a detailed description of Task 10. It includes all the information necessary to understand the task and its requirements.",
      status: "Working",
      assignedTo: "Sumit",
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
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    },

    updateStatus: (state, action) => {
      const { id, status } = action.payload;
      const taskToUpdate = state.tasks.find((task) => task.id === id);

      if (taskToUpdate) {
        taskToUpdate.status = status;
      }
    },
    updateTask: (state, action) => {
      const { id, title, description, assignedTo, status } = action.payload;

      const currenttask = state.tasks.find((task) => task.id === id);
      if (currenttask) {
        currenttask.title = title;
        currenttask.description = description;
        currenttask.assignedTo = assignedTo;
        currenttask.status = status;
      }
    },
  },
});
export const { addTask, removeTask, updateStatus, updateTask } =
  taskSlice.actions;

export default taskSlice.reducer;

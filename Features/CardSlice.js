import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: "1",
      title: "title of the task",
      description:
        "description of the task description of the taskdescription of the taskdescription of the taskdescription of the task",
      status: "Pending",
      assignedTo: "sumit",
    },
    {
      id: "2",
      title: "title of the task",
      description:
        "description of the task description of the taskdescription of the taskdescription of the taskdescription of the task",
      status: "Pending",
      assignedTo: "sumit",
    },
    {
      id: "3",
      title: "title of the task",
      description:
        "description of the task description of the taskdescription of the taskdescription of the taskdescription of the task",
      status: "Working",
      assignedTo: "sumit",
    },
    {
      id: "4",
      title: "title of the task",
      description:
        "description of the task description of the taskdescription of the taskdescription of the taskdescription of the task",
      status: "Complete",
      assignedTo: "sumit",
    },
    {
      id: "5",
      title: "title of the task",
      description:
        "description of the task description of the taskdescription of the taskdescription of the taskdescription of the task",
      status: "Pending",
      assignedTo: "sumit",
    },
    {
      id: "6",
      title: "title of the task",
      description:
        "description of the task description of the taskdescription of the taskdescription of the taskdescription of the task",
      status: "Working",
      assignedTo: "sumit",
    },
    {
      id: "7",
      title: "title of the task",
      description:
        "description of the task description of the taskdescription of the taskdescription of the taskdescription of the task",
      status: "Complete",
      assignedTo: "sumit",
    },
    {
      id: "8",
      title: "title of the task",
      description:
        "description of the task description of the taskdescription of the taskdescription of the taskdescription of the task",
      status: "Pending",
      assignedTo: "sumit",
    },
    {
      id: "9",
      title: "title of the task",
      description:
        "description of the task description of the taskdescription of the taskdescription of the taskdescription of the task",
      status: "Complete",
      assignedTo: "sumit",
    },
    {
      id: "10",
      title: "title of the task",
      description:
        "description of the task description of the taskdescription of the taskdescription of the taskdescription of the task",
      status: "Working",
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

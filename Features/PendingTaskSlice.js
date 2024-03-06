import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pendingTasks: [],
};

export const pendingTaskSlice = createSlice({
  name: "pendingtasks",
  initialState,
  reducers: {
    filterPendingTasks: (state, action) => {
      // Filtering tasks from the original task state based on status "Pending"
      const pendingTasks = state.tasks.filter((t) => t.status === "Pending");
      console.log(pendingTasks, "ppp");
      // Updating the state with the filtered pending tasks
      state.pendingTasks = pendingTasks;
    },
  },
});

export const { filterPendingTasks } = pendingTaskSlice.actions;
export default pendingTaskSlice.reducer;

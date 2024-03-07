import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pendingTasks: [],
};

export const pendingTaskSlice = createSlice({
  name: "pendingtasks",
  initialState,
  reducers: {
    filterPendingTasks: (state, action) => {
      const pendingTasks = state.tasks.filter((t) => t.status === "Pending");
      console.log(pendingTasks, "ppp");

      state.pendingTasks = pendingTasks;
    },
  },
});

export const { filterPendingTasks } = pendingTaskSlice.actions;
export default pendingTaskSlice.reducer;

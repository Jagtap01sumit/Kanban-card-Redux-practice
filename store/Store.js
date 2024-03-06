import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "@/Features/CardSlice";
import themeReducer from "@/Features/ThemeSlice";
import employeesReducer from "@/Features/EmployeesSlice";
import pendingTaskReducer from "@/Features/PendingTaskSlice";

const store = configureStore({
  reducer: {
    tasks: taskReducer, // Assuming tasks is the slice managed by taskReducer
    themes: themeReducer,
    employees: employeesReducer,
    pendingtasks: pendingTaskReducer,
  },
});
export default store;

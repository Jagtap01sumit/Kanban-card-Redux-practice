import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "@/Features/CardSlice";
import themeReducer from "@/Features/ThemeSlice";
const store = configureStore({
  reducer: {
    tasks: taskReducer, // Assuming tasks is the slice managed by taskReducer
    themes: themeReducer,
  },
});
export default store;

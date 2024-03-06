import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  employees: [
    {
      id: 1,
      name: "John",
      age: "32",
      email: "john@example.com",
      designation: "Web Developer",
    },
    {
      id: 2,
      name: "Sumit",
      age: "32",
      email: "john@example.com",
      designation: "Web Developer",
    },
    {
      id: 3,
      name: "Amit",
      age: "32",
      email: "john@example.com",
      designation: "Web Developer",
    },
  ],
};

export const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmploye: (state, action) => {
      const id = nanoid();
      console.log(action.payload, "action.payload");
      const empdata = {
        id: id,
        name: action.payload.name,
        email: action.payload.email,
        designation: action.payload.designation,
        age: action.payload.age,
      };
      state.employees.push(empdata);
    },
  },
});

export const { addEmploye } = employeesSlice.actions;
export default employeesSlice.reducer;

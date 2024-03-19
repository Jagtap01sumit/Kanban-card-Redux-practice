import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  employees: [
    {
      id: 1,
      name: "John",
      age: "32",
      email: "john@example.com",
      designation: "Tester",
    },
    {
      id: 2,
      name: "Sumit",
      age: "21",
      email: "sumit@example.com",
      designation: "Software Developer",
    },
    {
      id: 3,
      name: "Amit",
      age: "30",
      email: "amit@example.com",
      designation: "Designer",
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
    removeEmploye: (state, action) => {
      const idToRemove = action.payload;
      console.log(idToRemove);
      state.employees = state.employees.filter((emp) => emp.id !== idToRemove);
    },
    updateEmployeData: (state, action) => {
      const { id, name, age, designation, email } = action.payload;
      console.log(action.payload);
      const currentemp = state.employees.find((emp) => emp.id === id);
      if (currentemp) {
        currentemp.name = name;
        currentemp.age = age;
        currentemp.email = email;
        currentemp.designation = designation;
      }
    },
  },
});

export const { addEmploye, removeEmploye, updateEmployeData } =
  employeesSlice.actions;
export default employeesSlice.reducer;

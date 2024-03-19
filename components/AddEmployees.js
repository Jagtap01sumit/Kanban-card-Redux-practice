import { addEmploye } from "@/Features/EmployeesSlice";
import { colors } from "@/themes";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AddEmployees({ empForm, setEmpForm }) {
  const theme = useSelector((state) => state.themes.theme);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [designation, setDesignation] = useState("");
  const [email, setEmail] = useState("");
  const activeColors = colors[theme];
  const dispatch = useDispatch();

  const addEmpHandler = (e) => {
    e.preventDefault();
    console.log(
      {
        name,
        age,
        email,
        designation,
      },
      "data data"
    );
    dispatch(
      addEmploye({
        name,
        age,
        email,
        designation,
      })
    );
    console.log(e);
    setEmpForm(false);
  };
  return (
    <div className="flex flex-col m-5  w-full ">
      <div className=" mb-2 text-sm font-medium text-gray-900 dark:text-white  flex items-center justify-center w-full">
        Add New Employee
      </div>
      <form
        className="flex mx-auto w-full "
        onSubmit={addEmpHandler}
        style={{
          backgroundColor: activeColors.primary,
          color: activeColors.tertiary,
        }}
      >
        <div className="grid grid-cols-1 gap-4 w-full">
          <div className="mb-2">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              style={{
                backgroundColor: activeColors.primary,
                color: activeColors.tertiary,
              }}
            >
              Employe Name
            </label>
            <input
              type="text"
              id="base-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              style={{
                backgroundColor: activeColors.primary,
                color: activeColors.tertiary,
              }}
            >
              Age
            </label>
            <input
              type="integer"
              id="base-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              style={{
                backgroundColor: activeColors.primary,
                color: activeColors.tertiary,
              }}
            >
              Designation
            </label>
            <input
              type="text"
              id="base-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              style={{
                backgroundColor: activeColors.primary,
                color: activeColors.tertiary,
              }}
            >
              email
            </label>
            <input
              type="text"
              id="base-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
}

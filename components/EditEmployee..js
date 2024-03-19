import { updateEmployeData } from "@/Features/EmployeesSlice";
import { colors } from "@/themes";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function EditEmployee({ id, setOpenEdit }) {
  const [newAge, setNewAge] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newDesignation, setNewDesignation] = useState("");
  const [newName, setNewName] = useState("");
  const [empid, setEmpId] = useState("");
  const theme = useSelector((state) => state.themes.theme);
  let activeColors = colors[theme];
  const allemployee = useSelector((state) => state.employees.employees);
  console.log("id", id);
  const employee = allemployee.find((emp) => emp.id === id);
  const dispatch = useDispatch();
  useEffect(() => {
    if (employee) {
      setNewName(employee.name || "");
      setNewEmail(employee.email || "");
      setNewAge(employee.age || "");
      setNewDesignation(employee.designation || "");
    }
  }, [employee]);

  const saveEditedForm = (e) => {
    e.preventDefault();
    console.log(newAge, newDesignation, newName, newEmail);
    console.log(id);
    dispatch(
      updateEmployeData({
        id: id,
        name: newName,
        age: newAge,
        designation: newDesignation,
        email: newEmail,
      })
    );
    setOpenEdit(false);
  };
  return (
    <div className="w-full lg:p-10 md:p-8 p-5 flex items-center justify-center border rounded-3xl  transition-opacity duration-300 ease-in-out ">
      <div className="flex flex-col m-5 w-full">
        <div>
          <div className="mb-2 text-sm font-medium text-gray-900 dark:text-white flex items-center justify-center w-full">
            Edit Employee Information
          </div>
          <form
            className="flex mx-auto w-full"
            onSubmit={saveEditedForm}
            style={{
              backgroundColor: activeColors.secondary,
              color: activeColors.tertiary,
            }}
          >
            <div className="grid grid-cols-1 gap-4 w-full">
              <div className="mb-2">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  style={{
                    backgroundColor: activeColors.secondary,
                    color: activeColors.tertiary,
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="base-input"
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                />
              </div>

              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                style={{
                  backgroundColor: activeColors.secondary,
                  color: activeColors.tertiary,
                }}
              >
                Age
              </label>
              <input
                id="message"
                type="number"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={newAge}
                onChange={(e) => setNewAge(e.target.value)}
              />

              <div className="mb-2">
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  style={{
                    backgroundColor: activeColors.secondary,
                    color: activeColors.tertiary,
                  }}
                >
                  Email
                </label>
                <input
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                ></input>
              </div>
              <div className="mb-2">
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  style={{
                    backgroundColor: activeColors.secondary,
                    color: activeColors.tertiary,
                  }}
                >
                  Designation
                </label>{" "}
                <input
                  type="text"
                  id="base-input"
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={newDesignation}
                  onChange={(e) => setNewDesignation(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* )} */}
    </div>
  );
}

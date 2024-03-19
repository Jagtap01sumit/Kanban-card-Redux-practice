import { colors } from "@/themes";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddEmployees from "./AddEmployees";
import EditEmployee from "./EditEmployee.";
import { useDispatch } from "react-redux";
import { removeEmploye } from "@/Features/EmployeesSlice";

export default function EmployeesTable({ empForm }) {
  const employees = useSelector((state) => state.employees.employees);
  const [openEdit, setOpenEdit] = useState(false);
  const [empid, setEmpId] = useState("");
  const theme = useSelector((state) => state.themes.theme);
  const activeColors = colors[theme];

  const dispatch = useDispatch();
  const removeEmployee = (id) => {
    dispatch(removeEmploye(id));
  };
  const editEmployee = (e, id) => {
    e.preventDefault();
    setOpenEdit(true);
    console.log(id);
    setEmpId(id);
  };
  return (
    <div
      className={`relative overflow-x-auto shadow-md sm:rounded-lg h-screen p-5 ${
        empForm ? "blur-sm" : ""
      }`}
    >
      {" "}
      <table
        className="w-full text-sm text-left rtl:text-right"
        style={{
          backgroundColor: activeColors.primary,
          color: activeColors.tertiary,
        }}
      >
        {" "}
        {openEdit ? (
          <div
            className="w-full absolute top-20 shadow-2xl justify-center  lg:w-2/5 md:w-3/5 flex  rounded-3xl "
            style={{
              backgroundColor: activeColors.secondary,
              color: activeColors.tertiary,
            }}
          >
            <EditEmployee id={empid} setOpenEdit={setOpenEdit} />
          </div>
        ) : null}
        <thead
          className="text-xs  uppercase bg-gray-50 rounded-2xl  "
          style={{
            backgroundColor: activeColors.secondary,
            color: activeColors.tertiary,
          }}
        >
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Age
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Designation
            </th>
            <th scope="col" className="px-6 py-3">
              Edit
            </th>
            <th scope="col" className="px-6 py-3">
              Delete
            </th>
          </tr>
        </thead>
        {employees.map((emp) => (
          <tbody key={emp.id}>
            <tr className="">
              <th
                scope="row"
                className="px-6 py-4 font-medium "
                style={{
                  backgroundColor: activeColors.primary,
                  color: activeColors.tertiary,
                }}
              >
                {emp.name}
              </th>
              <td className="px-6 py-4">{emp.age}</td>
              <td className="px-6 py-4">{emp.email}</td>
              <td className="px-6 py-4">{emp.designation}</td>
              <td className="px-6 py-4">
                <a
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  onClick={(e) => editEmployee(e, emp.id)}
                >
                  Edit
                </a>
              </td>
              <td className="px-6 py-4">
                <a
                  className="font-medium text-red-600 dark:text-red-500 hover:underline"
                  onClick={() => removeEmployee(emp.id)}
                >
                  Delete
                </a>
              </td>
            </tr>{" "}
          </tbody>
        ))}
      </table>
    </div>
  );
}

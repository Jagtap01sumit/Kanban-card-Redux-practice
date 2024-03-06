import { colors } from "@/themes";
import React from "react";
import { useSelector } from "react-redux";

export default function EmployeesTable({ empForm }) {
  const employees = useSelector((state) => state.employees.employees);
  const theme = useSelector((state) => state.themes.theme);
  const activeColors = colors[theme];
  console.log(employees);
  console.log(empForm);
  return (
    <div
      className={`relative overflow-x-auto shadow-md sm:rounded-lg h-screen p-5 ${
        empForm ? "blur-sm" : ""
      }`}
    >
      <table
        className="w-full text-sm text-left rtl:text-right"
        style={{
          backgroundColor: activeColors.primary,
          color: activeColors.tertiary,
        }}
      >
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
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>{" "}
          </tbody>
        ))}
      </table>
    </div>
  );
}

import { removeTask, addTask, updateStatus } from "@/Features/CardSlice";
import { toggleTheme } from "@/Features/ThemeSlice";
import AddTasks from "@/components/AddTasks";
import { colors } from "@/themes";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Tasks from "@/components/Tasks";
import EmployeesTable from "@/components/EmployeesTable";
import AddEmployees from "@/components/AddEmployees";
import Change from "@/components/Change";
library.add(faPenToSquare);
library.add(faTrash);
export default function Home() {
  const router = useRouter();
  const theme = useSelector((state) => state.themes.theme);
  const tasklist = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  let activeColors = colors[theme];

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };
  // console.log(tasklist);

  const [open, setOpen] = useState(false);
  const [openEmp, setOpenEmp] = useState(false);
  const [empForm, setEmpForm] = useState(false);
  const [change, setChange] = useState(false);

  return (
    <div
      className="h-full"
      style={{
        backgroundColor: activeColors.secondary,
        color: activeColors.tertiary,
      }}
    >
      <div
        style={{
          backgroundColor: activeColors.secondary,
          color: activeColors.tertiary,
        }}
        className="w-full h-full flex items-center justify-center p-5 "
      >
        <div
          className={`w-11/12 h-5/6 rounded-xl`}
          style={{
            backgroundColor: activeColors.primary,
            color: activeColors.tertiary,
          }}
        >
          <div className="flex items-center lg:justify-center justify-between m-5 rounded-2xl flex-col lg:flex-row md:flex-row">
            <>
              <div className="flex w-full items-between justify-between mx-5">
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
                  onClick={() => setOpenEmp(!openEmp)}
                >
                  {openEmp ? "Tasks" : "Employees"}
                </button>

                <button
                  type="button"
                  className={` ${
                    theme === "dark" ? "text-white" : "text-black"
                  } bg-gradient-to-r  hover:bg-gradient-to-br focus:ring-1 focus:outline-none  shadow-lg  font-medium rounded-lg text-lg text-center px-2 mb-4 lg:mb-0 md:mb-0 `}
                  onClick={handleThemeToggle}
                >
                  {theme === "dark" ? (
                    <FontAwesomeIcon icon={faSun} />
                  ) : (
                    <FontAwesomeIcon icon={faMoon} />
                  )}
                </button>
              </div>
              <div className="flex w-full items-between justify-between mx-5">
                <button
                  type="button"
                  className={` ${
                    theme === "dark" ? "text-white" : "text-black"
                  } bg-gradient-to-r  hover:bg-gradient-to-br focus:ring-1 focus:outline-none  shadow-lg  font-medium rounded-lg text-lg text-center px-2  `}
                  onClick={() => setChange(!change)}
                >
                  Changes
                </button>
                {openEmp ? (
                  <button
                    type="button"
                    className="dark:text-white text-black bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    onClick={() => setEmpForm(!empForm)}
                  >
                    Add Emplyee
                  </button>
                ) : (
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    onClick={() => setOpen(!open)}
                  >
                    Add Task
                  </button>
                )}
              </div>
            </>
          </div>

          {openEmp ? (
            <EmployeesTable empForm={empForm} />
          ) : (
            <Tasks open={open} change={change} />
          )}
        </div>
        {open ? (
          <div
            className="absolute top-40 justify-center lg:w-2/5 w-3/5 flex  rounded-3xl"
            style={{
              backgroundColor: activeColors.primary,
              color: activeColors.tertiary,
            }}
          >
            <AddTasks open={open} setOpen={setOpen} />
          </div>
        ) : null}
        {empForm ? (
          <div
            className="absolute top-40 justify-center lg:w-2/5 w-3/5 flex border rounded-3xl"
            style={{
              backgroundColor: activeColors.primary,
              color: activeColors.tertiary,
            }}
          >
            <AddEmployees empForm={empForm} setEmpForm={setEmpForm} />
          </div>
        ) : null}

        {change ? (
          <div className="absolute top-24 rounded-xl bg-blue-400">
            <Change />
          </div>
        ) : null}
      </div>
    </div>
  );
}

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
import { useRouter } from "next/router";
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
  console.log(tasklist);

  const removeTaskButton = (id) => {
    console.log(id);
    dispatch(removeTask({ id }));
  };
  const [open, setOpen] = useState(false);
  const [openEmp, setOpenEmp] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [assignedTo, setAssignedTo] = useState("");

  const statusBtnColor =
    status === "Pending"
      ? "red-300"
      : status === "Working"
      ? "gray-400"
      : status === "Complete"
      ? "green-300"
      : "blue-500";
  const addtaskHandler = (e) => {
    e.preventDefault();
    dispatch(
      addTask({
        title: title,
        description: description,
        status: status,
        assignedTo: assignedTo,
      })
    );
    setTitle("");
    setDescription("");
    setStatus("");
    setAssignedTo("");
  };

  const toggleStatus = (id) => {
    const currentTask = tasklist.find((task) => task.id === id);

    if (currentTask) {
      let newStatus;
      switch (currentTask.status) {
        case "Pending":
          newStatus = "Working";
          break;
        case "Working":
          newStatus = "Complete";
          break;

        default:
          newStatus = "Pending";
      }

      dispatch(updateStatus({ id, status: newStatus }));
    }
  };
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
        className="w-screen h-full flex items-center justify-center p-5 "
      >
        <div
          className={`w-11/12 h-5/6 rounded-xl`}
          style={{
            backgroundColor: activeColors.primary,
            color: activeColors.tertiary,
          }}
        >
          <div className="flex items-center justify-between m-5 rounded-2xl">
            <>
              <button
                type="button"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
                onClick={() => setOpenEmp(!openEmp)}
              >
                Employees
              </button>
              <button
                type="button"
                className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                onClick={handleThemeToggle}
              >
                {theme}
              </button>
              <button
                type="button"
                className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                onClick={() => setOpen(!open)}
              >
                Add Task
              </button>
            </>
          </div>

          <div
            className={`grid lg:grid-cols-4 md:grid-cols-2 grid-col-1 ${
              open ? "blur-sm" : "blur-none"
            }`}
          >
            {Array.isArray(tasklist) &&
              tasklist.map((task) => (
                <div className="m-5 shadow-lg " key={task.id}>
                  <div
                    class="max-w-sm p-3 bg-white border  rounded-lg shadow dark:bg-gray-800 dark:border-gray-200"
                    style={{
                      backgroundColor: activeColors.secondary,
                      color: activeColors.tertiary,
                    }}
                  >
                    <a href="#">
                      <h5
                        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                        style={{
                          backgroundColor: activeColors.secondary,
                          color: activeColors.tertiary,
                        }}
                      >
                        {task.title}
                      </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 flex-wrap">
                      {task.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <button
                        className={` flex justify-center inline-flex items-center m-1 w-full px-2 py-2 text-sm font-medium text-center text-white ${
                          task.status === "Pending"
                            ? "bg-red-500"
                            : task.status === "Working"
                            ? "bg-gray-500"
                            : task.status === "Complete"
                            ? "bg-green-500"
                            : "bg-red-600"
                        } rounded-lg hover:bg-${statusBtnColor} focus:ring-4 focus:outline-none focus:${statusBtnColor} dark:${statusBtnColor} dark:hover:${statusBtnColor} dark:focus:${statusBtnColor}`}
                        onClick={() => toggleStatus(task.id)}
                      >
                        {task.status}
                      </button>

                      <button class="inline-flex  justify-center items-center px-2 m-1 py-2 text-sm font-medium w-full text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        {task.assignedTo}
                        <svg
                          class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <button
                        type="button"
                        style={{
                          color: activeColors.tertiary,
                        }}
                        className="text-white bg-gradient-to-r  hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg  dark:shadow-lg  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
                        onClick={() => removeTaskButton(task.id)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                      <button
                        style={{
                          color: activeColors.tertiary,
                        }}
                        className="text-white bg-gradient-to-r  hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg  dark:shadow-lg  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
                      >
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        {open ? (
          <div
            className="absolute top-40 justify-center lg:w-2/5 w-3/5 flex  rounded-3xl"
            style={{
              backgroundColor: activeColors.primary,
              color: activeColors.tertiary,
            }}
          >
            <AddTasks />
          </div>
        ) : null}
      </div>
      {openEmp ? (
        <div className="flex items-center justify-center">
          <div className="absolute ">hello</div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

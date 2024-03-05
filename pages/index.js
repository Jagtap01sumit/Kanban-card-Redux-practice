import { removeTask, addTask } from "@/Features/CardSlice";
import { toggleTheme } from "@/Features/ThemeSlice";
import AddTasks from "@/components/AddTasks";
import { colors } from "@/themes";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
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

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [assignedTo, setAssignedTo] = useState("");

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
        className="w-screen h-full flex items-center justify-center "
      >
        <div
          className={`w-11/12 h-5/6 rounded-xl`}
          style={{
            backgroundColor: activeColors.primary,
            color: activeColors.tertiary,
          }}
        >
          {" "}
          <div className="flex items-center justify-between m-5 rounded-2xl">
            <>
              <button
                type="button"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
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
          {/* <button onClick={handleThemeToggle}>Toggle Theme ({theme})</button> */}
          <div
            className={`grid lg:grid-cols-4 grid-col-1 ${
              open ? "blur-sm" : "blur-none"
            }`}
          >
            {Array.isArray(tasklist) &&
              tasklist.map((task) => (
                <div className="m-5">
                  <div
                    class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
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
                        {task.id}
                      </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 flex-wrap">
                      {task.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <a
                        href="#"
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        {task.status}
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
                      </a>
                      <a
                        href="#"
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
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
                      </a>
                    </div>
                    <div className="my-2 flex items-center justify-between">
                      <button
                        type="button"
                        className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
                        onClick={() => removeTaskButton(task.id)}
                      >
                        Delete
                      </button>
                      <button
                        type="button"
                        className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
                      >
                        Edit
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
    </div>
  );
}

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
export default function Change() {
  const tasklist = useSelector((state) => state.tasks.tasks);
  const theme = useSelector((state) => state.themes.theme);
  const activeColors = colors[theme];

  const removeTaskButton = () => {};
  console.log(tasklist.length);
  const pending = tasklist.filter((item) => item.status === "Pending");
  const complete = tasklist.filter((item) => item.status === "Complete");
  const working = tasklist.filter((item) => item.status === "Working");
  console.log(pending);

  const pendingTasks = useSelector((state) => state.pendingtasks.pendingTasks);
  console.log(pendingTasks);
  return (
    <div className="w-full h-full">
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 w-full">
        <div className="p-2 ">
          <h1 className="flex items-center justify-center font-bold">
            Todo...
          </h1>
          {pending.map((task) => (
            <div
              key={task.id}
              class="max-w-sm p-3 flex  m-3 bg-white border  rounded-lg shadow  hover:shadow-sm hover:shadow-white hover:scale-105 dark:border-gray-100 transition-transform duration-300"
              style={{
                backgroundColor: activeColors.secondary,
                color: activeColors.tertiary,
              }}
            >
              <section>
                <h5
                  class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                  style={{
                    backgroundColor: activeColors.secondary,
                    color: activeColors.tertiary,
                  }}
                >
                  {task.title}
                </h5>

                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 flex-wrap">
                  {task.description}
                </p>
              </section>

              <div className="mt-3 flex flex-col items-center justify-end">
                <button
                  type="button"
                  style={{
                    color: activeColors.tertiary,
                  }}
                  className="text-white bg-gradient-to-r  hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800   font-medium rounded-lg text-sm px-5 py-2.5 text-center   "
                  onClick={() => removeTaskButton(task.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="p-2 ">
          <h1 className="flex items-center justify-center font-bold">
            In Progress
          </h1>
          {working.map((task) => (
            <div
              class="max-w-sm p-3 flex  m-3 bg-white border  rounded-lg shadow dark:bg-gray-800 dark:border-gray-100 hover:shadow-sm hover:shadow-white hover:scale-105 transition-transform duration-300"
              key={task.id}
              style={{
                backgroundColor: activeColors.secondary,
                color: activeColors.tertiary,
              }}
            >
              <section>
                <h5
                  class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                  style={{
                    backgroundColor: activeColors.secondary,
                    color: activeColors.tertiary,
                  }}
                >
                  {task.title}
                </h5>

                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 flex-wrap">
                  {task.description}
                </p>
              </section>

              <div className="mt-3 flex flex-col items-center justify-end">
                <button
                  type="button"
                  style={{
                    color: activeColors.tertiary,
                  }}
                  className="text-white bg-gradient-to-r  hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800   font-medium rounded-lg text-sm px-5 py-2.5 text-center   "
                  onClick={() => removeTaskButton(task.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="p-2 ">
          <h1 className="flex items-center justify-center font-bold">
            Completed
          </h1>
          {complete.map((task) => (
            <div
              class="max-w-sm p-3 flex  m-3 bg-white border  rounded-lg shadow dark:bg-gray-800 dark:border-gray-100 hover:shadow-sm hover:shadow-white hover:scale-105 transition-transform duration-300"
              key={task.id}
              style={{
                backgroundColor: activeColors.secondary,
                color: activeColors.tertiary,
              }}
            >
              <section>
                <h5
                  class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                  style={{
                    backgroundColor: activeColors.secondary,
                    color: activeColors.tertiary,
                  }}
                >
                  {task.title}
                </h5>

                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 flex-wrap">
                  {task.description}
                </p>
              </section>

              <div className="mt-3 flex flex-col items-center justify-end">
                <button
                  type="button"
                  style={{
                    color: activeColors.tertiary,
                  }}
                  className="text-white bg-gradient-to-r  hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800   font-medium rounded-lg text-sm px-5 py-2.5 text-center   "
                  onClick={() => removeTaskButton(task.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTask } from "../Features/CardSlice";
import { colors } from "@/themes";

export default function Edittask({ setEditTask, id }) {
  const theme = useSelector((state) => state.themes.theme);
  const tasklist = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees.employees);

  let activeColors = colors[theme];

  // Find the task with the given ID
  const task = tasklist.find((task) => task.id === id);

  // State to manage the form inputs
  const [newtitle, setnewTitle] = useState("");
  const [newdescription, setnewDescription] = useState("");
  const [newstatus, setnewStatus] = useState("");
  const [newassignedTo, setnewAssignedTo] = useState("");

  // Set initial values when the task changes
  useEffect(() => {
    if (task) {
      setnewTitle(task.title || "");
      setnewDescription(task.description || "");
      setnewStatus(task.status || "");
      setnewAssignedTo(task.assignedTo || "");
    }
  }, [task]);

  const saveEditedForm = (e) => {
    e.preventDefault();

    // Dispatch the updateTask action with the updated values
    dispatch(
      updateTask({
        id,
        title: newtitle,
        description: newdescription,
        status: newstatus,
        assignedTo: newassignedTo,
      })
    );

    // Reset the form state
    setnewTitle("");
    setnewDescription("");
    setnewStatus("");
    setnewAssignedTo("");

    setEditTask(false);
  };

  return (
    <div className="w-full p-10 flex items-center justify-center border border-black rounded-3xl  transition-opacity duration-300 ease-in-out">
      {task && (
        <div className="flex flex-col m-5 w-full">
          <div>
            <div className="mb-2 text-sm font-medium text-gray-900 dark:text-white flex items-center justify-center w-full">
              Edit Task
            </div>
            <form
              className="flex mx-auto w-full"
              onSubmit={saveEditedForm}
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
                    Title
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={newtitle}
                    onChange={(e) => setnewTitle(e.target.value)}
                  />
                </div>

                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  style={{
                    backgroundColor: activeColors.primary,
                    color: activeColors.tertiary,
                  }}
                >
                  Description
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Leave a comment..."
                  value={newdescription}
                  onChange={(e) => setnewDescription(e.target.value)}
                />

                <div className="mb-2">
                  <label
                    htmlFor="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    style={{
                      backgroundColor: activeColors.primary,
                      color: activeColors.tertiary,
                    }}
                  >
                    Assign To
                  </label>
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={newassignedTo}
                    onChange={(e) => setnewAssignedTo(e.target.value)}
                  >
                    {employees.map((emp) => (
                      <option key={emp.id}>{emp.name}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    style={{
                      backgroundColor: activeColors.primary,
                      color: activeColors.tertiary,
                    }}
                  >
                    Status
                  </label>
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={newstatus}
                    onChange={(e) => setnewStatus(e.target.value)}
                  >
                    <option>Pending</option>
                    <option>Completed</option>
                    <option>Working</option>
                    <option>Urgent</option>
                  </select>
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
      )}
    </div>
  );
}

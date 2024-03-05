import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../Features/CardSlice";
import { colors } from "@/themes";
export default function AddTasks() {
  const theme = useSelector((state) => state.themes.theme);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const dispatch = useDispatch();
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
  let activeColors = colors[theme];
  return (
    <div className="flex flex-col m-5  w-full">
      <div className=" mb-2 text-sm font-medium text-gray-900 dark:text-white flex items-center justify-center w-full">
        Add Task
      </div>
      <form
        className="flex mx-auto w-full "
        onSubmit={addtaskHandler}
        style={{
          backgroundColor: activeColors.primary,
          color: activeColors.tertiary,
        }}
      >
        <div className="grid grid-cols-1 gap-4 w-full">
          <div className="mb-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              title
            </label>
            <input
              type="text"
              id="base-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            description
          </label>
          <textarea
            id="message"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Leave a comment..."
            defaultValue={""}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className="mb-2">
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Assign To
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
            >
              <option>emp1</option>
              <option>Emp2</option>
              <option>Emp3</option>
              <option>Emp3t</option>
            </select>
          </div>
          <div className="mb-2">
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Status
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
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
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
}

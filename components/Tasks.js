import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "../Features/CardSlice";
export default function Tasks() {
  const tasklist = useSelector((state) => state.tasks);
  console.log(tasklist);

  const dispatch = useDispatch();

  const removeTaskButton = (id) => {
    dispatch(removeTask(id));
  };
  return (
    <>
      {tasklist.map((task, index) => (
        <div className="w-full max-w-sm" key={task.title}>
          <div className="flex items-center border-b border-teal-500 py-2">
            <div className="text-white appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none">
              {task.id} {task.title}
            </div>
            <div className="text-white appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none">
              {task.description}
            </div>
            <div className="text-white appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none">
              {task.status}
            </div>
            <div className="text-white appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none">
              {task.assignedTo}
            </div>
            <button
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="button"
              onClick={() => removeTaskButton(task.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

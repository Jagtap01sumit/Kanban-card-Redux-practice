import { removeTask, addTask, updateStatus } from "@/Features/CardSlice";
import { toggleTheme } from "@/Features/ThemeSlice";
import AddTasks from "@/components/AddTasks";
import { colors } from "@/themes";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useRouter } from "next/router";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function Change() {
  const allTasks = useSelector((state) => state.tasks.tasks);
  const theme = useSelector((state) => state.themes.theme);
  const activeColors = colors[theme];
  const dispatch = useDispatch();

  const [tasks, setTasks] = useState({
    pending: [],
    working: [],
    complete: [],
  });

  useEffect(() => {
    setTasks({
      pending: allTasks.filter((task) => task.status === "Pending"),
      working: allTasks.filter((task) => task.status === "Working"),
      complete: allTasks.filter((task) => task.status === "Complete"),
    });
  }, [allTasks]);

  const removeTaskButton = (id) => {
    dispatch(removeTask({ id }));
  };

  const handleDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    const updatedTasks = { ...tasks };
    const draggedTask = updatedTasks[source.droppableId][source.index];
    updatedTasks[source.droppableId].splice(source.index, 1);
    updatedTasks[destination.droppableId].splice(
      destination.index,
      0,
      draggedTask
    );

    setTasks(updatedTasks);
  };
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="w-full h-full">
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 w-full">
          <Droppable droppableId="pending">
            {(provided) => (
              <div
                className="p-2 "
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <h1 className="flex items-center justify-center font-bold my-2">
                  Pending
                </h1>
                <div className="rounded-lg bg-red-400 p-2">
                  {tasks.pending.map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          className="max-w-sm p-3 flex  m-3 bg-white border  rounded-lg shadow  hover:shadow-lg shadow-white hover:scale-110 dark:border-gray-100 transform duration-500"
                          style={{
                            backgroundColor: activeColors.secondary,
                            color: activeColors.tertiary,
                            ...provided.draggableProps.style,
                          }}
                        >
                          <section>
                            <h5
                              className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                              style={{
                                backgroundColor: activeColors.secondary,
                                color: activeColors.tertiary,
                              }}
                            >
                              {task.title}
                            </h5>

                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex-wrap">
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
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
          <Droppable droppableId="working">
            {(provided) => (
              <div
                className="p-2 "
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <h1 className="flex items-center justify-center font-bold my-2">
                  In Progress
                </h1>{" "}
                <div className="rounded-lg bg-gray-400 p-2 ">
                  {tasks.working.map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          className="max-w-sm p-3 flex  m-3 bg-white border  rounded-lg shadow  hover:shadow-lg shadow-white hover:scale-110 dark:border-gray-100 transform duration-500"
                          style={{
                            backgroundColor: activeColors.secondary,
                            color: activeColors.tertiary,
                          }}
                        >
                          <section>
                            <h5
                              className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                              style={{
                                backgroundColor: activeColors.secondary,
                                color: activeColors.tertiary,
                              }}
                            >
                              {task.title}
                            </h5>

                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex-wrap">
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
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
          <Droppable droppableId="complete">
            {(provided) => (
              <div
                className="p-2 "
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <h1 className="flex items-center justify-center font-bold my-2">
                  Completed
                </h1>{" "}
                <div className="rounded-lg bg-green-400 p-2">
                  {tasks.complete.map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          className="max-w-sm p-3 flex  m-3 bg-white border  rounded-lg shadow  hover:shadow-lg shadow-white hover:scale-110 dark:border-gray-100 transform duration-500"
                          style={{
                            backgroundColor: activeColors.secondary,
                            color: activeColors.tertiary,
                          }}
                        >
                          <section>
                            <h5
                              className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                              style={{
                                backgroundColor: activeColors.secondary,
                                color: activeColors.tertiary,
                              }}
                            >
                              {task.title}
                            </h5>

                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex-wrap">
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
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
        </div>
      </div>
    </DragDropContext>
  );
}

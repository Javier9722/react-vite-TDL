import { useContext } from "react";
import { TaskCard } from "./TaskCard";
import { TaskContext } from "../context/TaskContext";

export default function TaskList() {
  const { tasks } = useContext(TaskContext);
  if (tasks.length === 0) {
    return <h1>No hay tareas aun</h1>;
  }
  // console.log(props.tasks); // Muestra en consola la lista actualizada

  return (
    <div className="grid grid-cols-4 gap-2 p-4">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} tasks={tasks} />
      ))}
    </div>
  );
}

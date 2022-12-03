import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask, tasks } = useContext(TaskContext);

  const handleSubmit = () => {
    if (tasks.length !== 0) {
      const lastId = tasks[tasks.length - 1].id + 1;

      const newTask = {
        id: lastId,
        title,
        description,
      };
      createTask(newTask);
      setTitle("");
      setDescription("");
    } else {
      const newTask = {
        id: 1,
        title,
        description,
      };
      createTask(newTask);
      setTitle("");
      setDescription("");
    }
  };
  return (
    <div className="max-w-2xl mx-auto bg-slate-800 p-5 mb-4 rounded-md">
      <h1 className="text-center text-slate-300 uppercase font-bold">
        Añadir Tareas
      </h1>
      <form
        className="grid grid-cols-[auto_auto_80px] gap-2  mt-4"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          className="bg-slate-700 p-2 rounded-md"
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <input
          className="bg-slate-700 p-2 rounded-md"
          placeholder="Escribe la descripcion"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <button className="bg-green-500 hover:bg-green-800 rounded-md w-20">
          Save
        </button>
      </form>
    </div>
  );
}

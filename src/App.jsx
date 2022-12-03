import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <main className="bg-zinc-900 h-screen pt-4">
      <div className="container mx-auto">
        <TaskForm />
        <hr />
        <TaskList />
      </div>
    </main>
  );
}

export default App;

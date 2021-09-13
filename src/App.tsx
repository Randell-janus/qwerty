import { useState } from "react";
import TaskList from "./components/TaskList";
import { Types } from "./Types";

const App = () => {
  const [inputDescription, setInputDescription] = useState<string>("");
  const [inputDeadline, setInputDeadline] = useState<number>(1);
  const [tasks, setTasks] = useState<Types[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "task description") {
      setInputDescription(e.target.value);
    } else {
      setInputDeadline(Number(e.target.value));
    }
  };

  const addNewTask = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const newTask = { description: inputDescription, deadline: inputDeadline };

    setTasks([...tasks, newTask]);
    setInputDescription("");
    setInputDeadline(1);
  };

  const deleteTask = (taskToDelete: string): void => {
    setTasks(
      tasks.filter((task) => {
        return task.description !== taskToDelete;
      })
    );
  };

  return (
    <div className="flex items-center justify-center">
      <main className="py-12 px-4 sm:p-12 space-y-4 max-w-2xl w-full">
        {/* TITLE */}
        <h1 className="font-bold">TODO LIST</h1>

        {/* FORM */}
        <form onSubmit={addNewTask} className="p-8 border rounded-xl space-y-4">
          <div className="sm:flex sm:space-x-4 space-y-4 sm:space-y-0">
            <div className="flex-1 space-y-1">
              <p className="font-bold">TASK DESCRIPTION</p>
              <input
                className="input-outline w-full"
                type="text"
                placeholder="study math"
                name="task description"
                value={inputDescription}
                onChange={handleInputChange}
                required
                maxLength={50}
              />
            </div>
            <div className="w-full sm:w-36 space-y-1">
              <p className="font-bold">DEADLINE (DAYS)</p>
              <input
                className="input-outline w-full"
                type="number"
                min="1"
                name="task deadline"
                value={inputDeadline}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <button className="btn-primary-filled font-bold">ADD TASK</button>
        </form>

        {/* LIST */}
        <section className="max-w-2xl rounded-lg space-y-4 h-screen overflow-auto">
          {tasks.map((task: Types, i: number) => (
            <TaskList key={i} task={task} deleteTask={deleteTask} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default App;

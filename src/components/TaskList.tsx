import { Types } from "../Types";

type Props = {
  task: Types;
  deleteTask(taskToDelete: string): void;
};

const TaskList = ({ task, deleteTask }: Props) => {
  return (
    <div className="relative border p-8 rounded-xl">
      <div className="flex items-center justify-between">
        <h3 className="uppercase font-bold overflow-auto py-1 w-11/12">
          {task.description}
        </h3>
        <button
          className="absolute right-5 top-3"
          onClick={() => {
            deleteTask(task.description);
          }}
        >
          <h1 className="font-bold">x</h1>
        </button>
      </div>
      <p className="uppercase font-semibold text-gray-400">
        Deadline in {task.deadline} {task.deadline > 1 ? "days" : "day"}
      </p>
    </div>
  );
};

export default TaskList;

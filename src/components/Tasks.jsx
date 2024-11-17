import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick, themeMode }) {
  const navigate = useNavigate();

  function onSeeDetailsTask(task, themeMode) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    query.set("themeMode", themeMode);
    navigate(`/taskpage?${query.toString()}`);
  }

  return (
    <ul
      className={`${
        themeMode ? "bg-neutral-900" : "bg-blue-100"
      } space-y-4 p-6 rounded-md shadow`}
    >
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`${
              themeMode ? "bg-gray-600 text-white" : "bg-white"
            } w-full text-left text-base font-medium text-black-500 p-2 rounded-md 
            ${task.isCompleted && "line-through text-gray-500"}`}
          >
            {task.title}
          </button>
          <Button
            darkMode={themeMode}
            onClick={() => onSeeDetailsTask(task, themeMode)}
          >
            <ChevronRightIcon />
          </Button>

          <Button
            darkMode={themeMode}
            onClick={() => onDeleteTaskClick(task.id)}
          >
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;

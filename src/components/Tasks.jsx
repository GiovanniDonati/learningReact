import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick, themeMode }) {
  const navigate = useNavigate();

  function onSeeDetailsTask(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/taskpage?${query.toString()}`);
  }

  const themeDark = "bg-gray-500";
  const themeLight = "bg-blue-100";

  return (
    <ul
      className={`${
        themeMode ? themeDark : themeLight
      } space-y-4 p-6 rounded-md shadow`}
    >
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-white w-full text-left text-base font-medium text-black-500 p-2 rounded-md hover:bg-gray-100 
                            ${
                              task.isCompleted && "line-through text-gray-500"
                            }`}
          >
            {task.title}
          </button>
          <Button darkMode={themeMode} onClick={() => onSeeDetailsTask(task)}>
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

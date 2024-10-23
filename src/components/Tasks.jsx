import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsTask(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/taskpage?${query.toString()}`);
  }

  return (
    <ul className="bg-blue-100 space-y-4 p-6 bg-white-100 rounded-md shadow">
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
          <button
            onClick={() => onSeeDetailsTask(task)}
            className="bg-blue-800 text-white p-2 rounded-md text-base font-medium w-10 hover:bg-blue-500"
          >
            <ChevronRightIcon />
          </button>

          <button
            onClick={() => onDeleteTaskClick(task.id)}
            className="bg-blue-800 text-white p-2 rounded-md text-base font-medium w-10 hover:bg-blue-500"
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;

import { useEffect, useState } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";
import { MoonIcon } from "lucide-react";
import Title from "./components/Title";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  //Exemplo de API
  /* useEffect(() => {
    const fetchTasks = async () => {
      //Chamar API
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        {
          method: "GET",
        }
      );
      
      //Pegar o retorno
      const data = await response.json();

      //Armazenar/persistir os dados no state
      setTasks(data);
    };
    fetchTasks();
  }, []); */

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onTaskClick(taskId) {
    const newTask = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTask);
  }

  function onDeleteTaskClick(taskId) {
    const newTask = tasks.filter((task) => task.id !== taskId);
    setTasks(newTask);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-lvh bg-white flex justify-center p-6">
      <div className="absolute w-lvw flex justify-end pr-10 pt-2">
        <button className="">
          <MoonIcon className=" text-gray-800" />
        </button>
      </div>
      <div className="w-[500px] space-y-4">
        <Title>Tasks Control</Title>
        <AddTasks onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          themeMode={true}
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;

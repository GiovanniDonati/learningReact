import { useState } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";
import { MoonIcon } from "lucide-react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      description: "Estudar a biblioteca React",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar JavaScript",
      description: "Estudar a linguagem JavaScript",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar HTML",
      description: "Estudar a linguagem HTML",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId){
    const newTask = tasks.map(task => {
      if(task.id === taskId){
        return {...task, isCompleted: !task.isCompleted}
      }
      return task
    });
    setTasks(newTask)
  }

  return (
    <div className="w-screen h-lvh bg-white flex justify-center p-6">
      <div className="absolute w-lvw flex justify-end pr-10 pt-2">
        <button className="">
          <MoonIcon className=" text-gray-800"/>
        </button>
      </div>
      <div className="w-[500px]">
      <h1 className="text-3xl text-gray-800 font-bold text-center p-4">
        Control Tasks
      </h1>

      <AddTasks/>
      <Tasks tasks={tasks} onTaskClick={onTaskClick}/>
      </div>
    </div>
  );
}

export default App;

import { CirclePlus } from "lucide-react";
import { useState } from "react";
import Input from "./Input";

function AddTasks({ onAddTaskSubmit, themeMode }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  console.log(title, description);

  return (
    <div
      className={`${
        themeMode ? "bg-gray-500" : "bg-blue-100"
      } space-y-4 p-6 bg-white-100 rounded-md shadow flex flex-col`}
    >
      <Input
        type="text"
        placeholder="Digite o titulo da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        className={`${
          themeMode
            ? "bg-blue-300 text-black hover:bg-blue-200"
            : "bg-blue-800 text-white whitehover:bg-blue-500"
        }
      self-end text-base font-bold p-2 gap-2 rounded-md w-full flex justify-center`}
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Preencha todos os campos");
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
      >
        <CirclePlus />
        Adicionar
      </button>
    </div>
  );
}

export default AddTasks;

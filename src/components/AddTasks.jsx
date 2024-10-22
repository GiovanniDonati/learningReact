import { CirclePlus } from "lucide-react"
import { useState } from "react"

function AddTasks({onAddTaskSubmit}){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    console.log(title,description);

    return (
    <div className="bg-blue-100 space-y-4 p-6 bg-white-100 rounded-md shadow flex flex-col">
        <input 
            className="bg-white p-2 rounded-md text-base font-medium text-black-400" 
            type="text" 
            placeholder="Digite o titulo da tarefa" 
            value={title}
            onChange={(event) => setTitle(event.target.value) }
            />
        <input 
            className="bg-white p-2 rounded-md text-base font-medium text-black-400" 
            type="text" 
            placeholder="Digite a descrição da tarefa" 
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            />
        <button 
            onClick={() => {
                if(!title.trim() || !description.trim()){
                    return alert("Preencha todos os campos");
                }
                onAddTaskSubmit(title,description);
                setTitle("");
                setDescription("");
            }}
            className="bg-blue-500 p-2 font-normal rounded-md flex w-10">
            <CirclePlus />
        </button>
    </div>
    )
}

export default AddTasks
import { CirclePlus } from "lucide-react"

function AddTasks(){

    return (
    <div className="bg-blue-100 space-y-4 p-6 bg-white-100 rounded-md shadow flex flex-col mb-8">
        <input className="bg-white p-2 rounded-md text-base font-medium text-black-400" type="text" placeholder="Digite o titulo da tarefa" />
        <input className="bg-white p-2 rounded-md text-base font-medium text-black-400" type="text" placeholder="Digite a descrição da tarefa" />
        <button className="bg-blue-500 p-2 font-normal rounded-md flex w-10">
            <CirclePlus />
        </button>
    </div>
    )
}

export default AddTasks
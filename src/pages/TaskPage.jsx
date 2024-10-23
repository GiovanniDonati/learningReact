import { ArrowLeftCircleIcon } from "lucide-react";
import { useSearchParams } from "react-router-dom";

function TaskPage(){
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description");
    
    return (
        <div className="h-screen w-screen bg-white p-6">
            <div className="w-[500] space-y-4">
                < ArrowLeftCircleIcon className="absolute bg-blue-800 text-white p-2 rounded-md w-10 h-10 hover:bg-blue-500"/>
                <h1 className="text-3xl font-bold text-center text-black">Detalhes da Tarefa</h1>
                <div className="bg-blue-100 p-4 rounded-md space-y-4">
                    <h2 className="p-2 bg-white text-black text-xl font-bold rounded-md">{title}</h2>
                    <p className="p-2 bg-white text-black text-base font-bold">{description}</p>
                </div>
            </div>
        </div>
    )

}
export default TaskPage
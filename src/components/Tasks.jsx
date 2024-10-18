import { ChevronRightIcon } from "lucide-react";

function Tasks(props){
    return ( 
    <ul className="bg-blue-100 space-y-4 p-6 bg-white-100 rounded-md shadow">
        {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
            <button 
                onClick={() => props.onTaskClick(task.id)}
                className="bg-white w-full text-left text-base font-medium text-black-500 p-2 rounded-md hover:bg-gray-100">
                    {task.title}
            </button>
            <button className="bg-blue-800 text-white p-2 rounded-md text-base font-medium w-10 hover:bg-blue-500">
                <ChevronRightIcon/>
            </button>
        </li>
    ))}    
    </ul>
);
};

export default Tasks;
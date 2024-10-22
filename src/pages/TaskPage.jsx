import { UserSearchParams } from "react-router-dom";

function TaskPage(){
    const [searchParams] = UserSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description");
    
    return (
        <div className="bg-white w-full text-left text-base font-medium text-gray-800">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )

}
export default TaskPage
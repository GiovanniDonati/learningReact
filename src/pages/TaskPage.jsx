import { ArrowLeftCircleIcon } from "lucide-react";
import { useSearchParams, useNavigate } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  console.log(title);

  return (
    <div className="h-screen w-screen bg-white p-6 flex justify-center ">
      <div className="w-[500] space-y-4">
        <h1 className="text-3xl font-bold text-center text-black">
          Detalhes da Tarefa
        </h1>
        <div className="w-[500px] bg-blue-100 p-4 rounded-md shadow ">
          <h2 className="p-2 bg-slate-50 text-black text-center text-xl font-bold rounded-t-md">
            {title}
          </h2>
          <hr className="w-full" />
          <p className="p-2 bg-slate-50 text-black text-sm text-center rounded-b-md">
            {description}
          </p>
          <button
            onClick={() => navigate(-1)}
            className="bg-blue-800 text-white flex gap-2 p-2 rounded-md w-24 h-10 hover:bg-blue-500 mt-2"
          >
            <ArrowLeftCircleIcon />
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}
export default TaskPage;

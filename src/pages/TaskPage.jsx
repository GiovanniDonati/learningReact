import { ArrowLeftCircleIcon } from "lucide-react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const themeMode = searchParams.get("themeMode");
  const isDarkMode = themeMode === "true";

  return (
    <div
      className={`flex justify-center w-screen h-screen p-6 ${
        isDarkMode ? "bg-neutral-800" : "bg-white"
      }`}
    >
      <div className="w-[500px] max-lg:w-96 space-y-4">
        <Title themeMode={isDarkMode}>Task Details</Title>
        <div
          className={`w-[500px] max-lg:w-96 p-4 rounded-md shadow ${
            isDarkMode ? "bg-neutral-900" : "bg-blue-100"
          }`}
        >
          <h2
            className={`p-2 text-xl font-bold text-center rounded-t-md ${
              isDarkMode ? "text-white bg-gray-600" : "text-black bg-slate-50"
            }`}
          >
            {title}
          </h2>
          <hr className="w-full" />
          <p
            className={`p-2 text-sm text-center rounded-b-md ${
              isDarkMode ? "text-white bg-gray-600" : "text-black bg-slate-50"
            }`}
          >
            {description}
          </p>
          <button
            onClick={() => navigate(-1)}
            className={`flex font-bold w-24 h-10 gap-2 p-2 mt-2 rounded-md ${
              isDarkMode
                ? "bg-blue-600 text-black hover:bg-blue-400"
                : "bg-blue-800 text-white hover:bg-blue-500"
            }`}
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

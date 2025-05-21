import { useSearchParams } from "react-router-dom";

function TaskPage() {
  const [SearchParams] = useSearchParams();
  const title = SearchParams.get("title");
  const description = SearchParams.get("description");
  return (
    <div className="h-screen w-screen bg-slate-500 p-6">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default TaskPage;

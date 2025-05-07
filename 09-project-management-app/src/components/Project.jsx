import {useContext} from "react";
import Button from "./Button.jsx";
import Tasks from "./Tasks.jsx";
import {ProjectContext} from "../store/project-context.jsx";

export default function Project() {
  const {
    selectedProjectId,
    projects,
    tasks,
    handleDeleteProject,
    handleAddTask,
    handleDeleteTask,
  } = useContext(ProjectContext);
  const { title, description, dueDate } = projects.find(project => project.id === selectedProjectId);

  const formattedDate = new Date(dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className={`w-[35rem] mt-16`}>
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">{title}</h1>
          <Button
            customClass="text-stone-600 hover:text-stone-950"
            onClick={handleDeleteProject}
          >
            Delete
          </Button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">{description}</p>
      </header>
      <Tasks tasks={tasks.filter((task) => task.projectId === selectedProjectId)}
             onAdd={handleAddTask}
             onDelete={handleDeleteTask} />
    </div>
  );
}
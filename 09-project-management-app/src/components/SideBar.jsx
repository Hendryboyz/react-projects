import Button from "./Button.jsx";
import {useContext} from "react";
import {ProjectContext} from "../store/project-context.jsx";

export default function() {
  const {
    selectedProjectId,
    projects,
    handleNewProject,
    handleSelectProject,
  } = useContext(ProjectContext);
  const hoverProjectClass = "hover:text-stone-200 hover:bg-stone-800 hover:cursor-pointer";
  const hoverButtonClass = "hover:bg-stone-600 hover:text-stone-100";
  return (
    <aside className={`bg-black text-stone-50 rounded-r-lg px-8 py-16 w-1/3 md:w-72`}>
      <h2 className="uppercase font-bold md:text-2xl mb-8">Your Projects</h2>
      <Button customClass={`bg-stone-700 text-stone-400 ${hoverButtonClass}`}
              onClick={handleNewProject}>
        + Add Project
      </Button>
      <menu className="mt-8">
        {projects.map(project => {
          const {id, title} = project;
          let cssClasses = `w-full text-left rounded-sm text-base px-2 py-1 my-1 ${hoverProjectClass}`;
          const isSelected = id === selectedProjectId;
          if (isSelected) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += " text-stone-400";
          }
          return (
            <li key={id}>
              <button
                onClick={() => handleSelectProject(id)}
                className={cssClasses}
              >
                {title}
              </button>
            </li>
          );
        })}
      </menu>
    </aside>
  );
}
import Button from "./Button.jsx";

export default function({ onNewProject, projects }) {
  const hoverProjectClass = "hover:text-white hover:bg-gray-900 hover:cursor-pointer";
  const hoverButtonClass = "hover:bg-stone-600 hover:text-stone-100";
  return (
    <aside className={`bg-black text-stone-50 rounded-r-lg px-8 py-16 w-1/3 md:w-72`}>
      <h2 className="uppercase font-bold md:text-2xl mb-8">Your Projects</h2>
      <Button customClass={`bg-stone-700 text-stone-400 mb-8 ${hoverButtonClass}`}
              onClick={onNewProject}>
        + Add Project
      </Button>
      <menu>
        {projects.map(project => (<li
          className={`text-gray-400 text-base pl-2 py-1 mr-8 ${hoverProjectClass}`}>
          {project.title}
        </li>))}
      </menu>
    </aside>
  );
}
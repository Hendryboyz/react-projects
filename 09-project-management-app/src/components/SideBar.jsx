import Button from "./Button.jsx";

export default function({ onNewProject, projects }) {
  const hoverProjectClass = "hover:text-stone-200 hover:bg-stone-800 hover:cursor-pointer";
  const hoverButtonClass = "hover:bg-stone-600 hover:text-stone-100";
  return (
    <aside className={`bg-black text-stone-50 rounded-r-lg px-8 py-16 w-1/3 md:w-72`}>
      <h2 className="uppercase font-bold md:text-2xl mb-8">Your Projects</h2>
      <Button customClass={`bg-stone-700 text-stone-400 ${hoverButtonClass}`}
              onClick={onNewProject}>
        + Add Project
      </Button>
      <menu className="mt-8">
        {projects.map(project => (
        <li key={project.id}>
          <button className={`w-full text-left rounded-sm text-base px-2 py-1 my-1 text-stone-400  ${hoverProjectClass}`}>{project.title}</button>
        </li>))}
      </menu>
    </aside>
  );
}
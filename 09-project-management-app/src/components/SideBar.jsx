import Button from "./Button.jsx";

export default function({ onNewProject, projects }) {
  const hoverClass = "hover:text-white hover:bg-gray-900 hover:cursor-pointer"
  return (
    <aside className={`max-h-full bg-black rounded-tr-lg mt-8 pl-8 w-1/5`}>
      <h1 className="uppercase text-white text-2xl mt-16 mb-8">Your Projects</h1>
      <Button customClass="bg-gray-800 text-gray-400 mb-8" onClick={onNewProject}>+ Add Project</Button>
      <menu>
        {projects.map(project => (<li
          className={`text-gray-400 text-base pl-2 py-1 mr-8 ${hoverClass}`}>
          {project.title}
        </li>))}
      </menu>
    </aside>
  );
}
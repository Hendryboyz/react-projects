import Button from "./Button.jsx";

export default function({ onNewProject }) {
  return (
    <aside className={`h-full bg-black rounded-tr-lg mt-8 pl-8 w-1/5`}>
      <h1 className="uppercase text-white text-2xl mt-16 mb-8">Your Projects</h1>
      <Button customClass="bg-gray-800 text-gray-400" onClick={onNewProject}>+ Add Project</Button>
      <menu>

      </menu>
    </aside>
  );
}
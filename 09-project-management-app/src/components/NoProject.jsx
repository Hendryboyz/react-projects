import noProjectImage from '../assets/no-projects.png'
import Button from "./Button.jsx";
export default function({ onNewProject }) {
  return (
    <section className="flex flex-col items-center">
      <img className="w-24 h-24" src={noProjectImage} alt="no project" />
      <h2 className="text-2xl font-bold text-gray-800 my-6">No Project Selected</h2>
      <p className="text-gray-400 mb-10">Select a project or get started a new one</p>
      <Button customClass="bg-gray-800 text-gray-400" onClick={onNewProject}>Create new project</Button>
    </section>
  );
}
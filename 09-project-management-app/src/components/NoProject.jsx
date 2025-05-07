import noProjectImage from '../assets/no-projects.png'
import Button from "./Button.jsx";
import {useContext} from "react";
import {ProjectContext} from "../store/project-context.jsx";
export default function() {
  const { handleNewProject } = useContext(ProjectContext);
  return (
    <div className="mt-24 text-center">
      <img
        className="w-16 h-16 mx-auto object-contain"
        src={noProjectImage}
        alt="no project" />
      <h2 className="text-xl font-bold text-stone-500 my-4">No Project Selected</h2>
      <p className="text-stone-400 mb-4">Select a project or get started a new one</p>
      <Button
        customClass="mt-8 bg-stone-800 text-stone-400 hover:text-stone-50 hover:bg-stone-850"
        onClick={handleNewProject}>
        Create new project
      </Button>
    </div>
  );
}
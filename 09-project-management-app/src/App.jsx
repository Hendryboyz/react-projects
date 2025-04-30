import {useState} from "react";
import NoProject from "./components/NoProject.jsx";
import SideBar from "./components/SideBar.jsx";
import NewProject from "./components/NewProject.jsx";

function App() {
  const [isProjectCreating, setIsProjectCreating] = useState(false);

  const handleNewProject = () => { setIsProjectCreating(true); };
  const handleCancelNewProject = () => { setIsProjectCreating(false); };

  return (
    <div className="h-svh flex">
      <SideBar onNewProject={handleNewProject} />
      <section className="w-4/5 flex flex-col justify-center items-center">
        {!isProjectCreating && <NoProject onNewProject={handleNewProject} />}
        {isProjectCreating && <NewProject onCancelNewProject={handleCancelNewProject} />}
      </section>
    </div>
);
}

export default App;

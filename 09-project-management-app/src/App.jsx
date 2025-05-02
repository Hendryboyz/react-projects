import {useState} from "react";
import NoProject from "./components/NoProject.jsx";
import SideBar from "./components/SideBar.jsx";
import NewProject from "./components/NewProject.jsx";

function App() {
  const [isProjectCreating, setIsProjectCreating] = useState(false);
  const [projects, setProjects] = useState([]);

  const handleNewProject = () => { setIsProjectCreating(true); };
  const closeNewProject = () => { setIsProjectCreating(false); };

  const handleNewProjectCreate = (title, description, dueDate) => {
    setProjects((pastProjects) => [...pastProjects, {
      title,
      description,
      dueDate,
    }]);
    closeNewProject();
  };

  return (
    <main className="h-screen mt-8 flex gap-8">
      <SideBar onNewProject={handleNewProject} projects={projects} />
      <section className="m-auto">
        {!isProjectCreating && <NoProject onNewProject={handleNewProject} />}
        {isProjectCreating &&
          <NewProject
            onCancelNewProject={closeNewProject}
            onCreateNewProject={handleNewProjectCreate}
          />}
      </section>
    </main>
);
}

export default App;

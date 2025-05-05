import {useState} from "react";
import NoProject from "./components/NoProject.jsx";
import SideBar from "./components/SideBar.jsx";
import NewProject from "./components/NewProject.jsx";
import Project from "./components/Project.jsx";
import newProject from "./components/NewProject.jsx";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const handleNewProject = () => {
    setProjectsState(prevState => ({
      selectedProjectId: null,
      projects: [...prevState.projects]
    }));
  };

  const handleCloseNewProject = () => {
    setProjectsState(prevState => ({
      selectedProjectId: undefined,
      projects: [...prevState.projects]
    }));
  };

  const handleNewProjectCreate = (newProject) => {
    setProjectsState(prevState => ({
      selectedProjectId: undefined,
      projects: [...prevState.projects, {
        ...newProject,
        id: Math.random(),
      }],
    }));
  };

  const handleSelectProject = (projectId) => {
    setProjectsState(prevState => ({
      selectedProjectId: projectId,
      projects: [...prevState.projects]
    }));
  };

  const handleDeleteProject = (projectId) => {};
  return (
    <main className="h-screen mt-8 flex gap-8">
      <SideBar
        onNewProject={handleNewProject}
        onSelectProject={handleSelectProject}
        projects={projectsState.projects}
      />
      <section className="m-auto">
        {projectsState.selectedProjectId === undefined && <NoProject onNewProject={handleNewProject} />}
        {projectsState.selectedProjectId === null &&
          <NewProject
            onCancelNewProject={handleCloseNewProject}
            onCreateNewProject={handleNewProjectCreate}
          />}
        {projectsState.selectedProjectId && <Project
          project={projectsState.projects.find(project => project.id === projectsState.selectedProjectId)}
        />}
      </section>
    </main>
);
}

export default App;

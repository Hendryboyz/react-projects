import {useState} from "react";
import NoProject from "./components/NoProject.jsx";
import SideBar from "./components/SideBar.jsx";
import NewProject from "./components/NewProject.jsx";
import Project from "./components/Project.jsx";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const handleNewProject = () => {
    setProjectsState(prevState => ({
      ...prevState,
      selectedProjectId: null,
    }));
  };

  const handleCloseNewProject = () => {
    setProjectsState(prevState => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  };

  const handleNewProjectCreate = (newProject) => {
    setProjectsState(prevState => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: [...prevState.projects, {
        ...newProject,
        id: Math.random(),
      }],
    }));
  };

  const handleSelectProject = (projectId) => {
    setProjectsState(prevState => ({
      ...prevState,
      selectedProjectId: projectId,
    }));
  };

  const handleDeleteProject = () => {
    setProjectsState(prevState => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId),
    }));
  };

  const handleAddTask = (content) => {
    setProjectsState(prevState => ({
      ...prevState,
      tasks: [...prevState.tasks, {
        id: Math.random(),
        projectId: prevState.selectedProjectId,
        text: content,
      }],
    }));
  };

  const handleDeleteTask = (deletingTaskId) => {
    setProjectsState(prevState => ({
      ...prevState,
      tasks: prevState.tasks.filter((task) => task.id !== deletingTaskId),
    }));
  };

  return (
    <main className="h-screen mt-8 flex gap-8">
      <SideBar
        onNewProject={handleNewProject}
        onSelectProject={handleSelectProject}
        projects={projectsState.projects}
        selectedProjectId={projectsState.selectedProjectId}
      />
      <section className="mx-auto">
        {projectsState.selectedProjectId === undefined && <NoProject onNewProject={handleNewProject} />}
        {projectsState.selectedProjectId === null &&
          <NewProject
            onCancelNewProject={handleCloseNewProject}
            onCreateNewProject={handleNewProjectCreate}
          />}
        {projectsState.selectedProjectId && <Project
          project={projectsState.projects.find(project => project.id === projectsState.selectedProjectId)}
          tasks={projectsState.tasks.filter((task) => task.projectId === projectsState.selectedProjectId)}
          onDelete={handleDeleteProject}
          onAddTask={handleAddTask}
          onDeleteTask={handleDeleteTask}
        />}
      </section>
    </main>
);
}

export default App;

import {createContext, useState} from "react";

export const ProjectContext = createContext({
  selectedProjectId: undefined,
  projects: [],
  tasks: [],
  handleNewProject: () => {},
  handleCloseNewProject: () => {},
  handleNewProjectCreate: (newProject) => {},
  handleSelectProject: (projectId) => {},
  handleDeleteProject: () => {},
  handleAddTask: (content) => {},
  handleDeleteTask: (deletingTaskId) => {},
});

export default function ProjectContextProvider({children}) {
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

  const contextValue = {
    selectedProjectId: projectsState.selectedProjectId,
    projects: projectsState.projects,
    tasks: projectsState.tasks,
    handleNewProject,
    handleCloseNewProject,
    handleNewProjectCreate,
    handleSelectProject,
    handleDeleteProject,
    handleAddTask,
    handleDeleteTask,
  };

  return (
    <ProjectContext.Provider value={contextValue}>
      {children}
    </ProjectContext.Provider>
  );
}
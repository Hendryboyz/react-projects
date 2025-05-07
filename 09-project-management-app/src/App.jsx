import {useContext, useState} from "react";
import NoProject from "./components/NoProject.jsx";
import SideBar from "./components/SideBar.jsx";
import NewProject from "./components/NewProject.jsx";
import Project from "./components/Project.jsx";
import ProjectContextProvider, {ProjectContext} from "./store/project-context.jsx";

function Page() {
  const {
    projects,
    selectedProjectId,
    tasks,
    handleNewProject,
    handleSelectProject,
    handleCloseNewProject,
    handleNewProjectCreate,
    handleDeleteProject,
    handleAddTask,
    handleDeleteTask,
  } = useContext(ProjectContext)

  return (
    <>
      <main className="h-screen mt-8 flex gap-8">
        <SideBar
          onNewProject={handleNewProject}
          onSelectProject={handleSelectProject}
          projects={projects}
          selectedProjectId={selectedProjectId}
        />
        <section className="mx-auto">
          {selectedProjectId === undefined && <NoProject onNewProject={handleNewProject} />}
          {selectedProjectId === null &&
            <NewProject
              onCancelNewProject={handleCloseNewProject}
              onCreateNewProject={handleNewProjectCreate}
            />}
          {selectedProjectId && <Project
            project={projects.find(project => project.id === selectedProjectId)}
            tasks={tasks.filter((task) => task.projectId === selectedProjectId)}
            onDelete={handleDeleteProject}
            onAddTask={handleAddTask}
            onDeleteTask={handleDeleteTask}
          />}
        </section>
      </main>
    </>
  );
}

function App() {
  return (
    <ProjectContextProvider>
      <Page />
    </ProjectContextProvider>
  );
}

export default App;

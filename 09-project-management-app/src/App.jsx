import {useContext} from "react";
import NoProject from "./components/NoProject.jsx";
import SideBar from "./components/SideBar.jsx";
import NewProject from "./components/NewProject.jsx";
import Project from "./components/Project.jsx";
import ProjectContextProvider, {ProjectContext} from "./store/project-context.jsx";

function Page() {
  const { selectedProjectId } = useContext(ProjectContext)

  return (
    <>
      <main className="h-screen mt-8 flex gap-8">
        <SideBar />
        <section className="mx-auto">
          {selectedProjectId === undefined && <NoProject />}
          {selectedProjectId === null && <NewProject />}
          {selectedProjectId && <Project />}
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

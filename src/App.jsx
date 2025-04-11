import Aside from "./components/Aside";
import First from "./components/First";
import AddProject from "./components/AddProject";
import ClickProject from "./components/ClickProject";
import { useState } from "react";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
  const [page, setPage] = useState("first");
  const [projects, setProjects] = useState([]);
  const [projectId, setProjectId] = useState(null);

  const clickTitle = (projectId) => {
    setProjectId(projectId);
    setPage("click");
  };

  return (
    <ThemeProvider>
      <main className="flex gap-8 h-screen my-8">
        <Aside setPage={setPage} projects={projects} clickTitle={clickTitle} projectId={projectId} page={page} />
        <>{page === "add" ? <AddProject setPage={setPage} setProjects={setProjects} /> : page === "click" ? <ClickProject projects={projects} projectId={projectId} setPage={setPage} setProjects={setProjects} /> : <First setPage={setPage} />}</>
      </main>
    </ThemeProvider>
  );
}

export default App;

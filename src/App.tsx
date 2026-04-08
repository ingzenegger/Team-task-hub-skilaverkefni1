import taskLogo from "./assets/tasklogo.svg";

import "./App.css";
import { ProjectSchema } from "./features/projects/schemas";
import { demoProject } from "./data/demoData";
import Sandbox from "./components/sandbox";
import { useProjectStore } from "./hooks/useProjectStore";

ProjectSchema.parse(demoProject);

function App() {
  const projects = useProjectStore((state) => state.projects);

  return (
    <>
      <div>
        <img src={taskLogo} className="h-25" />
        <h1>Welcome to Ingzenegger Task Hub</h1>

        <Sandbox />
        <div>
          <h1>testing store</h1>
          <p>{projects[0].title}</p>
          <p>{projects[0].description}</p>
          <p>test end</p>
        </div>

        {/* <h2>{demoProject.title}</h2>
        <Camera color="green" />
        <p>{demoProject.description}</p>
        <p>Project due date: {demoProject.dueDate?.toLocaleDateString()}</p> */}
      </div>
    </>
  );
}

export default App;

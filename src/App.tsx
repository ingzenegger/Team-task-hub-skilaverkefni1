import taskLogo from "./assets/tasklogo.svg";

import "./App.css";
import { ProjectSchema } from "./features/projects/schemas";
import { demoProject } from "./data/demoData";

ProjectSchema.parse(demoProject);

function App() {
  return (
    <>
      <div>
        <img src={taskLogo} alt="Vite logo" height={100} />
        <h1>Welcome to Ingzenegger Task Hub</h1>
        <h2>{demoProject.title}</h2>
        <p>{demoProject.description}</p>
        <p>Project due date: {demoProject.dueDate?.toLocaleDateString()}</p>
      </div>
    </>
  );
}

export default App;

import taskLogo from "./assets/tasklogo.svg";
import { Camera } from "lucide-react";
import "./App.css";
import { ProjectSchema } from "./features/projects/schemas";
import { demoProject } from "./data/demoData";

ProjectSchema.parse(demoProject);

function App() {
  return (
    <>
      <div>
        <img src={taskLogo} className="h-25" />
        <h1>Welcome to Ingzenegger Task Hub</h1>
        <h2>{demoProject.title}</h2>
        <Camera color="green" />
        <p>{demoProject.description}</p>
        <p>Project due date: {demoProject.dueDate?.toLocaleDateString()}</p>
      </div>
    </>
  );
}

export default App;

import taskLogo from "./assets/tasklogo.svg";

import "./App.css";
import { ProjectSchema } from "./features/projects/schemas";
import { demoProject, demoTask1 } from "./data/demoData";
import Sandbox from "./components/sandbox";
import { useProjectStore } from "./hooks/useProjectStore";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useEffect } from "react";
import { TaskSchema } from "./features/tasks/schemas";

ProjectSchema.parse(demoProject);

function App() {
  const projects = useProjectStore((state) => state.projects);
  const tasks = useProjectStore((state) => state.tasks);
  //fetch projects and tasks data from local storage along with the save functionality
  //TODO: remember to replace the demo data with a [] as default
  const [savedProjects, setProjects] = useLocalStorage(
    "projects",
    ProjectSchema.array(),
    [demoProject],
  );
  const [savedTasks, setTasks] = useLocalStorage("tasks", TaskSchema.array(), [
    demoTask1,
  ]);
  //populate state with saved data from local storage
  useEffect(() => {
    useProjectStore.setState({ projects: savedProjects });
  }, []);
  useEffect(() => {
    useProjectStore.setState({ tasks: savedTasks });
  }, []);
  //save changes in state back to the local storage
  useEffect(() => {
    setProjects(projects);
  }, [projects]);
  useEffect(() => {
    setTasks(tasks);
  }, [tasks]);

  return (
    <>
      <div>
        <img src={taskLogo} className="h-25" />
        <h1>Welcome to Ingzenegger Task Hub</h1>

        <Sandbox />

        <div className={"border-2 border-red-800"}>
          <h1>this demo div lives in the app.tsx</h1>
          <h2>Demo project title: {projects[0].title}</h2>
          <p>Description: {projects[0].description}</p>
          <p>Demo task: {tasks[0].title}</p>
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

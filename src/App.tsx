import "./App.css";
import { ProjectSchema } from "./features/projects/schemas";
import {
  demoProject,
  demoProject2,
  demoTask1,
  demoTask2,
  demoTask3,
  demoTask4,
} from "./data/demoData"; //for building purposes
import { useProjectStore } from "./hooks/useProjectStore";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useEffect } from "react";
import { Routes, Route } from "react-router";
import { TaskSchema } from "./features/tasks/schemas";
import ProjectList from "./features/projects/components/projectList";
import Dashboard from "./features/dashboard/components/dashboard";
import Layout from "./components/layout";

ProjectSchema.parse(demoProject);

function App() {
  const projects = useProjectStore((state) => state.projects);
  const tasks = useProjectStore((state) => state.tasks);
  //fetch projects and tasks data from local storage along with the save functionality
  //TODO: remember to replace the demo data with a [] as default
  const [savedProjects, setProjects] = useLocalStorage(
    "projects",
    ProjectSchema.array(),
    [demoProject, demoProject2],
  );
  const [savedTasks, setTasks] = useLocalStorage("tasks", TaskSchema.array(), [
    demoTask1,
    demoTask2,
    demoTask3,
    demoTask4,
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
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/projects" element={<ProjectList />} />
      </Routes>
    </Layout>
  );
}

export default App;

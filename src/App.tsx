import "./App.css";
import { ProjectSchema } from "./features/projects/schemas";

import { useProjectStore } from "./hooks/useProjectStore";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useEffect, useRef } from "react";
import { Routes, Route } from "react-router";
import { TaskSchema } from "./features/tasks/schemas";
import ProjectList from "./features/projects/components/projectList";
import Dashboard from "./features/dashboard/components/dashboard";
import Layout from "./components/layout";
import ProjectForm from "./features/projects/components/ProjectForm/projectForm";

function App() {
  const projects = useProjectStore((state) => state.projects);
  const tasks = useProjectStore((state) => state.tasks);
  const projectsLoaded = useRef(false);
  const tasksLoaded = useRef(false);
  //fetch projects and tasks data from local storage along with the save functionality

  const [savedProjects, setProjects] = useLocalStorage(
    "projects",
    ProjectSchema.array(),
    [],
  );
  const [savedTasks, setTasks] = useLocalStorage(
    "tasks",
    TaskSchema.array(),
    [],
  );
  //populate state with saved data from local storage
  useEffect(() => {
    useProjectStore.setState({ projects: savedProjects });
    projectsLoaded.current = true;
  }, []);
  useEffect(() => {
    useProjectStore.setState({ tasks: savedTasks });
    tasksLoaded.current = true;
  }, []);
  //save changes in state back to the local storage
  useEffect(() => {
    if (!projectsLoaded.current) return;
    setProjects(projects);
  }, [projects]);
  useEffect(() => {
    if (!tasksLoaded.current) return;
    setTasks(tasks);
  }, [tasks]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/projects/new" element={<ProjectForm />} />
      </Routes>
    </Layout>
  );
}

export default App;

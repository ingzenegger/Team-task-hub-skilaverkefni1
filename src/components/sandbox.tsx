// import { demoProject } from "@/data/demoData";
// import { ProjectSchema } from "@/features/projects/schemas";
// import type { Project } from "@/features/projects/types";
// import { useLocalStorage } from "@/hooks/useLocalStorage";

import { useProjectStore } from "@/hooks/useProjectStore";

function Sandbox() {
  // const projectID = Math.random().toString(36).substring(2, 9);
  // const [projects, setProjects]: Project = useLocalStorage(
  //   "projects",
  //   ProjectSchema,
  //   [],
  // );
  // const today = Date.now();

  const projects = useProjectStore((state) => state.projects);
  const tasks = useProjectStore((state) => state.tasks);

  return (
    <div className={"border-blue-500 border-2 rounded-md p-2 m-2"}>
      <h1>this box is my sandbox component for playing around</h1>
      <h2>first project in state: {projects[0].title}</h2>
      <p>description: {projects[0].description}</p>
      <p>task description: {tasks[0].description}</p>
      {/* <h2>Testing Sandbox</h2>
      <pre>{JSON.stringify(projects, null, 2)}</pre>
      <button
        className={"border border-red-500 rounded md p-1 m-2"}
        onClick={() =>
          setProjects([
            ...projects,
            {
              id: projectID,
              status: "planned",
              title: "New Project",
              description: "Dummy project you dummy",
              createdOn: today,
            },
          ])
        }
      >
        Add Dummy project
      </button>
      <button
        className={"border border-red-500 rounded md p-1"}
        onClick={() => setProjects([])}
      >
        Clear State
      </button> */}
    </div>
  );
}

export default Sandbox;

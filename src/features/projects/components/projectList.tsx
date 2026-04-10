import { useProjectStore } from "@/hooks/useProjectStore";
import ProjectCard from "./projectCard";
import useProjectStats from "@/hooks/useProjectStats";

export default function ProjectList() {
  const projects = useProjectStore((state) => state.projects);
  const tasks = useProjectStore((state) => state.tasks);
  const { dueProjects } = useProjectStats(projects, tasks);

  return (
    <div className={"w-auto m-4 border-2 border-green-700 gap-2 "}>
      <h1>this is the projectList component</h1>

      {dueProjects.map((project) => (
        <ProjectCard {...project} />
      ))}
    </div>
  );
}

import { useProjectStore } from "@/hooks/useProjectStore";
import ProjectCard from "./projectCard";
import useProjectStats from "@/hooks/useProjectStats";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export default function ProjectList() {
  const projects = useProjectStore((state) => state.projects);
  const tasks = useProjectStore((state) => state.tasks);
  const { dueProjects } = useProjectStats(projects, tasks);
  const navigate = useNavigate();

  return (
    <Card className="ring-0">
      <CardHeader>
        <CardTitle>All Projects</CardTitle>
        <CardAction>
          <Button
            className="transition duration-300 ease-in-out hover:bg-green-700"
            size={"lg"}
            onClick={() => navigate("/projects/new")}
          >
            Add Project
          </Button>
        </CardAction>
      </CardHeader>

      <CardContent>
        {/* <div className={"w-auto m-4 border-2 border-green-700 gap-2 "}> */}
        {dueProjects.map((project) => (
          <ProjectCard {...project}/>
        ))}
      </CardContent>
    </Card>
  );
}

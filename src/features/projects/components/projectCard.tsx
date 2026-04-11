import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Project } from "../types";
import ProgressBar from "./progressBar";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";

export interface DueProject extends Project {
  projectProgress: number;
  totalTasks: number;
  completedTasks: number;
}

export default function ProjectCard(project: DueProject) {
  const navigate = useNavigate();
  function handleNavigate() {
    navigate(`/projects/${project.id}`);
  }
  const colorMap = {
    blue: "bg-blue-200",
    violet: "bg-violet-200",
    fuchsia: "bg-fuchsia-200",
  };

  return (
    <Card className="border m-3 transition duration-300 ease-in-out hover:border hover:border-emerald-600">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardAction>
          <Button variant={"outline"} onClick={handleNavigate}>
            View project
          </Button>
        </CardAction>{" "}
        <CardDescription>
          {project.dueDate
            ? new Date(project.dueDate).toDateString()
            : "add due date"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {project.description}

        {/*TODO: if time, a sm task list component that displays the title of the first 3 linked tasks with a "see more..." link that takes you to the project details component
        ${inProgress > 0 ? "bg-emerald-500" : "hidden"}`
        */}
      </CardContent>
      <CardFooter className={project.color ? colorMap[project.color] : ""}>
        <ProgressBar progress={project.projectProgress} />
      </CardFooter>
    </Card>
  );
}

import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Project } from "../types";
import ProgressBar from "./progressBar";

export interface DueProject extends Project {
  projectProgress: number;
  totalTasks: number;
  completedTasks: number;
}

export default function ProjectCard(project: DueProject) {
  return (
    <Card className="m-3">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardAction>
          {project.dueDate
            ? new Date(project.dueDate).toDateString()
            : "add due date"}
        </CardAction>{" "}
        {/* TODO: if time - make a component that holds the duedate with a update duedate function */}
      </CardHeader>
      <CardContent>
        {project.description}

        {/*TODO: if time, a sm task list component that displays the title of the first 3 linked tasks with a "see more..." link that takes you to the project details component */}
      </CardContent>
      <CardFooter>
        <ProgressBar progress={project.projectProgress} />
      </CardFooter>
    </Card>
  );
}

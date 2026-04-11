import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useProjectStats from "@/hooks/useProjectStats";
import { useProjectStore } from "@/hooks/useProjectStore";
import ProjectCard from "../../projects/components/projectCard";
import { Button } from "@/components/ui/button";
import PriorityBar from "./priorityBar";
import StatusBar from "./statusBar";
import { useNavigate } from "react-router";

export default function Dashboard() {
  const projects = useProjectStore((state) => state.projects);
  const tasks = useProjectStore((state) => state.tasks);
  const { dueProjects, projectStats, taskStats } = useProjectStats(
    projects,
    tasks,
  );
  const lowPriority = (taskStats.priorityLow / taskStats.totalTasks) * 100;
  const medPriority = (taskStats.priorityMedium / taskStats.totalTasks) * 100;
  const highPriority = (taskStats.priorityHigh / taskStats.totalTasks) * 100;
  //TODO: make the percentages in prioritybar calculate from incomplete tasks, not total tasks

  const inProgress =
    (projectStats.inProgressProjects / projectStats.totalProjects) * 100;
  const planned =
    (projectStats.plannedProjects / projectStats.totalProjects) * 100;

  const navigate = useNavigate();

  return (
    <div className="w-3/4 flex flex-col justify-self-center-safe gap-3 mb-3">
      <h1 className="text-3xl text-emerald-800 font-semibold">Dashboard</h1>
      <Card>
        <CardHeader>
          <CardTitle>
            Good job! You have completed {projectStats.completedProjects}{" "}
            projects and {taskStats.completedTasks} tasks!
          </CardTitle>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Next project due:</CardTitle>
        </CardHeader>
        <ProjectCard {...dueProjects[0]} />
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Projects total: {projectStats.totalProjects}</CardTitle>
          <CardAction>
            <Button variant={"outline"} onClick={() => navigate("/projects")}>
              View all
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <StatusBar planned={planned} inProgress={inProgress} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Tasks total: {taskStats.totalTasks}</CardTitle>
          <CardAction>
            <Button variant={"outline"}>View all</Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <PriorityBar
            low={lowPriority}
            medium={medPriority}
            high={highPriority}
          />
        </CardContent>
      </Card>
    </div>
  );
}

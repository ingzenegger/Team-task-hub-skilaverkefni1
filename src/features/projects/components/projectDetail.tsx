import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TaskCard from "@/features/tasks/components/taskCard";
import TaskForm from "@/features/tasks/components/taskForm";
import { useProjectStore } from "@/hooks/useProjectStore";
import useTaskFilters from "@/hooks/useTaskFilters";
import { useEffect, useState } from "react";

import { useParams } from "react-router";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = useProjectStore((state) =>
    state.projects.find((project) => project.id === id),
  );
  const tasks = useProjectStore((state) => state.tasks);
  const { filteredTasks, setProjectId } = useTaskFilters(tasks);
  const [viewTaskForm, setViewTaskForm] = useState(false);

  function handleClick() {
    setViewTaskForm(true);
  }

  if (!project) return <p>no project found</p>;
  useEffect(() => {
    setProjectId(project.id);
  }, [id]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardAction>Edit Project</CardAction>
      </CardHeader>
      <CardContent>
        <div>{new Date(project.dueDate).toDateString()}</div>
        <div>{project.description}</div>
        <div>to the right - filter task priority</div>
        {viewTaskForm ? (
          <TaskForm
            projectId={project.id}
            onSave={() => setViewTaskForm(false)}
          />
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Tasks</CardTitle>
              <CardAction>
                <Button onClick={handleClick}>Add task</Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              {filteredTasks.map((task) => (
                <TaskCard {...task} />
              ))}
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  );
}

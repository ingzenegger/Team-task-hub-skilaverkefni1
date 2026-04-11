import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Task } from "../types";
import { Badge } from "@/components/ui/badge";
export default function TaskCard(task: Task) {
  return (
    <Card className="mb-3.5" size="sm">
      <CardHeader>
        <CardTitle>{task.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{task.description}</p>
      </CardContent>
      <CardFooter>
        <Badge
          className={`${task.priority === "low" ? "bg-blue-700 text-blue-50" : task.priority === "medium" ? "bg-yellow-700 text-yellow-50" : "bg-red-700 text-red-50"}`}
        >
          {task.priority}
        </Badge>
      </CardFooter>
    </Card>
  );
}

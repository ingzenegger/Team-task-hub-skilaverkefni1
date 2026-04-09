import type { Task } from "@/features/tasks/types";
import { useMemo, useState } from "react";

export default function useTaskFilters(tasks: Task[]) {
  //states for filtering, null represents no filter applied:
  const [projectId, setProjectId] = useState<string | null>(null);
  const [priority, setPriority] = useState<"low" | "medium" | "high" | null>(
    null,
  );
  const [isCompleted, setIsCompleted] = useState<boolean | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  //filter each task and memoize the results
  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      if (priority !== null && task.priority !== priority) return false;
      if (isCompleted !== null && task.isCompleted !== isCompleted)
        return false;
      if (projectId !== null && task.projectId !== projectId) return false;
      if (
        searchQuery !== "" &&
        task.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
        return true;
      return true;
    });
  }, [tasks, projectId, priority, isCompleted, searchQuery]);

  return {
    filteredTasks,
    priority,
    setPriority,
    isCompleted,
    setIsCompleted,
    projectId,
    setProjectId,
    searchQuery,
    setSearchQuery,
  };
}
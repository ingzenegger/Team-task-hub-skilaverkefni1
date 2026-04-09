import type { Project } from "@/features/projects/types";
import { useMemo, useState } from "react";

export default function useProjectFilters(projects: Project[]) {
  //states for filtering
  const [status, setStatus] = useState<
    "planned" | "in progress" | "complete" | null
  >(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      if (status !== null && project.status !== status) return false;
      if (
        searchQuery !== "" &&
        project.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
        return true;
      return true;
    });
  }, [projects]);

  return {
    filteredProjects,
    status,
    setStatus,
    searchQuery,
    setSearchQuery,
  };
}

import type { Project } from "@/features/projects/types";
import type { Task } from "@/features/tasks/types";
import { useMemo } from "react";

// a hook that can fetch data about the number of completed projects and number of completed tasks linked to each project to view status. this could perhaps be visualized with a progress banner for each project. it could also line projects up by due date? or just put one with the closest duedate up front and center.
//it will need to take in both the tasks and projects list. projects will be filtered by duedate to find the one due next,  and then each project needs task filtering to see how many completed tasks each has.
//will also filter total number of projects by status and tasks by priority

export default function useProjectStats(projects: Project[], tasks: Task[]) {
  const projectStats = useMemo(() => {
    return {
      totalProjects: projects.length,
      completedProjects: projects.filter(
        (project) => project.status === "complete",
      ).length,
      plannedProjects: projects.filter(
        (project) => project.status === "planned",
      ).length,
      inProgressProjects: projects.filter(
        (project) => project.status === "in progress",
      ).length,
    };
  }, [projects]);

  const taskStats = useMemo(() => {
    return {
      totalTasks: tasks.length,
      completedTasks: tasks.filter((task) => task.isCompleted).length,
      priorityLow: tasks.filter((task) => task.priority === "low").length,
      priorityMedium: tasks.filter((task) => task.priority === "medium").length,
      priorityHigh: tasks.filter((task) => task.priority === "high").length,
    };
  }, [tasks]);

  const dueProjects = useMemo(() => {
    return [...projects]
      .sort((a, b) => {
        // if (!a.dueDate && !b.dueDate) return 0;
        // if (!a.dueDate && b.dueDate) return 1;
        // if (a.dueDate && !b.dueDate) return -1;
        if (a.dueDate > b.dueDate) return 1;
        if (a.dueDate < b.dueDate) return -1;
        return 0;
      })
      .map((project) => {
        const totalTasks = tasks.filter(
          (task) => task.projectId === project.id,
        ).length;
        const completedTasks = tasks.filter(
          (task) => task.projectId === project.id && task.isCompleted,
        ).length;
        const projectProgress = totalTasks === 0 ?  0 : (completedTasks / totalTasks) * 100;
        return {
          ...project,
          totalTasks,
          completedTasks,
          projectProgress,
        };
      });
  }, [tasks, projects]);

  return { dueProjects, projectStats, taskStats };
}

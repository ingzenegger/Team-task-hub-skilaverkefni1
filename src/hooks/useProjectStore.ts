//for Zustand global state
//Global state á ða nota fyrir:
//projects
//tasks
//aðgerðir - add - update - delete og toggle complete

import type { Project } from "@/features/projects/types";
import type { Task } from "@/features/tasks/types";
import { create } from "zustand";

interface ProjectState {
  projects: Project[];
  tasks: Task[];
}

interface ProjectActions {
  addProject: (project: Project) => void;
  addTask: (task: Task) => void;
  // delete: () => void;
  // update: () => void;
  // toggle: () => void;
}

export const useProjectStore = create<ProjectState & ProjectActions>((set) => ({
  projects: [],
  addProject: (project) =>
    set((state) => ({ projects: [...state.projects, project] })),
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  tasks: [],
}));

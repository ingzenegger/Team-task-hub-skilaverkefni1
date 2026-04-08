import type { Task } from "../tasks/types";

export type Project = {
  id: string;
  title: string;
  description: string;

  status: "planned" | "in progress" | "complete"; //default should be planned
  createdOn: Date;
  startDate?: Date;
  dueDate?: Date;
  color?: string;
  tasks?: Task[]; //TODO: remove this once done with demodata
};

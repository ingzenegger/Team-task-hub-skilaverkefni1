export type Task = {
  id: string;
  title: string;
  projectId: string
  description: string;
  priority: "low" | "medium" | "high"; //default should be low
  isCompleted: boolean; //default false
  createdOn?: Date; //date task is created - unnecessary?
};

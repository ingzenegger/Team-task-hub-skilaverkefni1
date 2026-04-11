export type Project = {
  id: string;
  title: string;
  description: string;

  status: "planned" | "in progress" | "complete"; //default should be planned

  dueDate: Date;
  color?: string;
};

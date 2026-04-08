//zod schema for projects
import * as z from "zod";
import { TaskSchema } from "../tasks/schemas";

export const ProjectSchema = z.object({
  id: z.string(),
  title: z.coerce.string().default("Project title"),
  description: z.string().default(""),
  status: z.literal(["planned", "in progress", "complete"]).default("planned"),
  createdOn: z.date(),
  startDate: z.date().optional(),
  dueDate: z.date().optional(),
  color: z.string().optional(),
  tasks: z.array(TaskSchema).optional(), //TODO: remove this once done with demodata - will not be nesting tasks
});

// export const defaultProject = ProjectSchema.parse({});

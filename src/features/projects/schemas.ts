//zod schema for projects
import * as z from "zod";
import { TaskSchema } from "../tasks/schemas";

export const ProjectSchema = z.object({
  id: z.string(),
  title: z.coerce.string(),
  description: z.string(),
  status: z.literal(["planned", "in progress", "complete"]),
  createdOn: z.date(),
  startDate: z.date().optional(),
  dueDate: z.date().optional(),
  color: z.string().optional(),
  tasks: z.array(TaskSchema).optional(),
});

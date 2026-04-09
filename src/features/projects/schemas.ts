//zod schema for projects
import * as z from "zod";

export const ProjectSchema = z.object({
  id: z.string(),
  title: z.coerce.string().default("Project title"),
  description: z.string().default(""),
  status: z.literal(["planned", "in progress", "complete"]).default("planned"),
  createdOn: z.coerce.date(),
  startDate: z.coerce.date().optional(),
  dueDate: z.coerce.date(),
  color: z.string().optional(),
});

// export const defaultProject = ProjectSchema.parse({});

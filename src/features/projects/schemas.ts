//zod schema for projects
import * as z from "zod";

export const ProjectSchema = z.object({
  id: z.string(),
  title: z.coerce.string().default("Project title"),
  description: z.string().default(""),
  status: z.enum(["planned", "in progress", "complete"]).default("planned"),

  dueDate: z.coerce.date(),
  color: z.enum(["blue", "violet", "fuchsia"]).optional(),
});

// export const defaultProject = ProjectSchema.parse({});

//Zod schema for tasks
//to coerce input data to the appropriate type, use z.coerce  https://zod.dev/api
import * as z from "zod";

export const TaskSchema = z.object({
  id: z.string(),
  title: z.coerce.string().default("new task"),
  projectId: z.string(),
  description: z.string().default(""),
  priority: z.literal(["low", "medium", "high"]).default("low"),
  isCompleted: z.boolean().default(false),
  createdOn: z.date(),
});

// export const defaultTask = TaskSchema.parse({})

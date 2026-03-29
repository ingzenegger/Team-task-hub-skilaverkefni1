//Zod schema for tasks
//to coerce input data to the appropriate type, use z.coerce  https://zod.dev/api
import * as z from "zod";

export const TaskSchema = z.object({
  id: z.string(),
  title: z.coerce.string(),
  description: z.string(),
  priority: z.literal(["low", "medium", "high"]),
  isCompleted: z.boolean(),
  createdOn: z.date(),
});

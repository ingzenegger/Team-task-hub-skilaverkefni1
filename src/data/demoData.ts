//demo data for testing and styling

import type { Project } from "../features/projects/types";
import type { Task } from "../features/tasks/types";

const today: Date = new Date();
const due: Date = new Date(2026, 5, 1);

export const demoTask1: Task = {
  id: "1-1",
  title: "demo task 1",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum quisquam in consequuntur, modi sed beatae ea, voluptatibus odit similique doloremque dolorem eum eius eveniet temporibus, officiis ab nam optio a.",
  priority: "medium",
  isCompleted: false,
  createdOn: today,
};
export const demoTask2: Task = {
  id: "1-2",
  title: "demo task 2",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum quisquam in consequuntur, modi sed beatae ea, voluptatibus odit similique doloremque dolorem eum eius eveniet temporibus, officiis ab nam optio a.",
  priority: "high",
  isCompleted: false,
  createdOn: today,
};

export const demoProject: Project = {
  id: "1",
  title: "demo project",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum quisquam in consequuntur, modi sed beatae ea, voluptatibus odit similique doloremque dolorem eum eius eveniet temporibus, officiis ab nam optio a.",

  status: "in progress",
  createdOn: today,
  startDate: today,
  dueDate: due,
  color: "red",
  tasks: [demoTask1, demoTask2],
};

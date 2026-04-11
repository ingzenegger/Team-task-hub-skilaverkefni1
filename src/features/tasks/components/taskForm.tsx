import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import { ClipboardPen } from "lucide-react";
import { useState } from "react";
import type { Task } from "../types";
import { TaskSchema } from "../schemas";
import { useProjectStore } from "@/hooks/useProjectStore";
import FormSelect from "@/components/formSelect";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const INTIAL_VALUES: Task = {
  id: "",
  title: "",
  description: "",
  priority: "low", //default should be low
  isCompleted: false, //default false
  projectId: "",
};

type TaskFormProps = {
  projectId: string;
  onSave: () => void;
};

export default function TaskForm({ projectId, onSave }: TaskFormProps) {
  const [values, setValues] = useState<Task>(INTIAL_VALUES);
  const [error, setError] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const addTask = useProjectStore((state) => state.addTask);
  const selectPriorityValues = [
    { label: "Low", value: "low" },
    { label: "Medium", value: "medium" },
    { label: "High", value: "high" },
  ];

  function onSubmit() {
    const id = Math.random().toString(36).substring(2, 9);
    const newTask = { ...values, id, projectId };
    try {
      const validated = TaskSchema.parse(newTask);
      addTask(validated);
      setValues(INTIAL_VALUES);
      setShowSuccess(true);
      onSave();
    } catch (error) {
      setError("Unabel to save task, please edit try again");
      console.log(error);
    }
  }

  function onInputChange(key: keyof Task, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>New Task</CardTitle>
          <CardAction>
            <ClipboardPen />
          </CardAction>
        </CardHeader>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <CardContent>
            <FieldGroup>
              <FieldSet>
                <Field>
                  <Input
                    id="title"
                    type="text"
                    placeholder="Task title"
                    value={values.title}
                    onChange={(e) => onInputChange("title", e.target.value)}
                  />
                </Field>
                <Field>
                  <Textarea
                    id="description"
                    placeholder="Task description"
                    value={values.description}
                    onChange={(e) =>
                      onInputChange("description", e.target.value)
                    }
                  />
                </Field>
                <Field>
                  <FieldLabel>Priority</FieldLabel>
                  <FormSelect
                    items={selectPriorityValues}
                    defaultValue="low"
                    label="Task priority"
                    onValueChange={(value) => onInputChange("priority", value)}
                  />
                </Field>
              </FieldSet>
            </FieldGroup>
          </CardContent>
          <CardFooter className="mt-4">
            <Button type="submit" className="w-full" variant={"outline"}>
              Save Task
            </Button>
          </CardFooter>
        </form>
      </Card>
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Task saved!</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}

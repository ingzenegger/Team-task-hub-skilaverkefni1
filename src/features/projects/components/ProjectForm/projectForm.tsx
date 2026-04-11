import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import type { Project } from "../../types";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

import FormSelect from "./formSelect";
import { Button } from "@/components/ui/button";
import { ProjectSchema } from "../../schemas";
import { useProjectStore } from "@/hooks/useProjectStore";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const INITIAL_VALUES: Project = {
  id: "",
  title: "",
  description: "",
  status: "planned",
  dueDate: new Date(),
  color: undefined,
};

export default function ProjectForm() {
  const [values, setValues] = useState<Project>(INITIAL_VALUES);
  const [error, setError] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const addProject = useProjectStore((state) => state.addProject);

  const selectStatusValues = [
    { label: "Planned", value: "planned" },
    { label: "In progress", value: "in progress" },
    { label: "Completed", value: "complete" },
  ];

  function onSubmit() {
    //function for submitting the data to the local storage and store
    //start with creating an id with (Math.random().toString(36).substring(2, 9));
    console.log(values);

    const id = Math.random().toString(36).substring(2, 9);
    //add the id to the new project waiting in the state:
    const newProject = { ...values, id };
    //check it with the schema
    try {
      const validated = ProjectSchema.parse(newProject);
      addProject(validated);
      setValues(INITIAL_VALUES);
      setShowSuccess(true);
      //show success modal
      //go to project page
    } catch (error) {
      //show error to user and allow to keep editing the form
      setError("Unable to save project, please edit and/or try again");
      console.log(error);
    }
  }

  function onInputChange(key: keyof Project, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>New Project</CardTitle>
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
                {/* <FieldLegend>New Project</FieldLegend> */}

                <FieldGroup>
                  <Field>
                    <Input
                      id="title"
                      type="text"
                      placeholder="Project title"
                      value={values.title}
                      onChange={(e) => onInputChange("title", e.target.value)}
                    />
                  </Field>
                  <Field>
                    <Textarea
                      id="description"
                      placeholder="Project description"
                      value={values.description}
                      onChange={(e) =>
                        onInputChange("description", e.target.value)
                      }
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="dueDate">Project due:</FieldLabel>

                    <Input
                      id="dueDate"
                      type="date"
                      placeholder="Project due"
                      value={values.dueDate.toISOString().split("T")[0]}
                      onChange={(e) =>
                        setValues((prev) => ({
                          ...prev,
                          dueDate: new Date(e.target.value),
                        }))
                      }
                    />
                  </Field>
                  <Field>
                    <FieldLabel>Project status:</FieldLabel>
                    <FormSelect
                      items={selectStatusValues}
                      defaultValue="planned"
                      label="Project status"
                      onValueChange={(value) => onInputChange("status", value)}
                    ></FormSelect>
                  </Field>
                </FieldGroup>
              </FieldSet>
            </FieldGroup>
          </CardContent>
          <CardFooter className="mt-4">
            <Button type="submit" className="w-full" variant={"outline"}>
              Save Project
            </Button>
          </CardFooter>
        </form>
      </Card>
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Project saved successfully!</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

# 📝 Team Task Hub - Implementation Checklist

## Phase 1: Foundation & Architecture 🏗️

- [x] Initialize Vite + React + TypeScript project.
- [x] Install dependencies (zod, zustand, lucide-react, and your chosen UI library like MUI or shadcn).
- [x] Set up folder structure (features/, hooks/, components/, data/).
- [x] Define global Types and Zod Schemas for Projects and Tasks.
- [x] Create demoData.ts with mock projects and tasks.

## Phase 2: Custom Hooks (The Logic) 🪝

- [x] Hook 1: Implement useLocalStorage with Zod parsing (to ensure data safety).
- [x] Set up Global State (Zustand or Context) to manage the list of projects and tasks.
- [x] Hook 2: Implement useTaskFilters (logic for searching, status, and priority filtering as well as filtering tasks by the projectId).
- [x] Hook 3: Create a helper hook (e.g., useProjectStats for the dashboard).

## Phase 3: Feature - Projects 📂

- [x] Create ProjectList component (View all projects).
- [x] Create ProjectCard component
- [x] create progressBar component
- [x] Create AddProjectForm with Zod validation.
- [x] Implement "Select Project" logic to filter which tasks are shown. - clicking on project takes user to projects details which shows the tasks...

## Phase 4: Feature - Tasks 🛠️

- [] Create TaskList and TaskItem components.
- [x] Implement Add Task functionality (with Zod validation).
- [] Implement Edit Task & Delete Task.
- [] Implement Toggle Complete (checkbox logic).
- [] Integrate useTaskFilters into the UI (Search bar + Dropdowns for Priority/Status).

## Phase 5: Dashboard & UI Polish 📊

- [x] Create Dashboard component showing total tasks, completed vs. pending.
- [] Ensure the app is responsive and looks clean with the UI library.
- [] Add loading states or "No tasks found" empty states.

## Phase 6: Final Requirements & Cleanup 🧹

- [] Verify localStorage persistence (Refresh the page!).
- [] Audit TypeScript types (Ensure no any is used).
- [] Final Git check: Ensure at least 8 meaningful commits.
- [] Record the demo video 🎥.

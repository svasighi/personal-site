import ExercisesTab from "./ExercisesTab";
import ProjectsTab from "./ProjectsTab";

export const tabs = [
  { id: "project", label: "Projects", component: <ProjectsTab /> },
  { id: "exercises", label: "Exercises", component: <ExercisesTab /> },
];

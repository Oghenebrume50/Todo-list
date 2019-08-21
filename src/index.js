import {
  defaultProject,
  submitProject,
  addTodotoProject,
  deleteTodoFromProject
} from "./eventHandle";
import { displayProjects, initialProjectView } from "./displayHandle";

const handleTodos = () => {
  window.addEventListener("DOMContentLoaded", () => {
    defaultProject();
    displayProjects();
    initialProjectView();

    submitProject();
    addTodotoProject();
    deleteTodoFromProject();
  });
};
handleTodos();

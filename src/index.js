import { defaultProject,
  submitProject,
  addTodotoProject,
  deleteTodoFromProject } from './eventHandle';
import { displayProjects } from './displayHandle';

const handleTodos = () => {
  window.addEventListener('DOMContentLoaded', () => {
    defaultProject();
    displayProjects();
    submitProject();
    addTodotoProject();
    //deleteTodoFromProject();
  });
};
handleTodos();

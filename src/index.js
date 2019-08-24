import { defaultProject,
  submitProject,
  addTodotoProject } from './eventHandle';
import { displayProjects, initialProjectView } from './displayHandle';

const handleTodos = () => {
  window.addEventListener('DOMContentLoaded', () => {
    defaultProject();
    displayProjects();
    initialProjectView();
    submitProject();
    addTodotoProject();
  });
};
handleTodos();

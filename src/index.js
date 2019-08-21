import {
  defaultProject,
  submitProject,
  addTodotoProject,
  deleteTodoFromProject
} from './eventHandle';
import { displayProjects, initialProjectView } from './displayHandle';

const handleTodos = () => {
  window.addEventListener('DOMContentLoaded', () => {
    defaultProject();
    console.log('test2');
    displayProjects();
    initialProjectView();
    submitProject();
    addTodotoProject();
    deleteTodoFromProject();
  });
};
handleTodos();

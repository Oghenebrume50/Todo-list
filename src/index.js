import { submitProject, addTodotoProject, deleteTodoFromProject } from './eventHandle';

const handleTodos = () => {
  window.addEventListener('DOMContentLoaded', () => {
    submitProject();
    addTodotoProject();
    deleteTodoFromProject();
  });
};
handleTodos();

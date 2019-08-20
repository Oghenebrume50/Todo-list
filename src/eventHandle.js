import handleTodo from './todo';
import handleProject from './project';
import { displayProjects, viewAProject } from './displayHandle';

function addListenerToProject() {
  const projectList = document.getElementById('projects-list');
  projectList.lastChild.addEventListener('click', viewAProject);
  console.log(projectList.lastChild);
}

function submitProject() {
  const submitButton = document.getElementById('submit-project');
  submitButton.addEventListener('click', () => {
    const projName = document.getElementById('project-name').value;
    handleProject.createProject(projName);
    displayProjects();
  });
  addListenerToProject();
}

function addTodotoProject() {
  const todo = document.getElementById('add-new-todo');
  const todoForm = document.getElementById('add-todo-form');
  const todoTitle = document.getElementById('todo-title').value;
  const todoDesc = document.getElementById('todo-desc').innerText;
  const todoDate = document.getElementById('todo-due-date').value;
  const todoPriority = document.getElementById('todo-priority').value;
  const todoDone = document.getElementById('todo-done').checked;

  todo.addEventListener('click', () => {
    todoForm.classList.remove('todo-form-hide');
    todoForm.classList.add('todo-form-show');
    console.log(todoTitle, todoDesc, todoDate, todoPriority, todoDone);
    const newTodo = handleTodo.createTodo('Sweet3', 'description', 'dueDate', 'priority', false);
    handleProject.addTodo('default project', newTodo);
  });
}

function deleteTodoFromProject() {
  const todo = document.getElementById('deltodo');
  todo.addEventListener('click', () => {
    handleProject.deleteTodo('good', 2);
  });
}

function defaultProject() {
  console.log('defaullll');
  handleProject.createProject('default project');
}

export { defaultProject, submitProject, addTodotoProject, deleteTodoFromProject };

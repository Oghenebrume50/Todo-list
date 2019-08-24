import handleProject from './project';
import { displayProjects,
  viewAProject,
  showAddTodoForm,
  submitAddTodoForm,
  expand,
  deleteTodo,
  editTodo,
  submitEditTodo } from './displayHandle';

function addListenerToProject() {
  const projectList = [...document.getElementById('projects-list').children];
  projectList.forEach((project) => {
    project.addEventListener('click', viewAProject);
  });
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

function addExpandToButton() {
  const todoList = [...document.getElementById('project-todos').children];
  for (let i = 0; i < todoList.length; i += 1) {
    const toggleButton = document.getElementById(`todo-btn-${i}`);
    toggleButton.addEventListener('click', expand);
  }
}

function addDeleteListener() {
  const todoList = [...document.getElementById('project-todos').children];
  for (let i = 0; i < todoList.length; i += 1) {
    const delButton = document.querySelector(`#todo-del-btn-${i}`);
    delButton.addEventListener('click', deleteTodo);
  }
}

function addEditListener() {
  const todoList = [...document.getElementById('project-todos').children];
  for (let i = 0; i < todoList.length; i += 1) {
    const editButton = document.querySelector(`#todo-edit-btn-${i}`);
    editButton.addEventListener('click', editTodo);
  }
  const editBtn = document.getElementById('submit-edit-todo-button');
  editBtn.addEventListener('click', submitEditTodo);
}

function addTodotoProject() {
  addExpandToButton();
  addDeleteListener();
  addEditListener();
  const todo = document.getElementById('add-new-todo');
  const addTodo = document.getElementById('add-todo-button');
  todo.addEventListener('click', showAddTodoForm);

  addTodo.addEventListener('click', () => {
    submitAddTodoForm();
    addExpandToButton();
    addDeleteListener();
    addEditListener();
  });
}

function defaultProject() {
  if (window.localStorage.length === 0) {
    handleProject.createProject('default project');
  }
}

export { defaultProject,
  submitProject,
  addTodotoProject };

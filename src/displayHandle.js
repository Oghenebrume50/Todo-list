import handleProject from './project';

let currentProject = 'default project';
let id = 'project-1';
function displayProjects() {
  const projectList = document.getElementById('projects-list');
  for (let i = 0; i < window.localStorage.length; i += 1) {
    projectList.innerHTML += ` <button id="project-${i + 1}" class="project-button">${window.localStorage.key(i)}</button>`;
  }
}

function viewAProject() {
  const projectLi = document.getElementById(this.id);
  currentProject = projectLi.innerText;
  id = this.id;
  const todoList = document.getElementById('project-todos');
  const todoObj = handleProject.getProject(projectLi.innerText);
  todoList.innerHTML = '';
  for (let i = 0; i < todoObj.todos.length; i += 1) {
    todoList.innerHTML += `<div class="todo-item">
    <button class="todo-item-button">${todoObj.todos[i].title}</button>
    <span>Due: ${todoObj.todos[i].dueDate}</span>
    <button href="#" class="btn-warning">Edit</button> |
    <button href="#" class="btn-danger">Delete</button>
    <div class="description-container">
      <p>
        ${todoObj.todos[i].description}
      </p>
    </div>
  </div>
  <hr />`;
  }
}

function initialProjectView() {
  const todoList = document.getElementById('project-todos');
  const todoObj = handleProject.getProject(currentProject);
  todoList.innerHTML = '';
  for (let i = 0; i < todoObj.todos.length; i += 1) {
    todoList.innerHTML += `<div class="todo-item">
    <button class="todo-item-button">${todoObj.todos[i].title}</button>
    <span>Due: ${todoObj.todos[i].dueDate}</span>
    <button href="#" class="btn-warning">Edit</button> |
    <button href="#" class="btn-danger">Delete</button>
    <div class="description-container">
      <p>
        ${todoObj.todos[i].description}
      </p>
    </div>
  </div>
  <hr />`;
  }
}

function getCurrentProject() { return currentProject; }
function getId() { return id; }
export { displayProjects, viewAProject, getCurrentProject, getId, initialProjectView };

import handleProject from "./project";
import addExpandToButton from "./eventHandle";

let currentProject = "default project";
let id = "project-1";
function displayProjects() {
  const projectList = document.getElementById("projects-list");
  for (let i = 0; i < window.localStorage.length; i += 1) {
    projectList.innerHTML += ` <button id="project-${i +
      1}" class="project-button">${window.localStorage.key(i)}</button>`;
  }
}

function viewAProject() {
  const projectLi = document.getElementById(this.id);
  currentProject = projectLi.innerText;
  id = this.id;
  const todoList = document.getElementById("project-todos");
  const todoObj = handleProject.getProject(projectLi.innerText);
  todoList.innerHTML = "";
  for (let i = 0; i < todoObj.todos.length; i += 1) {
    todoList.innerHTML += `<div class="todo-item" id="todo-item-${i}">
    <button class="todo-item-button" id="todo-btn-${i}">${
      todoObj.todos[i].title
    }</button>
    <span>Due: ${todoObj.todos[i].dueDate}</span>
    <button href="#" class="btn-warning">Edit</button> |
    <button href="#" class="btn-danger">Delete</button>
    <div class="description-container hide">
      <p>
        ${todoObj.todos[i].description}
      </p>
    </div>
    <hr />
  </div>
 `;
  }
  addExpandToButton();
}

function initialProjectView() {
  const todoList = document.getElementById("project-todos");
  const todoObj = handleProject.getProject(currentProject);
  todoList.innerHTML = "";
  for (let i = 0; i < todoObj.todos.length; i += 1) {
    todoList.innerHTML += `<div class="todo-item" id="todo-item-${i}">
    <button class="todo-item-button" id="todo-btn-${i}">
    ${todoObj.todos[i].title}</button>
    <span>Due: ${todoObj.todos[i].dueDate}</span>
    <button href="#" class="btn-warning">Edit</button> |
    <button href="#" class="btn-danger">Delete</button>
    <div class="description-container hide">
      <p>
        ${todoObj.todos[i].description}
      </p>
    </div>
    <hr />
  </div>
  `;
  }
  console.log(todoObj.todos.length);
  if (todoObj.todos.length >= 1) {
    addExpandToButton();
  }
}

function getCurrentProject() {
  return currentProject;
}
function getId() {
  return id;
}

function expand() {
  console.log("this is a tesr");
}
export {
  displayProjects,
  viewAProject,
  getCurrentProject,
  getId,
  initialProjectView,
  expand
};

import handleTodo from "./todo";
import handleProject from "./project";
import {
  displayProjects,
  viewAProject,
  getCurrentProject,
  getId,
  expand
} from "./displayHandle";

function addListenerToProject() {
  const projectList = [...document.getElementById("projects-list").children];
  projectList.forEach(project => {
    project.addEventListener("click", viewAProject);
  });
}

function submitProject() {
  const submitButton = document.getElementById("submit-project");
  submitButton.addEventListener("click", () => {
    const projName = document.getElementById("project-name").value;
    handleProject.createProject(projName);
    displayProjects();
  });
  addListenerToProject();
}

function addExpandToButton() {
  const todoList = [...document.getElementById("project-todos").children];
  console.log(todoList.length);

  for (let i = 0; i < todoList.length; i += 1) {
    const toggleButton = document.getElementById(`todo-btn-${i}`);
    console.log(toggleButton);
    toggleButton.addEventListener("click", expand);
  }
}

function addTodotoProject() {
  const todo = document.getElementById("add-new-todo");
  const todoForm = document.getElementById("add-todo-form");
  const addTodo = document.getElementById("add-todo-button");
  todo.addEventListener("click", () => {
    todoForm.classList.remove("todo-form-hide");
    todoForm.classList.add("todo-form-show");
  });

  addTodo.addEventListener("click", () => {
    const proj = document.getElementById(getId());
    const todoTitle = document.getElementById("todo-title").value;
    const todoDesc = document.getElementById("todo-desc").value;
    const todoDate = document.getElementById("todo-due-date").value;
    const todoPriority = document.getElementById("todo-priority").value;
    const todoDone = document.getElementById("todo-done").checked;
    console.log(todoTitle, todoDesc, todoDate, todoPriority, todoDone);
    const newTodo = handleTodo.createTodo(
      todoTitle,
      todoDesc,
      todoDate,
      todoPriority,
      todoDone
    );
    handleProject.addTodo(getCurrentProject(), newTodo);
    todoForm.classList.remove("todo-form-show");
    todoForm.classList.add("todo-form-hide");
    viewAProject.call(proj);
    addExpandToButton();
  });
}

function deleteTodoFromProject() {
  // const todoList = [...document.getElementById("project-todos").children];
  // for (let i = 0; i < todoList.length; i += 1) {
  //   const delButton = document.querySelector(`#todo-span-${i} #todo-${i}`);
  //   delButton.addEventListener("click", () => {
  //     handleProject.deleteTodo(getCurrentProject(), 2);
  //   });
  //   console.log(delButton);
  // }
  //const todo = document.getElementById('deltodo');
  // todo.addEventListener('click', () => {
  //   handleProject.deleteTodo('good', 2);
  // });
}

function defaultProject() {
  if (window.localStorage.length === 0) {
    handleProject.createProject("default project");
  }
}

export {
  defaultProject,
  submitProject,
  addTodotoProject,
  deleteTodoFromProject,
  addExpandToButton
};

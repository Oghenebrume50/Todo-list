function todo(title, description, dueDate, priority, done) {
  let todoPriority = priority;
  let todoStatus = done;

  const changePriority = (newPriority) => { todoPriority = newPriority; };
  const changeStatus = (newStatus) => { todoStatus = newStatus; };
  return {
    title,
    description,
    dueDate,
    todoPriority,
    todoStatus,
    changePriority,
    changeStatus,
  };
}

const handleTodo = (() => {
  function createTodo(title, description, dueDate, priority, done) {
    const newtodo = todo(title, description, dueDate, priority, done);
    return newtodo;
  }

  return {
    createTodo,
  };
})();

export default handleTodo;

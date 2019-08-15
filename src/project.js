function project(name) {
  let projName = name;

  const getName = () => projName;
  const editName = (newName) => { projName = newName; };
  return {
    getName,
    editName,
  };
}

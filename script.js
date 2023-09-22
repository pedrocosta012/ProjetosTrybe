function addClassNameToElement(element, newClassName) {
  if (element.className) {
    Object.assign(element, { className: `${element.className} ${newClassName}` });
  } else {
    Object.assign(element, { className: newClassName });
  }
}

function removeClassNameToElement(element, oldClassName) {
  if (element.className) {
    Object.assign(element, { className: element.className.replace(` ${oldClassName}`, '') });
    Object.assign(element, { className: element.className.replace(`${oldClassName} `, '') });
    Object.assign(element, { className: element.className.replace(oldClassName, '') });
  }
}

function toggleSelectTask(event) {
  const prevSelected = document.getElementsByClassName('selected')[0];
  console.log(prevSelected === event.target);
  if (prevSelected === event.target) {
    removeClassNameToElement(event.target, 'selected');
  } else if (prevSelected) {
    prevSelected.className = prevSelected.className.replace('selected', '');
  }
  addClassNameToElement(event.target, 'selected');
}

function completeTask(event) {
  addClassNameToElement(event.target, 'completed');
}

function addTask() {
  const input = document.getElementById('texto-tarefa');
  const todoList = document.getElementById('lista-tarefas');
  const newTask = document.createElement('li');
  newTask.addEventListener('click', toggleSelectTask);
  newTask.addEventListener('dblclick', completeTask);
  newTask.innerText = input.value;
  input.value = '';
  todoList.appendChild(newTask);
}

window.onload = () => {
  document.getElementById('criar-tarefa').onclick = addTask;
};

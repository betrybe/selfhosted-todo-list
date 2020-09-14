//  Text Inputs
const inputTextTask = document.getElementById('texto-tarefa');

//  Buttons Inputs
const buttonCreateTask = document.getElementById('criar-tarefa');
const buttonClearTaskList = document.getElementById('apaga-tudo');
const buttonRemoveCompletedTasks = document.getElementById('remover-finalizados');
const buttonRemoveSelected = document.getElementById('remover-selecionado');

//  Ordered List Outputs
const orderedListTasks = document.getElementById('lista-tarefas');
let selectedTask = document.getElementsByClassName('selected');

//  Functions
function selectOtherLi() {
  if (selectedTask[0] !== undefined) {
    selectedTask[0].classList.remove('selected');
    event.target.classList.add('selected');
  } else {
    event.target.classList.add('selected');
  }
}

function unselectLi() {
  selectedTask = document.getElementsByClassName('selected');
  if (selectedTask[0] === event.target) {
    selectedTask[0].classList.remove('selected');
  } else {
    selectOtherLi();
  }
}

function markAsDoneLi() {
  if (event.target.className !== 'task completed') {
    event.target.classList.add('completed');
  } else {
    event.target.classList.remove('completed');
  }
}

function elementCreator() {
  const element = document.createElement('li');
  element.innerText = inputTextTask.value;
  element.className = 'task';
  inputTextTask.value = '';
  element.addEventListener('click', unselectLi);
  element.addEventListener('dblclick', markAsDoneLi);
  return element;
}

function addTaskToList() {
  orderedListTasks.appendChild(elementCreator());
}

function clearTaskList() {
  document.getElementById('lista-tarefas').innerHTML = '';
}

function removeCompletedTasks() {
  const completedTasks = document.getElementsByClassName('completed');
  for (let index = 0; index < Object.keys(completedTasks).length; index += 1) {
    completedTasks[index].parentElement.removeChild(completedTasks[index]);
  }
}

function removeSelectedTask() {
  selectedTask = document.getElementsByClassName('selected');
  if (selectedTask[0] !== undefined) {
    selectedTask[0].parentElement.removeChild(selectedTask[0]);
  }
}

// Event Listeners
buttonCreateTask.addEventListener('click', addTaskToList);
buttonClearTaskList.addEventListener('click', clearTaskList);
buttonRemoveCompletedTasks.addEventListener('click', removeCompletedTasks);
buttonRemoveSelected.addEventListener('click', removeSelectedTask);

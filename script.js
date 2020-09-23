const addTarefa = document.querySelector('#criar-tarefa');
const tarefaList = document.querySelector('#lista-tarefas');
const limparList = document.querySelector('#apaga-tudo');
const removeCompleted = document.querySelector('#remover-finalizados');
const removeSelected = document.querySelector('#remover-selecionado');
const moveUpBtn = document.querySelector('#mover-cima');
const moveDownBtn = document.querySelector('#mover-baixo');
const saveList = document.querySelector('#salvar-tarefas');

saveList.addEventListener('click', function () {
  localStorage.clear();
  const savedLi = [{ texto: '', classe: '' }];
  const tarefa = [];
  for (let i = 0; i < tarefaList.childElementCount; i += 1) {
    savedLi.texto = tarefaList.children[i].innerText;
    savedLi.classe = tarefaList.children[i].className;

    tarefa.push(Object.assign({}, savedLi));
  }
  localStorage.setItem('tarefaList', JSON.stringify(tarefa));
});


function loadSaveList() {
  if (typeof (Storage) !== 'undefined') {
    const savedLi = JSON.parse(localStorage.getItem('tarefaList'));
    for (let i = 0; i < savedLi.length; i += 1) {
      const savedTarefa = document.createElement('li');
      savedTarefa.className = savedLi[i].classe;
      savedTarefa.innerText = savedLi[i].texto;
      tarefaList.appendChild(savedTarefa);
    }
  }
}

moveUpBtn.addEventListener('click', function () {
  const tSelected = document.querySelector('.t-selected');
  if (tSelected !== null && tSelected.previousElementSibling !== null) {
    tarefaList.insertBefore(tSelected, tSelected.previousElementSibling);
  }
});

moveDownBtn.addEventListener('click', function () {
  const tSelected = document.querySelector('.t-selected');
  if (tSelected !== null && tSelected.nextElementSibling !== null) {
    tarefaList.insertBefore(tSelected.nextElementSibling, tSelected);
  }
});

function tSelect(a) {
  const newTarefa = a;
  newTarefa.addEventListener('click', function (select) {
    const tSelected = document.querySelector('.t-selected');
    select.target.className += ' t-selected';
    if (tSelected) {
      tSelected.classList.remove('t-selected');
    }
  });
}

function tComplete(a) {
  const newTarefa = a;
  newTarefa.addEventListener('dblclick', function () {
    if (newTarefa.classList.contains('completed')) {
      newTarefa.classList.remove('completed');
    } else {
      newTarefa.classList.add('completed');
    }
  });
}

addTarefa.addEventListener('click', function () {
  const tarefaInput = document.querySelector('#texto-tarefa').value;
  const newTarefa = document.createElement('li');
  if (tarefaInput) {
    newTarefa.setAttribute('class', 'tarefa');
    newTarefa.innerHTML = tarefaInput;
    tarefaList.appendChild(newTarefa);
    document.querySelector('#texto-tarefa').value = '';
  }
  tSelect(newTarefa);
  tComplete(newTarefa);
});

limparList.addEventListener('click', function () {
  while (tarefaList.firstChild) {
    tarefaList.removeChild(tarefaList.firstChild);
  }
});

removeCompleted.addEventListener('click', function () {
  document.querySelectorAll('.completed').forEach(function (completed) {
    completed.remove();
  });
});

/* function removeCompleted() { !OUTRA FORMA DE ELIMINAR POR CLASS!
  const completedArray = document.getElementsByClassName("completed");
  while (completedArray.length > 0) elements[0].remove();
} */

removeSelected.addEventListener('click', function () {
  document.querySelector('.t-selected').remove();
});

window.onload = loadSaveList();

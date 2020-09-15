const textInput = document.querySelector('#texto-tarefa');
const creator = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');
const clear = document.querySelector('#apaga-tudo');
const rmSelecteds = document.querySelector('#remover-selecionado');
const rmCompleteds = document.querySelector('#remover-finalizados');

creator.addEventListener('click', () => {
  const node = document.createElement('li');
  const textNode = document.createTextNode(textInput.value);
  node.appendChild(textNode);
  list.appendChild(node);
  textInput.value = '';
  elements = document.querySelectorAll('#lista-tarefas li');
});

clear.addEventListener('click', () => {
    list.innerHTML = '';
});


list.addEventListener('click', (event) => {
  const selected = document.querySelector('.selected');
  const li = event.target;
  if (selected != null){
    selected.classList.remove('selected');
    li.classList.add('selected');
  }
  else {
    li.classList.add('selected')
  }
})

list.addEventListener('dblclick', (event) => {
  let li = event.target;
  if (li.classList.contains('completed')){
      li.classList.remove('completed');
  }
  else {
      li.classList.add('completed');
  }
});

rmSelecteds.addEventListener('click', () => {
  let elements = document.querySelectorAll('li');
  for (let i = 0; i < elements.length; i = i + 1) {
    if (elements[i].classList.contains('selected')){
      elements[i].parentNode.removeChild(elements[i]);
    }
  }
});


rmCompleteds.addEventListener('click', () => {
  const elements = document.querySelectorAll('li');
  for (let i = 0; i < elements.length; i = i + 1) {
      if (elements[i].classList.contains('completed')){
          elements[i].parentNode.removeChild(elements[i]);
      }
  }
});

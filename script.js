const btnCriarTarefa = document.getElementById('criar-tarefa');
btnCriarTarefa.addEventListener('click', function () {
  const listaTarefas = document.getElementById('lista-tarefas');
  const itemLista = document.createElement('li');
  const textoTarefa = document.getElementById('texto-tarefa');
  itemLista.innerText = textoTarefa.value;
  listaTarefas.appendChild(itemLista);
  textoTarefa.value = '';
});

const itemListaBG = document.getElementById('lista-tarefas');
itemListaBG.addEventListener('click', function (event) {
  if (event.target.tagName === 'LI') {
    event.target.classList = 'selected';
  }
  // source: https://www.w3schools.com/howto/howto_js_todolist.asp
});
itemListaBG.addEventListener('dblclick', function (event) {
  if (event.target.tagName === 'LI' && event.target.classList.value !== 'completed' ) {
    event.target.classList = 'completed';
  } else {
    event.target.classList = '';
  }
});

const btnLimpaTudo = document.getElementById('apaga-tudo');
const lista = document.getElementById('lista-tarefas');
btnLimpaTudo.addEventListener('click', function () {
  lista.innerHTML = '';
});

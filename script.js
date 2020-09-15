let list = document.getElementById('lista-tarefas');
let buttonCreate = document.getElementById('criar-tarefa');
let buttonUp = document.getElementById('mover-cima');
let buttonDown = document.getElementById('mover-baixo');
let buttonClearAll = document.getElementById('apaga-tudo');
let butttonClearCompleted = document.getElementById('remover-finalizados');
let buttonSave = document.getElementById('salvar-tarefas');

//recupera a ultima lista de tarefas salva
list.innerHTML = localStorage.getItem('listSaved');

// 5 - Deve haver um botão com id="criar-tarefa" e ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo.   
function createItem(item) {
    let liItem = document.createElement('li');
    liItem.innerText = item;
    list.appendChild(liItem);
}

function addItem() {
    let input = document.getElementById('texto-tarefa');
    let newItem = input.value;
    createItem(newItem);
    input.value = '';
}

buttonCreate.addEventListener('click', addItem);

// 7 - Ao clicar em um item da lista, altere a cor de fundo do item para cinza rgb(128,128,128).
// 8 - Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo.    
function addEventLastLi() {
    let lastLi = document.getElementById('lista-tarefas').lastChild;
    lastLi.addEventListener('click', function () {
        if (document.querySelector('.selected') !== null) {
            let selected = document.querySelector('.selected');
            selected.classList.remove('selected');
            lastLi.classList.add('selected');
        } else {
            lastLi.classList.add('selected');
        }
    })
}

buttonCreate.addEventListener('click', addEventLastLi);

// 9 - Ao clicar duas vezes em um item, ele deverá ser riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item.
function lineTrough() {
    let lastLi2 = document.getElementById('lista-tarefas').lastChild;
    lastLi2.addEventListener('dblclick', function () {
        if (lastLi2.classList.contains('completed') === true) {
            lastLi2.classList.remove('completed');
        } else {
            lastLi2.classList.add('completed');
        }
    });
}

buttonCreate.addEventListener('click', lineTrough);

// 10 - Deve haver um botão com id="apaga-tudo" que quando clicado deve apagar todos os items da lista.

buttonClearAll.addEventListener('click', function () {
    listLength = list.childNodes.length;
    for (index = 0; index < listLength; index += 1) {
        list.removeChild(list.firstChild);
    }
});

// 11 - Deve haver um botão com id="remover-finalizados" que quando clicado remove somente os elementos finalizados da sua lista.
butttonClearCompleted.addEventListener('click', function () {
    let itemsCompleted = document.querySelectorAll('.completed');
    let completedLength = itemsCompleted.length;
    for (index = 0; index < completedLength; index += 1) {
        itemsCompleted = document.querySelectorAll('.completed');
        list.removeChild(itemsCompleted[0]);
    }
});

// 12 - Adicione um botão com id="salvar-tarefas" que salve o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava.
buttonSave.addEventListener('click', function () {
    localStorage.setItem('listSaved', list.innerHTML)
});

// Adicione dois botões, um com id="mover-cima" e outro com id="mover-baixo", que permitam mover o item selecionado para cima ou para baixo na lista de tarefas.
buttonUp.addEventListener('click', function () {
    let selected = document.querySelector('.selected');
    if (selected.previousSibling !== null) {
        list.insertBefore(selected, selected.previousSibling);
    }
});

buttonDown.addEventListener('click', function () {
    let selected = document.querySelector('.selected');
    if (selected.nextSibling !== null) {
        list.insertBefore(selected.nextSibling, selected);
    }
});

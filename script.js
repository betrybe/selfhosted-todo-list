let buttonComand = document.querySelector("#criar-tarefa");
let inputAdd = document.getElementById("texto-tarefa");
let organizedList = document.getElementById("lista-tarefas");

buttonComand.addEventListener("click", function (){
    let addOnOl = document.createElement("li");
    organizedList.appendChild(addOnOl).innerText = inputAdd.value;
    inputAdd.value = "";

    let listSelect = document.querySelectorAll("li");

    for (let i = 0; i < listSelect.length; i += 1) {
        listSelect[i].addEventListener("click", function () {
            listSelect[i].classList.add("color")
            for (let j = 0; j < listSelect.length; j += 1) {
                if (listSelect [i] !== listSelect[j]) {
                    listSelect[j].classList.remove("color");
                }
            }
        })
      }
      addOnOl.addEventListener("dblclick", function(){
        addOnOl.classList.toggle("completed"); //o elemento toggle alterna entra mostra e esconder o elemento selecionado   
    });
})
let buttonClear = document.getElementById("apaga-tudo")
buttonClear.addEventListener("click", function () {
    organizedList.innerHTML = "";
       
})

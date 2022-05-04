const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

btnTarefa.addEventListener('click', (e) => {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

function criaLi() {
    const li = document.createElement('li');
    return li;
}

function criaTarefa(txtInput) {
    const li = criaLi();
    li.innerText = txtInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBtnApagar(li);
    salvarTarefas();
}

inputTarefa.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBtnApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.innerText = 'X';
    li.appendChild(botaoApagar);
    salvarTarefas();
}

function apagaTudo() {
    const lista = tarefas.querySelectorAll('li');
    lista.forEach((el) => el.remove());
}

document.addEventListener('click', (e) => {
    const et = e.target;
    if (et.classList.contains('apagar')) {
        et.parentElement.remove();
        salvarTarefas();
    }
    if (et.classList.contains('apaga-tudo')) {
        apagaTudo();
    }
});

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('X', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();

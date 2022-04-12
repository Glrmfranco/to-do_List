# calculo__IMC

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### Screenshot



### Links

- Live Site URL: [Link](https://glrmfranco.github.io/to-do_list/)

## My process

### Built with

- Semantic HTML5 markup

- CSS custom properties

- JavaScript
  

### What I learned

JSON stringfy and localStorage for the itens in list :

```document.addEventListener('click', (event) => {
    const tarefasJSON = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas', tarefasJSON)
```

And get the saved itens in the local storage by getItem

``` 
function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas)

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa)
    }
}
```



## Author

- Github - [Guilherme](https://github.com/Glrmfranco)

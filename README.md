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

![Screenshot 2022-04-12 122937](https://user-images.githubusercontent.com/99771586/163000143-6f8c2e8e-0b18-48fd-8e80-e8f8cf02b160.png)

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

const todoTitle = document.querySelector('.todo-title')
const addTodoBtn = document.querySelector('.add-todo')
const todoList = document.querySelector('.todo-list')

function removeTodo (e) {
    e.target.parentNode.remove()
}

function addTodo () {
    const todo = document.createElement('div')
    todo.classList.add('todo')

    // h3
    const h3 = document.createElement('h3')
    h3.innerHTML = todoTitle.value
 
    // button
    const btn = document.createElement('button')
    btn.type = 'button'
    btn.classList.add('remove-todo')
    btn.innerHTML = 'ลบ'
    btn.addEventListener('click' , removeTodo)
    

    todo.append(h3,btn)

    // todoList.append(todo)
    todoList.prepend(todo)
}

addTodoBtn.addEventListener('click' , addTodo)
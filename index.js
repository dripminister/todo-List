const todoInput = document.getElementById("todo-input")
const addBtn = document.getElementById("add-btn")
const todoContainer = document.getElementById("todo-container")

addBtn.addEventListener("click", addTodo)

function addTodo(){
    const toDo = todoInput.value
    const html = `
            <div class="todo">
                <h3>${toDo}</h3> 
                <button class="dlt-btn" onClick="deleteToDo(event)">X</button>
            </div>`
    todoContainer.innerHTML += html
    todoInput.value = ""
}

function deleteToDo(event){
    const deleteDiv = event.target.parentElement
    deleteDiv.remove()
}
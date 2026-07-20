// DOM Elements
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");
const filters = document.querySelectorAll(".filter");
const clearCompletedBtn = document.getElementById("clear-completed");


// State
let todos = [];
let currentFilter = "all";


// Create Todo Element
function createTodoElement(todo) {

    const li = document.createElement("li");

    li.textContent = todo.text;


    // Completed styling
    if (todo.completed) {
        li.style.textDecoration = "line-through";
    }


    // Toggle complete when clicked
    li.addEventListener("click", function() {
        toggleTodo(todo.id);
    });


    // Edit task (double click)
    li.addEventListener("dblclick", function() {

        const newText = prompt("Edit task:", todo.text);

        if (newText && newText.trim() !== "") {
            todo.text = newText.trim();
            renderTodos();
        }

    });


    // Delete button
    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";


    deleteBtn.addEventListener("click", function(event) {

        // Stop click from completing task
        event.stopPropagation();

        deleteTodo(todo.id);

    });


    li.appendChild(deleteBtn);


    return li;
}



// Display tasks
function renderTodos() {

    todoList.innerHTML = "";


    let filteredTodos = todos;


    if (currentFilter === "active") {

        filteredTodos = todos.filter(function(todo){
            return !todo.completed;
        });

    }


    if (currentFilter === "completed") {

        filteredTodos = todos.filter(function(todo){
            return todo.completed;
        });

    }



    filteredTodos.forEach(function(todo){

        const todoElement = createTodoElement(todo);

        todoList.appendChild(todoElement);

    });


    updateStats();

}




// Add Todo
function addTodo(text) {


    const newTodo = {

        id: Date.now(),

        text: text,

        completed:false

    };


    todos.push(newTodo);


    renderTodos();

}



// Toggle completed
function toggleTodo(id) {


    todos = todos.map(function(todo){


        if(todo.id === id){

            todo.completed = !todo.completed;

        }


        return todo;

    });


    renderTodos();

}



// Delete Todo
function deleteTodo(id){


    todos = todos.filter(function(todo){

        return todo.id !== id;

    });


    renderTodos();

}



// Update count
function updateStats(){


    const remaining = todos.filter(function(todo){

        return !todo.completed;

    }).length;



    itemsLeft.textContent = `${remaining} items left`;

}



// Filter buttons
function filterTodos(filter){

    currentFilter = filter;

    renderTodos();

}



// Clear completed
clearCompletedBtn.addEventListener("click", function(){


    todos = todos.filter(function(todo){

        return !todo.completed;

    });


    renderTodos();


});




// Form submit
form.addEventListener("submit", function(event){


    event.preventDefault();


    const text = input.value.trim();



    if(text === ""){

        return;

    }



    addTodo(text);



    input.value = "";


});




// Filter events
filters.forEach(function(button){


    button.addEventListener("click", function(){


        filters.forEach(function(btn){

            btn.classList.remove("active");

        });



        button.classList.add("active");



        filterTodos(button.dataset.filter);



    });


});




// Start app
renderTodos();
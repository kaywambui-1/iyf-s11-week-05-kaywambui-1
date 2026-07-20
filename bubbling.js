const taskInput = document.getElementById("taskInput");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");


addTask.addEventListener("click", function ()
{
    const taskText =taskInput.value;
    const newTask = document.createElement("li");
    newTask.innerHTML = `${taskText}
    <button class="delete">Delete</button>
    `;
    taskList.appendChild(newTask);
    taskInput.value = "";
});
 taskList.addEventListener("click", function(event){
    if (event.target.matches(".delete")){
        event.target.parentElement.remove();
    }
    else if (event.target.matches("li")){
        event.target.classList.toggle("completed");
    }
 });
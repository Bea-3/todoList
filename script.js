// Adding tasks using Arrays
let tasks = [];

// button id
const addNewTask = document.getElementById("newtaskBtn");

const displayTasks = document.getElementById("displayTask");

const doneTasks = document.getElementById("doneTasks");

addNewTask.addEventListener("click", () => {
    // get the content of the input field and store in a const variable.
    const newTaskInput = document.getElementById("newtask");
    const newTask = newTaskInput.value.trim();

     // check if the newTask is not empty 
     if (newTask !== "") {
        // add the task to the array.
        tasks.push({"text" : newTask, "done" : false});
        // checkif it is stored in the array.
        console.log(tasks);

        taskList(newTask);
        console.log(newTask)
        updateTaskCount();
        // enable the button.
        addNewTask.removeAttribute("disabled")
    } else {
        // Disable button if input is empty
        addNewTask.setAttribute("disabled", "true");
    }
    // clear input field for new task 
    document.getElementById("newtask").value = "";
})

// Create the new element to display the tasks
function taskList (task) {
    //create an li element and append it to the ul in the HTML.
    const newTaskItem  = document.createElement("li")
    newTaskItem.classList.add("task-item"); // add css class to style later
    // Create text content for the Li 
    const taskText = document.createElement("span");
    taskText.textContent = task;
    console.log(task)
    taskText.classList.add("task-text");
    newTaskItem.appendChild(taskText);

    const checkIcon = document.createElement("i");
    checkIcon.classList.add("fa-solid", "fa-check", "fa", "checkBtn");
    checkIcon.addEventListener("click", () => {
        const taskIndex = tasks.findIndex(item => item.text === task);
        tasks[taskIndex].done = true;
        renderTasks();
    });
    newTaskItem.appendChild(checkIcon);

    const deleteIcon = document.createElement("i")
    deleteIcon.classList.add("fa-solid","fa-trash", "fa", "deleteBtn")
    deleteIcon.addEventListener("click", () => {
        const taskIndex = tasks.findIndex(item => item.text === task);
        tasks.splice(taskIndex, 1);
        renderTasks();
    });
    newTaskItem.appendChild(deleteIcon);
    
    displayTasks.appendChild(newTaskItem);
}

// render the tasks in the doneTasks if it is done or in the display if false
function renderTasks(){
    // Clear existing tasks
    displayTasks.innerHTML = "";
    doneTasks.innerHTML = "";

    tasks.forEach(task => {
        if (!task.done) {
            taskList(task.text);
        } else {
            renderDoneTask(task.text);
        }
    });

    updateTaskCount();
}

function renderDoneTask(task){
    const doneItem = document.createElement("li");
    doneItem.classList.add("done-list");
    doneItem.innerHTML = `<span>${task}</span><i class="fa-solid fa-rotate-left returnBtn"></i>`;
    doneTasks.appendChild(doneItem);

    const returnIcon = doneItem.querySelector(".returnBtn");
    returnIcon.addEventListener("click", () => {
        const taskIndex = tasks.findIndex(item => item.text === task);
        tasks[taskIndex].done = false;
        renderTasks();
    });
}

function updateTaskCount(){
    const taskHeading = document.getElementById("taskHeading");
    const pendingTasksCount = tasks.filter(task => !task.done).length;
    const doneHeading = document.getElementById("doneHeading");
    const doneTasksCount = tasks.filter(task => task.done).length;
    
    if (pendingTasksCount > 0) {
        taskHeading.innerHTML = `Tasks - ${pendingTasksCount}`;
        taskHeading.style.display = "block";
    } else {
        taskHeading.style.display = "none";
    }

    if (doneTasksCount > 0) {
        doneHeading.innerHTML = `Done - ${doneTasksCount}`;
        doneHeading.style.display = "block";
    } else {
        doneHeading.style.display = "none";
    }
}

renderTasks();
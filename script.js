// The functionality
// On click of the plus button, the content of the input field is displayed in a box below the input box titled - Tasks 
// The items are basically cards that have two functions - check done & delete
// Update the number of the tasks (len of the array) display on the Task heading.
// On click of the check button, a Done box displays. 
// A return button takes the list item back to tasks. and removes it from done box.

// Adding tasks using Arrays
let tasks = [];

// Get variables for the button and input field
// const newTask = document.getElementById("newtask")
// newTask.addEventListener("keypress", () => {
//     console.log(newTask.value)
// })


const addNewTask = document.getElementById("newtaskBtn");
addNewTask.addEventListener("click", () => {
    // get the content of the input field and store in a const variable.
    const newTask = document.getElementById("newtask").value;
    console.log(newTask)

    // check if the newTask is not empty 
    if (newTask.trim() !== "") {
        // add the task to the array.
        tasks.push(newTask)
        // checkif it is stored in the array.
        console.log(tasks)

        //create an li element and append it to the ul in the HTML.
        const newTaskItem  = document.createElement("li")
        newTaskItem.classList.add("task-item"); // add css class to style later
        // Create text content for the Li 
        const taskText = document.createElement("span");
        taskText.textContent = newTask;
        newTaskItem.appendChild(taskText);

        // Add check icons and delete icon, append them to the new taskitem
        const checkIcon = document.createElement("i")
        checkIcon.classList.add("fa-solid", "fa-check", "fa")
        newTaskItem.appendChild(checkIcon);

        const deleteIcon = document.createElement("i")
        deleteIcon.classList.add("fa-solid","fa-trash", "fa")
        newTaskItem.appendChild(deleteIcon);

        const displayTasks = document.getElementById("displayTask");
        displayTasks.appendChild(newTaskItem)

        // Update the inner HTML of the heading with the number of items in the array
        const taskHeading = document.getElementById("taskHeading")
        taskHeading.innerHTML = `Tasks - ${tasks.length}`

        // clear input field for new task 
        document.getElementById("newtask").value = "";

        // enable the button.
        addNewTask.removeAttribute("disabled")
    }
    else {
        // if the input field is empty disable the button
        addNewTask.setAttribute("disabled", "true")
    }
})
// need to find a way to store the tasks locally so that even if the user refreshes the page, it doesn't empty the array.
    
// script.js
document.getElementById('addTaskBtn').addEventListener('click', function() {
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value.trim();

    if (taskText !== "") {
        let taskList = document.getElementById('taskList');
        
        // Create a new list item for the task
        let li = document.createElement('li');
        li.innerHTML = taskText + ' <button onclick="deleteTask(this)">Delete</button>';
        
        // Append the new task to the task list
        taskList.appendChild(li);
        
        // Clear the input field after adding
        taskInput.value = "";
    }
});

function deleteTask(button) {
    let taskItem = button.parentElement;
    taskItem.remove();
}

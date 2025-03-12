let inputs = document.getElementById("inp");
let timeInput = document.getElementById("time");
let text = document.querySelector(".text");
function Add() {
    if (inputs.value == "" || timeInput.value == "") {
        alert("Please enter both Task and Time");
    } else {
        let newEle = document.createElement("ul");
        newEle.innerHTML = `
        <span class="task-info">Task: <span class="task">${inputs.value}</span> | Time: <span class="task-time">${timeInput.value}</span></span>
        <button class="edit">Edit</button>
        <i class="fa-solid fa-trash" style="color:red"></i>`;
        text.appendChild(newEle);
        inputs.value = "";
        timeInput.value = "";
        newEle.querySelector("i").addEventListener("click", function() {
            newEle.remove();
        });
        newEle.querySelector(".edit").addEventListener("click", function() {
            let taskSpan = newEle.querySelector(".task");
            let timeSpan = newEle.querySelector(".task-time");
            let updatedTask = prompt("Edit your task:", taskSpan.textContent);
            let updatedTime = prompt("Edit the time:", timeSpan.textContent);
            
            if (updatedTask !== null && updatedTask.trim() !== "") {
                taskSpan.textContent = updatedTask;
            }
            if (updatedTime !== null && updatedTime.trim() !== "") {
                timeSpan.textContent = updatedTime;
            }
        });
    }
}
 // Delete all tasks
function deleteAll() {
    text.innerHTML = "";
}
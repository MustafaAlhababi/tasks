function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const taskList = document.getElementById("taskList");
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = 
        "<p>"+taskText+"</p><button class='edit-button' onclick='editTask(this)'>تعديل</button><button onclick='deleteTask(this)'>حذف</button>"
        ;
    taskList.appendChild(card);

    taskInput.value = "";
}

function editTask(button) {
    const taskText = button.parentElement.querySelector("p").textContent;
    const updatedTaskText = prompt("قم بتعديل المهمة:", taskText);
    if (updatedTaskText !== null) {
        button.parentElement.querySelector("p").textContent = updatedTaskText;
    }
}

function deleteTask(button) {
    button.parentElement.remove();
}
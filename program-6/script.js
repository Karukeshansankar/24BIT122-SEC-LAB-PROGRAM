function addTask() {
    const taskText = document.getElementById("taskInput").value.trim();
    
    if (taskText === "") return;
    const li = document.createElement("li");
    li.textContent = taskText;
    // Toggle 'completed' class on click
    li.addEventListener("click", function () {
    li.classList.toggle("completed");
    });
    // Create and add Remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove";
    removeBtn.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent toggling when clicking remove
    li.remove();
    });
    li.appendChild(removeBtn);
    document.getElementById("taskList").appendChild(li);
    document.getElementById("taskInput").value = "";
    }
    
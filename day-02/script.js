let list = [];
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();
  if (task === "") {
    alert("Please enter a task.");
    return;
  }
  list.push(task);
  taskInput.value = "";

  // console.log(taskInput.value);
  //   document.getElementById("taskLabel").textContent = taskInput.value;
  //   taskList.appendChild(taskLabel);
  // console.log(taskList);
  displayTask();
}

function deleteTask(index) {
  console.log("hi");
  list.splice(index, 1);
  displayTask();
}

function displayTask() {
  console.log("list:" + list);
  const ul = document.getElementById("taskList");
  ul.innerHTML = ""; // removing the previous list items before adding new ones
  if (list.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No tasks available.";
    ul.appendChild(li);
    return;
  }
  list.forEach((task, i) => {
    const li = document.createElement("li");
    li.textContent = task;
    const deleteButton = document.createElement("i");
    deleteButton.className = "material-icons";
    deleteButton.textContent = "delete";
    deleteButton.onclick = () => deleteTask(i);
    li.appendChild(deleteButton);
    ul.appendChild(li);
  });
}
displayTask();
document
  .getElementById("taskInput")
  .addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      console.log("Entered");
      addTask();
    }
  });

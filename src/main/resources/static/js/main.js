const tableSection = document.querySelector("#table-section");

// 3)
function showTasks(tasks){
  tableSection.innerHTML ="";
    tasks.forEach((task, position) => {
        const htmlElement = document.createElement("div");
        htmlElement.innerHTML = `<div class="task">
        <div
            class="close-button"
            onclick="fetch(\`/tasks/${position}\`,{ method: 'DELETE'}).then(reloadTasks)"><a class="close"></a></div>
        <p class="description">${task.description}</p>
        </div>`;
      tableSection.appendChild(htmlElement)
    })
}

//2)

let reloadTasks = () => {
    fetch("/tasks")
        .then(r => r.json())
        .then(showTasks)
};

//1)

document.addEventListener("DOMContentLoaded", reloadTasks)



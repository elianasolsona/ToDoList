const tableSection = document.querySelector("#table-section");
let boton=  document.querySelector("#boton");
// 3)
function showTasks(tasks){
  tableSection.innerHTML ="";
        for (let [id, task] of Object.entries(tasks)){
        const htmlElement = document.createElement("div");
        htmlElement.innerHTML = `<div class="task">
        <div
            class="close-button"
            onclick="fetch(\`/tasks/${id}\`,{ method: 'DELETE'}).then(reloadTasks)"><a class="close"></a></div>
        <p class="description">${task.description}</p>
        </div>`;
        if (task.description.length > 3 ){
            tableSection.appendChild(htmlElement)
        }
        else{
            boton.disabled=false;
        }
     }
}

//2)
function markAsTaskDone(id, enable ) {
    fetch(`/tasks/${id}/taskDone/${enable}`, { method: 'PUT'})
        .then(reloadTasks)

let reloadTasks = () => {
    fetch("/tasks")
        .then(r => r.json())
        .then(showTasks)
};

//1)

document.addEventListener("DOMContentLoaded", reloadTasks)


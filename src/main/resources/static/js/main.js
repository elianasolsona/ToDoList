const table = document.querySelector("#table");
const boton = document.getElementById("boton");

// 3)
function showTasks(tasks){
    tasks.forEach(task => {
        const element = `<div class="task">
            <p class="input"> ${task.input}</p></div>`;
        table.insertAdjacentHTML("beforeend", element)
    })
}

//2)

let loadTasks = () => {
    fetch("/tasks")
        .then(r => r.json())
        .then(showTasks)
};

//1)

boton.addEventListener("click", loadTasks)


//const input = document.getElementById("input");

//const table = document.getElementById("table");

/*function addTask (task){
    const row = document.createElement("tr");
        row.innerHTML =`
            <td> <input class="circle" onClick= "borrar()" type="radio"/></td>
            <td> ${input.value}</td>
                    `;
        table.appendChild(row);
        input.value="";
}
boton.addEventListener("click", addTask);


function borrar(){
    this.event.target.parentElement.parentElement.remove();
}

boton.addEventListener("click", borrar);
*/




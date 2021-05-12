//const toDoList = document.querySelector("#stuffList");
const input = document.getElementById("input");
const boton = document.getElementById("boton");
const table = document.getElementById("table");

function addTask (){
    const row = document.createElement("tr");
        row.innerHTML =`
            <td> <input onClick= "borrar()" type="radio"/></td>
            <td> ${input.value}</td>
                    `;
        table.appendChild(row);
}
boton.addEventListener("click", addTask);


function borrar(){
    this.event.target.parentElement.parentElement.remove();
}

boton.addEventListener("click", borrar);
//const toDoList = document.querySelector("#stuffList");
const input = document.getElementById("input");
const boton = document.getElementById("boton");
const table = document.getElementById("table");

function addTask (){
    const row = document.createElement("tr");
        row.innerHTML =`
            <td> <input type="checkbox"/></td>
            <td> ${input.value}</td>
            <td> <span onClick="borrar()"> X </span> </td>
        `;
        table.appendChild(row);
}
boton.addEventListener("click", addTask);

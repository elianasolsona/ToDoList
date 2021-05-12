//const toDoList = document.querySelector("#stuffList");
const input = document.getElementById("input");
const boton = document.getElementById("boton");
const table = document.getElementById("table");

function showList(lists) {
    lists.forEach(list =>{
        const element = `<div class="list">
        <ul>
            <li></li>
        </ul></div>`
    })

}
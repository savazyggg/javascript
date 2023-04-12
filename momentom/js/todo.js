const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos"
let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos))
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id))
    saveToDos()   
   
}

function paintToDo(newTodo) {
const li = document.createElement("li");
li.id = newTodo.id;
const span = document.createElement("span");
span.innerText = newTodo.text;
const button =document.createElement("button");
button.innerText = "❌"

button.addEventListener("click", deleteToDo)

li.appendChild(span);
li.appendChild(button);


toDoList.appendChild(li);


}

function handleToDoSubmit(event) {
event.preventDefault();
const newTodo = toDoInput.value;
toDoInput.value = "";

const newTodoObj = {
    text: newTodo,
    id: Date.now()
}

toDos.push(newTodoObj)

paintToDo(newTodoObj);
saveToDos()

}

toDoForm.addEventListener("submit",handleToDoSubmit);


const saveToDo = localStorage.getItem(TODOS_KEY);

if(saveToDo){
    const parsedToDos = JSON.parse(saveToDo);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo)
}

//(STRINGIFY = 변수 등을 문자열로 바꿈,PARSE = 문자열을 JAVASCRIPT으로 바꿈)
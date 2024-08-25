let ctr=1;
function addTodo(){
    const  element = document.querySelector("input").value;

    const newDiv=document.createElement("div");
    newDiv.setAttribute("id","todo-"+ctr);
    newDiv.innerHTML='<div>'+element+'</div> <button onclick="deleteTodo('+ ctr +')">delete</button>';

    document.querySelector("body").appendChild(newDiv);
    ctr=ctr+1;
}
function deleteTodo(index){
    const elem=document.getElementById("todo-"+index);
    elem.parentNode.removeChild(elem);
}
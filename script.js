 const todoInput = document.querySelector('.todo-input');

 const todoButton = document.querySelector('.todo-button');
 const todoList = document.querySelector('.todo-list');


 todoButton.addEventListener('click', addTodo);
 todoList.addEventListener('click', deleteCheck);


 function addTodo(event) {

     event.preventDefault();

     //TodoDiv
     const todoDiv = document.createElement("div");
     todoDiv.classList.add("todo");

     // create Li
     const newTodo = document.createElement('li');
     newTodo.innerText = todoInput.value;
     newTodo.classList.add('todo-item');
     todoDiv.appendChild(newTodo);

     //check button
     const completedButton = document.createElement('button');
     completedButton.innerHTML = '<i class="fas fa-check"></i>';
     completedButton.classList.add("complete-btn");
     todoDiv.appendChild(completedButton);
     //delet button

     const deleteButton = document.createElement('button');
     deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
     deleteButton.classList.add("delete-btn");
     todoDiv.appendChild(deleteButton);

     //append to list
     todoList.appendChild(todoDiv);

     //clear todoinput

     todoInput.value = " ";


 }

 function deleteCheck(e) {
     const item = e.target;

     if (item.classList[0] === 'delete-btn') {
         const todo = item.parentElement;
         todo.remove();
     }
     if (item.classList[0] === "complete-btn") {
         const todo = item.parentElement;
         todo.classList.toggle('completed');
     }
 }
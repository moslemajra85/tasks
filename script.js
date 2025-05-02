const todoInput = document.getElementById('task');
const addButton = document.getElementById('btn-add');
const todoList = document.getElementById('todo-list');

addButton.addEventListener('click', function () {
  if (todoInput.value === '') {
    return;
  }

  // extract the value from the input field
  const todoText = todoInput.value;

  // create a new list item
  const listItem = document.createElement('li'); //<li></li>7
  const divContainer = document.createElement('div'); //<div></div>
  listItem.className = 'todo-item'; //<li class="todo-item"></li>
  listItem.textContent = todoText; // <li>...</li>

  // create a checkbox
  const checkbox = document.createElement('input'); //<input>
  checkbox.type = 'checkbox'; //<input type="checkbox">

  // create a delete button
  const deleteButton = document.createElement('button'); //<button></button>
  deleteButton.className = 'delete-button'; //<button class="delete-button"></button>
  deleteButton.textContent = 'Delete'; // <button>Delete</button>

  divContainer.appendChild(checkbox); // <div>...</div><input type="checkbox"><li>...</li>
  divContainer.appendChild(deleteButton); // <div>...</div><li>...</li>
  listItem.appendChild(divContainer); // <li>...</li><input type="checkbox"><button>Delete</button>

  // add  the created list item to the todo list
  todoList.appendChild(listItem); // add the list item to the todo list

  deleteButton.addEventListener('click', function () {
    // remove the list item from the todo list
    todoList.removeChild(listItem); // remove the list item from the todo list
  });

  todoInput.value = ''; // clear the input field
});

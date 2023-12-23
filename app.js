function addTodo(event) {
    event.preventDefault();

    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    const taskText = todoInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const newTodoItem = document.createElement('li');
    newTodoItem.textContent = taskText;
    // newTodoItem.style.background = 'linear-gradient(90deg, rgba(205,255,223,1) 0%, rgba(171,255,60,1) 100%);';

    const taskContainer = document.createElement('div');
    taskContainer.style.display = 'flex';
    taskContainer.style.alignItems = 'center';
    taskContainer.style.justifyContent = 'center';
    taskContainer.style.gap = '10px';
    taskContainer.style.marginLeft = '50px';

    const deleteButton = createButton('remove.png', 'Delete Button', 33, deleteTodo);
    const checkButton = createButton('checkmark.png', 'Check Button', 33, checkTodo);

    taskContainer.appendChild(deleteButton);
    taskContainer.appendChild(checkButton);

    newTodoItem.appendChild(taskContainer);

    todoList.appendChild(newTodoItem);

    todoInput.value = '';
}

function createButton(src, alt, width, clickHandler) {
    const button = document.createElement('img');
    button.src = `assets/${src}`;
    button.alt = alt;
    button.width = width;
    button.onclick = clickHandler;
    return button;
}

function deleteTodo(event) {
    const todoItem = event.target.closest('li');
    todoItem.remove();
}

function checkTodo(event) {
    const todoItem = event.target.closest('li');
    todoItem.style.textDecoration = 'line-through';
    todoItem.style.color = 'green';
    todoItem.style.background = 'linear-gradient(90deg, rgba(205,255,223,1) 0%, rgba(171,255,60,1) 100%)';

    const checkButton = todoItem.querySelector('[alt="Check Button"]');
    checkButton.remove();
}
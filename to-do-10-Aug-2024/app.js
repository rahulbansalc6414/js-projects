const addTaskBtn = document.getElementById("addTask")
const taskTextBox = document.getElementById('taskText')
const todos = [];
const allTodosBox = document.getElementById('allTodos')
const clearAllBtn = document.getElementById('clearAll')
const pendingTasksSpan = document.getElementById('noOfPendingTasks');

addTaskBtn.addEventListener('click', () =>
{
    // console.log(taskTextBox.value);

    if (taskTextBox.value === '')
    {
        return;
    }

    todos.push(taskTextBox.value);
    taskText.value = ""
    displayTodos();
})

clearAllBtn.addEventListener('click', () =>
{
    todos.length = 0;
    displayTodos();
})

function handleTodoClick(e)
{
    console.log(e);

    const checkbox = e.querySelector('input');
    checkbox.checked = checkbox.checked ? false : true;
    e.classList.toggle('done')
    updatePendingTasks();
}

function displayTodos()
{

    let s = '';

    todos.forEach(todo =>
    {
        s += `<p class='todo' onclick="handleTodoClick(this)"><input type="checkbox" name="todoCheck">${todo}</p>`;
    });

    allTodosBox.innerHTML = s;

    updatePendingTasks();

}

function updatePendingTasks()
{
    const pending = document.querySelectorAll('.todo:not(.done)').length;

    const textPending = pending > 0 ? pending : 'no'

    pendingTasksSpan.textContent = textPending;
}


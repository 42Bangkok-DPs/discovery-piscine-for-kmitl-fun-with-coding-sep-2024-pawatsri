function createNewTask(){
    const newTask = prompt('Enter a new task:');
    if (newTask) {
        addTasks(newTask);
        saveTasks();
    }
}

function addTasks(task){
    const list = document.getElementById('ft_list');
    const taskdiv = document.createElement('div');
    taskdiv.className = 'todo_list';
    taskdiv.textContent = task;
    taskdiv.onclick = function(){
        if (confirm('Are you sure you want to remove this task?')) {
            list.removeChild(taskdiv);
            saveTasks();
        }
    };
    list.insertBefore(taskdiv, list.firstChild);
}
function saveTasks(){
    const taskdiv = document.querySelectorAll('.todo_list');
    const task = Array.from(taskdiv).map(item => item.textContent);
}

function loadTasks(){
    if (tasks){
        const taskArray = JSON.parse(task);
        taskArray.array.forEach(task => addTasks(task));
    }

}

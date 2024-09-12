$(document).ready(function() {

    function createNewTask() {
        const newTask = prompt('Enter a new task:');
        if (newTask) {
            addTasks(newTask);
            saveTasks();
        }
    }

    function addTasks(task) {
        const $list = $('#ft_list');
        const $taskDiv = $('<div></div>')
            .addClass('todo_list')
            .text(task)
            .on('click', function() {
                if (confirm('Are you sure you want to remove this task?')) {
                    $(this).remove();
                    saveTasks();
                }
            });
        $list.prepend($taskDiv);
    }

    function saveTasks() {
        const tasks = $('.todo_list').map(function() {
            return $(this).text();
        }).get();
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = localStorage.getItem('tasks');
        if (tasks) {
            const taskArray = JSON.parse(tasks);
            taskArray.forEach(task => addTasks(task));
        }
    }

    $('#button').on('click', createNewTask);
});

async function getTaskList() {
    let response = await fetch('https://todo-app-ex.herokuapp.com/');
    let data = await response.json();

    return data.tasks;
}

async function createTask() {
    let content = document.getElementById('content');
    let data = {
        method: 'POST',
        body: JSON.stringify({ content: content.value }),
        headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json',
        },
    };
    let response = await fetch('https://todo-app-ex.herokuapp.com/add', data);

    content.value = '';

    taskList();

    return response;
}

async function deleteTask(id) {
    let data = {
        method: 'DELETE',
        body: JSON.stringify({ id }),
        headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json',
        },
    };
    
    await fetch('https://todo-app-ex.herokuapp.com/delete', data);

    taskList();
}

async function taskList() {
    let taskList = await getTaskList();
    let divList = document.getElementById('list')
    let tasks = '';

    for (task of taskList) {
        tasks += `
            <div id="task" name="${task._id}">
                <p>${task.content}</p>
                <button value="${task._id}" onclick="deleteTask(this.value)">Delete</button>
            </div>
        `
    };

    divList.innerHTML = tasks;
}

document.getElementById('')

taskList();

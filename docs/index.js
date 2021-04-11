async function getTaskList() {
    let response = await fetch('https://todo-app-ex.herokuapp.com/');
    let data = await response.json();
    let divList = document.getElementById('list')
    let tasks = '';

    for (task of data.tasks) {
        tasks += `
            <div id="task" name="${task._id}">
                <p>${task.content}</p>
                <button value="${task._id}" onclick="deleteTask(this.value)">Delete</button>
            </div>
        `
    };

    divList.innerHTML = tasks;
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

    if (content.value.trim() === '') {
        content.value = '';

        return;
    }
    
    await fetch('https://todo-app-ex.herokuapp.com/add', data);
    content.value = '';

    getTaskList();
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

    getTaskList();
}

document.onload = getTaskList();

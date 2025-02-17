const formTaskNameElement = document.getElementById('form-task-name');
const formTaskDescriptionElement = document.getElementById('form-task-description');
const formTaskPriorityElement = document.getElementById('form-task-priority');
const formTaskDueDateElement = document.getElementById('form-task-due-date');
const formTaskCreateElement = document.getElementById('form-task-create');

function detectFormSubmition(event) {
        event.preventDefault();
        console.log(event);
}

formTaskCreateElement.addEventListener('submit', (event) => detectFormSubmition(event));

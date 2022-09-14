document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  form.addEventListener('submit', handleSubmit)
  
});

function handleSubmit(event) {
  event.preventDefault();
  

  const taskList = document.getElementById('tasks');
  const task = document.createElement('li');
  task.textContent = event.target.description.value;
  taskList.append(task);
}

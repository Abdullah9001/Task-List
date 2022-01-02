//Define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.colection');
const clearBtn = document.querySelector('.clear-task');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all Events listeners
loadEventListeners();

//Load all Events listeners
function loadEventListeners(){
  //Add Task
  form.addEventListener('submit', addTask);
  //Remove Task
  taskList.addEventListener('click', removeTask);
  //Clear Task
  clearBtn.addEventListener('click', clearTask);
  //Filter Task
  filter.addEventListener('keyup', filterTasks);
}

//ADD Task
function addTask(e) {
  if (taskInput.value === '') {
    alert('Add a Task,,,,,')
  }

  //creat li element
  const li = document.createElement('li');
  //Add class
  li.className = 'colection-item';
  //Add text node
  li.appendChild(document.createTextNode(taskInput.value));
  //creat link
  const link = document.createElement('a');
  //Add class
  link.className = 'delete-item';
  //Add text
  link.innerHTML = '<i class="remove">*</i>';
  //apent the link to li
  li.appendChild(link);

  //append li tp ul
  taskList.appendChild(li);

  //clear task
  taskInput.value = '';


  e.preventDefault();
}


//Remove Task
function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are You Sure,,??')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}


//Clear Task
function clearTask() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}


//Filter Task
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.colection-item').forEach(
    function(task){
      const item = task.firstChild.textContent;
      if (item.toLowerCase().indexOf(text) != -1) {
        task.style.display = 'flex';
      } else {
        task.style.display = 'none';
      }
    }
  );
}
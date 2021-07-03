//set local storage item
// localStorage.setItem('name', 'Pamela');
// localStorage.setItem('age', '24');

//set local session item
// sessionStorage.setItem('name', 'Shirley');

//remove from storage
// localStorage.removeItem('name');

// //get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// //clear local storage
// localStorage.clear();

// console.log(name, age);

document.querySelector('form').addEventListener('submit', function (e) {
  // console.log(123);
  const task = document.getElementById('task').value;

  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));

  alert('Task saved');

  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));
tasks.forEach(function(task){
  console.log(task);
});

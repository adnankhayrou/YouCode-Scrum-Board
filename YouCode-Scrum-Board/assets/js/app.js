/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */
 let toDoTasks = document.getElementById('to-do-tasks');
 let inProgressTasks = document.getElementById('in-progress-tasks');
 let doneTasks = document.getElementById('done-tasks');
 let countTodoTasks = document.getElementById('to-do-tasks-count');
 let countInProgressTasks = document.getElementById('in-progress-tasks-count');
 let countDoneTasks = document.getElementById('done-tasks-count');
 let modalTask = document.getElementById('modal-task');
 let title = document.getElementById('recipient-name');
 let priority = document.getElementById('Priority');
 let Status = document.getElementById('Status');
 let date = document.getElementById('Date');
 let description = document.getElementById('message-text');
 let msg = document.querySelector('#msg');
 let buttonSave = document.querySelector('#btn-save');
 let buttonUpdate = document.querySelector('#btn-update');
 document.getElementById('btn-save').addEventListener('click',createTask);
 document.getElementById('btn-update').addEventListener('click',update);
 document.querySelector('#btn-cancel').addEventListener('click',clearForm);
 document.querySelector('#btn-close').addEventListener('click',clearForm);
 buttonUpdate.style.display = "none";
 
 
 reloadTasks();
 
 function createTask() {
  let Type = document.querySelector('.form-check-input:checked');

     // creat and add new task
     let newTask = {
         title : title.value,
         type : Type.value,
         priority : priority.value,
         status : Status.value,
         date : date.value,
         description : description.value,
     }
     // push new task to the array
     tasks.push(newTask);
 
     // close the form modal
     close();
 
     // clear form inputes
     clearForm();
 
     // refresh tasks
     reloadTasks();  
 }
 
 
 
 
 function close(){
   // to close modal form after saving inputs data
     if (title.value === "") {
       msg.innerHTML = "input is empty"
     }else 
     document.getElementById("btn-close").click();
 }
 
 function clearForm(){
   // clear form inputs from data
   document.getElementById('form').reset();
 }
 
 function deleteTask (Delete) {
   // remove task
     tasks.splice(Delete,1)
     reloadTasks();
 }
 
 //giving index to be global variable
 var newValue;
 
 function editTask (index) {
  
   // hide save button and enable update button
   buttonSave.style.display = "none";
   buttonUpdate.style.display = "block";
   
   // add object element to form modal to modify
    title.value = tasks[index].title;
    Type.value = tasks[index].type;
    priority.value = tasks[index].priority;
    Status.value = tasks[index].status;
    date.value = tasks[index].date;
    description.value = tasks[index].description;
   
    // give index to global variable
    newValue = index;
    
    // close modal form
    document.getElementById('btn-Add').click();
 
   }
 
   function update() {
    let Type = document.querySelector('.form-check-input:checked');
     // replace old values with new values
     tasks[newValue].title = title.value;
     tasks[newValue].type = Type.value;
     tasks[newValue].priority = priority.value;
     tasks[newValue].status = Status.value;
     tasks[newValue].date = date.value;
     tasks[newValue].description = description.value;
 
     // reload and clear task form
     reloadTasks();
     clearForm();
 
     // replace buttons
     buttonSave.style.display = "block";
     buttonUpdate.style.display = "none";
   }
   
 function clearTasks(){
     // clear all tasks
     toDoTasks.innerHTML = "";
     inProgressTasks.innerHTML = "";
     doneTasks.innerHTML = "";
 }

 function reloadTasks() {
   // Remove tasks elements
   clearTasks();
 
   // showing all tasks
   let count = 0;
   let countTodo = 0, countInProgress = 0, countDone = 0;
 
     for (let i = 0; i < tasks.length; i++) {
       
       count++;
       
       if (tasks[i].status == "To Do") {
 
           countTodo++;
           toDoTasks.innerHTML += `
           <button class="row mx-0 bg-white p-1 border-0 border-bottom btn-tasks">
               <div class="col-1">
                 <i class="bi bi-question-circle fs-3 text-success "></i> 
               </div>
               <div class="col-10 text-start">
               <div class="fw-bold fs-5 text-truncate">${tasks[i].title}</div>
                 <div class="">
                   <div class="text-black-50">#${count} created in ${tasks[i].date}</div>
                   <div class="mb-2 text-truncate" title="as they can be helpful in reproducing the steps that caused the problem in the first place.">${tasks[i].description}</div>
                 </div>
                 <div class="pb-1">
                   <span class="bg-primary text-white p-1 rounded-1 fw-bold">${tasks[i].priority}</span>
                   <span class="bg-light-600 p-1 rounded-1 fw-bold">${tasks[i].type}</span>
                 </div>
               </div>
               <div class="col-1">
                 <span>
                   <i onClick="deleteTask(${i})" class="fas fa-trash-alt fs-5 text-danger pt-2 trash-icon"></i>
                   <i onClick="editTask(${i})" class="fas fa-edit fs-5 pt-2 trash-icon"></i>
                 </span>
              </div>
         </button>`
           
           
       }else if (tasks[i].status == "In Progress") {
 
           countInProgress++;
 
           inProgressTasks.innerHTML += `
           <button class="row mx-0 bg-white p-1 border-0 border-bottom btn-tasks">
               <div class="col-1">
               <i class="spinner-border spinner-border-sm text-success mt-1"></i> 
               </div>
               <div class="col-10 text-start">
               <div class="fw-bold fs-5 text-truncate">${tasks[i].title}</div>
                 <div class="">
                   <div class="text-black-50">#${count} created in ${tasks[i].date}</div>
                   <div class="mb-2 text-truncate" title="as they can be helpful in reproducing the steps that caused the problem in the first place.">${tasks[i].description}</div>
                 </div>
                 <div class="pb-1">
                   <span class="bg-primary text-white p-1 rounded-1 fw-bold">${tasks[i].priority}</span>
                   <span class="bg-light-600 p-1 rounded-1 fw-bold">${tasks[i].type}</span>
                 </div>
               </div>
               <div class="col-1">
                 <span>
                   <i onClick="deleteTask(${i})" class="fas fa-trash-alt fs-5 text-danger pt-2 trash-icon"></i>
                   <i onClick="editTask(${i})" class="fas fa-edit fs-5 pt-2 trash-icon"></i>
                 </span>
              </div>
         </button>`
           
       }else if (tasks[i].status == "Done") {
 
           countDone++;
 
           doneTasks.innerHTML += `
           <button class="row mx-0 bg-white p-1 border-0 border-bottom btn-tasks">
               <div class="col-1">
                 <i class="bi bi-check-circle fs-3 text-success "></i> 
               </div>
               <div class="col-10 text-start">
               <div class="fw-bold fs-5 text-truncate">${tasks[i].title}</div>
                 <div class="">
                   <div class="text-black-50">#${count} created in ${tasks[i].date}</div>
                   <div class="mb-2 text-truncate" title="as they can be helpful in reproducing the steps that caused the problem in the first place.">${tasks[i].description}</div>
                 </div>
                 <div class="pb-1">
                   <span class="bg-primary text-white p-1 rounded-1 fw-bold">${tasks[i].priority}</span>
                   <span class="bg-light-600 p-1 rounded-1 fw-bold">${tasks[i].type}</span>
                 </div>
               </div>
               <div class="col-1">
                 <span>
                   <i onClick="deleteTask(${i})" id="edit" class="fas fa-trash-alt fs-5 text-danger pt-2 trash-icon"></i>
                   <i onClick="editTask(${i})"  class="fas fa-edit fs-5 pt-2 trash-icon"></i>
                 </span>
              </div>
         </button>`
           
       }
      
   };
   countTodoTasks.innerText = countTodo;
   countInProgressTasks.innerText = countInProgress;
   countDoneTasks.innerText = countDone;
 
 }







// function saveTask() {
//     // Recuperer task attributes a partir les champs input
    
//     // Créez task object
    
//     // Ajoutez object au Array

//     // refresh tasks
    
// }

// function editTask(index) {
//     // Initialisez task form

//     // Affichez updates

//     // Delete Button

//     // Définir l’index en entrée cachée pour l’utiliser en Update et Delete

//     // Definir FORM INPUTS

//     // Ouvrir Modal form
// }

// function updateTask() {
//     // GET TASK ATTRIBUTES FROM INPUTS

//     // Créez task object

//     // Remplacer ancienne task par nouvelle task

//     // Fermer Modal form

//     // Refresh tasks
    
// }

// function deleteTask() {
//     // Get index of task in the array

//     // Remove task from array by index splice function

//     // close modal form

//     // refresh tasks
// }

// function initTaskForm() {
//     // Clear task form from data
//     // modalTask.reset();

//     // Hide all action buttons
// }



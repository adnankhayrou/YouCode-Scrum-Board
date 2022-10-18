/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */

let toDoTasks = document.getElementById('to-do-tasks');
let inProgressTasks = document.getElementById('in-progress-tasks');
let doneTasks = document.getElementById('done-tasks');

addTasks();

function addTasks(){
    let count = 0;
    let countTodo = 0, countInProgress = 0, countDone = 0;

    tasks.forEach(element => {
        count++;
        
        if (element['status'] == 'To Do') {

            countTodo++;
            toDoTasks.innerHTML += `
            <button class="row mx-0 bg-white p-1 border-0 border-bottom">
                <div class="col-1">
                <i class="bi bi-question-circle fs-3 text-success "></i> 
                </div>
                <div class="col-10 text-start">
                <div class="fw-bold fs-5">${element['title']}</div>
                	<div class="">
                		<div class="text-black-50">#${count} created in ${element['date']}</div>
                		<div class="mb-2" title="as they can be helpful in reproducing the steps that caused the problem in the first place.">${element['description']}</div>
                	</div>
                	<div class="pb-1">
                		<span class="bg-primary text-white p-1 rounded-1 fw-bold">${element['priority']}</span>
                		<span class="bg-light-600 p-1 rounded-1 fw-bold">${element['type']}</span>
                	</div>
                </div>
        	</button>`
            
            
        }else if (element['status'] == 'In Progress') {

            countInProgress++;

            inProgressTasks.innerHTML += `
            <button class="row mx-0 bg-white p-1 border-0 border-bottom">
                <div class="col-1">
                <i class="spinner-border spinner-border-sm text-success mt-1"></i> 
                </div>
                <div class="col-10 text-start">
                <div class="fw-bold fs-5">${element['title']}</div>
                	<div class="">
                		<div class="text-black-50">#${count} created in ${element['date']}</div>
                		<div class="mb-2" title="as they can be helpful in reproducing the steps that caused the problem in the first place.">${element['description']}</div>
                	</div>
                	<div class="pb-1">
                		<span class="bg-primary text-white p-1 rounded-1 fw-bold">${element['priority']}</span>
                		<span class="bg-light-600 p-1 rounded-1 fw-bold">${element['type']}</span>
                	</div>
                </div>
        	</button>`
            
        }else if (element['status'] == 'Done') {

            countDone++;

            doneTasks.innerHTML += `
            <button class="row mx-0 bg-white p-1 border-0 border-bottom">
                <div class="col-1">
                <i class="bi bi-check-circle fs-3 text-success "></i> 
                </div>
                <div class="col-10 text-start">
                <div class="fw-bold fs-5">${element['title']}</div>
                	<div class="">
                		<div class="text-black-50">#${count} created in ${element['date']}</div>
                		<div class="mb-2" title="as they can be helpful in reproducing the steps that caused the problem in the first place.">${element['description']}</div>
                	</div>
                	<div class="pb-1">
                		<span class="bg-primary text-white p-1 rounded-1 fw-bold">${element['priority']}</span>
                		<span class="bg-light-600 p-1 rounded-1 fw-bold">${element['type']}</span>
                	</div>
                </div>
        	</button>`
            
        }
    })

    let countTodoTasks = document.getElementById('to-do-tasks-count');
    let countInProgressTasks = document.getElementById('in-progress-tasks-count');
    let countDoneTasks = document.getElementById('done-tasks-count');

    countTodoTasks.innerText = countTodo;
    countInProgressTasks.innerText = countInProgress;
    countDoneTasks.innerText = countDone;

}

function createTask() {
    // initialiser task form

    // Afficher le boutton save

    // Ouvrir modal form

    let buttonAdd = document.getElementById('btn-Add');
    let modalTask = document.getElementById('modal-task');
    let buttonClose = document.getElementsByClassName('btn-close');
    
}

function saveTask() {
    // Recuperer task attributes a partir les champs input

    // Créez task object

    // Ajoutez object au Array

    // refresh tasks
    
}

function editTask(index) {
    // Initialisez task form

    // Affichez updates

    // Delete Button

    // Définir l’index en entrée cachée pour l’utiliser en Update et Delete

    // Definir FORM INPUTS

    // Ouvrir Modal form
}

function updateTask() {
    // GET TASK ATTRIBUTES FROM INPUTS

    // Créez task object

    // Remplacer ancienne task par nouvelle task

    // Fermer Modal form

    // Refresh tasks
    
}

function deleteTask() {
    // Get index of task in the array

    // Remove task from array by index splice function

    // close modal form

    // refresh tasks
}

function initTaskForm() {
    // Clear task form from data

    // Hide all action buttons
}

function reloadTasks() {
    // Remove tasks elements

    // Set Task count
}
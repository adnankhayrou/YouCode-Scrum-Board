let btnCancel = document.querySelector('#task-cancel-btn');
let btnDelete = document.querySelector('#task-delete-btn');
let btnUpdate = document.querySelector('#task-update-btn');
let btnSave = document.querySelector('#task-save-btn');

//  let title = document.getElementById('task-title');
//  let priority = document.getElementById('Priority');
//  let Status = document.getElementById('Status');
//  let date = document.getElementById('Date');
//  let description = document.getElementById('message-text');
//  let msg = document.querySelector('#msg');


function hideUpdateAndDelete () {
    btnUpdate.style.display = 'none';
    btnDelete.style.display = 'none';
    btnCancel.style.display = 'block';
    btnSave.style.display = 'block';
}

function editTask (e,id) {
    document.getElementById('task-id').value = id;

    btnCancel.style.display = 'block';
    btnSave.style.display = 'none';
    btnUpdate.style.display = 'block';
    btnDelete.style.display = 'block';

}


// function update() {
//       title.value
//       Type.value;
//       priority.value;
//       Status.value;
//       date.value;
//       description.value;
//    }
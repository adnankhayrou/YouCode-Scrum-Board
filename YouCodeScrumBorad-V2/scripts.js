let btnCancel = document.querySelector('#task-cancel-btn');
let btnDelete = document.querySelector('#task-delete-btn');
let btnUpdate = document.querySelector('#task-update-btn');
let btnSave = document.querySelector('#task-save-btn');


function hideUpdateAndDelete () {
    btnUpdate.style.display = 'none';
    btnDelete.style.display = 'none';
    btnCancel.style.display = 'block';
    btnSave.style.display = 'block';
}

function editTask () {

    // document.getElementById('task-id').value = id;

    btnCancel.style.display = 'block';
    btnSave.style.display = 'none';
    btnUpdate.style.display = 'block';
    btnDelete.style.display = 'block';

}


// document.getElementById('task-delete-btn').addEventListener('click',Delelte);
// function Delelte () {

//     if(confirm('prees ok!') == true)
//     document.getElementById("delete-btn").click();
    
// }

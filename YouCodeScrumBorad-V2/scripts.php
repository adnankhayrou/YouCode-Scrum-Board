<?php
    //INCLUDE DATABASE FILE
    include('database.php');
    //SESSSION IS A WAY TO STORE DATA TO BE USED ACROSS MULTIPLE PAGES
    session_start();

    //ROUTING
    if(isset($_POST['save']))        saveTask();
    if(isset($_POST['update']))      updateTask();
    if(isset($_POST['delete']))      deleteTask();
    $count = 0;

    function getTasks($Status)
    {
        require 'database.php';
        // CODE HERE
        $selectFrom = "SELECT * FROM tasks WHERE status_id = '$Status' ";
        $query = mysqli_query($connect,$selectFrom);
        global $count;

        while ($element = mysqli_fetch_array($query)) {
          
            $count++;

           $priority_id =  $element['priority_id'];
            $query_priority = "SELECT * FROM priorities WHERE id = ${priority_id} ";
            $query_res = mysqli_query($connect,$query_priority);
            $priority_res =  mysqli_fetch_array($query_res);

            $type_id = $element['type_id'];
            $query_type = "SELECT * FROM types WHERE id = ${type_id} ";
            $query_prio = mysqli_query($connect,$query_type);
            $type_res = mysqli_fetch_array($query_prio);

            if ($Status == 1) {
               $icon = 'bi bi-question-circle fs-3 text-success';
            }else if ($Status == 2) {
                $icon = 'spinner-border spinner-border-sm text-success mt-1';
            }else $icon = 'bi bi-check-circle fs-3 text-success';
        
           echo '
           <button onClick="editTask(this,'.$element['id'].')" data-bs-toggle="modal" href="#modal-task" class="row mx-0 bg-white p-1 border-0 border-bottom btn-tasks">
               <div class="col-1">
                 <i class="'.$icon.'"></i> 
               </div>
               <div class="col-10 text-start">
               <div class="fw-bold fs-5 text-truncate">'.$element['title'].'</div>
                 <div >
                   <div class="text-black-50">#'.$count.' created in '.$element['task_date'].' </div>
                   <div class="mb-2 text-truncate" title="as they can be helpful in reproducing the steps that caused the problem in the first place."> '.$element['description'].' </div>
                 </div>
                 <div class="pb-1">
                   <span class="bg-primary text-white p-1 rounded-1 fw-bold"> '.$priority_res['name'].' </span>
                   <span class="bg-light-600 p-1 rounded-1 m-1 fw-bold"> '.$type_res['name'].' </span>
                 </div>
               </div>
         </button>';
        }
        
        // SQL SELECT
        // echo "Fetch all tasks";
    }


    function saveTask()
    {
        //CODE HERE
        $Title = $_POST['Title'];
        $Type = $_POST['task-type'];
        $Priority = $_POST['Priority'];
        $Status = $_POST['Status'];
        $Date = $_POST['Date'];
        $Description = $_POST['Description'];

        require 'database.php';

        $sendTo = "INSERT INTO tasks(`title`, `type_id`, `priority_id`, `status_id`, `task_date`, `description`) 
            VALUES('$Title', '$Type', '$Priority', '$Status', '$Date', '$Description')";
    
        mysqli_query($connect,$sendTo);

        //SQL INSERT
        $_SESSION['message'] = "Task has been added successfully !";
		    header('location: index.php');
    }

    function updateTask()
    {
        //CODE HERE
        $id = $_POST['id'];
        $Title = $_POST['Title'];
        $Type = $_POST['task-type'];
        $Priority = $_POST['Priority'];
        $Status = $_POST['Status'];
        $Date = $_POST['Date'];
        $Description = $_POST['Description'];
        
        require 'database.php';

        $updateFrom = "UPDATE tasks SET title = '$Title', description = '$Description', type_id = '$Type', priority_id = '$Priority', status_id = '$Status', task_date = '$Date' WHERE id = '$id'";
        mysqli_query($connect,$updateFrom);
        //SQL UPDATE
        $_SESSION['message'] = "Task has been updated successfully !";
		    header('location: index.php');
    }

    function deleteTask()
    {
      require 'database.php';
      
        //CODE HERE
        $id = $_POST['id'];
        $sql = "DELETE FROM tasks WHERE id='$id'";
         $result= mysqli_query($connect,$sql);
        //SQL DELETE
        $_SESSION['message'] = "Task has been deleted successfully !";
		    header('location: index.php');
    }



    function counter($Status) 
    {
      require 'database.php';

      $countAllRows = "SELECT * FROM tasks WHERE status_id = '$Status' ";

      $query1 = mysqli_query($connect,$countAllRows); 
      $count1 = mysqli_num_rows($query1);
      
      return $count1;
    }

?>
<?php
   include 'scripts.php';



   
   if(isset($_GET['edit'])){
      $id = $_GET['edit'];

      $sql = "SELECT * FROM tasks WHERE id = $id";
      $result = mysqli_query($connect, $sql);
      $task = mysqli_fetch_assoc($result);
    
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>YouCode | Scrum Board</title>
	<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport" />
	<meta content="" name="description" />
	<meta content="" name="author" />
	
	<!-- ================== BEGIN core-css ================== -->
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
	<link href="assets/css/vendor.min.css" rel="stylesheet" />
	<link href="assets/css/default/style.css" rel="stylesheet" />
	<link href="assets/css/default/app.min.css" rel="stylesheet" />
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
	<!-- ================== END core-css ================== -->
</head>
<body>
    

		<div class="modal-dialog">
			<div class="modal-content">
				<form action="" method="POST" id="form-task">
					<div class="modal-header">
						<h5 class="modal-title">Add Task</h5>
						<a href="index.php" class="btn-close" data-bs-dismiss="modal"></a>
					</div>
					<div class="modal-body">
							<!-- This Input Allows Storing Task Index  -->
							<input type="hidden" name="id" id="task-id" value="<?php echo $id ?>">
							<div class="mb-3">
								<label class="form-label"></label>
								<input type="text" name="Title" class="form-control" value="<?php echo $task["title"] ?>" id="task-title"/>
							</div>
							<div class="mb-3">
								<label class="form-label">Type</label>
								<div class="ms-3">
									<div class="form-check mb-1">
										<input <?php echo ($task['type_id']== '1') ?  "checked" : "" ;?> class="form-check-input" name="task-type" type="radio" value="1" id="task-type-feature"/>
										<label class="form-check-label" for="task-type-feature">Feature</label>
									</div>
									<div class="form-check">
										<input <?php echo ($task['type_id']== '2') ?  "checked" : "" ;?> class="form-check-input" name="task-type" type="radio" value="2" id="task-type-bug"/>
										<label class="form-check-label" for="task-type-bug">Bug</label>
									</div>
								</div>
								
							</div>
							<div class="mb-3">
								<label class="form-label">Priority</label>
								<select class="form-select" name="Priority" id="task-priority">
									<option value="">Please select</option>
									<option value="1"<?php echo ($task['priority_id']== '1') ?  "selected" : "" ;?>>Low</option>
									<option value="2"<?php echo ($task['priority_id']== '2') ?  "selected" : "" ;?>>Medium</option>
									<option value="3"<?php echo ($task['priority_id']== '3') ?  "selected" : "" ;?>>High</option>
									<option value="4"<?php echo ($task['priority_id']== '4') ?  "selected" : "" ;?>>Critical</option>
								</select>
							</div>
							<div class="mb-3">
								<label class="form-label">Status</label>
								<select class="form-select" name="Status" id="task-status">
									<option value="">Please select</option>
									<option value="1"<?php echo ($task['status_id']== '1') ?  "selected" : "" ;?>>To Do</option>
									<option value="2"<?php echo ($task['status_id']== '2') ?  "selected" : "" ;?>>In Progress</option>
									<option value="3"<?php echo ($task['status_id']== '3') ?  "selected" : "" ;?>>Done</option>
								</select>
							</div>
							<div class="mb-3">
								<label class="form-label"></label>
								<input type="date" name="Date" class="form-control" id="task-date" value="<?php echo $task["task_date"] ?>"/>
							</div>
							<div class="mb-0">
								<label class="form-label">Description</label>
								<textarea class="form-control" name="Description" rows="10" id="task-description"><?php echo $task["description"] ?></textarea>
							</div>
						
					</div>
					<div class="modal-footer">
						<a href="index.php" class="btn btn-white" data-bs-dismiss="modal" id="task-cancel-btn" >Cancel</a>
						<button type="submit" name="delete" id="delete-btn" hidden></button>
						<button type="button" onClick="Delete()" class="btn btn-danger task-action-btn" id="task-delete-btn">Delete</button>
						<button type="submit" name="update" class="btn btn-warning task-action-btn" id="task-update-btn">Update</button>
						
					</div>
				</form>
			</div>
		</div>
<?php 
   }
?>
<script>
    
document.getElementById('task-delete-btn').addEventListener('click',Delelte);
function Delelte () {

    if(confirm('prees ok!') == true)
    document.getElementById("delete-btn").click();
    
}
</script>
</body>
</html>

<?php
   include 'scripts.php';
   $tittle = 'Update | Scrum Board';
   include 'header.php';


   
   if(isset($_GET['id'])){
      $id = $_GET['id'];

      $sql = "SELECT * FROM tasks WHERE id = $id";
      $result = mysqli_query($connect, $sql);
      $task = mysqli_fetch_assoc($result);
    
?>

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
								<input type="text" name="Title" class="form-control" value="<?php echo $task["title"] ?>" id="task-title" required/>
							</div>
							<div class="mb-3">
								<label class="form-label">Type</label>
								<div class="ms-3">
									<div class="form-check mb-1">
										<input <?php echo ($task['type_id']== '1') ?  "checked" : "" ;?> class="form-check-input" name="task-type" type="radio" value="1" id="task-type-feature" required/>
										<label class="form-check-label" for="task-type-feature">Feature</label>
									</div>
									<div class="form-check">
										<input <?php echo ($task['type_id']== '2') ?  "checked" : "" ;?> class="form-check-input" name="task-type" type="radio" value="2" id="task-type-bug" required/>
										<label class="form-check-label" for="task-type-bug">Bug</label>
									</div>
								</div>
								
							</div>
							<div class="mb-3">
								<label class="form-label">Priority</label>
								<select class="form-select" name="Priority" id="task-priority" required>
									<option value="">Please select</option>
									<option value="1"<?php echo ($task['priority_id']== '1') ?  "selected" : "" ;?>>Low</option>
									<option value="2"<?php echo ($task['priority_id']== '2') ?  "selected" : "" ;?>>Medium</option>
									<option value="3"<?php echo ($task['priority_id']== '3') ?  "selected" : "" ;?>>High</option>
									<option value="4"<?php echo ($task['priority_id']== '4') ?  "selected" : "" ;?>>Critical</option>
								</select>
							</div>
							<div class="mb-3">
								<label class="form-label">Status</label>
								<select class="form-select" name="Status" id="task-status" required>
									<option value="">Please select</option>
									<option value="1"<?php echo ($task['status_id']== '1') ?  "selected" : "" ;?>>To Do</option>
									<option value="2"<?php echo ($task['status_id']== '2') ?  "selected" : "" ;?>>In Progress</option>
									<option value="3"<?php echo ($task['status_id']== '3') ?  "selected" : "" ;?>>Done</option>
								</select>
							</div>
							<div class="mb-3">
								<label class="form-label"></label>
								<input type="date" name="Date" class="form-control" id="task-date" value="<?php echo $task["task_date"] ?>" required/>
							</div>
							<div class="mb-0">
								<label class="form-label">Description</label>
								<textarea class="form-control" name="Description" rows="10" id="task-description" required><?php echo $task["description"] ?></textarea>
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
<script src="scripts.js"></script>
</body>
</html>

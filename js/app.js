var taskInput = document.getElementById('new-task');
var addButton = document.getElementsByTagName('button')[0];
var incompleteTasksHolder = document.getElementById('incomplete-tasks');
var completedTasksHolder = document.getElementById('completed-tasks');

var addTask = function(){
	console.log("add task");
};

var editTask = function(){
	console.log("edit task");
};

var deleteTask = function(){
	console.log("delete task");
};

var taskCompleted = function(){
	console.log("task completed");
};

var taskIncomplete = function(){
	console.log("task incomplete");
};

//Set click handler to add task function

addButton.onclick = addTask;
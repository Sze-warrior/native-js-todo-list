var taskInput = document.getElementById('new-task');
var addButton = document.getElementsByTagName('button')[0];
var incompleteTasksHolder = document.getElementById('incomplete-tasks');
var completedTasksHolder = document.getElementById('completed-tasks');

//New task list item'

var createNewTaskElement = function(taskString){
  var listItem = document.createElement('li');
  var checkBox = document.createElement('input');//type is checkbox
  var label = document.createElement('label');
  var editInput = document.createElement('input');//type is input form
  var editButton = document.createElement('button');
  var deleteButton = document.createElement('button');

  //Each element needs modifying
  checkBox.type = "checkbox";
  editInput.type = "text";

  editButton.innerText = "Edit";
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";

  label.innerText = taskString;

  //Each element needs appending
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem;
}

var addTask = function(){
	console.log("add task");
  var listItem = createNewTaskElement(taskInput.value);
  //append list item to incomplete task holder
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted); 

  taskInput.value = ""; 
};

var editTask = function(){
	console.log("edit task");
  var listItem = this.parentNode;
  var editInput = listItem.querySelector("input[type=text");
  var label = listItem.querySelector("label");

  var containsClass = listItem.classList.contains("editMode");

  if(containsClass){
    label.innerText = editInput.value;
  }else{
    editInput.value = label.innerText;
  }

  listItem.classList.toggle("editMode");

}

var deleteTask = function(){
	console.log("delete task");
  var listItem = this.parentNode;
  var ul = listItem.parentNode;

  ul.removeChild(listItem);
};

var taskCompleted = function(){
	console.log("task completed");
  var listItem = this.parentNode;
  completedTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);  
};

var taskIncomplete = function(){
	console.log("task incomplete");
  var listItem = this.parentNode;
  incompleteTasksHolder.appendChild(listItem); 
  bindTaskEvents(listItem, taskCompleted); 
};

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  console.log("Bind list item events");
  //select taskListItem's children
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");
  
  //bind editTask to edit button
  editButton.onclick = editTask;
  
  //bind deleteTask to delete button
  deleteButton.onclick = deleteTask;
  
  //bind checkBoxEventHandler to checkbox
  checkBox.onchange = checkBoxEventHandler;
}


var ajaxRequest = function(){
  console.log("ajax request");
}

//Set click handler to add task function

addButton.onclick = addTask;
addButton.addEventListener('click', ajaxRequest, false);

for(var i = 0; i < incompleteTasksHolder.children.length; i ++){
	bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

for(var i = 0; i < completedTasksHolder.children.length; i ++){
	bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}




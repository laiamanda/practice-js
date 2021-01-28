window.setTimeout(function(){

var toDos =["Get a job"];

var input = prompt("What would you like to do?");


while(input!== "quit"){
	//handle the inputs

	if (input === "list"){
		listTodos();
	}
	else if (input ==="new"){
		addToDos();
	}
	else if (input ==="delete"){
		deleteToDos();
	}
	//ask again for new input
	input = prompt("What would you like to do?");
}
console.log("Okay, you quit");
},500);

function listToDos(){
	console.log("**********");

	toDos.forEach(function(todo , i ){
		console.log(i + ":" + toDos);
	});

	console.log("**********");
}

function addToDos(){
//ask for new todo
	var newTodo = prompt ("Enter a new To Do Item");
	//add todos array
	toDos.push(newTodo);
	console.log("Add To Do");
}

function deleteToDos(){
	//ask for index to be deleted
	var index = prompt ("Enter index of todo to delete");
	//delete that todo
	//splice()
	todos.splice(index,1);
	console.log("Delete To Do");
}
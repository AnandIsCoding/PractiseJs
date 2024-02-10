let todo=[];
let req=prompt("Enter a task which you want to perform");
while(true){
	if(req=="add"){
		let task=prompt("Enter the task to add in todo");
		todo.push(task);
		console.log("task added");
	}else if(req=="quit"){
		console.log("Quiting the App");
		break;
	}else if(req=="delete"){
		let idx=prompt("Enter index which you want to delete");
		todo.splice(idx,1);
		console.log("task removed");
	}else if(req=="list"){
		console.log("----------------------------");
		for(let t of todo){
			console.log(t);
		}
		console.log("----------------------------");
		break;
	}else{
		alert("Enter request such as add, delete, list, quit : Thankyou ")
	}
	req=prompt("Please Enter your request");



}
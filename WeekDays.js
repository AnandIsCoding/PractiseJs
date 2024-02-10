/*
 * case value: not contain condition like 7>5 which gives boolean value
break is the end of case
if break is not mentioned then all case will be executed
default case is not mandatory
 */

let day="saturday";
switch(day){
	case "monday":
		console.log("Today is Monday");
		break;
	case "Tuesday":
		console.log("Today is tuesday");
		break;
	case "wednesday":
		console.log("today is wednesday");
		break;
	case "wednesday":
		console.log("today is wednesday");
		break;
	case "thrusday":
		console.log("Threuday");
		break;
	case "friday":
		console.log("Friday");
		break;
	case "saturday":
		console.log("Saturday");
		break;
	default: 
		console.log("I dont know");
		break;
	
}
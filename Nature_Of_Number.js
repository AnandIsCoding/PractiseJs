function Nature(num){
	if (num>0){
		return "Positive number";
	}
	else if(num<0){
		return "Negative number"
	}
	else{
		return "Entered Zero"
	}
}
let result=Nature(-7);
console.log(result);
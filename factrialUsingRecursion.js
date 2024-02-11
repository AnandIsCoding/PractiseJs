function factorial(n){
	if(n===0 || n===1){
		return 1;
	}else{
		return n*factorial(n-1);
	}
}
console.log(factorial(5)) 		//  120
console.log(factorial(3))		//  6
console.log(factorial(4))		//  24
console.log(factorial(9))		//  362880
console.log(factorial(2))		//  2


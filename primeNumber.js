let num=7;
let counter=0;
for(let i=2;i<num;i++){
	if(num%i===0){
		counter++;
	}
}
if(counter===0){
	console.log(`${num} is a prime number`);
}else{
	console.log(`${num} is not a prime number ${num} is a composite number`)
}
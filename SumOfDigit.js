let num=prompt("Enter a number");
let sum=0;
while(num>0){
	let lastdigit=num%10;
	sum=sum+lastdigit;
	num=Math.floor(num/10);

}
console.log(sum)
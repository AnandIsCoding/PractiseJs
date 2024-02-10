function fibo(limit){
	let n1=0;
	let n2=1,n3;
	console.log(n1);
	console.log(n2);
	
	for(let i=1;i<=limit;i++){
	n3=n1+n2;
	n1=n2;
	n2=n3;
	
	console.log(n3);
	}

}
fibo(9);
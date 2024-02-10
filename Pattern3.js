function printPattern(n){
	for(let row=1;row<=n;row++){
		let spaces=n-row;
		let str="";
		for(let col=1;col<=spaces;col++){
			str+="";
		}
		let stars=(2*row)-1;
		for(let j=1;j<=stars;j++){
			str+="*";
		}
		console.log(str);
	}
}
printPattern(7);
/*
    *
   **
  ***
 ****
*****

*/
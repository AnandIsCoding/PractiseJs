let n1=0;

let n2=1;
let n3;
console.log(n1);
console.log(n2);

for(let i=1;i<=10;i++){
	n3=n1+n2;
	
    console.log(n3);
    n1=n2;
    n2=n3;
}
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
// function customforEach(cb,arr){
// 	for(let i=0;i<arr.length;i++){
// 		cb(arr[i],i);
// 	}
	
// }

// customforEach((element,i)=>{
// 	console.log(`elemts at ${i} is ${element}`)
// },[7,8,9])


// for(let i=0;i<=10;i++){
// 	let str="";
// 	for(let j=0;j<=i;j++){
// 		str+="#";
// 	}
// 	console.log(str);
// }

// let n = 5;
// for(let i = 1; i <= n; i++) { // outer -> task for rows

//     // the below for loop prints i stars for ith row in same line
//     for(let j = 1; j <= n; j++) { // inner -> columns
//         process.stdout.write("*"); /// ***
//     }
//     // for the next row, we need to go to a new line
//     console.log(); // gives a new line -> process.stdout.write("\n");

// }


// for(let row=1;row<=5;row++){
// 	let str="";
// 	for(let column=1;column<=5;column++){
// 		str+="*";
// 	}
// 	console.log(str);
// }

// let arr=[
// 	{name:"Anand", roll:821142},
// 	{name:"Raju",roll:821143}
// ]
// let response=arr.forEach((details)=>{
// 	console.log(details.name);
// })
// console.log(response);

let arr=[80,90,59,40];
let isMultipleOfTen=arr.every((el)=>{
	return el%10===0;
})
console.log(isMultipleOfTen)
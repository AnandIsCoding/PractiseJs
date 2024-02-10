//Q..   write table of a number enetred by user
/*
function table(n){
	console.log("Printing table of ",n)
	for(let i=n;i<=n*10;i+=n){
		console.log(i);
	}
}
table(5);
table(97);
table(79);

*/

//Q.. Calculate average of 3 numbers

/*
function calcAvg(n1,n2,n3){
	console.log((n1+n2+n3)/3);
}
calcAvg(5,6,7);
calcAvg((8,9,9),(5,6,3),(2,2,7));
*/


//Q.. write a function that returns sum of numbers 1 to n
/*
function sumOfN(n){
	let sum=0;
	for(let i=1;i<=n;i++){
		sum+=i;
	}
	console.log(sum);
}
sumOfN(1000);
sumOfN(10);

*/

//Q..Golden string
/*

let str="bnand jha ";
if(((str[0]==='a')||(str[0]==="A"))&&(str.length>5)){
	console.log("Golden string");
}else{
	console.log("Black string");
}
*/

//Q.. Largest of three
/*
let num1=5, num2=5, num3=5;
if((num1>num2)&&(num1>num3)){
	console.log(`num1 value ${num1} is greatest`);
}else if((num2>num1)&&(num2>num3)){
	console.log(`num2 value ${num2} is greatest`);
}else if((num3>num1)&&(mum3>num2)){
	console.log(`num3 value ${num3} is greatest`);
}else{
	console.log(`all numbers are equal ${num1, num2, num3}`);
}
*/

//Q.. Check Last digit same or not
/*
let num1=645;
let num2=398;
let lastOfnum1=num1%10;
let lastOfnum2=num2%10;
if(lastOfnum1===lastOfnum2){
	console.log(`last digit ${lastOfnum1} are same in both numbers`);
}else{
	console.log(`lst digits are not same`);
}
*/

// Q...Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.
// Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
// Result should be arr = [1, 3, 4, 5, 6, 3]
/*
let arr=[1,2,3,4,5,6,2,3];
let num=2;
for(let i=0;i<arr.length;i++){
	if(arr[i]===num){
		arr.splice(i,1);
	}
}
console.log(arr);

*/

//Qs2. Write a JS program to find the no of digits in a number.
//Example : if number = 287152, count = 6
// let num=89798989;
// let count=0;
// let copy=num;
// while(num>0){
// 	count++;
// 	copy=Math.floor(copy/10);
// }
// console.log(count);


//Q.. Sum of digit of a number
/*
let num=899898;
let sum=0;
let lastDigit, rem;
while(num>0){
	lastDigit=num%10;
	sum+=lastDigit;
	num=num/10;
}
console.log(Math.ceil(sum));
*/

//Qs4. Print the factorial of a number n.
// [Factorial of a number n is the product of all positive integers less than or equal to a
// 	given positive integer and denoted by that integer. ]
// 	Example :
	
// 	7! (factorial of 7) = 1x2x3x4x5x6x7 = 5040
// 	5! (factorial of 5) = 1x2x3x4x5 = 120
// 	3! (factorial of 3) = 1x2x3 = 6
// 	0! Is always 1

// let num=7;
// let factorial=1;
// for(let i=1;i<=num;i++){
// 	factorial*=i;
// }
// console.log(`factorial is ${factorial}`);

// Q....Find the largest number in an array with only positive numbers.
// let arr=[6,7,8,6,-4,-6,-2];
// let largest=0;
// for(let i=0;i<arr.length-1;i++){
// 	if(arr[i]>0){
// 		if(largest<arr[i]){
// 			largest=arr[i];
// 		}
// 	}
// }
// console.log(largest);


//Create a program that generates a random number representing a dice roll.
//[The number should be between 1 and 6].
/*

let dice=Math.floor((Math.random()*6)+1);
console.log(dice);

*/

//-----------------------
//Qs2. Create an object representing a car that stores the following properties for the
//car: name, model, color.
//Print the car’s name.
/*

let car={
	name:"thar",
	model:"5778x",
	color:"black"
};
console.log(car.name);
console.log(car["name"]);

*/

//Qs3. Create an object Person with their name, age and city.
//Edit their city’s original value to change it to “New York”.
//Add a new property country and set it to the United States.
/*
let person={
	name:"Anand",
	age:20,
	city:"Katihar"
};
person.age=19;  // updating age property
console.log(person.age)

person.city="purnea"; // updating city of object person
console.log(person);
*/

//Q... Average of any number of arguments
/*
let sum=0;
function avg(...args){
	for(let i=0;i<args.length;i++){
		sum+=args[i];
		 
	}
	return (sum/(args.length));
}
//console.log(avg(7,9,6,6,7));

*/

//Q.. sum of 1 to n
/*
function sumOfN(n){
	let sum=0;
	for(let i=1;i<=n;i++){
		sum=sum+i;
	}
	return sum;
}
console.log(sumOfN(5))
*/

//Q...Write a function that returns the concatination of all string in an array
/*

let Concat = function (arr){
	let concanicatedArray="";
	for(let i=0;i<=arr.length-1;i++){		
		concanicatedArray+=arr[i];		
	}
	return concanicatedArray;
}
console.log(Concat(["Anand","jha","katihar"]));
*/

//Q.... Write a HOF that take a function as argument & prints the function provided value according to number provided in HOF call
/*
let multipleGreet=function(fun,count){
	for(let i=1;i<=count;i++){
		fun();
	}
}
let greet=function(){
	console.log("Hi Hello !")
}
multipleGreet(greet,9)
*/

//Q......... Write a JavaScript function that returns array elements larger than a number.
/*
let arr=[6,8,2,-8,7];

function Extractor(arr,num){
	for(let i=0;i<=arr.length;i++){
		if(arr[i]>num){
			console.log(arr[i])
		}
	}
}
Extractor(arr,2);

*/
// Qs2. Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh” ans = “abcdefgh”

//----------------------------------------------------------------------------------------bach gya hai upar ka

//Qs3. Write a JavaScript function that accepts a list of country names as input and
//  returns the longest country name as output.
//  Example : country = ["Australia", "Germany", "United States of America"] output :

//  "United States of America"

// function Long(arr){
// 	for(let i=0;i<=arr.length;i++){

// 	}



// }

//Q...Count Number of vowel in a string

//Q...Count Number of vowel in a string---------------------------------------------------------------------------------------------------------
/*
function CountVowel(str){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u'){
            count++;
        }
    }
    return count;
}

console.log(CountVowel('aeiyyou'));
*/

//Qs5. Write a JavaScript function to generate a random number within a range-------------------------------------------------------------------
//(start, end).---------------------------------------------------------------------------------------------------------------------------------
/*
let start=6;
let end=20;


function Generate(start,end){
	let diff=end-start;
	return Math.floor(Math.random()*diff)+start;
	
}
console.log(Generate(start,end))

*/

//----------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------
///Q...show arrow function
/*
let Table = n => {
	for(let i=n;i<=n*10;i+=n){
		console.log(i)
	}
}
//Table(6);

let SQR = n =>{
	console.log(`square of ${n} is ${n*n}`)
}
SQR(2)

let Cube = n =>{
	console.log(`Cube of ${n} is ${n*n*n}`);
}
Cube(3);

let power = (a,b) =>{
	console.log(`power of ${a} to the power ${b} is ${a**b}`)
}
power(2,4);

*/
//----------------------------------------------------------------------------------------------------------------------------------------------
// Do not remove nor make any changes in  main() function
/*
function main() {
    var arr = readLine().split(" ").map(x => parseInt(x));
    console.log(oddOrEvenSum(arr));
}

function oddOrEvenSum(arr) {
	var arr=[5,7,8,9,6,3,2];
  // Your code goes here
var eSum=0;
var oSum=0;
  for(var i=0;i<arr.length;i++){
    if(arr[i]%2===0){
        eSum+=arr[i];
    }else{
        oSum+=arr[i];
    }
  }
  return `oddSum: ${oSum} evenSum: ${eSum}`
}
*/
//------------------------------------------------------------------------------------------------------------------------------------
//Q..Sum of 3 numbers using arrow function
/*
 
let sum = (a,b,c)=>{
	return a+b+c;
}
console.log(sum(1,2,3));

let print = a => console.log("hello");
print();
*/
//---------------------------------------------------------------------------------------------------------------------------------------
// return function from another function
/*
function fun(){
	console.log("called the function fun");
	return function cleanUp(){
		console.log("cleaning up the resources");
	}
}
let result=fun();
console.log(result());
*/

//------------------------------------------------------------------------------------------------------------------------------------------
// IIFI    IIFI    IIFI      
/* the moment iifi is declared , it's immediately executed there & can't be accessed anywhere else

(
	function start(){
		let login;
		console.log("Starting");
		( login = function(){
			console.log("Enter your login details");
		})();
		
	}
)();

*/

//-----------------------------------------------------------------------------------------------------------------------------
// write a function that takes an array and a function as argument , extract each element of array and calculate it's cube from callback function cube
/*

function takeArraycalculateCube(arr, funForCube){
	for(let i=0;i<arr.length;i++){
		console.log(`at index${i} element is ${arr[i]} and it's cube is ${funForCube(arr[i])}`)
	}
}
takeArraycalculateCube([1,2,3,4,5],function cube(x){
	return x*x*x;
})
*/
//----------------------------------------------------------------------------------------------------------------------------------
/*
for(let row=0;row<=4;row++){
	console.log("****")
	
}
*/
//----------------------------------------------------------------------------------------------------------------------------
//Q.. Reverse of a given number
/*
let num=1987;
let lastdigit,rev=0;
while(num){
	lastdigit=num%10;
	rev=(rev*10)+lastdigit;
	num=num/10;
}
console.log(rev);
*/

//---------------------------------------------------------------------------------------------------------------------------------

/* 
Q2. Write a program that grades students based on their marks
8 If greater than 90 than A Grade
8 If between 70 and 90 than a B grade
8 If between 50 and 70 than a C grade
8 Below 50 than an F grade
*/
let marks=71;
if(marks>90){
	console.log("A");
}else if(marks>70 && marks<=90){
	console.log("B");
}else if(marks>50 && marks<=70){
	console.log("C");
}else if(marks<50){
	console.log("F");
}else{
	console.log("Enter valid marks");
}
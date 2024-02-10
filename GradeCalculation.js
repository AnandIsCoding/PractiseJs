// Percentage above or equal to 60---First Division
// Percentage between 50 to 60 ------Second division
// Percentage between 40 to 50-------Third Division
//Percentage less than 40 -----------Fail

let m1=67,m2=51,m3=89,m4=81,m5=76;
let percentage=((m1+m2+m3+m4+m5)/500)*(100);
if(percentage>=60){
	console.log("First Division");
}else if((percentage<60)&&(percentage>=50)){
	console.log("Second Division");
}else if((percentage<50)&&(percentage>=40)){
	console.log("Third Division");
}else{
	console.log("Fail");
}
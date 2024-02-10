/*A company insures it's drivers in the following cases :
		1.. If the deriver is married
		2..If the driver is unmaried, male and above 30 years of age
		3..If the driver is unmarried, female and above 30 years of age
	In all other cases the deriver is not insured, If the marital status, age and sex of the deriver are inpute=s, write a js program to determine whether the deriver is capable of insuring
*/
let ms="Married", age=40,sex="FM";
if((ms==="Married")||((ms==="unmaried")&&(sex==="Ml")&&(age>30))||((ms==="Unmarried")&&(sex="FM")&&(age>30))){
	console.log("You are eligible");
}else{
	console.log("Not eligible");
}
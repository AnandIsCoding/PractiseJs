let p1_Age=52, p2_Age=52, p3_Age=53;
if((p1_Age > p2_Age)&&(p1_Age>p3_Age)){
	console.log("Person 1 age is greter than all");
}else if((p2_Age>p1_Age)&&(p2_Age>p3_Age)){
	console.log("Person 3 age is greter than all");
}else if((p3_Age>p1_Age)&&(p3_Age>p2_Age)){
	console.log("Person 3 age is greater than all");
}else{
	console.log("All Person's ages are equal");
}
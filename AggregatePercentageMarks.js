let m1=-98, m2=89, m3=87, m4=92, m5=89;
let aggregateMarks = m1+m2+m3+m4+m5;
let percentage=(aggregateMarks/5);
if((m1<0)||(m2<0)||(m3<0)||(m4<0)||(m5<0)){
	console.log("Invalid number");
}else{
	console.log("Aggregate marks is : ",aggregateMarks);
	console.log("Percentage Of marks is : ",percentage);
}

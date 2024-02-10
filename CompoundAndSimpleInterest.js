let principal, rate, time, SI, CI;
SI=((principal*rate*time)/100);
let a=(principal*(Math.pow((1+(rate/100),time))));
CI=a-principal;
console.log("Simple interest is : ",SI);
console.log("Compound Interest is : ",CI);

//Enter principal, rate, time and get Simple Interest and Compound Interest
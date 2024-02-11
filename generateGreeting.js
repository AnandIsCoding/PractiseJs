//Q2. Create a JavaScript function called generateGreeting that takes a name as an argument and returns a personalized greeting message. Use this function to greet three different people.

let greet=(name) => `hello ${name} welcome to pwskills assignment`
let names=["Anand","Sanket","Anurage","Hitesh","Assignment examineer"];
for(let naam of names){
	console.log(greet(naam))
}

//  output:     hello Anand welcome to pwskills assignment
//              hello Sanket welcome to pwskills assignment
//			        hello Anurage welcome to pwskills assignment
//			        hello Hitesh welcome to pwskills assignment
//			        hello Assignment examineer welcome to pwskills assignment

const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.question('Please enter your input: ', (userInput) => {
console.log(`You entered: ${userInput}`);
rl.close();
});

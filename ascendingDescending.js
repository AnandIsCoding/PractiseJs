let start=1;
let end=25;
console.log("Printing numbers in descending order");
while(end>=start){
	process.stdout.write( end +" ");
	end--;
}
console.log("------------------------Printing numbers in ascending order");
start=1;
end=25;
while(start<=end){
	process.stdout.write( start +" ");
	start++;
}

// output    Printing numbers in descending order
//           25 24 23 22 21 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1    
//           Printing numbers in ascending order
//           1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25

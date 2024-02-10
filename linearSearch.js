let arr=[3,5,7,9,5,0,77,65,43,3257,87];
let key=10;
let present=0;
function linearsearch(arr){
	for(let i=0;i<arr.length;i++){
		if(arr[i]==key){
			present++;
		}else{
			present=present;
		}
	}
	if(present==0){
		console.log("not found");
	}else{
		console.log(`found `)
	}
}
linearsearch(arr);
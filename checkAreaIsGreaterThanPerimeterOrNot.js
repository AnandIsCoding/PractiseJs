// let length=8, bredth=3;
// let area=length*bredth;
// let Perimeter=2*(length+bredth);
// if(Perimeter>area){
// 	console.log("Perimeter is greater than area");
// }else{
// 	console.log("area is greater than perimeter");
// }

let arr=[1,5,-7,-8,-6,5];
let sum=0;
let i=0;
while(i<arr.length){
	if(arr[i]<0){
		sum+=arr[i];
	}
	i++;
}
console.log(sum);
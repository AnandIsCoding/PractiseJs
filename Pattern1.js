function PrintPattern(n){
		for(let row=1;row<=n;row++){
				let str='';
				for(let col=1;col<=n;col++){
					str+="*";
				}
				console.log(str);
		}
}
PrintPattern(5);
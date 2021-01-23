//PRINT ALL NUMBERS B/W -10 AND 19
console.log("//PRINT ALL NUMBERS B/W -10 AND 19");

for(var i = -10; i < 20; i++){
	console.log(i);
}

//PRINT ALL EVEN NUMBERS B/W 10 AND 40
console.log("PRINT ALL EVEN NUMBERS B/W 10 AND 40");
for(var j = 10; j <=40; j++){
	if(j %2 === 0){
		console.log(j);
	}
}
//PRINT ALLL ODD NUMBERS B/W 300 AND 333
console.log("PRINT ALLL ODD NUMBERS B/W 300 AND 333");

for(var i = 300;i<=333;i++){
	if(i%2 != 0){
		console.log(i);
	}
}

//PRINT ALL NUMBERS DIVISIBLE BY 5 AND 3 B/W 5 AND 50
console.log("PRINT ALL NUMBERS DIVISIBLE BY 5 AND 3 B/W 5 AND 50");

for(var j = 5; j <=50;j++){
	if( j % 5 === 0 && j % 3 === 0){
		console.log(j);
	}
}
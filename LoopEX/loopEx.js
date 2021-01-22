//PRINT ALL NUMBERS B/W -10 AND 19
console.log("PRINT ALL NUMBERS B/W -10 AND 19");

var startInt = -10;

while(startInt <=19){
	console.log(startInt);
	startInt++;
}

//PRINT ALL EVEN NUMBERS B/W 10 AND 40
console.log("PRINT ALL EVEN NUMBERS B/W 10 AND 40");

var evenInt = 10;

while(evenInt <=40){
	console.log(evenInt);
	evenInt +=2;
}

//PRINT ALL ODD NUMBERS B/W 300 AND 333
console.log("PRINT ALL ODD NUMBERS B/W 300 AND 333");

var oddInt = 301;

while(oddInt <=333){
	if(oddInt %2 !="0"){
		console.log(oddInt);
	}
	oddInt++;
}

//PRINT ALL NUMBERS DIVSIBLE BY 5 AND 3 B/W 5 AND 50
console.log("PRINT ALL NUMBERS DIVSIBLE BY 5 AND 3 B/W 5 AND 50");

var lastIntEx = 5

while (lastIntEx <=50){
	if(lastIntEx %5 == "0" && lastIntEx %3 =="0"){
		console.log(lastIntEx);
	}
	lastIntEx++;
}
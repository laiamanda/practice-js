//Gets the age and convert it into a number. Prompt returns string only
var age = Number(prompt("What is your age?"));

if(age < 0){
	alert("Error");
}

if (age == "21"){
	alert("Happy 21st Birthday");
}

if (age %2 !== 0){
	console.log("You age is odd");
}

if (age %Math.sqrt(age)===0){
	console.log("Your age is a perfect square");
}


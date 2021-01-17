//create secret Number
var secretNumber = 4;
//ask user for guess
var guess = Number(prompt("Guess a number"));
//check guess

//check if guess is right
if (guess===secretNumber){
	alert("You got it RIGHT!")	
}
//otherwise check if higher
else if (guess> secretNumber){
	alert("Too high. Guess again.");
}
//otherwise check if lower
else{
	alert("Too low. Guess again.");
}
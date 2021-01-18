/*	 ONE METHOD
var button = document.querySelector("button");
var isPurple= false;

button.addEventListener("click", function(){
	//if purple make it white
	if(isPurple){
		document.body.style.background ="white";
		//isPurple = false;
	}
	//if white make it purple
	else{
		document.body.style.background ="purple";	
		//isPurple = true;
	}
	
	isPurple = !isPurple; //same as is purple = false and is purple = true; allows us to switch
	
	
});
*/

//ANOTHER METHOD
var button = document.querySelector("button");
var isPurple= false;

button.addEventListener("click", function(){
	document.body.classList.toggle("purple");
});
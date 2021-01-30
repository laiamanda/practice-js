function isEven(number){
	if(number%2 ==0){
		return true;
	}
	else{
		return false;
	}
}


function factorial(n){
	var result = n;

	if (n === 0 || n ===1 ){
		return 1;
	}

	for(var i = n-1; i >= 1; i--){
		n *=i;
	}
	return n;
}

function kebabToSnake(word){
	var newWord = word.replace(/-/g,"_");
	return newWord;
}
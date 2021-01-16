function printReverse(list){

	//var list = ["a", "b", "c"]; EXAMPLE

	for(var end = list.length-1;end>=0;end--){
		console.log(list[end]);
	}
}

function isUniform(arr){

	var first= arr[0];

	for (var i = 1 ; i <= arr.length;i++){
		if(arr[i] !== first){
			return false;
		}
	}
	return true;
}

function sumArray(addArr){
	var sum = 0;

	addArr.forEach(function(element)){
		sum +=element;
	});
	return total;
}

function max(arr){

	var max = arr[0];

	for (var i = 0; i < arr.length;i++){
		if (arr[i] > max){
			max = arr[i];
		}
	}
	return max;
}
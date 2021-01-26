var movies = [

	{
		title: "In Burges";
		rating: 5;
		hasWatched: true;
	},

	{
		title:"Frozen";
		rating: 4.5;
		hasWatched:false;
	},
	{
		title: "Les Miserable";
		rating: 3.5;
		hasWatched: true;
	}
]
function buildString(movie){
	movies.forEach(function(movie){

		var result = "You have ";

		if (movies.hasWatched){
			result+="watched ";
		}
		else{
			result+="not seen ";
		}

		result +="\"" + movies.title +"\" -- ";
		result += movies.rating + " stars";

		console.log(result);
	})
}

movies.forEach(function(movie){
	console.log(buildString(movie));
});
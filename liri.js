var action = process.argv[2];

switch(action) {

	case 'do-what-it-says':
		doThis();
		break;

	case 'movie-this':
		movie();
		break;

	case 'my-tweets':
		tweets();
		break;

	case 'spotify-this-song':
		spotify();
		break;

	default:
		console.log('not found')
		break;

}
//file reading function//
function doThis() {

	var fs = require('fs');

		fs.readFile('random.txt', 'utf8', function(error, data) {

		    if (err) {
		        return console.log(err);
		    }
		    console.log('random.txt updated');
		}); 
}
//omdb api function//
function movie() {

	var request = require('request');
	var movieName = process.argv[3];
	var queryUrl = 'http://www.omdbapi.com/?t=' + movieName +'&tomatoes=&y=&plot=short&r=json';

		console.log(queryUrl);

		request(queryUrl, function (error, response, body) {

			if (!error && response.statusCode == 200) {

				console.log("Release Year: " + JSON.parse(body)["Title"]);
				console.log("Release Year: " + JSON.parse(body)["Year"]);
				console.log("Release Year: " + JSON.parse(body)["imdbRating"]);
				console.log("Release Year: " + JSON.parse(body)["Country"]);
				console.log("Release Year: " + JSON.parse(body)["Language"]);
				console.log("Release Year: " + JSON.parse(body)["Plot"]);
				console.log("Release Year: " + JSON.parse(body)["Actors"]);
				console.log("Release Year: " + JSON.parse(body)["tomatoRating"]);
				console.log("Release Year: " + JSON.parse(body)["tomatoURL"]);
			}
		});
}
var twitter = require('twitter');

var spotify = require('spotify');
//file reading//
var fs = require('fs');

	fs.readFile('random.txt', 'utf8', function(error, data) {

	    if (err) {
	        return console.log(err);
	    }
	    console.log('random.txt updated');
	}); 
//omdb api//
var request = require('request');
var movieName = '';
var queryUrl = 'http://www.omdbapi.com/?t=' + movieName +'&y=&plot=short&r=json';

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

var twitter = require('twitter');

var spotify = require('spotify');
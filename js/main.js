//var name =  This will be the the name of the user gathered from the input box.
//var region = This will be the users' region gathered from the dropdown menu.

//Event Listener should be on the button so that when the user clicks submit
//then information should appear(Blurb, Picture, Weather Box and Map)

//Global Variables - Code Format and Structure taken from JavaScript General Assembly course - Unit 8 code challenge
var OPEN_WEATHER_MAP_API ="http://api.openweathermap.org/data/2.5/weather?q=";
var resultElement = $("#weather-result");



function callOpenWeatherMap(city){

	if (city.length == 0) {
		$("#weather-result").html("Please enter a city into the search bar.");
		} else {
			//This takes the api address and appends the city and then the API KEY
			$.get(OPEN_WEATHER_MAP_API + city + "&APPID=594e260b43f0b8027cbe5daa136577ef",
				function(searchResult) {
			 var stringOutput;
			 var celsiusTemp = toCelsius(searchResult.main.temp);

			 stringOutput = "<p>" + searchResult.name + "<br>";

			 stringOutput += celsiusTemp + " C" + "<br>";

			 stringOutput +="</p>";

			 resultElement.html(stringOutput);
			});


		}
	}

function toCelsius(kelvinTemp) {
	var temp = Math.round(kelvinTemp - 273.15);
	return temp;
}

$("#searchButton").on('click', function (event){

	event.preventDefault();

	callOpenWeatherMap($("#searchInput").val());
});



function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat:50.676831, lng:-125.724990},
		zoom: 15
	});

	var marker = new google.maps.Marker({
		position: {lat: 50.676831, lng:-125.724990},
		map:map
	});
}

//Select the input from name input and store it in var userName
//**Remember to use .val() to get the value of something!
$('#submit').click(function(e){
	e.preventDefault();
	var userName = $('#username').val();

//Select the selection from region input and store in var region
	var region = $('#region').val();

//Create if else statement to sync user input with custom blurb and appropriate bear picture based on user entry
	if (region === "mid-atlantic") {
		
		//Display a blurb about the mid-atlantic region
		$('#bear-blurb').html("Hello, " + userName + " you have selected the Mid-Atlantic as your region. You should watch out for Black Bears in your area!  Be sure to carry bear spray when camping and store food items well.  Remember Beware of the Bear!");
		//Makes sure to delete previous picture after each entry so they don't stack
		$("#bear-pic").empty();
		//Display picture of black bear
		$("#bear-pic").append('<img src="images/black-bear.jpg" />');

	} else if (region === "south") {

		//Display a blurb about the south region
		$('#bear-blurb').html("Hello, " + userName + " you have selected the South as your region. You should watch out for Black Bears in your area!  Be sure to carry bear spray when camping and store food items well.  Remember Beware of the Bear!");
		//Makes sure to delete previous picture after each entry so they don't stack
		$("#bear-pic").empty();
		//Display a picture of black bear
		$("#bear-pic").append('<img src="images/black-bear.jpg" />');
	
	} else if (region === "midwest") {

		//Display a blurb about the midwest
		$('#bear-blurb').html("Hello, " + userName + " you have selected the Midwest as your region. You should watch out for Brown Bears in your area!  Be sure to carry bear spray when camping and store food items well.  Remember Beware of the Bear!");
		//Makes sure to delete previous picture after each entry so they don't stack
		$("#bear-pic").empty();
		//Display a picture of a brown bear
		$("#bear-pic").append('<img src="images/brown-bear.jpg" />');

	} else if (region === "rockies") {

		//Display a blurb about the rockies
		$('#bear-blurb').html("Hello, " + userName + " you have selected the Rockies as your region. You should watch out for Brown Bears in your area!  Be sure to carry bear spray when camping and store food items well.  Remember Beware of the Bear!");
		//Makes sure to delete previous picture after each entry so they don't stack
		$("#bear-pic").empty();
		//Display a picture of a brown bear
		$("#bear-pic").append('<img src="images/brown-bear.jpg" />');

	} else if (region === "west coast") {

		//Display a blurb about the west coast
		$('#bear-blurb').html("Hello, " + userName + " you have selected the West Coast as your region. You should watch out for Brown Bears in your area!  Be sure to carry bear spray when camping and store food items well.  Remember Beware of the Bear!");
		//Makes sure to delete previous picture after each entry so they don't stack
		$("#bear-pic").empty();
		//Display a picture of a brown bear
		$("#bear-pic").append('<img src="images/brown-bear.jpg" />');

	} else {

		//Display a blurb about Alaska
		$('#bear-blurb').html("Hello, " + userName + " you have selected Alaska as your region. You should watch out for Grizzly Bears in your area!  Be sure to carry bear spray when camping and store food items well.  Remember Beware of the Bear!");
		//Makes sure to delete previous picture after each entry so they don't stack
		$("#bear-pic").empty();
		//Display a picture of a grizzly bear
		$("#bear-pic").append('<img src="images/grizzly-bear.jpg" />');

	}

	//Hide text above map (display:none) and show when user submits form.
	$('#map-text').show();

	//Hide weather submission form (display:none) and show when user submits form
	$('#weather').show();

	//Hide the map using CSS(display:none).  Then show it when the submit button is clicked.
	$('#map').show();


});





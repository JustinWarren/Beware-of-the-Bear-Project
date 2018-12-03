//var name =  This will be the the name of the user gathered from the input box.
//var region = This will be the users' region gathered from the dropdown menu.

//Event Listener should be on the button so that when the user clicks submit
//then the div with a.) A custom paragraph AND b.) a picture of a bear appear.

//After that a Google Map will appear.


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

//Goal #1 - Select the input from name input and store it in var userName

//**Remember to use .val() to get the value of something!
//Question - Why didn't $('form').on('submit', function(e)) work correctly?
$('#submit').click(function(e){
	e.preventDefault();
	var userName = $('#username').val();

//Goal #2 - Select the selection from region input and store in var region
	var region = $('#region').val();

//Goal #3 - Get a paragraph to display that includes custom message and both var
//$('#test').html("Hello, " + userName + " you have selected " + region + " as your region.");

//Goal #4 - Get an image of a bear to display after text- test - it worked!!
//$("#bear-pic").append('<img src="images/brown-bear.jpg" />');
	if (region === "mid-atlantic") {
		
		//Display a blurb about the mid-atlantic region
		$('#bear-blurb').html("Hello, " + userName + " you have selected the Mid-Atlantic as your region. You should watch out for Black Bears in your area!  Be sure to carry bear spray when camping and store food items well.  Remember Beware of the Bear!");
		
		//Display picture of black bear
		$("#bear-pic").append('<img src="images/black-bear.jpg" />');
	} else if (region === "south") {
		
		//Display a blurb about the south region
		$('#bear-blurb').html("Hello, " + userName + " you have selected the South as your region. You should watch out for Black Bears in your area!  Be sure to carry bear spray when camping and store food items well.  Remember Beware of the Bear!");
		
		//Display a picture of black bear
		$("#bear-pic").append('<img src="images/black-bear.jpg" />');
	
	} else if (region === "midwest") {
		//Display a blurb about the midwest
		$('#bear-blurb').html("Hello, " + userName + " you have selected the Midwest as your region. You should watch out for Brown Bears in your area!  Be sure to carry bear spray when camping and store food items well.  Remember Beware of the Bear!");
		//Display a picture of a brown bear
		$("#bear-pic").append('<img src="images/brown-bear.jpg" />');

	} else if (region === "rockies") {
		//Display a blurb about the rockies
		$('#bear-blurb').html("Hello, " + userName + " you have selected the Rockies as your region. You should watch out for Brown Bears in your area!  Be sure to carry bear spray when camping and store food items well.  Remember Beware of the Bear!");
		//Display a picture of a brown bear
		$("#bear-pic").append('<img src="images/brown-bear.jpg" />');

	} else if (region === "west coast") {
		//Display a blurb about the west coast
		$('#bear-blurb').html("Hello, " + userName + " you have selected the West Coast as your region. You should watch out for Brown Bears in your area!  Be sure to carry bear spray when camping and store food items well.  Remember Beware of the Bear!");
		//Display a picture of a brown bear
		$("#bear-pic").append('<img src="images/brown-bear.jpg" />');
	} else {
		$('#bear-blurb').html("Hello, " + userName + " you have selected Alaska as your region. You should watch out for Grizzly Bears in your area!  Be sure to carry bear spray when camping and store food items well.  Remember Beware of the Bear!");
		$("#bear-pic").append('<img src="images/grizzly-bear.jpg" />');

	}

	//Goal #5 -Hide text above map (display:none) and show when user submits form.
	$('#map-text').show();

	//Goal #6 - Hide the map using CSS(display:none).  Then select it and show it when the submit button is clicked.
	$('#map').show();


});


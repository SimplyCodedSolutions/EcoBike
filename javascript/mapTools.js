function initBasicMap(lat, long){
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: lat, long: long},
		scrollwheel: false,
		zoom: 8					//TODO determine preferable zoom.
	});
}//initBasicMap()

function initDirectionsMap(lat1, long1, lat2, long2){
	var location1 = {lat: lat1, long: long1};
	var location2 = {lat: lat2, long: long2};

	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: lat1, long: long1},	//TODO compute center between locations
		scrollwheel: false,
		zoom: 8					//TODO determine preferable zoom.
	});
	
	var directionsService = new google.maps.DirectionsService();
	var directionDisplay = new google.maps.DirectionRenderer({map: map});
	
	var request = {
		destination: location2,
		origin: location1,
		travelMode: google.maps.TravelMode.BICYCLING
	};

	directionsService.route(request, function(response, status){
		if(status == google.maps.DirectionsStatus.OK){
			directionDisplay.setDirections(response);
		}
	});
	
}//initDirectionsMap()

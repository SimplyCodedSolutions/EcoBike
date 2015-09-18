
function initDirections(lat1, long1, lat2, long2, map){
	var location1 = {lat: lat1, long: long1};
	var location2 = {lat: lat2, long: long2};
	
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

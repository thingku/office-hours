app.controller('index', ['$scope', function( $scope ) {
	$scope.intro = "Rafon";
}]);
app.controller('maps', ['$scope','$compile', function( $scope,$compile ) {
	var map, infoWindow;
    $scope.initialize = function() {
    	if ( navigator.geolocation ) {
    		navigator.geolocation.getCurrentPosition(function(position){
    			var pos = {
	              lat: position.coords.latitude,
	              lng: position.coords.longitude
	            };
	            var infoWindow = new google.maps.InfoWindow;
		    	var map = new google.maps.Map(document.getElementById('map'), {
			        center: pos,
			        zoom: 12,
			        styles: mapStyle
		        });
		        var geocoder = new google.maps.Geocoder();
		        geocoder.geocode({
		        	location : pos
		        }, function(res, status) {
		        	if ( status === 'OK' ) {
				        var template = '<div class="mapInfoWindowContent">';		        
				        template += '<ul>';
				        template += '<li><span>Current location:</span> '+res[0].formatted_address+'</li>';
				        template += '</ul>';
				        template += '</div>';				        
						infoWindow.setPosition(pos);
			            infoWindow.setContent(template);
			            infoWindow.open(map);
			            map.setCenter(pos);		
		        	}
		        });        
	    	});
    	}
    }  
	$scope.initialize();
}]);
app.controller('wifeKids', ['$scope', function( $scope ) {
	$scope.intro = "Rafon";
}]);
app.controller('birthinfo', ['$scope', function( $scope ) {
	$scope.intro = "Rafon";
}]);
app.controller('demons', ['$scope', function( $scope ) {
	$('#showDemons').click(function() {
		$('#demonContainer').toggleClass('hidden');
	});
	$('#showDemonForm').click(function(){
		if ( $(this).hasClass('active') ) {
			$('.demonEffect').animate({
				'opacity' : 0
			}, 20000, function(){
				$('#showDemonForm').removeClass('active');
				$('#showDemonForm').text("Show true colors");
			});
		} else {
			$('.demonEffect').animate({
				'opacity' : 1
			}, 20000, function(){
				$('#showDemonForm').addClass('active');
				$('#showDemonForm').text("Show disguise");
			});
		}
	});
}]);
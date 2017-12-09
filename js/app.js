var app = angular.module( 'myApp', [ 'ui.router' ] );
app.config( function( $stateProvider, $urlRouterProvider ) {
	$stateProvider
	.state( 'main', {
		url : '/',
		templateUrl : 'templates/personal.html',
		controller : 'index',	
	})
	.state( 'maps', {
		url : '/rafon/google-maps-api/geolocation',
		templateUrl : 'templates/maps.html',
		controller : 'maps'			
	})
	.state( 'users.user', {
		url : '/:id',
		views : {
			'userview' : {
				templateUrl : 'templates/userinfo.html',
				controller : 'user'
			}
		}
	})
	$urlRouterProvider.otherwise( function($injector) {
		var $state = $injector.get('$state');
		$state.go('/');
	});	 
});
var app = angular.module( 'myApp', [ 'ui.router' ] );
app.config( function( $stateProvider, $urlRouterProvider ) {
	$stateProvider
	.state( 'main', {
		url : '/',
		templateUrl : 'templates/personal.html',
		controller : 'index',	
	})
	.state( 'maps', {
		url : '/geolocation',
		templateUrl : 'templates/maps.html',
		controller : 'maps'			
	})
	.state( 'main.birthinfo', {
		url : 'birth-info/',
		views : {
			'birthInfoView' : {
				templateUrl : 'templates/birth-info.html',
				controller : 'birthinfo'
			}
		}
	})	
	.state( 'main.wifeKids', {
		url : 'wife-and-kids/',
		views : {
			'wifeKidsView' : {
				templateUrl : 'templates/wife-kids.html',
				controller : 'wifeKids'
			}
		}
	})
	.state( 'main.education', {
		url : 'educational-background/',
		views : {
			'educationView' : {
				templateUrl : 'templates/education.html',
				controller : 'wifeKids'
			}
		}
	})	
	.state( 'work', {
		url : '/work',
		templateUrl : 'templates/work.html',
	})	
	.state( 'misc', {
		url : '/miscellaneous/',
		templateUrl : 'templates/interests.html'
	})	
	.state( 'misc.game', {
		url : 'game',
		views : {
			'gameView' : {
				templateUrl : 'templates/game.html'
			}
		}
	})	
	.state( 'misc.history', {
		url : 'the-story',
		views : {
			'gnakawView' : {
				templateUrl : 'templates/gnakaw.html'
			}
		}
	})
	.state( 'misc.truth', {
		url : 'the-truth',
		views : {
			'realGnakawView' : {
				templateUrl : 'templates/truth.html'
			}
		}
	})	
	.state( 'misc.extras', {
		url : 'the-demons',
		views : {
			'demonsView' : {
				templateUrl : 'templates/demons.html',
				controller : 'demons'
			}
		}
	})					
	$urlRouterProvider.otherwise( function($injector) {
		var $state = $injector.get('$state');
		$state.go('/');
	});	 
});
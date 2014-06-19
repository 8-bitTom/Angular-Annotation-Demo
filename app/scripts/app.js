'use strict';

angular.module( 'aadApp', [
		'ngCookies',
		'ngRoute',
		'ngAnimate',
		'ngAnimate-animate.css',
		'ui.bootstrap'
	] )
	.config( function ( $routeProvider, $locationProvider ) {
		$routeProvider
			.when( '/', {
				templateUrl: 'partials/main',
				controller:  'MainCtrl'
			} )
			.otherwise( {
				redirectTo: '/'
			} );

		$locationProvider.html5Mode( true );
	} );
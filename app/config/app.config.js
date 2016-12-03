// Project Constants
var CONSTS = {
	_appName: 'Weather App',
	_cancel: 'Cancel',
	_moreProjects: 'More Projects',
	_getWeather: 'Get Weather',
	_typeYourCity: 'Type your City',
	_weatherAPI: 'Weather API'
};

/**
* WeatherApp Module
*/
angular
	.module( 'Weather.config', [] )
	.constant( 'CONSTS', CONSTS )
	.config( RouteConfig );

/**
 * [$inject modules to be used]
 * @type {Array} - list of modules
 */
RouteConfig.$inject = [ '$mdThemingProvider', '$stateProvider', '$urlRouterProvider' ];

/**
 * configure routes through ui.router
 * @param  { Provider } $mdThemingProvider [themes]
 * @param  { Provider } $stateProvider     [routing]
 * @param  { Provider } $urlRouterProvider [routing]
 */
function RouteConfig( $mdThemingProvider, $stateProvider, $urlRouterProvider ) {
	'use strict';
	$mdThemingProvider.theme( 'default' )
			.primaryPalette( 'indigo' )
			.accentPalette( 'blue' );

	// default url
	$urlRouterProvider.otherwise( '/weather' );

	/**
	 * TODO: CHANGE ROUTES
	 */
	// routing
	$stateProvider
		.state( 'weather', {
			url: '/weather',
			templateUrl: './views/home/home.tpl.html',
			controller: 'HomeCtrl as Home'
		});
}
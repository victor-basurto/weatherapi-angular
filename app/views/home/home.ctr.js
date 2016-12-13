(function() {
	'use strict';

	/**
	 * Module Definition
	 */
	angular.module( 'View.home', [] )
		.controller( 'HomeCtrl', Home );

	/**
	 * [$inject modules to be used]
	 * @type {Array} - list of modules
	 */
	Home.$inject = [ '$scope', '$log', 'DefaultService', 'WeatherApi', 'WeatherValues' ];

	/**
	 * Main Contructor
	 */
	function Home( $scope, $log, DefaultService, WeatherApi, WeatherValues ) {

		/**
		 * TODO:
		 * 		Move Init() to its own service
		 * 		convert degrees to fahrenheit
		 * 		function to get todays date
		 */

		var vm = this;
		vm.closeSidenav = closeSidenav;
		vm.init = init;
		vm.openSidenav = openSidenav;
		vm.getCityWeather = getCityWeather;
		vm.city = WeatherValues.city;
		vm.days = WeatherValues.days;

		/**
		 * [openSidenav open and close leftSideNav]
		 * @return {Service} DefaulService - [default methods available 
		 *                                    at: app/shared/services/default.fac.js]
		 */
		function openSidenav() {
			DefaultService.navMethods.openNav( 'left' );
		}
		function closeSidenav() {
			DefaultService.navMethods.closeNav( 'left' );
		}

		// watch for changes
		$scope.$watch('city', function() {
			WeatherValues.city = vm.city;
		});

		/**
		 * [getCityWeather input area, this will get current weather]
		 * @return {Method} [if validation passed, call getWeather()]
		 * TODO:
		 * 		show modal when no text is added
		 * 		validate for errors
		 * 		close sidenav when getCityWeather is clicked
		 */
		function getCityWeather() {
			if ( !vm.city ) {
				console.log( 'enter a value' );
			} else {
				getWeather().then(function() {
					$log.info( 'Weather from: ' + vm.city );
				});
				return getWeather();
			}
		}

		// get default weather
		init();

		/**
		 * [init default weather, 5 days, San Diego]
		 * @return {Promise} [log info once data is succesfully loaded]
		 */
		function init() {
			return getWeather().then( function() {
				$log.debug( 'Default Weather initialized' );
			});
		}
		/**
		 * [getWeather get weather according parameters]
		 * @return {Promise} [if there's weather return object with values]
		 */
		function getWeather() {
			return WeatherApi.getWeather( vm.days, vm.city )
				.then( function (response) {
					vm.weather = response;
					return vm.weather;
				});
		}
	}
})();
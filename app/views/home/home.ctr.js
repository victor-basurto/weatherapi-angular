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
	Home.$inject = [ '$scope', 'DefaultService', 'WeatherApi', 'WeatherValues' ];

	/**
	 * Main Contructor
	 */
	function Home( $scope, DefaultService, WeatherApi, WeatherValues ) {

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
		 * @return {[type]} [description]
		 * TODO:
		 * 		show modal when no text is added
		 * 		validate for errors
		 * 		close sidenav when getCityWeather is clicked
		 */
		function getCityWeather() {
			if ( !vm.city ) {
				console.log( 'enter a value' );
			} else {
				WeatherApi.getWeather( vm.days, vm.city )
					.then( function (response) {
						vm.weather = response;
					},function (httpError) {
						throw httpError.status + ':' + httpError.data;
					});
			}
		}

		/**
		 * Init default City with current weather
		 */
		function init() {
			// get default weather
			WeatherApi.getWeather( vm.days, vm.city )
				.then( function (response) {
					vm.weather = response;
				},function (httpError) {
					throw httpError.status + ':' + httpError.data;
				});
		}
		init();
	}
})();
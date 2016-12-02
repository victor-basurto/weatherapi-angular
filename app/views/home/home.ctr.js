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
	Home.$inject = [ 'DefaultService' ];

	/**
	 * Main Contructor
	 */
	function Home( DefaultService ) {
		var vm = this;
		vm.openSidenav = openSidenav;
		vm.closeSidenav = closeSidenav;
		vm.getCityWeather = getCityWeather;

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

		/**
		 * [getCityWeather input area, this will get current weather]
		 * @return {[type]} [description]
		 * TODO: Connect to API
		 * 		 Watch for changes
		 */
		function getCityWeather() {
			var data = angular.element( document.querySelector( '#city-input') );
			if ( !data.val() ) {
				console.log( 'type something' );
				return;
			}
			console.log(data.val());
		}
	}
})();
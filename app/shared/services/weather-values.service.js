(function() {
	'use strict';

	/**
	 * Module Definition
	 */
	angular
		.module( 'Shared.weatherValues', [] )
		.service( 'WeatherValues', WeatherValues );

	/**
	 * [WeatherValues - Service default values]
	 */
	function WeatherValues() {
		var vm = this;
		vm.city = 'San Diego, us';
		vm.days = 5;
	}
})();
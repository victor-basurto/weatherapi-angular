(function() {
	'use strict';

	/**
	 * Module Definition
	 */
	angular
		.module( 'Shared.weatherApi', [] )
		.factory( 'WeatherApi', WeatherApi );

	/**
	 * [$inject modules to be used]
	 * @type {Array} - list of modules
	 */
	WeatherApi.$inject = [ '$http', '$q', '$log' ];

	/**
	 * [WeatherApi - Service methods]
	 */
	function WeatherApi( $http, $q, $log ) {

		// url connection and id
		var WEATHERROOT = 'http://api.openweathermap.org/data/2.5/forecast/daily?',
			WEATHERID = '3c9b3f6d94643e8ec390b621a9199339';

		/**
		 * TODO:
		 * 		document functions
		 */
		return {
			// get weather
			getWeather: function( days, city ) {
				var deferred = $q.defer();
				$http({
					url: WEATHERROOT,
					method: 'GET',
					headers : {'Accept' : 'application/json'},
					params: {
						q: city,
						cnt: days,
						appid: WEATHERID
					}
				}).success( function (data) {
					deferred.resolve( data );
				}).error( function (msg, code) {
					deferred.reject(msg);
					$log.error( msg, code );
				});
				return deferred.promise;
			}
		};
	}
})();
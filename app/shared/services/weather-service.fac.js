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
	WeatherApi.$inject = [ '$http', '$log' ];

	/**
	 * [WeatherApi - Service methods]
	 */
	function WeatherApi( $http, $log ) {

		// url connection and id
		var WEATHERROOT = 'http://api.openweathermap.org/data/2.5/forecast/daily?',
			WEATHERID = '3c9b3f6d94643e8ec390b621a9199339';

		/**
		 * TODO:
		 * 		document functions
		 */
		return {
			getWeather: getWeather
		}

		/**
		 * [getWeather get weather from api]
		 * @param  {Number} days [how many days to display]
		 * @param  {String} city [display weather from this city]
		 * @return {Callback} [description below]
		 */
		function getWeather( days, city ) {
			return $http({
				url: WEATHERROOT,
				method: 'GET',
				headers : {'Accept' : 'application/json'},
				params: {
					q: city,
					cnt: days,
					appid: WEATHERID
				}
			}).then( getWeatherComplete )
			.catch( getWeatherFailed );

			/**
			 * [getWeatherComplete if no error return response]
			 * @param  {Object} response [xhr data]
			 * @return {Object} response.data [data from url]
			 */
			function getWeatherComplete( response ) {
				return response.data;
			}

			/**
			 * [getWeatherFailed if errr throw error]
			 * @param  {Object} error [xhr error data]
			 * @return {Object} error.data [$log information about the error]
			 */
			function getWeatherFailed( error ) {
				$log.error( 'XHR failed to get weather.' + error.data + '\nStatus: ' + error.status );
			}
		}	
	}
})();
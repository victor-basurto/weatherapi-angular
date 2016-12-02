/**
* WeatherApp Main Module
*/
angular.module('Weather', [
	'ngMaterial', 
	'ui.router', 
	'ngAnimate', 
	'Weather.config',
	'Weather.shared',
	'Weather.components',
	'Weather.views'
]);
(function() {
	'use strict';

	/**
	 * [navComponent navbar]
	 * @type {Object} - component values
	 */
	var NavComponent = {
		bindings: {
			leftNav: '&',
			rightNav: '&',
			getWeather: '&'
		},
		templateUrl: '/components/navigation/nav.tpl.html',
		restrict: 'E',
		replace: true,
		controller: defaultOptions
	};

	/**
	 * [defaultOptions - Component methods]
	 */
	function defaultOptions( CONSTS ) {
		var vm = this;
		vm.APPNAME = CONSTS._appName;
		vm.CANCEL = CONSTS._cancel;
		vm.MOREPROJECTS = CONSTS._moreProjects;
		vm.GETWEATHER = CONSTS._getWeather;
		vm.TYPECITY = CONSTS._typeYourCity;
		vm.WEATHERAPI = CONSTS._weatherAPI;
		/**
		 * TODO: insert methods later
		 */
	}

	/**
	 * Module Definition
	 */
	angular.module( 'Component.navigation', [] )
		.component( 'navigation', NavComponent );

	/**
	 * [$inject modules to be used]
	 * @type {Array} - list of modules
	 */
	NavComponent.$inject = [ 'CONSTS' ];
})();
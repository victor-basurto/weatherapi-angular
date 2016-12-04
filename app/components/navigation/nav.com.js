/* jshint strict: false, undef: false  */
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
			getWeather: '&',
			cityValue: '='
		},
		templateUrl: '/components/navigation/nav.tpl.html',
		restrict: 'E',
		replace: true,
		controller: defaultOptions
	};

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

	/**
	 * [defaultOptions - Component methods]
	 */
	function defaultOptions( CONSTS ) {
		/* jshint ignore:start */
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
		/* jshint ignore:end */
	}

})();
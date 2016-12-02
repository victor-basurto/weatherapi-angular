(function() {
	'use strict';

	/**
	 * Module Definition
	 */
	angular
		.module( 'Shared.default', [] )
		.factory( 'DefaultService', DefaultService );

	/**
	 * [$inject modules to be used]
	 * @type {Array} - list of modules
	 */
	DefaultService.$inject = [ '$mdSidenav' ];

	/**
	 * [DefaultService - Service methods]
	 */
	function DefaultService( $mdSidenav ) {
		var navMethods;
		return {
			/**
			 * openNav & closeNav
			 * @param  {String} `side` -  [direction of sidenav to be open/close]
			 * @return {Callback}      [notify via console.log]
			 */
			navMethods: {
				openNav: function (side) {
					$mdSidenav( side ).open()
						.then( function() {
							console.log( 'Side Nav opened succesfully' );
						});
				},
				closeNav: function (side) {
					$mdSidenav( side ).close()
						.then( function() {
							console.log( 'Side Nav closed succesfully' );
						});
				}
			}
		}
	}
})();
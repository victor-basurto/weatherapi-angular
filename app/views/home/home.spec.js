'use strict';

describe( 'HomeCtrl', function() {
	beforeEach( module( 'Weather' ) );
	beforeEach( module( 'View.home' ) );

	// HomeCtrl as vm should exist
	describe( 'Controller: HomeCtrl', function() {
		it( 'HomeCtrl as vm should exist', inject( function ($controller) {
			var vm = $controller( 'HomeCtrl' );
			expect( vm ).toBeDefined();
		}));
	});
});
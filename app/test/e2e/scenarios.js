'use strict';

describe( 'Weather App', function() {
	it( 'should redirect to index #/weather', function() {
		browser.get( 'index.html' );
		browser.getLocationAbsUrl().then( function (url) {
			expect( url ).toEqual( '/weather' );
		});
	});
});
'use strict';

// reponse to be expected
var RESPONSE = [{"dt":1481569200,"temp":{"day":296.24,"min":280.39,"max":297.18,"night":280.39,"eve":293.26,"morn":288},"pressure":985.91,"humidity":71,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":1.22,"deg":171,"clouds":0},{"dt":1481655600,"temp":{"day":289.58,"min":278.14,"max":293.01,"night":279.63,"eve":291.24,"morn":279.9},"pressure":986.15,"humidity":66,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"02d"}],"speed":0.51,"deg":328,"clouds":8},{"dt":1481742000,"temp":{"day":291.46,"min":277.88,"max":294.85,"night":279.67,"eve":292.63,"morn":278.07},"pressure":985.67,"humidity":57,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"02d"}],"speed":0.77,"deg":182,"clouds":8},{"dt":1481828400,"temp":{"day":286.69,"min":280.85,"max":286.9,"night":284.72,"eve":286.9,"morn":280.85},"pressure":978.93,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":1.92,"deg":226,"clouds":80,"rain":1.57},{"dt":1481914800,"temp":{"day":285.67,"min":279.26,"max":286.51,"night":279.26,"eve":286.51,"morn":283.89},"pressure":976.03,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":2.72,"deg":157,"clouds":22,"rain":1.17}],
	URL_API = 'http://api.openweathermap.org/data/2.5/forecast/daily?&appid=3c9b3f6d94643e8ec390b621a9199339&cnt=5&q=San+Diego,+us',
	tpl_to_cach = '<div ng-repeat="weather in Home.weather"><p>{{ weather }}</p></div>',
	tpl = './views/home/home.tpl.html',
	$scope = null,
	ctrl = null,
	$httpBackend = null;

describe( 'HomeCtrl', function() {

	beforeEach( module( 'Weather' ) );
	beforeEach( inject( function ($rootScope, $controller) {

		$scope = $rootScope.$new();
		ctrl = $controller( 'HomeCtrl', { $scope: $scope });
		$scope.vm = ctrl;

	}));

	// http - request
	beforeEach( inject( function ($injector, $templateCache) {
		// cache template
		$templateCache.put( tpl, tpl_to_cach );
		$httpBackend = $injector.get( '$httpBackend' );
		// test url and retrieve response
		$httpBackend.whenGET( URL_API )
			.respond(200, RESPONSE);
	}));
	// init weather
	describe( 'init', function() {
		it( 'Should grab 5 days on init', function() {
			$httpBackend.flush();

			// weather array should have 5 objects
			expect( ctrl.weather.length ).toBe( 5 );
		});
	});
	
	// Home Controller
	describe( 'Controller : HomeCtrl', function() {
		
		it( 'Controller AS Syntax', function() {
			// testing $scope to be defined
			expect( $scope ).toBeDefined();

			// there should be 5 days
			expect(ctrl.days).toBe( 5 );

			// default value is San Diego
			expect( ctrl.city ).toBe( 'San Diego, us' );

		});
	});
});
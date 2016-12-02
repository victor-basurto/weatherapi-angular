// Karma configuration
// Generated on Thu Dec 01 2016 10:40:27 GMT-0800 (PST)

module.exports = function(config) {

	var BASE_PATH = './app/',
		ASSETS = 'assets/libs/';

	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: BASE_PATH,


		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: [ 'jasmine' ],


		// list of files / patterns to load in the browser
		files: [
			ASSETS + 'angular/angular.min.js',
			ASSETS + 'angular-animate/angular-animate.js',
			ASSETS + 'angular-ui-router/release/angular-ui-router.min.js',
			ASSETS + 'angular-aria/angular-aria.js',
			ASSETS + 'angular-material/angular-material.min.js',
			ASSETS + 'angular-resource/angular-resource.min.js',
			ASSETS + 'angular-route/angular-route.min.js',
			ASSETS + 'lodash/dist/lodash.min.js',
			ASSETS + 'angular-mocks/angular-mocks.js',
			'config/*.js',
			'components/*.js',
			'components/**/*.js',
			'views/*.js',
			'views/**/*.js',
			'shared/*.js',
			'shared/**/*.js',
			'test/**/*.js'
		],


		// list of files to exclude
		exclude: [
			'test/e2e/*.js'
		],

		plugins: [
			'karma-chrome-launcher',
			'karma-jasmine'
		],

		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
		},


		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['progress'],


		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['Chrome'],


		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false,

		// Concurrency level
		// how many browser should be started simultaneous
		concurrency: Infinity
	})
}
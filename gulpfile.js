var gulp = require( 'gulp' ),
	uglify = require( 'gulp-uglify' ),
	compass = require( 'gulp-compass' ),
	plumber = require( 'gulp-plumber' ),
	autoPrefixer = require( 'gulp-autoprefixer' ),
	jshint = require( 'gulp-jshint' ),
	rename = require( 'gulp-rename' );

// path to files
var paths = {
	main: 'app/',
	lintSource: [ 
		'app/**/*.js', 
		'!node_modules/**', 
		'!app/assets/libs/**', 
		'!app/**/*.spec.js', //
		'!app/test/**/*.js'
	],
	compSource: [ 
		'app/**/*.js', 
		'!node_modules/**', 
		'!app/assets/libs/**' 
	],
	assetsStyles: 'app/assets/stylesheets/',
	assetsScss: 'app/assets/stylesheets/sass/'
}

/**
 * TODO: task for javascript files
 */

/**
 * [lint]
 * task: check for errors, misspelled, and not declared javascript common errors
 */
gulp.task( 'lint', function() {
	return gulp.src( paths.lintSource )
	.pipe( jshint() )
	.pipe( jshint.reporter( 'default' ) )	
});

/**
 * [build-css]
 * task: compress css files, minify css, enable scss
 */
gulp.task( 'build-css', function() {
	return gulp.src( paths.assetsStyles + 'sass/**/*.scss' )
		.pipe( plumber() )
		.pipe( compass({
			config_file: './config.rb',
			css: paths.assetsStyles + 'build',
			sass: paths.assetsStyles + 'sass',
			require: [ 'susy' ]
		}))
		.pipe( autoPrefixer({
			browsers: [
				'> 1%',
				'last 2 versions',
				'firefox >= 4',
				'safari 7',
				'safari 8',
				'IE 8',
				'IE 10',
				'IE 11'
			],
			cascade: false
		}))
		.pipe( gulp.dest( paths.assetsStyles + 'build' ) )
});

/**
 * [watch]
 * task: watch for all changes
 */
gulp.task( 'watch', function() {
	gulp.watch(  paths.assetsScss + '**/*.scss', [ 'build-css' ] );
	gulp.watch( paths.lintSource, [ 'lint' ] );
});

/**
 * [default]
 * task: default - run tasks
 */
gulp.task( 'default', [ 'build-css', 'lint', 'watch' ] );
var express = require( 'express' ),
	morgan = require( 'morgan' ),
	bodyParser = require( 'body-parser' ),
	methodOverride = require( 'method-override' ),
	config = require( './config/server_config' ),
	mongoose = require( './config/mongoose_config' );

var db = mongoose(),
	api = express();
	
api.use( morgan( 'dev' ) );
api.use( bodyParser.urlencoded({ 'extended': 'true' }) );
api.use( bodyParser.json() );
api.use( bodyParser.json({ type: 'application/vnd.api+json' }));
api.use( methodOverride() );
api.use( '/', express.static( 'app' ) );

// remove comment when routes are required
// require( './routes/default_routes.routes' )( api );

api.listen( config.port, function() {
	console.log( 'app running in http://localhost:' + config.port );
});
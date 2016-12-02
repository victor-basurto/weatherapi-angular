var config = require( './server_config' ),
	mongoose = require( 'mongoose' );

module.exports = function() {
	var db = mongoose.connect( config.mongoURI );
	return db;
}
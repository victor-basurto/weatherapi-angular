var indexrt = require( './index.route' );

module.exports = function( api ) {
	api.route( '/' ).get( indexrt.getRoute );
}
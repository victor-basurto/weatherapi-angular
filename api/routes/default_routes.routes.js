const indexrt = require( './index.route' );

module.exports = ( api ) => {
	api.route( '/' ).get( indexrt.getRoute );
}
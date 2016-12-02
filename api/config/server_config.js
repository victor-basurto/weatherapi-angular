var port = process.env.PORT || Number( 8000 ),
	mongoURI = 'mongodb://localhost/weatherapp';

module.exports = {
	port: port,
	mongoURI: mongoURI
}
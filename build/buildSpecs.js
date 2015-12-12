var fs = require( 'fs' );
var async = require( 'async' );
var parse = require( 'csv-parse' );

function readMessageStructures( next ) {
	fs.readdir( 'specs', function( err,files ){
		if(err) throw err;

		var loadedSpec = {};
		async.each( files, function( file, done ) {
			var specName = file.split('.').shift();
			var content = fs.readFileSync( 'specs/' + file ).toString('utf8');
			parse(content, { columns: true }, function( specName, err, output ) {
				loadedSpec[ specName ] = {
					data: output,
					name: specName
				};
				done();
			}.bind( null, specName ) );
		}, function() {
			module.exports = loadedSpec;
			next();
		} );
	});
}

exports.action = readMessageStructures;
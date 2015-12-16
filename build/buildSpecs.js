var fs = require( 'fs' );
var async = require( 'async' );
var parse = require( 'csv-parse' );

function readMessageStructures( next ) {
	var loadedSpec = {};
	var content = fs.readFileSync( 'data/specs.csv' ).toString('utf8');
	parse(content, { 
		columns: true,
		skip_empty_lines: true,
		trim: true
	}, function( err, output ) {
		output.forEach( function( entry ) {
			if( !loadedSpec[ entry.type ] ) {
				loadedSpec[ entry.type ] = {
					name: entry.type,
					data: []
				};	
			} 
			loadedSpec[ entry.type ].data.push( entry );
		} )
		module.exports = loadedSpec;
		readMessagePaths( loadedSpec, next );
	});
}

function readMessagePaths( loadedSpec, next ) {
	var content = fs.readFileSync( 'data/paths.csv' ).toString('utf8');
	
	parse(content, { 
		columns: true,
		skip_empty_lines: true,
		trim: true
	}, function( err, output ) {
		output.forEach( function( path ) {
			var pathParts = path.path.split( '|' );
			var parts;
			var temp = [];

			if( !loadedSpec[ path.type ].paths ) {
				loadedSpec[ path.type ].paths = {};
			}
			
			for( var i=0; i < pathParts.length; i++ ) {
				parts = pathParts[ i ].split( '_' );
				var spec = getSpec( loadedSpec[ path.type ].data, parts[ 1 ] );
				
				temp.push( {
					firstClient: parts[ 0 ] == 1,
					client: parts[ 0 ],
					id: parts[ 1 ],
					label: spec.action,
					message: spec.message
				} );

				if( spec.ack ) {
					temp.push( {
						firstClient: parts[ 0 ] == 1,
						client: parts[ 0 ],
						id: parts[ 1 ],
						label: 'Recieve ' + spec.action + ' Ack',
						message: spec.ack
					} );
				}
			}

			loadedSpec[ path.type ].paths[ path.name ] = temp;
			loadedSpec[ path.type ].data.push( path );
		} )
		module.exports = loadedSpec;
		next();
	});
}

function getSpec( types, id, isAck ) {
	for( var i=0; i< types.length; i++ ) {
		if( types[ i ].id === id ) {
			return types[ i ];		
		}
	}
	console.log( 'Error! Missing SPEC ' + id );
}

exports.action = readMessageStructures;
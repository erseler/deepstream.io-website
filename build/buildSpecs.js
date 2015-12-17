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
				

				temp.push( createMessage( parts, spec ) );
				spec.ack && temp.push( createMessage( parts, spec, true ) );
			}

			loadedSpec[ path.type ].paths[ path.name ] = temp;
			loadedSpec[ path.type ].data.push( path );
		} )
		module.exports = loadedSpec;
		next();
	});
}

function createMessage( parts, spec, isAck ) {
	var message = {
		clientName: parts[ 0 ] == 1 ? 'ClientA' : 'ClientB',
		client: parts[ 0 ],
		id: parts[ 1 ]
	};

	if( isAck ) {
		message.label = spec.action + ' Ack';
		message.message = spec.ack;
	} else {
		message.label = spec.action;
		message.message = spec.message;
	}

	return message
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
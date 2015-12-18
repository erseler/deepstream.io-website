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
					structures: []
				};	
			} 
			loadedSpec[ entry.type ].structures.push( entry );
		} )
		module.exports = loadedSpec;
		readMessagePaths( loadedSpec, next );
	});
}

function readMessagePaths( loadedSpec, next ) {
	var content = fs.readFileSync( 'data/scenarios.csv' ).toString('utf8');
	
	parse(content, { 
		columns: true,
		skip_empty_lines: true,
		trim: true
	}, function( err, output ) {
		output.forEach( function( scenario ) {
			var loadedType = loadedSpec[ scenario.type ];
			var pathParts = scenario.path.split( '|' );
			var parts;
			var temp = [];
			scenario.happy = scenario.happy === 'true';

			if( !loadedType.scenarios ) {
				loadedType.scenarios = [];
			}
			
			for( var i=0; i < pathParts.length; i++ ) {
				parts = pathParts[ i ].split( '_' );
				var spec = getSpec( loadedSpec[ scenario.type ].structures, parts[ 1 ] );
				if( !spec ) {
					console.log( 'Error! Missing SPEC: ', pathParts[ 1 ], 'in', scenario, i );
				}

				if( scenario.happy && parts[ 2 ] !== 'in' ) {
					temp.push( createMessage( parts, spec ) );
					spec.ack && temp.push( createMessage( parts, spec, true ) );
				} else if( parts[ 2 ] === 'ack' ) {
					parts.splice( 2, 1 );
					temp.push( createMessage( parts, spec, true ) );
				} else {
					temp.push( createMessage( parts, spec ) );
				}
			}

			scenario.paths = temp;
			loadedType.scenarios.push( scenario );
		} )
		module.exports = loadedSpec;
		next();
	});
}

function createMessage( parts, spec, isAck ) {
	var message = {
		clientName: parts[ 0 ] == 1 ? 'ClientA' : 'ClientB',
		client: parts[ 0 ],
		id: parts[ 1 ],
		outgoing: !isAck && parts[ 2 ] !== 'in' ,
		incoming: isAck || parts[ 2 ] === 'in'
	};

	message.direction = message.incoming ? 'In' : 'Out';

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
}

exports.action = readMessageStructures;
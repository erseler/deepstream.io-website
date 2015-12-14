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
	var paths = require( '../data/paths.json' );
	var result = loadedSpec;
	for( var type in paths ) {
		var typePaths = paths[ type ];
		for( var pathName in typePaths ) {
			if( !typePaths[ pathName ].map ) {
				continue;
			}; 
			if( !result[ type ].paths ) {
				result[ type ].paths = {};
			}
			result[ type ].paths[ pathName ] = 
				typePaths[ pathName ].map( function( value ) {
					var parts = value.split( '_' );				
					return {
						client: parts[ 0 ],
						id: parts[ 1 ],
						label: getName( loadedSpec[ type ].data, parts[ 1 ], parts.length > 2 )
					}
				} );
		}
	}

	next();
}

function getName( types, id, isAck ) {
	for( var i=0; i< types.length; i++ ) {
		if( types[ i ].id === id ) {
			if( isAck ) {
				return types[ i ].action + ' Ack';	
			} else 
				return types[ i ].action;			
		}
	}
}

exports.action = readMessageStructures;
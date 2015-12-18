var fs = require( 'fs' );
var hbs = require( 'handlebars' );
var path = require( 'path' );


hbs.registerHelper( 'link', function( type, target, yes ) {
	var url, folder;
	target = hbs.compile( target )( this );

	if( type === 'page' ) {
		folder = module.exports.outputDir;
	}
	else if( type === 'asset' ) {
		folder = module.exports.outputDir + '\\assets';
	}
	else if( type === 'blogpost' ) {
		folder = module.exports.outputDir + '\\blog\\' + target;
		return path.relative( module.exports.cwd, folder );
	} else {
		throw new Error( 'Link type not supported: ' + type );
	}

	url = path.relative( module.exports.cwd, folder );

	return path.join( url, target ).replace( /\\/g, '/');
});

hbs.registerHelper( 'issue', function( number ){
	var html = '<a class="githubIssue"'+
			' href="https://github.com/hoxton-one/deepstream.io/issues/'+
			number +'">#'+ number +'</a>';

	return new hbs.SafeString( html );
});

hbs.registerHelper( 'githubstar', function( number ){
	var html = '<a class="github-button" href="https://github.com/hoxton-one/deepstream.io" ' + 
	'data-icon="octicon-star" data-style="mega" data-count-href="/hoxton-one/deepstream.io/stargazers" ' +
	'data-count-api="/repos/hoxton-one/deepstream.io#stargazers_count" ' + 
	'data-count-aria-label="# stargazers on GitHub" ' + 
	'aria-label="Star hoxton-one/deepstream.io on GitHub">Star</a>';
	return new hbs.SafeString( html );
});

hbs.registerHelper( 'downloadItem', function( name, packageName, hasBower, icon ){
	var html = '' +
		'<li class="download-item ' + packageName.replace( '.', '_') + '" data-package="' + packageName + '">';

		if( icon ) {
			html += '<i class="fa fa-' + icon + '"></i>';
		}

		html +=	'<h3 class="download-item-header">' + name + '</h3>' +
			'<code>' +
				'<span class="pckg-name">' + packageName + '</span><span class="version">-</span>' +
			'</code>' +
			'<a class="npm download-link" title="get from npm" href="https://www.npmjs.com/package/' + packageName + '"><i></i><span>NPM</span></a>';
		if( hasBower === true ) {
			html += '<a class="bower download-link" title="get from bower" href="http://bower.io/search/?q=' + packageName + '"><i></i><span>Bower</span></a>';
		}

		html +=	'<a class="github download-link" title="see on github" href="https://github.com/hoxton-one/' + packageName + '"><i></i><span>Github</span></a>' +
		'</li>';

	return new hbs.SafeString( html );
});


hbs.registerHelper( 'viewport', function(){
	if( this.isDocs ) {
		return '';
	} else {
		return new hbs.SafeString( '<meta name="viewport" content="width=device-width, initial-scale=1" />' );
	}
});

hbs.registerHelper( 'message', function( message ) {
	if( !message ) {
		return '';
	}
	
	var parts = message.split( '|' );
	var messageClass = 'message-format';
	messageClass += parts[ 1 ] !== 'A' ? '' : ' ack-message-format';
	messageClass += parts[ 1 ] !== 'E' ? '' : ' error-message-format';

	var html = '<span class="' + messageClass + '">';
	for( var i=0; i<parts.length; i++ ) {
		html+= '<span class="message-format-part-' + i + '">' + parts[ i ] + '</span>';
		if( i<parts.length-1) {
			html += '<span class="message-format-pipe">|</span>';
		}	
	}
	html = html.replace( '+', '' );
	html += '<span class="message-format-end">+</span>';
	html += '</span>';
	return new hbs.SafeString( html );
} );

hbs.registerHelper( 'debug', function(){
	delete this.blogPosts;
	var val = JSON.stringify( this, null, '    ' );
	return new hbs.SafeString( '<pre>' + val + '</pre>' );
});

hbs.registerHelper( 'activeSpecPage', function( name, type, options ) {
    var fnTrue=options.fn, fnFalse=options.inverse;
    return options.data.root.pagePath.indexOf( name + '\\' + type ) > -1 ? fnTrue() : fnFalse();
});

/**
*	Load Partials
***/
fs.readdir( 'partials', function( err,files ){
	if(err) throw err;

	files.forEach(function(file){
		var templateName = file.split('.').shift();
		var partialContents = fs.readFileSync( 'partials/' + file ).toString('utf8');
		hbs.registerPartial( templateName, partialContents );
	});
});

module.exports = hbs;

module.exports.cwd = null;

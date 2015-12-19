( function( $ ) {

	$( document ).ready(function() {

		$( 'tr .message' ).mouseenter( function( e ) {
			var destination = $( e.target ).offset();

			$( '.message-in-depth' )
				.css({top: destination.top - 135, left: destination.left})
				.show();
		} );

		$( 'tr .message' ).mouseleave( function( e ) {
			$( '.message-in-depth' )
				.hide();
		} );
	});

} )( jQuery );
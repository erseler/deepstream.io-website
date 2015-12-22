( function( $ ) {

	$( document ).ready(function() {

		$( '.message-format' ).mouseenter( function( e ) {
			var destination = $( e.target ).parent( '.message-format' ).offset();

			$( '.message-in-depth' )
				.css({top: destination.top - 133, left: destination.left - 100 })
				.show();
		} );

		$( '.message-format' ).mouseleave( function( e ) {
			$( '.message-in-depth' )
				.hide();
		} );
	});

} )( jQuery );
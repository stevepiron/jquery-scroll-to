/**!
 * @author Steve Piron <https://twitter.com/stevepiron>
 * @requires jQuery
 *
 * A jQuery plugin that will animate page jumps to anchors.
 */
(function( $ ) {

    var defaults;
    var params;

    var $body = $('body');

    // ====================================================================== //
    // Functions
    // ====================================================================== //

    /**
     * @function `scrollToTarget`
     *
     * Scrolls through the page to the defined target.
     *
     * @param $link {jQuery} - the clicked link.
     */
    function scrollToTarget( $link ) {
        var $target = $($link.attr('href'));

        params.container.animate({
            scrollTop: $target.offset().top - params.offset
        }, params.scrollSpeed);
    }

    // ====================================================================== //
    // Plugin
    // ====================================================================== //

    $.fn.spScrollTo = function( options ) {

        /**
         * Note: using `return` keeps jQuery's chaining possibility
         */
        return this.each(function() {

            defaults = {
                container: $body,
                offset: 0,
                scrollSpeed: 800,
                onBeforeScroll: undefined
            };

            params = $.extend( defaults, options );

            var $this = $(this);

            // ============================================================== //
            // On click
            // ============================================================== //

            $this.on('click', function(e) {
                e.preventDefault();
                if( typeof params.onBeforeScroll == 'function' ) {
                    params.onBeforeScroll(e);
                }
                scrollToTarget( $this );
                return;
            });

        });
    };

}( jQuery ));

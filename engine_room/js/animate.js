/*
* 15. Animate.js
*/
var docElem = window.document.documentElement;

    function getViewportH() {
        var client = docElem['clientHeight'],
            inner = window['innerHeight'];
        
        if( client < inner )
            return inner;
        else
            return client;
    }

    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }

    function getOffset( el ) {
        var offsetTop = 0, offsetLeft = 0;
        do {
            if ( !isNaN( el.offsetTop ) ) {
                offsetTop += el.offsetTop;
            }
            if ( !isNaN( el.offsetLeft ) ) {
                offsetLeft += el.offsetLeft;
            }
        } while( el = el.offsetParent )

        return {
            top : offsetTop,
            left : offsetLeft
        }
    }

    function inViewport( el, h ) {
        var elH = el.offsetHeight,
            scrolled = scrollY(),
            viewed = scrolled + getViewportH(),
            elTop = getOffset(el).top,
            elBottom = elTop + elH,
            // if 0, the element is considered in the viewport as soon as it enters.
            // if 1, the element is considered in the viewport only when it's fully inside
            // value in percentage (1 >= h >= 0)
            h = h || 0;

        return (elTop + elH * h) <= viewed && (elBottom) >= scrolled;
    }
(function ( $ ) {

    'use strict';

    $.fn.animateIn = function(){
    
        var el = $(this);
        var height = $(window).innerHeight();
        
        el.css('opacity', '0');
        
        $(window).scroll(function(){
            
            el.each(function(){
                
                el.css('opacity', '100');
                
                var scrollTop  = $(window).scrollTop();
                var obj = $(this);
                var offset = obj.offset();
                var top = offset.top;
                var distance = (top - scrollTop);

                if( distance < screen.availHeight-100 ){
                    var incoming = $(this).data('animate');          
                    $(this).addClass('animated ' + incoming);
                }
                
            });

        });    
        
    };

}( jQuery ));
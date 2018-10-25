$(document).ready(function(){
    var scrollTop = 0;
    $(window).scroll(function(){
        scrollTop = $(window).scrollTop();
        if (scrollTop >= 50) {
            $('nav').addClass('reduced');
        } else if (scrollTop < 50) {
            $('nav').removeClass('reduced');
        }
    });

    /*-------------------------------------------------------------------------------
    smoothScroll js
  -------------------------------------------------------------------------------*/

    $(function() {
        $('.nav-item a, #home a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
        });
    });

});
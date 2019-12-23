$(document).ready(function(){
    var scrollTop = 0;
    var viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if(viewportWidth > 575) {
        $('#profile-skills-container .profile').attr('data-aos','fade-left');
        $('#profile-skills-container .skills').attr('data-aos','fade-right');
        $('#profile-skills-container .skills ul').each(function(){
            $(this).attr('data-aos','zoom-out')
        });
    }
    $(window).scroll(function(){
        scrollTop = $(window).scrollTop();
        if (scrollTop >= 50 && viewportWidth > 575) {
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

    $(function() {
        $('.navbar-button').bind('click', function(event) {
            if($('nav').hasClass('closed')) {
                $('nav').removeClass('closed');
                $('nav').addClass('opened');
            } else {
                $('nav').removeClass('opened');
                $('nav').addClass('closed');
            }
        });
    });

});
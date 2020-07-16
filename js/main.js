/*-------------------------------------------------------------------------
    
    Theme Name:Synochro: One Page Minimal Bootstrap Portfolio HTML Template
    Auther: SynchroTheme
    Author URI: http://synchrotheme.com
    Version: 1.0

  ------------------------------------------------------------------------- */


jQuery(document).ready(function(){
 'use strict';

    /*
     * ----------------------------------------------------------------------------------------
     *  STICKY MENU
     * ----------------------------------------------------------------------------------------
     */
    function stickyMenu(){
        $(window).on('scroll', function(){
            var x = $(this).scrollTop();

            if(x > 100){
                $('.main_menu').addClass('isActive');
            }else{
                $('.main_menu').removeClass('isActive');
            }
        });
    }
    stickyMenu();

    /*
     * ----------------------------------------------------------------------------------------
     *  SMOOTH SCORLL
     * ----------------------------------------------------------------------------------------
     */
      $('a[href*="#"]:not([href="#"]):not([data-toggle])').on('click',function() {
        if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });

    /*
     * ----------------------------------------------------------------------------------------
     *  SCROLL SPY
     * ----------------------------------------------------------------------------------------
     */
    $('body').scrollspy({ target: '.navbar-ex1-collapse' });

    /*
     * ----------------------------------------------------------------------------------------
     *  MIX IT UP
     * ----------------------------------------------------------------------------------------
     */
    $('.sort').mixItUp();

    /*
     * ----------------------------------------------------------------------------------------
     *  TESTIMONIAL
     * ----------------------------------------------------------------------------------------
     */
    $('.testimonial').owlCarousel({
        items: 1,
        nav: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000
    });
    /*
     * ----------------------------------------------------------------------------------------
     *  STELLAR
     * ----------------------------------------------------------------------------------------
     */
    $(window).stellar({
        responsive: true,
        positionProperty: 'position',
        horizontalScrolling: false
    });
});
/* 
==================================================
- Template Name: AGKN
- Author: MountainTheme 
- Description: AGKN - Personal Portfolio HTML Template
- Version: 2.1.0
==================================================
*/

(function ($) {

    "use strict";

    /* -------------------------------------------------------- * /
    /* - Preloader
    /* -------------------------------------------------------- */
    $(window).on('load', function () {
        $('.loader').fadeOut();
        $('.preloader').delay(333).fadeOut("slow");
        $('body').delay(333);
    });

    /* -------------------------------------------------------- */
    /* - WOW animation
    /* -------------------------------------------------------- */
    $(window).on('load', function () {
        $(".wow").each(function () {
            if ($(window).width() > 767) {
                var wow = new WOW({
                    boxClass: 'wow',
                    animateClass: 'animated',
                    offset: 0,
                    mobile: false,
                    live: true
                });
                new WOW().init();
            }
        });
    });

    /* -------------------------------------------------------- */
    /* - Back to Top
    /* -------------------------------------------------------- */
    $(function () {
        let scrollTopButton = $('#back-top-top');

        $(window).on('scroll', function () {
            let scroll = $(document).scrollTop();

            // Apply Transition
            if (scroll >= 250) {
                scrollTopButton.addClass("active");
            } else {
                scrollTopButton.removeClass("active");
            }
        });
    });

    /* -------------------------------------------------------- */
    /* - Tooltips
    /* -------------------------------------------------------- */
    let tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    let tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

    /* -------------------------------------------------------- */
    /* - Copyright Year Change
    /* -------------------------------------------------------- */
    $('#currentYear').text(new Date().getFullYear());

})(jQuery);
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

    /* -------------------------------------------------------- * /
    /* - Hamburger Menu
    /* -------------------------------------------------------- */
    $('.hamburger-menu').on('click', function () {
        $('.hamburger-menu').toggleClass('active');
    });

    let navBar = document.querySelectorAll(".nav-link");
    let navbarCollapse = document.querySelector(".navbar-collapse");
    navBar.forEach((a) => {
        a.addEventListener("click", () => {
            navbarCollapse.classList.remove("show");
            $('.hamburger-menu').removeClass('active');
        });
    });

    /* -------------------------------------------------------- */
    /* - Fixed Navbar
    /* -------------------------------------------------------- */
    $(function () {
        let navBar = $('.navbar-sticky');
        let scrollTopButton = $('#scrollUp');

        $(window).on('scroll', function () {
            let scroll = $(document).scrollTop();
            if (scroll >= 120) {
                navBar.addClass('navbar-sticky-moved-up');
            } else {
                navBar.removeClass('navbar-sticky-moved-up');
            }

            // Apply Transition
            if (scroll >= 250) {
                navBar.addClass('navbar-sticky-transition');
                scrollTopButton.addClass("scrollActive");
            } else {
                navBar.removeClass('navbar-sticky-transition');
                scrollTopButton.removeClass("scrollActive");
            }

            // Sticky on 
            if (scroll >= 500) {
                navBar.addClass('navbar-sticky-on');
            } else {
                navBar.removeClass('navbar-sticky-on');
            }
        });
    });

    /* -------------------------------------------------------- */
    /* - Typed
    /* -------------------------------------------------------- */
    var typed = new Typed('.typed', {
        stringsElement: '.typed-strings',
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1500,
    });

    /* -------------------------------------------------------- */
    /* - Youtube Video
    /* -------------------------------------------------------- */
    $(".player").each(function () {
        $(this).mb_YTPlayer();
    });

    /* -------------------------------------------------------- */
    /* - Testimonial Owl Carousel
    /* -------------------------------------------------------- */
    $('.testimonial-card-carousel').owlCarousel({
        margin: 24,
        smartSpeed: 1000,
        responsiveClass: true,
        dots: true,
        loop: true,
        nav: false,
        navText: ["<i class='fa-regular fa-chevron-left'></i>", "<i class='fa-regular fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            767: {
                items: 1
            },
            1000: {
                items: 1
            },
            1200: {
                items: 2
            },
            1920: {
                items: 2
            }
        }
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
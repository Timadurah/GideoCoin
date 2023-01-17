$(function ($) {
  "use strict";

  jQuery(document).ready(function () {

    /* niceSelect */
    $("select").niceSelect();

    /* Wow js */
    new WOW().init();
  
    /* Counter */
    $(".counter-item .count-num").rCounter({
      duration: 60
    });

    /*  Compare Slider */
    var $compare = $(".compare .coin-box");
    $compare.owlCarousel({
      loop: true,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 3000,
      smartSpeed: 1200,
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 1
        },
        768: {
          items: 2
        },
        992: {
          items: 3
        },
        1199: {
          items: 3
        },
        1200: {
          items: 4
        }
      }
    });

    /* testimonial-slider */
    var $testo = $(".testo-box");
    $testo.owlCarousel({
      loop: true,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      dots: true,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      autoplayTimeout: 4000,
      smartSpeed: 1200,
      autoplay: true,
      items: 1
    });

    /* widget-slider */
    var $widget = $(".widget-slider");
    $widget.owlCarousel({
      loop: true,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      dots: false,
      autoplay: true,
      autoplayTimeout: 4000,
      smartSpeed: 1200,
      margin: 10,
      items: 1
    });

    /* history-slider */
    $(".history-slider").owlCarousel({
      loop: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      dots: false,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      center: true,
      responsive: {
        0: {
          items: 1,
        },
        767: {
          items: 3,
        },
        1199: {
          items: 5,
        },
      }
    })

    /*  team Slider */
    var $team = $(".team");
    $team.owlCarousel({
      loop: true,
      nav: false,
      dots: false,
      margin: 20,
      autoplay: true,
      autoplayTimeout: 3000,
      smartSpeed: 1200,
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 1
        },
        768: {
          items: 2
        },
        992: {
          items: 3
        },
        1199: {
          items: 3
        },
        1200: {
          items: 4
        }
      }
    });

    /* Magnific Popup Activation Probucket */
    $(".youtube-video").magnificPopup({
      type: "video",
    });

    /*back to top-*/
    $(document).on("click", "#scrollUp", function () {
      $("html,body").animate({
        scrollTop: 0,
      },
        100
      );
    });

    /* sticky navigation menu */
    var lastScrollTop = "";
    $(window).on("scroll", function () {
      var $window = $(window);
      if ($window.scrollTop() > 0) {
        $(".mein-menu").addClass("nav-fixed");
      } else {
        $(".mein-menu").removeClass("nav-fixed");
      }

      /*---------------------------
         back to top show / hide
     ---------------------------*/
      var st = $(this).scrollTop();
      if ($(window).scrollTop() > 500) {
        $("#scrollUp").fadeIn();
      } else {
        $("#scrollUp").fadeOut();
      }
      lastScrollTop = st;
    });

  });

  $(window).on("load", function () {
    /*Preloader*/
    $('.preloader').fadeOut(1000);
    var img = $('.bg_img');
    img.css('background-image', function () {
      var bg = ('url(' + $(this).data('background') + ')');
      return bg;
    });
  });
});
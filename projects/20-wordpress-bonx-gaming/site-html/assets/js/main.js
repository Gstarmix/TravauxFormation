(function ($) {
  "use strict";
  new WOW().init();
  function dataBackgroundImage() {
    $('[data-bgimg]').each(function () {
      var bgImgUrl = $(this).data('bgimg');
      $(this).css({
        'background-image': 'url(' + bgImgUrl + ')'
      });
    });
  }
  $(window).on('load', function () {
    dataBackgroundImage();
  });
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 100) {
      $(".sticky-header").removeClass("sticky");
    } else {
      $(".sticky-header").addClass("sticky");
    }
  });
  var $sliderActvation = $('.slick__activation');
  if ($sliderActvation.length > 0) {
    $sliderActvation.slick({
      prevArrow: '<button class="prev_arrow"><img width="17" height="24" src="assets/img/icon/navigation-arrow2.webp" alt=""></button>',
      nextArrow: '<button class="next_arrow"><img width="17" height="24" src="assets/img/icon/navigation-arrow1.webp" alt=""></button>'
    });
  }
  ;
  var $sliderActvation = $('.slick__activation2');
  if ($sliderActvation.length > 0) {
    $sliderActvation.slick({
      prevArrow: '<button class="prev_arrow"><i class="icofont-long-arrow-left"></i></button>',
      nextArrow: '<button class="next_arrow"><i class="icofont-long-arrow-right"></i></button>'
    });
  }
  ;
  $('.video_popup').magnificPopup({
    type: 'iframe',
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });
  $('.popup_img').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });
  $('.counterup').counterUp({
    delay: 20,
    time: 2000
  });
  $(document).ready(function () {
    $('select,.select_option').niceSelect();
  });
  scrollToTop();
  function scrollToTop() {
    var $scrollUp = $('#scroll-top'),
      $lastScrollTop = 0,
      $window = $(window);
    $window.on('scroll', function () {
      var st = $(this).scrollTop();
      if (st > $lastScrollTop) {
        $scrollUp.removeClass('show');
      } else {
        if ($window.scrollTop() > 200) {
          $scrollUp.addClass('show');
        } else {
          $scrollUp.removeClass('show');
        }
      }
      $lastScrollTop = st;
    });
    $scrollUp.on('click', function (evt) {
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      evt.preventDefault();
    });
  }
  scrollToTop();
  var $offcanvasNav = $('.offcanvas_main_menu'),
    $offcanvasNavSubMenu = $offcanvasNav.find('.sub-menu');
  $offcanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="icofont-simple-down"></i></span>');
  $offcanvasNavSubMenu.slideUp();
  $offcanvasNav.on('click', 'li a, li .menu-expand', function (e) {
    var $this = $(this);
    if ($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/) && ($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
      e.preventDefault();
      if ($this.siblings('ul:visible').length) {
        $this.siblings('ul').slideUp('slow');
      } else {
        $this.closest('li').siblings('li').find('ul:visible').slideUp('slow');
        $this.siblings('ul').slideDown('slow');
      }
    }
    if ($this.is('a') || $this.is('span') || $this.attr('clas').match(/\b(menu-expand)\b/)) {
      $this.parent().toggleClass('menu-open');
    } else if ($this.is('li') && $this.attr('class').match(/\b('menu-item-has-children')\b/)) {
      $this.toggleClass('menu-open');
    }
  });
})(jQuery);
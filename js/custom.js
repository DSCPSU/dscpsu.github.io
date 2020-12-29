
$(window).on('load', function() {
  'use strict';
  $('#loading').addClass('hidden');
});

var $iframe = $('iframe'),
    src = $iframe.data('src');

if (window.matchMedia("(min-width: 720px)").matches) {
    $iframe.attr('src', src);
}else{
    $iframe.css('display', 'none');
}

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});

(function($) {
  'use strict';

  /*====================================================*/
  /* VARIABLES                                           */
  /*====================================================*/
  var navBar = $('.custom-menu'),
    navbarLinks = $('.custom-menu .nav-link');

  /*====================================================*/
  /* STICKY NAVBAR                                      */
  /*====================================================*/
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 50) {
      $(navBar).addClass('navbar-is-sticky');
    } else {
      $(navBar).removeClass('navbar-is-sticky');
    }
  });

  $('.navbar-toggler').on('click', function(e) {
    $(this).toggleClass('menu-is-expanded');
  });

  $(document).on('click', '.navbar-collapse.show', function(e) {
    if ($(e.target).is('a')) {
      $(this).collapse('hide');
      $('.navbar-toggler').toggleClass('menu-is-expanded');
      $('.Menu-Icon--Circle').css('transform', 'translateX(-50%) translateY(-50%) scale(1)');
    }
  });

  /*====================================================*/
  /* NAVBAR ON SCROLL EASING                            */
  /*====================================================*/
  $(navbarLinks).on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
  });

  /*====================================================*/
  /* TABS INIT                                   */
  /*====================================================*/
  $('.js-tabs a').on('click', function(e) {
    e.preventDefault();
    $(this).tab('show');
  });

  /*====================================================*/
  /* TOOLTIPS                                           */
  /*====================================================*/
  $('[data-toggle="tooltip"]').tooltip();

  /*====================================================*/
  /* VIDEO MODALS                                           */
  /*====================================================*/

  $('.js-video-modal-trigger').magnificPopup({
    type: 'iframe',
    iframe: {
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: function(url) {
            var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
            if (!m || !m[1]) return null;
            return m[1];
          },
          src: '//www.youtube.com/embed/%id%?autoplay=1'
        },
        vimeo: {
          index: 'vimeo.com/',
          id: function(url) {
            var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
            if (!m || !m[5]) return null;
            return m[5];
          },
          src: '//player.vimeo.com/video/%id%?autoplay=1'
        }
      }
    }
  });

})(jQuery);
/*
 Project name:       SweetThemes
 Project author:     SweetThemes
 File name:          Custom JS
*/
jQuery("[class$='mt_circle']").percircle();
  if ( jQuery( "#grid" ).length ) {
    (function() {
      function init() {
        var speed = 300,
          easing = mina.backout;
        [].slice.call ( document.querySelectorAll( '#grid a' ) ).forEach( function( el ) {
          var s = Snap( el.querySelector( 'svg' ) ), path = s.select( 'path' ),
            pathConfig = {
              from : path.attr( 'd' ),
              to : el.getAttribute( 'data-path-hover' )
            };
          el.addEventListener( 'mouseenter', function() {
            path.animate( { 'path' : pathConfig.to }, speed, easing );
          } );
          el.addEventListener( 'mouseleave', function() {
            path.animate( { 'path' : pathConfig.from }, speed, easing );
          } );
        } );
      }
      init();
    })();
  }
// if ( jQuery( "#mt-members-slideshow" ).length ) {
//   document.documentElement.className = 'js';
//   var slideshow = new CircleSlideshow(document.getElementById('mt-members-slideshow'));
// }
(function ($) {
  'use strict';
  jQuery( document ).ready(function() {

    /*jQuery('.projects-slider-list').slick({
        dots: true,
        arrows : false,
        slidesPerRow: 3,
        rows: 2,
        fade: true,
        cssEase: 'linear',
        responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesPerRow: 2,
            rows: 2,
          }
        },

      ]
    });*/

    jQuery('.projects-slider-list').slick({
/*      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,*/

      dots: true,
      arrows : false,
      slidesPerRow: 3,
      rows: 2,
      fade: true,
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesPerRow: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesPerRow: 1,
          }
        }


      ]
    });
    

    jQuery('.st_clients_slider_v2').slick({
        dots: true,
        arrows : false,
        slidesPerRow: 2,
        rows: 3,
        fade: true,
        cssEase: 'linear',
        responsive: [
        {
          breakpoint: 478,
          settings: {
            slidesPerRow: 1,
            rows: 1,
          }
        }
      ]
    });


    jQuery('.services-slider-holder').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: true,
        cssEase: 'linear',
    });
    jQuery('.navigation-services-slider .prev-item').click(function(){
        jQuery('.services-slider-holder').slick('slickPrev');
    })
    jQuery('.navigation-services-slider .next-item').click(function(){
        jQuery('.services-slider-holder').slick('slickNext');
    })

    //jobs slider

    jQuery('.jobs-container-1').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        false: true,
        adaptiveHeight: true
    });
    jQuery('.navigation-jobs-slider .prev-item').click(function(){
        jQuery('.jobs-container-1').slick('slickPrev');
    })
    jQuery('.navigation-jobs-slider .next-item').click(function(){
        jQuery('.jobs-container-1').slick('slickNext');
    })

    /*
    * ||||||||||||||||||||||||||||||||||||||||||||||||||||||||-> TESTIMONIALS01 SLIDER (Shortcode)
    */
    jQuery(".portfolio-container").owlCarousel({
        navigation      : false, // Show next and prev buttons
        pagination      : true,
        autoPlay        : false,
        slideSpeed      : 700,
        paginationSpeed : 700,
        itemsCustom : [
            [0,     1],
            [450,   1],
            [600,   2],
            [700,   2],
            [1000,  2],
            [1200,  2],
            [1400,  2],
            [1600,  2]
        ]
    });
    jQuery(".members-container").owlCarousel({
        navigation      : false, // Show next and prev buttons
        pagination      : false,
        autoPlay        : false,
        slideSpeed      : 700,
        paginationSpeed : 700,
        singleItem      : true,
        itemsCustom : [
            [0,     1],
            [450,   1],
            [600,   1],
            [700,   1],
            [1000,  1],
            [1200,  1],
            [1400,  1],
            [1600,  1]
        ]
    });

    function bs_fix_vc_full_width_row(){
        var $fullrow = jQuery('[data-vc-full-width="true"]');
        jQuery.each($fullrow, function () {
            jQuery(".testimonials-container-1").owlCarousel({
              dots      : true, // Show next and prev buttons
              navigation      : true, // Show next and prev buttons
              navigationText: [
                "<i class='fa fa-angle-double-left' aria-hidden='true'></i>",
                "<i class='fa fa-angle-double-right' aria-hidden='true'></i>"
              ],
              autoPlay        : false,
              slideSpeed      : 700,
              paginationSpeed : 700,
              itemsCustom : [
                  [0,     1],
                  [450,   1],
                  [600,   1],
                  [700,   1],
                  [1000,  1],
                  [1200,  1],
                  [1400,  1],
                  [1600,  1]
              ]
            });
        });
    }

    jQuery(document).on('vc-full-width-row', function () {
        bs_fix_vc_full_width_row();
    });

    jQuery(".testimonials-container-2").owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        autoPlay        : false,
        slideSpeed      : 700,
        paginationSpeed : 700,
        itemsCustom : [
            [0,     1],
            [450,   1],
            [600,   2],
            [700,   2],
            [1000,  2],
            [1200,  2],
            [1400,  2],
            [1600,  2]
        ]
    });
    jQuery(".testimonials-container-3").owlCarousel({
        navigation      : false, // Show next and prev buttons
        pagination      : false,
        autoPlay        : false,
        slideSpeed      : 700,
        paginationSpeed : 700,
        itemsCustom : [
            [0,     1],
            [450,   1],
            [600,   2],
            [700,   2],
            [1000,  3],
            [1200,  3],
            [1400,  3],
            [1600,  3]
        ]
    });
    /*
    * ||||||||||||||||||||||||||||||||||||||||||||||||||||||||-> TESTIMONIALS02 SLIDER (Shortcode)
    */
    jQuery(".testimonials02-container").owlCarousel({
      navigation      : false, // Show next and prev buttons
      pagination      : true,
      autoPlay        : true,
      slideSpeed      : 700,
      paginationSpeed : 700,
      navigationText  : ["<i class='icon-arrow-left'></i>","<i class='icon-arrow-right'></i>"],
      // navigationText  : ["",""],
      singleItem      : true
    });
    /*
    * ||||||||||||||||||||||||||||||||||||||||||||||||||||||||-> TWEETS SLIDER (Shortcode)
    */
    jQuery(".mt_tweets_slider").owlCarousel({
      navigation      : false, // Show next and prev buttons
      pagination      : false,
      autoPlay        : false,
      slideSpeed      : 700,
      paginationSpeed : 700,
       autoHeight : true,
      singleItem      : true
    });
    /*
    * ||||||||||||||||||||||||||||||||||||||||||||||||||||||||-> MEMBERS FANCY SLIDER (Shortcode)
    */
    jQuery(".mt_members_fancy_slider").owlCarousel({
      navigation      : false, // Show next and prev buttons
      pagination      : false,
      autoPlay        : false,
      slideSpeed      : 700,
      paginationSpeed : 700,
      autoPlay : true,
      autoPlayTimeout:10000,
      autoPlayHoverPause:true,
      itemsCustom : [
          [0,     1],
          [450,   1],
          [600,   2],
          [700,   2],
          [1000,  4],
          [1200,  4],
          [1400,  4],
          [1600,  4]
      ]
    });
    /*
    * ||||||||||||||||||||||||||||||||||||||||||||||||||||||||-> CLIENTS SLIDER (Shortcode)
    */
    jQuery(".clients_container_shortcode-1").owlCarousel({
        navigation      : false, // Show next and prev buttons
        pagination      : false,
        autoPlay        : false,
        slideSpeed      : 700,
        paginationSpeed : 700,
        autoPlay : true,
        autoPlayTimeout:10000,
        autoPlayHoverPause:true,
        itemsCustom : [
            [0,     1],
            [450,   1],
            [600,   1],
            [700,   1],
            [1000,  1],
            [1200,  1],
            [1400,  1],
            [1600,  1]
        ]
    });
    jQuery(".clients_container_shortcode-2").owlCarousel({
        navigation      : false, // Show next and prev buttons
        pagination      : false,
        autoPlay        : false,
        slideSpeed      : 700,
        paginationSpeed : 700,
        autoPlay : true,
        autoPlayTimeout:10000,
        autoPlayHoverPause:true,
        itemsCustom : [
            [0,     1],
            [450,   1],
            [600,   2],
            [700,   2],
            [1000,  2],
            [1200,  2],
            [1400,  2],
            [1600,  2]
        ]
    });
    jQuery(".clients_container_shortcode-3").owlCarousel({
        navigation      : false, // Show next and prev buttons
        pagination      : false,
        autoPlay        : false,
        slideSpeed      : 700,
        paginationSpeed : 700,
        autoPlay : true,
        autoPlayTimeout:10000,
        autoPlayHoverPause:true,
        itemsCustom : [
            [0,     1],
            [450,   1],
            [600,   2],
            [700,   2],
            [1000,  3],
            [1200,  3],
            [1400,  3],
            [1600,  3]
        ]
    });
    jQuery(".clients_container_shortcode-4").owlCarousel({
        navigation      : false, // Show next and prev buttons
        pagination      : false,
        autoPlay        : false,
        slideSpeed      : 700,
        paginationSpeed : 700,
        autoPlay : true,
        autoPlayTimeout:10000,
        autoPlayHoverPause:true,
        itemsCustom : [
            [0,     1],
            [450,   1],
            [600,   2],
            [700,   3],
            [1000,  4],
            [1200,  4],
            [1400,  4],
            [1600,  4]
        ]
    });
    jQuery(".clients_container_shortcode-5").owlCarousel({
        navigation      : false, // Show next and prev buttons
        pagination      : false,
        autoPlay        : false,
        slideSpeed      : 700,
        paginationSpeed : 700,
        autoPlay : true,
        autoPlayTimeout:10000,
        autoPlayHoverPause:true,
        itemsCustom : [
            [0,     1],
            [450,   2],
            [600,   2],
            [700,   3],
            [1000,  4],
            [1200,  4],
            [1400,  5],
            [1600,  5]
        ]
    });
    jQuery(".clients_container_shortcode-6").owlCarousel({
        navigation      : false, // Show next and prev buttons
        pagination      : false,
        autoPlay        : false,
        slideSpeed      : 700,
        paginationSpeed : 700,
        autoPlay : true,
        autoPlayTimeout:10000,
        autoPlayHoverPause:true,
        itemsCustom : [
            [0,     1],
            [450,   2],
            [600,   2],
            [700,   5],
            [1000,  6],
            [1200,  6],
            [1400,  6],
            [1600,  6]
        ]
    });
    /*
    * ||||||||||||||||||||||||||||||||||||||||||||||||||||||||-> GET DIV HEIGHT (Shortcode) 
    */
    jQuery(document).ready( function() {
        var height = jQuery(".about_image").height();
        jQuery('.about_text_holder').css('height',height);
    });
    jQuery(document).ready( function() {
        var height = jQuery(".portfolio03_thumbnail").height();
        jQuery('.color_verlay_portfolio3').css('height',height);
    });
    jQuery(document).ready( function() {
        var height = jQuery(".color_verlay_portfolio3").height();
        jQuery('.portfolio03_title_subtitle_holder').css('height',height);
    });
    /*
    * ||||||||||||||||||||||||||||||||||||||||||||||||||||||||-> SERVICES SLIDER (Shortcode)
    */
    // SET LEFT SIDE height of RIGHT SIDE
    jQuery( '.right-side' ).ready(function() {
      var right_side_height = jQuery('.right-side').height();
      jQuery( '.left-side' ).height( right_side_height )
    });
    var sync1 = jQuery("#service_big_slides");
    var sync2 = jQuery("#service_small_slides");
   
    jQuery(".service_small_slides_holder .fa-angle-right").click(function(){
      sync1.trigger('owl.next');
    })
    jQuery(".service_small_slides_holder .fa-angle-left").click(function(){
      sync1.trigger('owl.prev');
    })
    sync1.owlCarousel({
      // mouseDrag: false,
      center:true,
      loop: true,
      navigationText:  ["<",">"],
      rewindNav: true,
      singleItem : true,
      slideSpeed : 1000,
      navigation: false,
      pagination: false,
      afterAction : syncPosition,
      responsiveRefreshRate : 200,
      afterInit : function(elem){
        this.jumpTo(1);
      }
    });
   
    sync2.owlCarousel({
      // mouseDrag: false,
      center:true,
      loop: true,
      items : 3,
      itemsDesktop      : [1199,3],
      itemsDesktopSmall     : [979,3],
      itemsTablet       : [768,3],
      itemsMobile       : [479,3],
      pagination:false,
      responsiveRefreshRate : 100,
      afterInit : function(el){
        el.find(".owl-item").eq(1).addClass("synced");
      }
    });
   
    function syncPosition(el){
      var current = this.currentItem;
      jQuery("#service_small_slides")
        .find(".owl-item")
        .removeClass("synced")
        .eq(current)
        .addClass("synced")
      if(jQuery("#service_small_slides").data("owlCarousel") !== undefined){
        center(current)
      }
    }
   
    jQuery("#service_small_slides").on("click", ".owl-item", function(e){
      e.preventDefault();
      var number = jQuery(this).data("owlItem");
      sync1.trigger("owl.goTo",number);
    });
   
    function center(number){
      var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
      var num = number;
      var found = false;
      for(var i in sync2visible){
        if(num === sync2visible[i]){
          var found = true;
        }
      }
   
      if(found===false){
        if(num>sync2visible[sync2visible.length-1]){
          sync2.trigger("owl.goTo", num - sync2visible.length+2)
        }else{
          if(num - 1 === -1){
            num = 0;
          }
          sync2.trigger("owl.goTo", num);
        }
      } else if(num === sync2visible[sync2visible.length-1]){
        sync2.trigger("owl.goTo", sync2visible[1])
      } else if(num === sync2visible[0]){
        sync2.trigger("owl.goTo", num-1)
      }
      
    }

    if (jQuery('.gallery-listing').length) {
      jQuery('.gallery-listing').magnificPopup({
          delegate: 'a',
          type: 'image',
          gallery: {
              enabled: true
          },
          // other options
      });
    }

    //moving slider
    var scrollSpeed = 10;        // Speed in milliseconds
    var step = 1;               // How many pixels to move per step
    var current = 0;            // The current pixel row
    var imageWidth = 1741;      // Background image width
    var headerWidth = 210;     // How wide the header is.

    //The pixel row where to start a new loop
    var restartPosition = -(imageWidth - headerWidth);

    function scrollBg(){
        //Go to next pixel row.
        current += step;
        
        //If at the end of the image, then go to the top.
        if (current == restartPosition){
            current = 0;
        }
        
        //Set the CSS of the header.
        jQuery('.slider-moving').css("background-position",current+"px 0");
    }

    setInterval(scrollBg, scrollSpeed);

    /*
* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||-> PROGRESS BAR (Shortcode)
*/

  jQuery(function () { 
    jQuery('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
  });  

  jQuery( window ).scroll(function() { 
    jQuery(".progress-bar").each(function(){
      var each_bar_width = jQuery(this).attr('aria-valuenow');
      jQuery( this ).css( "width", each_bar_width + '%' );
    });
  });

  jQuery( ".cd-pricing-switcher .monthly-label" ).on( "click", function() {
      jQuery( ".cd-pricing-switcher .yearly-label" ).removeClass('active');
      jQuery(this).addClass('active');
      jQuery('.package_price_per_year-parent').hide();
      jQuery('.package_price_per_month-parent').show();
    });
  jQuery( ".cd-pricing-switcher .yearly-label" ).on( "click", function() {
    jQuery( ".cd-pricing-switcher .monthly-label" ).removeClass('active');
    jQuery(this).addClass('active');
    jQuery('.package_price_per_month-parent').hide();
    jQuery('.package_price_per_year-parent').show();
  });
    
  function scrollNav() {
    jQuery('#menu-one-page li a').click(function(){  
      //Toggle Class
      jQuery(".active").removeClass("active");      
      jQuery(this).closest('li').addClass("active");
      var theClass = jQuery(this).attr("class");
      jQuery('.'+theClass).parent('li').addClass('active');
      //Animate
      jQuery('html, body').stop().animate({
          scrollTop: jQuery( jQuery(this).attr('href') ).offset().top - 104
      }, 1500);
      return false;
    });
    jQuery('.scrollTop a').scrollTop();
  }
  scrollNav();


  });
} (jQuery) )

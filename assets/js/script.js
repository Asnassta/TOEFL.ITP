$(document).ready(function() {

  /*======Menu-toggle=============*/
  
  $(".burger").on("click", function() {
    $(this).toggleClass("active");
    $(".header-nav").toggleClass('active');
  });
  /*==========/menu-toggle=========*/

  /*=========Smooth scroll=============*/
  $("[data-scroll]").on("click", function(event) {
  event.preventDefault();
 
      blockID = $(this).data('scroll');
     
      blockOffset = $('#'+blockID).offset().top;

      $(".header-nav").removeClass('active');
      $(".burger").removeClass('active');
 
    $("html, body").animate ({
      scrollTop: blockOffset - 20
    }, 500);
  });
/*=========/smooth scroll=============*/

/*==Fixed arrow===*/
  let arrowUp = $("#arrow-up");
  let introH = $("#intro").innerHeight();
  let scrollOffset = $(window).scrollTop();
  
  checkScroll(scrollOffset);

  $(window).on("scroll", function() {
    scrollOffset = $(this).scrollTop();

    checkScroll(scrollOffset);
  })

  function checkScroll(scrollOffset) {
    if( scrollOffset >= introH ) {
      arrowUp.addClass("fixed");
    } else {
      arrowUp.removeClass("fixed");
    }
  }
/*==/fixed arrow===*/

	/*======Select=============*/
	$(function() {
		$('select').styler();
	});
	/*======/select=============*/

  
	/*======Reviews__slider=============*/
  $('.reviews__slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $('.slider-arrows__arrow_prev'),
      nextArrow: $('.slider-arrows__arrow_next'),
      responsive: [
    {
      breakpoint: 769,
      settings: {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: $('.slider-arrows__arrow_prev'),
        nextArrow: $('.slider-arrows__arrow_next'),
      }
    },
    {
      breakpoint: 541,
      settings: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.slider-arrows__arrow_prev'),
        nextArrow: $('.slider-arrows__arrow_next'),
      }
    }
  ]
  });
  /*=============/reviews__slider==============*/
});

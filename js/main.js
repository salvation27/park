$(".tab_item").not(":first").hide();
$(".wrapper .tab").click(function() {
	$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$('a[href^="#"]').bind('click.smoothscroll', function(e) {
  e.preventDefault();

  var target = this.hash,
    $target = $(target)
;

  $('html, body')
    .stop()
    .animate(
      {
        scrollTop: $target.offset().top
      },
      2000,
      'swing',
      function() {
        window.location.hash = target;
      }
    );
});


$('.header_slider').slick({
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 2000,
  asNavFor: '.offer_slider',
});

$('.offer_slider').slick({
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 2000,
  asNavFor: '.header_slider',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
$('.responsive').slick({
  dots: false,
  infinite: true,
  speed: 1500,
});
$('.reviews_slider').slick({
  dots: true,
  infinite: true,
  speed: 1500,
});
$('.work_slider_img_wrap').slick({
  centerMode: true,
  slidesToShow: 3,
  speed: 700,
  dots: false,
  infinite: true,
  responsive: [
    {
      breakpoint: 961,
      settings: {
        slidesToShow: 1,
        speed: 1000,
      }
    },
  ]
});




$('.tab').click(function() {
	$('#slide_1 .slick-next').trigger('click');

});
$('.tab').click(function() {
	$('#slide_2 .slick-next').trigger('click');

});
$('.tab').click(function() {
	$('#slide_3 .slick-next').trigger('click');

});
$('.tab').click(function() {
	$('#slide_4 .slick-next').trigger('click');

});
$('.tab').click(function() {
	$('#slide_5 .slick-next').trigger('click');

});

$('.header_burger_button').on('click', function (e) {
	e.preventDefault();
	$('.burger_button').toggleClass('burger_active')
	$('.burger_menu').toggleClass('burger_active')
	$('.burger_button span').toggleClass('span_active')
});
$('.check_icon').on('click', function (e) {
	e.preventDefault();
	$('.check_icon').toggleClass('check_active')
});


var options = {
  offset: 957
}

var header = new Headhesive('.header', options);

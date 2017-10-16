var clicked = false;

$( document ).ready(function() {
  $('.caption-heading').addClass( "animated fadeInRight" );
  $('.caption-paragraph').addClass( "animated fadeIn" );
  if(!clicked) {
    setTimeout(function(){ 
      //$('.caption-heading').css( "display", "block" );
      $('.caption-heading').addClass( "animated fadeInRight" );
      $('.caption-paragraph').addClass( "animated fadeIn" );
      //$('.caption-heading').removeClass( "animated fadeInRight" );
    }, 4000);
  } 
});

$('.carousel-control-prev').click(function() {
  clicked = true;
  $('.caption-heading').css( "display", "none" );
  $('.caption-paragraph').css( "display", "none" );
  setTimeout(function(){ 
    $('.caption-heading').css( "display", "block" );
    $('.caption-paragraph').css( "display", "block" );
    $('.caption-heading').removeClass( "animated fadeInRight" );
    $('.caption-paragraph').removeClass( "animated fadeIn" );
    $('.caption-heading').addClass( "animated fadeInLeft" );
    $('.caption-paragraph').addClass( "animated fadeIn" );
  }, 500);
  $('.caption-heading').removeClass( "animated fadeInLeft" );
  $('.caption-paragraph').removeClass( "animated fadeInLeft" );
});

$('.carousel-control-next').click(function() {
  clicked = true;
  $('.caption-heading').css( "display", "none" );
  $('.caption-paragraph').css( "display", "none" );
  setTimeout(function(){ 
    $('.caption-heading').css( "display", "block" );
    $('.caption-paragraph').css( "display", "block" );
    $('.caption-heading').addClass( "animated fadeInRight" );
    $('.caption-paragraph').addClass( "animated fadeIn" );
  }, 500);
  $('.caption-heading').removeClass( "animated fadeInRight" );
  $('.caption-paragraph').removeClass( "animated fadeInRight" );
});

$( ".hover-box" ).hover(
  function() {
    $( this ).children('.hover-tint').css('opacity', '1');
    $( this ).children('.image').css('transform', 'scale(1.15)');    
    $( this ).children('.image').css('-webkit-transform', 'scale(1.15)');    
    $( this ).children('.image').css('-moz-transform', 'scale(1.15)');    
    $( this ).children('.image').css('-ms-transform', 'scale(1.15)');    
    $( this ).children('.image').css('-o-transform', 'scale(1.15)');    
  }, function() {
    $( this ).children('.hover-tint').css('opacity', '0');
    $( this ).children('.image').css('transform', 'scale(1)');
    $( this ).children('.image').css('-webkit-transform', 'scale(1)');    
    $( this ).children('.image').css('-moz-transform', 'scale(1)');    
    $( this ).children('.image').css('-ms-transform', 'scale(1)');    
    $( this ).children('.image').css('-o-transform', 'scale(1)');
  }
);

//Slick carousel
$('.news-carousel').slick({
  infinite: true,
  autoplay: false,
  arrows: false,
  autoplaySpeed: 3000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// $(function(){
// 	$('.your-class').slick({arrows:false});
//     $('#next').click(function(){
//     	$('.your-class').slick('slickNext');
//     });
//     $('#prev').click(function(){
//     	$('.your-class').slick('slickPrev');
//     });
// });
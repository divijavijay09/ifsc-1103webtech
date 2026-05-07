$(document).ready(function() {

    $('.fade').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      slide: 'div',
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 500
    });

    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav',
      instructionsText: 'Changing this current slide of this carousel will change the current slide of the thumbnail carousel that follows.',
      regionLabel: 'main image carousel'
    });

    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: true,
      centerMode: true,
      instructionsText: 'Changing the current slide of this carousel will change the current slide of the preceding main image carousel.',
      regionLabel: 'thumbnail carousel'
    });

});
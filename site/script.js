

smoothScroll.init();

$(document).ready(function(){


  $('header nav a').click(function(){

  });

  $('.mainBanner').slick();

  $('.partners').slick({
    centerMode: true,
    centerPadding: '20px',
    slidesToShow:3,
    focusOnSelect: true,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

});

$(document).ready(function(){
    $('.bilder-carousel').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: true,
      autoplay: true,
      responsive: [
        {
          breakpoint: 999,
          settings: {
            arrows: false
          }
        },
      ]
    });
  });
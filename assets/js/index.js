let homeSliderHeight = document.getElementsByClassName('slide-img')[0].clientHeight
    $(window).scroll(function() {
      if ($(this).scrollTop() > homeSliderHeight+45){
        $('.filter-wrapper').addClass("sticky");
        $('.mobile-nav-2').addClass("sticky");
      }
      else{
        $('.filter-wrapper').removeClass("sticky");
        $('.mobile-nav-2').removeClass("sticky");
      }
    });
    $(window).resize(function() {
      if (($(document).width()>=768)) { 
        $(".filter-wrapper").show();
      }
    });
    $('#home-slider').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    });
    
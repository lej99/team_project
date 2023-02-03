$(document).ready(function(){
    $('#gallery').addClass("active")
    $('#gallery').siblings().removeClass('active');
    
    $('#fade_wrap').animate({width:0},650); 

    $('.swiper-slide img').click(function(){
        let src = $(this).attr('src');
        let alt = $(this).attr('alt');
        $('.modal').fadeIn();
        $('.modal img').attr('src',src);
        $('.modal img').attr('alt',alt);
    });

    $('.close').click(function(){
        $('.modal').fadeOut();
    });
});
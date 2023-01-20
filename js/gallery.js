$(document).ready(function(){
    $('#gallery').addClass("active")
    $('#gallery').siblings().removeClass('active');
    
    $('#fade_wrap>.fade.two').animate({width:0},800);
    $('#fade_wrap').delay(1200).animate({width:0},800);
});
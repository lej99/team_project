$(document).ready(function(){
    $('#gallery').addClass("active")
    $('#gallery').siblings().removeClass('active');
    
    $('#fade_wrap>.fade.two').animate({width:0});
    $('#fade_wrap').delay(600).animate({width:0}); 

});
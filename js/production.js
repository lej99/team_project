$(document).ready(function(){
    $('#production').addClass("active")
    $('#production').siblings().removeClass('active');
    
    $('#fade_wrap>.fade.two').animate({width:0},650);
    $('#fade_wrap').delay(650).animate({width:0},650); 

});
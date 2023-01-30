$(document).ready(function(){
    $('#production').addClass("active")
    $('#production').siblings().removeClass('active');

    $('#fade_wrap').animate({width:0},650); 
});
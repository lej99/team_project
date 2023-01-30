$(document).ready(function(){
    $('#gallery').addClass("active")
    $('#gallery').siblings().removeClass('active');
    
    $('#fade_wrap').animate({width:0},650); 
});
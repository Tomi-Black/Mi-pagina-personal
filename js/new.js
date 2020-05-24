$(document).ready(function(){
    $(".nav-icon").click(function(){$(".full-nav").addClass("open");});
    $(".nav-close").click(function(){$(".full-nav").removeClass("open");});
    $(window).scroll(function(){
        var sc = $(window).scrollTop();
        if(sc > 100){
            $(".nav").addClass("sticky");
        }else{
            $(".nav").removeClass("sticky");
        }
    });
    $("#testimonial-slider").owlCarousel({
        items:3,itemsDesktop:[1000,3],itemsDesktopSmall:[979,2],itemsTablet:[768,2],itemsMobile:[650,1],pagination:true,autoPlay:true});
    $("#news-slider").owlCarousel({
        items:3,itemsDesktop:[1199,3],itemsDesktopSmall:[1000,2],itemsTablet:[768,2],itemsMobile:[650,1],pagination:false,autoPlay:true});
});
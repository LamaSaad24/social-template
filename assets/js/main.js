$(document).ready(function(){
    // animation on btn toogle index page 
    $(".icon-toggle").click(function(){
        $(this).toggleClass("clicked");
    });

    // stories slider
    $('.stories-carousel').owlCarousel({
        dots:false,
    });
    
    // live slider
    $('.live-carousel').owlCarousel({
        dots:false,
        loop:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:4
            },
            1000:{
                items:6
            }
        }

    });
});
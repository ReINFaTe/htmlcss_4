
$(document).ready(function(){
    $(".program-slider").owlCarousel({
        loop:false,
        dots:true,
        responsive : {
            0 : {
                items: 1,
            },
            600 : {
                items: 2
            },
            850 : {
                items: 3,
            }

        }
    });
    $(".reviews-slider").owlCarousel({
        loop:false,
        dots:true,
        items: 1,
        autoplay: true,
        loop: true,
        autoplayTimeout: 10000,
        animateOut: "fadeOut",
        animateIn: "fadeIn"
    });
    $(".mentors-slider").owlCarousel({
        loop:false,
        dots:true,
        items: 1,
        autoplay: true,
        loop: true,
        autoplayTimeout: 10000,

    });
});

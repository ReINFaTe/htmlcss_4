
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
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
});

$(document).ready(function() {
    $('.slider').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 767.9,
            settings: {
                arrows: false,
                variableWidth: true,
            }
        }]
    });
});
$(function(){

    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
    });

    jQuery(document).ready(function(){
        jQuery.goup({
            locationOffset: 50,
            bottomOffset: 50,
            containerRadius: 50,
            containerColor: '#FF9900',
            entryAnimation: 'slide',
            title: 'Наверх',
        });
        
        });

});
$(document).ready(function (){

    // For interests section
    $("#interests .card").hover(function (){
        $(this).css({
            "transform": "scale(0.95, 1.01)",
            "transition": "0.5s"
        });
    }, function (){
        $(this).css({
            "transform":"initial",
            "transition": "0.5s"
        });
    });

    // For project section
    $('#projects .card').hover(function (){
        $(this).css({
            "transform": "translateY(-10px)",
            "transition": "0.4s",
        });
        $(this).find('h3, p:first-child').css({
            "color": "#5e19e4",
            "filter": "brightness(200%)",
            "transition": "0.3s",
        });
    }, function (){
        $(this).css({
            "transform": "initial",
            "transition": "0.4s"
        });
        $(this).find('h3, p:first-child').css({
            "color": "white",
            "filter": "brightness(100%)",
            "transition": "0.3s",
        });
    });

});


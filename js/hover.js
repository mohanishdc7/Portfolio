$(document).ready(function (){

    // For interests section
    $("#interests .card").hover(function (){
        $(this).css({
            "transform": "scale(0.95, 1.05)",
            "box-shadow": "5px 0px 25px 0px rgba(51, 1, 80, 0.68)",
            "transition": "0.5s"
        });
    }, function (){
        $(this).css({
            "transform":"initial",
            "box-shadow": "5px 5px 25px 1px rgba(206, 206, 206, 0.68)",
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

